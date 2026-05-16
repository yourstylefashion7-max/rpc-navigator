import { mergeConfigs, config, toBoolean } from '../src/utils/config';
import { toArray } from '../src/utils';

export const DefaultConfig = {
    theme: config('APP_THEME', 'orange'),
    driverNavigator: {
        tabs: toArray(config('DRIVER_NAVIGATOR_TABS', 'DriverDashboardTab,DriverTaskTab,DriverReportTab,DriverChatTab,DriverAccountTab')),
        defaultTab: toArray(config('DRIVER_NAVIGATOR_DEFAULT_TAB', 'DriverDashboardTab')),
    },
    defaultLocale: config('DEFAULT_LOCALE', 'en'),
    colors: {
        loginBackground: config('LOGIN_BG_COLOR', '#1E2D4F'),
    },
};

export function createNavigatorConfig(userConfig = {}) {
    return mergeConfigs(DefaultConfig, userConfig);
}
