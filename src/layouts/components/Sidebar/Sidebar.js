import classNames from 'classnames/bind';

import {
    HomeIcon,
    UserGroupIcon,
    LiveBroadcastIcon,
    HomeActiveIcon,
    LiveBroadcastActiveIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Side.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveBroadcastIcon />}
                    activeIcon={<LiveBroadcastActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
