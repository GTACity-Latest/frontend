<template>
  <div>
    <div class="notifications"></div>
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 4,
  newestOnTop: true,
});

export default {
  name: 'ThisNotifications',
  methods: {
    showNotification: function(text, progbar, dragbl, timeout, iconpic) {
      this.$toast(text, {
        toastClassName: ["pmrp"],
        position: "top-center",
        timeout: timeout,
        closeOnClick: progbar,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: dragbl,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: progbar,
        closeButton: "button",
        icon: iconpic,
        rtl: false,
      });
    },
    clearAll: function() {
      this.$toast.clear();
    },
    sendError: function(msg, time) {
      this.$toast.error(msg, {
        toastClassName: ["errorNotif"],
        position: "bottom-center",
        timeout: time,
      });
    },
    success: function(msg, time) {
      this.$toast.success(msg, {
        position: "bottom-center",
        timeout: time,
        icon: "fa-solid fa-square-check",
      });
    },
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
.Vue-Toastification__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 10000;
  background-color: rgb(46, 46, 46);
  transform-origin: left;
  animation: scale-x-frames linear 1 forwards;
}
.Vue-Toastification__toast-body {
    flex: 1;
    line-height: 24px;
    font-size: 14px;
    word-break: break-word;
    white-space: pre-wrap;
}
.Vue-Toastification__icon {
    margin: auto 7px auto 0px;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    transition: 0.3s ease;
    align-items: center;
    width: 20px;
    height: 100%;
}
.Vue-Toastification__toast {
    display: inline-flex;
    position: relative;
    max-height: 798px;
    min-height: 56px;
    box-sizing: border-box;
    margin-bottom: 24px;
    margin-top: -14px;
    padding: 8px 13px;
    border-radius: 8px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    justify-content: space-between;
    font-family: "Lato", Helvetica, "Roboto", Arial, sans-serif;
    max-width: 600px;
    min-width: 255px;
    pointer-events: auto;
    overflow: hidden;
    transform: translateZ(0);
    direction: ltr;
    align-items: center;
}
</style>
