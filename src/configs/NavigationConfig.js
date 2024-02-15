import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  FileTextOutlined,
  MobileOutlined,
  SettingOutlined,
  ShoppingOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  MailOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'main',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboards',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-catalog-products',
          path: `${APP_PREFIX_PATH}/main/catalog/products`,
          title: 'sidenav.main.catalog.products',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'sidenav.main.catalog.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-combos',
          path: `${APP_PREFIX_PATH}/main/catalog/combos`,
          title: 'sidenav.main.catalog.combos',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon:   UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-clients-clientList',
          path: `${APP_PREFIX_PATH}/main/clients/client-list/all`,
          title: 'sidenav.main.clients.clientList',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clients-clientGroup',
          path: `${APP_PREFIX_PATH}/main/clients/client-group`,
          title: 'sidenav.main.clients.clientGroup',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promotionalCodes',
      path: `${APP_PREFIX_PATH}/main/promotionalCodes`,
      title: 'sidenav.main.promotionalCodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offlinePoints',
      path: `${APP_PREFIX_PATH}/main/offlinePoints`,
      title: 'sidenav.main.offlinePoints',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-offlinePoints-addresses',
          path: `${APP_PREFIX_PATH}/main/offlinePoints/addresses`,
          title: 'sidenav.main.offlinePoints.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offlinePoints-geofences',
          path: `${APP_PREFIX_PATH}/main/offlinePoints/geofences`,
          title: 'sidenav.main.offlinePoints.geofences',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mailings',
      path: `${APP_PREFIX_PATH}/main/mailings`,
      title: 'sidenav.main.mailings',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ],
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'sidenav.system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobileApplication',
      path: `${APP_PREFIX_PATH}/system/mobileApplication`,
      title: 'sidenav.system.mobileApplication',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'sidenav.system.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree
]

export default navigationConfig;
