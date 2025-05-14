import app from 'flarum/common/app';
import type Mithril from 'mithril';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Tooltip from 'flarum/common/components/Tooltip';
import avatar from 'flarum/common/helpers/avatar';
import Link from 'flarum/common/components/Link';
import extractText from 'flarum/common/utils/extractText';
import type User from 'flarum/common/models/User';

import Widget, { type WidgetAttrs } from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class OnlineUsersWidget extends Widget<WidgetAttrs> {

  oncreate(vnode): void {
    this.attrs.state.users = app.forum.onlineUsers() || [];
    this.attrs.state.total = app.forum.totalOnlineUsers() || 0;
    this.attrs.state.max = app.forum.attribute("afrux-online-users-widget.maxUsers") || 15;
    console.log("max: " + app.forum.attribute("afrux-online-users-widget.maxUsers"));
    if (!this.attrs.state.timerAdded) {
    console.log("onliner timer added");
        setInterval(this.load.bind(this), 180000);
        this.attrs.state.timerAdded = true;
    }
  }

  className(): string {
    return 'Afrux-OnlineUsersWidget';
  }

  icon(): string {
    return 'fas fa-user-friends';
  }

  title(): string {
    return extractText(app.translator.trans('afrux-online-users-widget.forum.widget.title'));
  }

  content(): Mithril.Children {
    if (this.attrs.state.isLoading) {
      return <LoadingIndicator />;
    }

    this.attrs.state.users = (this.attrs.state.users || app.forum.onlineUsers()) || [];
    const users = this.attrs.state.users;
    this.attrs.state.total = (this.attrs.state.total || app.forum.totalOnlineUsers()) || 0;
    const total = this.attrs.state.total;

    return (
      <div className="Afrux-OnlineUsersWidget-users">
        <div className="Afrux-OnlineUsersWidget-users-message">
          {users.length === 0 ? app.translator.trans('afrux-online-users-widget.forum.widget.empty') : null}
        </div>
        <div className="Afrux-OnlineUsersWidget-users-list">
          {users.map((user: User) => (
            <Link href={app.route('user', { username: user.slug() })} className="Afrux-OnlineUsersWidget-users-item">
              <Tooltip text={user.displayName()}>{avatar(user)}</Tooltip>
            </Link>
          ))}
          {total > users.length ? (
            <span className="Afrux-OnlineUsersWidget-users-item Afrux-OnlineUsersWidget-users-item--plus">
              <span className="Avatar">{total < 50? `+${total - users.length}` : `+${50 - users.length}...`}</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
  
  load(): void {
    if (this.loadWithInitialResponse) {
      this.setResults(app.forum.onlineUsers());
      return;
    }

    this.attrs.state.isLoading = true;
    console.log("reloading widget");

    app.store.find('users', { filter: { online: true }, sort: '-lastSeenAt', page: {limit: 50} }).then((users: User[]) => {
      //console.log(users);
      this.setResults(users);
    });
  }

  setResults(users) {
    users = this.filterTimeUsers(users);
    this.attrs.state.users = users.slice(0, this.attrs.state.max);
    this.attrs.state.total = users.length;
    this.attrs.state.isLoading = false;
    this.attrs.state.hasLoaded = true;
    m.redraw();
    console.log("redrew");
  }
  
  filterTimeUsers(users) {
    function filterRecentUsers(users) {
      const cutoff = Date.now() - 600000;
      const result = [];
      
      for (const user of users) {
        const lastSeen = new Date(user.data.attributes.lastSeenAt).getTime();
        if (lastSeen >= cutoff) {
          result.push(user);
        } else {
          break;
        }
      }
      return result;
    }
    return filterRecentUsers(users);
  }

}
