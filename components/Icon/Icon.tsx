import './Icon.module.scss';

import clsx from 'clsx';
import React from 'react';

import { ReactComponent as OneOne } from './icons_2/11.svg';
import { ReactComponent as Aa } from './icons_2/Aa.svg';
import { ReactComponent as AccountStatus } from './icons_2/account_status.svg';
import { ReactComponent as Accounts } from './icons_2/accounts.svg';
import { ReactComponent as AdditionalSearch } from './icons_2/additional-search.svg';
import { ReactComponent as Albums } from './icons_2/albums.svg';
import { ReactComponent as Anonymizer } from './icons_2/anonymizer.svg';
import { ReactComponent as Approved } from './icons_2/approved.svg';
import { ReactComponent as Archive } from './icons_2/archive.svg';
import { ReactComponent as AvatarPicture } from './icons_2/avatar_picture.svg';
import { ReactComponent as Bars } from './icons_2/bars.svg';
import { ReactComponent as ByEdgesNodeSize } from './icons_2/by-edges-node-size.svg';
import { ReactComponent as Calendar } from './icons_2/calendar.svg';
import { ReactComponent as CaseFilled } from './icons_2/case-filled.svg';
import { ReactComponent as CaseOutlined } from './icons_2/case-outlined.svg';
import { ReactComponent as Case } from './icons_2/case.svg';
import { ReactComponent as Chart } from './icons_2/chart.svg';
import { ReactComponent as Chat } from './icons_2/chat.svg';
import { ReactComponent as Clock } from './icons_2/clock.svg';
import { ReactComponent as Close } from './icons_2/close.svg';
import { ReactComponent as CollectedItems } from './icons_2/collected_items.svg';
import { ReactComponent as ConcentricGraph } from './icons_2/concentric-graph.svg';
import { ReactComponent as Contacts } from './icons_2/contacts.svg';
import { ReactComponent as Copy } from './icons_2/copy.svg';
import { ReactComponent as CreateAvatar } from './icons_2/create_avatar.svg';
import { ReactComponent as CreateEntity } from './icons_2/create_entity.svg';
import { ReactComponent as CreateNewCase } from './icons_2/create_new_case.svg';
import { ReactComponent as Dark } from './icons_2/dark.svg';
import { ReactComponent as Date } from './icons_2/date.svg';
import { ReactComponent as DefaultNodeSize } from './icons_2/default-node-size.svg';
import { ReactComponent as Delete } from './icons_2/delete.svg';
import { ReactComponent as Description } from './icons_2/description.svg';
import { ReactComponent as Details } from './icons_2/details.svg';
import { ReactComponent as Devices } from './icons_2/devices.svg';
import { ReactComponent as Edit } from './icons_2/edit.svg';
import { ReactComponent as Education } from './icons_2/education.svg';
import { ReactComponent as Email } from './icons_2/email.svg';
import { ReactComponent as Entites } from './icons_2/entites.svg';
import { ReactComponent as EyeFill } from './icons_2/eye_fill.svg';
import { ReactComponent as EyeInvisible } from './icons_2/eye_invisible.svg';
import { ReactComponent as EyeNone } from './icons_2/eye_none.svg';
import { ReactComponent as Eye } from './icons_2/eye.svg';
import { ReactComponent as Eyez } from './icons_2/eyez.svg';
import { ReactComponent as Filter } from './icons_2/filter.svg';
import { ReactComponent as Flask } from './icons_2/flask.svg';
import { ReactComponent as Folder } from './icons_2/folder.svg';
import { ReactComponent as ForceGraph } from './icons_2/force-graph.svg';
import { ReactComponent as Forward } from './icons_2/forward.svg';
import { ReactComponent as FullScreen } from './icons_2/full_screen.svg';
import { ReactComponent as Geolocation } from './icons_2/geolocation.svg';
import { ReactComponent as Glob } from './icons_2/glob.svg';
import { ReactComponent as Graph } from './icons_2/graph.svg';
import { ReactComponent as Grid } from './icons_2/grid.svg';
import { ReactComponent as GroupBy } from './icons_2/group-by.svg';
import { ReactComponent as Group } from './icons_2/group.svg';
import { ReactComponent as Hashtags } from './icons_2/hashtags.svg';
import { ReactComponent as HierarchicalGraph } from './icons_2/hierarchical-graph.svg';
import { ReactComponent as IconInfo } from './icons_2/icon-info.svg';
import { ReactComponent as Industries } from './icons_2/industries.svg';
import { ReactComponent as Inform } from './icons_2/inform.svg';
import { ReactComponent as Interests } from './icons_2/interests.svg';
import { ReactComponent as Key } from './icons_2/key.svg';
import { ReactComponent as Languages } from './icons_2/languages.svg';
import { ReactComponent as LastActivity } from './icons_2/last_activity.svg';
import { ReactComponent as Likes } from './icons_2/likes.svg';
import { ReactComponent as Link } from './icons_2/link.svg';
import { ReactComponent as Lock } from './icons_2/lock.svg';
import { ReactComponent as Media } from './icons_2/media.svg';
import { ReactComponent as Mentions } from './icons_2/mentions.svg';
import { ReactComponent as MenuBarAvatarsActive } from './icons_2/menu_bar_avatars_active.svg';
import { ReactComponent as MenuBarAvatarsNormal } from './icons_2/menu_bar_avatars_normal.svg';
import { ReactComponent as MenuBarEntitiesActive } from './icons_2/menu_bar_entities_active.svg';
import { ReactComponent as MenuBarEntitiesNormal } from './icons_2/menu_bar_entities_normal.svg';
import { ReactComponent as MenuBarSearchesActive } from './icons_2/menu_bar_searches_active.svg';
import { ReactComponent as MenuBarSearchesNormal } from './icons_2/menu_bar_searches_normal.svg';
import { ReactComponent as MenuBarSearch } from './icons_2/menu-bar-search.svg';
import { ReactComponent as Messages } from './icons_2/messages.svg';
import { ReactComponent as MobileOfflineIcon } from './icons_2/mobile-offline-icon.svg';
import { ReactComponent as MobileOnlineIcon } from './icons_2/mobile-online-icon.svg';
import { ReactComponent as Mobile } from './icons_2/mobile.svg';
import { ReactComponent as Moon } from './icons_2/moon.svg';
import { ReactComponent as Negative } from './icons_2/negative.svg';
import { ReactComponent as Neutral } from './icons_2/neutral.svg';
import { ReactComponent as NoData } from './icons_2/no-data.svg';
import { ReactComponent as NodeSizeBetweenness } from './icons_2/node-size-betweenness.svg';
import { ReactComponent as Notification } from './icons_2/notification.svg';
import { ReactComponent as OpenPopup } from './icons_2/open_popup.svg';
import { ReactComponent as Organization } from './icons_2/organization.svg';
import { ReactComponent as PageFilled } from './icons_2/page-filled.svg';
import { ReactComponent as Page } from './icons_2/page.svg';
import { ReactComponent as Password } from './icons_2/password.svg';
import { ReactComponent as Permission } from './icons_2/permission.svg';
import { ReactComponent as PhoneFixed } from './icons_2/phone-fixed.svg';
import { ReactComponent as Phone } from './icons_2/phone.svg';
import { ReactComponent as Pin2 } from './icons_2/pin2.svg';
import { ReactComponent as Planet } from './icons_2/planet.svg';
import { ReactComponent as Plus } from './icons_2/plus.svg';
import { ReactComponent as Positive } from './icons_2/positive.svg';
import { ReactComponent as PossibleMatches } from './icons_2/possible_matches.svg';
import { ReactComponent as Posts } from './icons_2/posts.svg';
import { ReactComponent as PotentialContacts } from './icons_2/potential_contacts.svg';
import { ReactComponent as ProfilePiccture } from './icons_2/profile_piccture.svg';
import { ReactComponent as RadialGraph } from './icons_2/radial-graph.svg';
import { ReactComponent as Reach } from './icons_2/reach.svg';
import { ReactComponent as Refresh } from './icons_2/refresh.svg';
import { ReactComponent as RGB } from './icons_2/rgb.svg';
import { ReactComponent as Search } from './icons_2/search.svg';
import { ReactComponent as Sentiments } from './icons_2/sentiments.svg';
import { ReactComponent as SettingsOutlined } from './icons_2/settings-outlined.svg';
import { ReactComponent as Settings } from './icons_2/settings.svg';
import { ReactComponent as Share } from './icons_2/share.svg';
import { ReactComponent as Signal } from './icons_2/signal.svg';
import { ReactComponent as Socials } from './icons_2/socials.svg';
import { ReactComponent as StarFill } from './icons_2/star-fill.svg';
import { ReactComponent as Star } from './icons_2/star.svg';
import { ReactComponent as Sun } from './icons_2/sun.svg';
import { ReactComponent as Table } from './icons_2/table.svg';
import { ReactComponent as TimeAndWeather } from './icons_2/time_and_weather.svg';
import { ReactComponent as TopDomains } from './icons_2/top_domains.svg';
import { ReactComponent as TopOrganization } from './icons_2/top-organization.svg';
import { ReactComponent as Topics } from './icons_2/topics.svg';
import { ReactComponent as UndoArchive } from './icons_2/undo-archive.svg';
import { ReactComponent as Unknown } from './icons_2/unknown.svg';
// import { ReactComponent as Unlink } from './icons_2/unlink.svg';
import { ReactComponent as User } from './icons_2/user.svg';
import { ReactComponent as VerifiedCopy } from './icons_2/verified copy.svg';
import { ReactComponent as Verified } from './icons_2/verified.svg';
import { ReactComponent as ViewSource } from './icons_2/view-source.svg';
import { ReactComponent as ZoomIn } from './icons_2/zoom-in.svg';
import { ReactComponent as ZoomOut } from './icons_2/zoom-out.svg';

const iconNames = {
  lock: Lock,
  likes: Likes,
  reach: Reach,
  bars: Bars,
  messages: Messages,
  share: Share,
  'no-data': NoData,
  calendar: Calendar,
  neutral: Neutral,
  negative: Negative,
  positive: Positive,
  chat: Chat,
  eye_none: EyeNone,
  organization: Organization,
  accounts: Accounts,
  account_status: AccountStatus,
  'additional-search': AdditionalSearch,
  albums: Albums,
  anonymizer: Anonymizer,
  approved: Approved,
  archive: Archive,
  avatar_picture: AvatarPicture,
  'case-filled': CaseFilled,
  'case-outlined': CaseOutlined,
  case: Case,
  chart: Chart,
  clock: Clock,
  close: Close,
  collected_items: CollectedItems,
  contacts: Contacts,
  copy: Copy,
  create_avatar: CreateAvatar,
  create_entity: CreateEntity,
  create_new_case: CreateNewCase,
  dark: Dark,
  date: Date,
  delete: Delete,
  description: Description,
  details: Details,
  devices: Devices,
  edit: Edit,
  education: Education,
  email: Email,
  entites: Entites,
  eye: Eye,
  eyez: Eyez,
  eye_fill: EyeFill,
  eye_invisible: EyeInvisible,
  filter: Filter,
  flask: Flask,
  folder: Folder,
  forward: Forward,
  geolocation: Geolocation,
  glob: Glob,
  graph: Graph,
  grid: Grid,
  group: Group,
  hashtags: Hashtags,
  industries: Industries,
  inform: Inform,
  interests: Interests,
  key: Key,
  languages: Languages,
  last_activity: LastActivity,
  link: Link,
  media: Media,
  mentions: Mentions,
  'menu-bar-search': MenuBarSearch,
  menu_bar_avatars_active: MenuBarAvatarsActive,
  menu_bar_avatars_normal: MenuBarAvatarsNormal,
  menu_bar_entities_active: MenuBarEntitiesActive,
  menu_bar_entities_normal: MenuBarEntitiesNormal,
  menu_bar_searches_active: MenuBarSearchesActive,
  menu_bar_searches_normal: MenuBarSearchesNormal,
  'mobile-offline-icon': MobileOfflineIcon,
  'mobile-online-icon': MobileOnlineIcon,
  mobile: Mobile,
  moon: Moon,
  notification: Notification,
  open_popup: OpenPopup,
  'page-filled': PageFilled,
  page: Page,
  password: Password,
  permission: Permission,
  'phone-fixed': PhoneFixed,
  phone: Phone,
  pin2: Pin2,
  planet: Planet,
  plus: Plus,
  possible_matches: PossibleMatches,
  posts: Posts,
  potential_contacts: PotentialContacts,
  profile_piccture: ProfilePiccture,
  search: Search,
  sentiments: Sentiments,
  'settings-outlined': SettingsOutlined,
  settings: Settings,
  signal: Signal,
  socials: Socials,
  'star-fill': StarFill,
  star: Star,
  sun: Sun,
  table: Table,
  time_and_weather: TimeAndWeather,
  'top-organization': TopOrganization,
  topics: Topics,
  top_domains: TopDomains,
  'undo-archive': UndoArchive,
  unknown: Unknown,
  // unlink: Unlink,
  user: User,
  'verified copy': VerifiedCopy,
  verified: Verified,
  'view-source': ViewSource,
  iconInfo: IconInfo,
  fullScreen: FullScreen,
  hierarchicalGraph: HierarchicalGraph,
  forceGraph: ForceGraph,
  radialGraph: RadialGraph,
  oneOne: OneOne,
  aa: Aa,
  concentricGraph: ConcentricGraph,
  defaultNodeSize: DefaultNodeSize,
  byEdgesNodeSize: ByEdgesNodeSize,
  nodeSizeBetweenness: NodeSizeBetweenness,
  groupBy: GroupBy,
  rgb: RGB,
  refresh: Refresh,
  zoomIn: ZoomIn,
  zoomOut: ZoomOut,
};

export interface IconProps {
  name?: any;
  width?: number;
  height?: number;
  className?: string;
  style?: any;
  onClick?: (e:any) => void;
  id?: number;
}

const IconComponent = ({
  onClick, name = 'unknown', width = 18, height = 18, className = '', style = {}, ...props
}:IconProps) => {
  // @ts-ignore
  const Icon = iconNames[name] || iconNames.unknown;

  const handleClick = (e:any) => {
    onClick && onClick(e);
  };

  return (
    <span
      onClick={handleClick}
      className={clsx(['svg-container Icon', className])}
      style={{ width, height, ...style }}
    >
      <Icon {...props} />
    </span>
  );
};

export default IconComponent;
