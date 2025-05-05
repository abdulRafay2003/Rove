import {TransitionPresets} from '@react-navigation/stack';
import {RouteNames} from '../config';
import {ChatMessages, Chats, Dashboard, Location, WebView} from '../screens';
import {DrawerStack} from './DrawerStack';
import {TabStack} from './TabStack';

type HomeScreenStacksTypes = {
  name: string;
  component: React.FC<any>;
  key: string;
  option?: any;
}[];

export const HomeStack: HomeScreenStacksTypes = [
  // {
  //   name: RouteNames.HomeRoutes.DrawerStack,
  //   component: DrawerStack,
  //   key: RouteNames.HomeRoutes.DrawerStack,
  // },
  {
    name: RouteNames.HomeRoutes.TabStack,
    component: TabStack,
    key: RouteNames.HomeRoutes.TabStack,
  },
  {
    name: RouteNames.HomeRoutes.WebView,
    component: WebView,
    key: RouteNames.HomeRoutes.WebView,
  },
  {
    name: RouteNames.HomeRoutes.Location,
    component: Location,
    key: RouteNames.HomeRoutes.Location,
    option: {
      ...TransitionPresets.ModalTransition,
    },
  },
  {
    name: RouteNames.HomeRoutes.Chats,
    component: Chats,
    key: RouteNames.HomeRoutes.Chats,
  },
  {
    name: RouteNames.HomeRoutes.Dashboard,
    component: Dashboard,
    key: RouteNames.HomeRoutes.Dashboard,
  },
  {
    name: RouteNames.HomeRoutes.ChatMessages,
    component: ChatMessages,
    key: RouteNames.HomeRoutes.ChatMessages,
  },
];
