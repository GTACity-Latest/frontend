import Vue from 'vue';
import Router from 'vue-router';

import thisList from './components/thisList.vue';
import reportMenu from './components/reportMenu.vue';
import authLogin from './components/auth/authLogin.vue';
import authRegister from './components/auth/authRegister.vue';
import characterSelection from './components/auth/characterSelection.vue';
import oneTimePass from './components/auth/authOtp.vue';
import statsPage from './components/statsPage.vue';
import inventorySystem from './components/inventorySystem.vue';
import clothingInterface from './components/clothingInterface.vue';
import characterCreation from './components/auth/characterCreation.vue';
import authBan from './components/auth/authBan.vue';
import modalSystems from './components/hud/modalSystems.vue';
import vehicleSpeedometer from './components/hud/vehicleSpeedometer.vue';
import vehicleCustomize from './components/vehicleCustomize.vue';
import truckerMenus from './components/truckerMenus.vue';
import vehicleDealership from './components/vehicleDealership.vue';
import vehicleManagement from './components/vehicleManagement.vue';
import bankingMenus from './components/bankingMenus.vue';
import lockPicking from './components/hud/lockPicking.vue';
import clientHud from './components/hud/clientHud.vue';
import phoneSystem from './components/hud/phoneSystem.vue';
import fuelScreen from './components/hud/fuelScreen.vue';
import Notifications from './components/Notifications.vue';
import altMenu from './components/hud/altMenu.vue';
import makeupScreen from './components/auth/makeupScreen.vue';
import propertyManager from './components/propertyManager.vue';
import factionMenu from './components/factionMenu.vue';
import marketSystem from './components/marketSystem.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/market', component: marketSystem},
        { path: '/faction', component: factionMenu},
        { path: '/property', component: propertyManager},
        { path: '/makeup', component: makeupScreen},
        { path: '/altmenu', component: altMenu},
        { path: '/notif', component: Notifications},
        { path: '/phone', component: phoneSystem},
        { path: '/fuel', component: fuelScreen},
        { path: '/hud', component: clientHud},
        { path: '/listmenu', component: thisList},
        { path: '/reports', component: reportMenu},
        { path: '/login', component: authLogin},
        { path: '/register', component:  authRegister},
        { path: '/charselect', component: characterSelection },
        { path: '/otp', component: oneTimePass},
        { path: '/stats', component: statsPage},
        { path: '/inventory', component: inventorySystem},
        { path: '/clothing', component: clothingInterface },
        { path: '/creation', component: characterCreation },
        { path: '/ban', component: authBan },
        { path: '/modal', component: modalSystems },
        { path: '/chat', component: modalSystems },
        { path: '/speedo', component: vehicleSpeedometer },
        { path: '/vehcustom', component: vehicleCustomize },
        { path: '/truckermenus', component: truckerMenus },
        { path: '/vehicledealer', component: vehicleDealership },
        { path: '/myvehicles', component: vehicleManagement },
        { path: '/atmmenu', component: bankingMenus },
        { path: '/lockpicking', component: lockPicking },
    ]
});