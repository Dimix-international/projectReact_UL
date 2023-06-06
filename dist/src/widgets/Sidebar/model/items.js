import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
export var SidebarItemsList = [
    {
        path: RoutePath.main,
        text: 'mainLink',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'aboutLink',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'profileLink',
        Icon: ProfileIcon,
    },
];
