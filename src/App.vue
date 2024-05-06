<template>
  <div id="app">
    <loading-screen ref="loading" />
    <fuel-screen ref="fuelScreens" />
    <progress-bar ref="progressbar"/>
    <chat-box ref="chatsystem" style="position:absolute;" />
    <client-hud />
    <vehicle-speedometer />
    <router-view ref="routers">
    </router-view>
    <altMenu ref="altmenu"/>
    <Notifications ref="notification"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import altMenu from "./components/hud/altMenu.vue";
import Notifications from './components/Notifications.vue';
import vehicleSpeedometer from './components/hud/vehicleSpeedometer.vue';
import clientHud from './components/hud/clientHud.vue';
import chatBox from './components/hud/chatBox.vue';
import loadingScreen from "./components/hud/loadingScreen.vue";
import progressBar from "./components/hud/progressBar.vue";
import fuelScreen from "./components/hud/fuelScreen.vue";

export default {
  name: 'App',
  components: {
    Notifications,
    vehicleSpeedometer,
    loadingScreen,
    clientHud,
    chatBox,
    progressBar,
    fuelScreen,
    altMenu
},
  computed: {
    ...mapGetters({
      hudState: "getHudState"
    }),
    ...mapGetters({
      listActive: "menuName"
    }),
    ...mapMutations({})
  },
  mounted () {
    global.gui.notify = this.$refs.notification;
    global.gui.chat = this.$refs.chatsystem;
    global.gui.fuelscreen = this.$refs.fuelScreens;
    global.gui.loading = this.$refs.loading;
    global.gui.progressbar = this.$refs.progressbar;
  }
}

</script>

<style scoped>
.pmrp {
    color: rgb(229 229 229) !important;
    border-top: solid #cf5450 4px;
    background: #373737;
    font-family: Inter;
    font-size: 14px;
    border-radius: 2px;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10020px);
  opacity: 0;
}
</style>
