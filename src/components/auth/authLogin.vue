<template>
    <body>
        <div class="limiter" style="user-select: none;">
            <div class="container-login100" style="user-select: none;">
              
                <div class="wrap-login100">
                  <div class="headerSelect">
                  <span><img style="width: 50px;" src="./assets/image/dclogo.png">
                  </span></div>
                  <div class="p-l-55 p-r-55 p-b-54">
                  <form class="login100-form validate-form" id="auth-form" @submit.prevent="add()">

                        <div  class="wrap-input100 validate-input" style="margin-bottom: 23px;">
                            <div class="label-input100" style="color: #fff;"><i style="margin-right: 4px;" class="fa-solid fa-user"></i>Kullanıcı Adı</div>
                            <input class="input100" id="loginName" type="text" placeholder="Kullanıcı adınızı girin" v-model="username">
                            <div class="focus-input100"></div>
                        </div>
                        <div class="wrap-input100 validate-input">
                            <div class="label-input100" style="color: #fff;"><i style="margin-right: 4px;" class="fa-solid fa-lock"></i> Şifre</div>
                            <input id="loginPass" class="input100" type="password" placeholder="Şifrenizi girin" v-model="password">
                            <div class="focus-input100"></div>
                        </div>
                        <b style="display: none;"><a @click="register()" style="color: rgb(209, 209, 209); text-decoration:none">Don't have an account yet? Register now</a><br></b>
                        <br>
                        <div class="container-login100-form-btn">
                            <div class="wrap-login100-form-btn">
                                <div class="login100-form-bgbtn"></div>
                                <button type="submit" id="loginBtn" @click="login()" class="login100-form-btn">GİRİŞ YAP</button>
                            </div>
                        </div>
                        <br>
                </form>
                </div>
              </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
  data: function() {
    return {
      username: "",
      password: "",
      autoLogin: false
    };
  },
  created() {
    setTimeout(() => {
      this.infoGet()
    }, 800);
  },
  computed: {
    show() {
      return this.$store.state.views.Login.showCode;
    },
  },
  watch: {
    autoLogin(oldType) {
      console.log(oldType)
    },
  },
  methods: {
    login() {
      if (this.username.length == 0 || this.password.length == 0) {
        global.gui.notify.clearAll()
        global.gui.notify.showNotification(
          "Ensure both the username and password field are populated and contain the correct account credentials.",
          false,
          true,
          5000,
          "fa-solid fa-circle-info"
        );
        return;
      }
      if (
        window.mp &&
        this.username.length > 0 &&
        this.password.length > 0 &&
        this.username != this.password
      ) {
        window.mp.trigger("client:loginData", this.autoLogin == false ? 0 : 1, this.username.toLowerCase(), this.password);
      }
    },
    infoGet() {
      if(this.$store.state.playerInfo.creds.length > 0) {
        this.username = this.$store.state.playerInfo.creds[0].user;
        this.password = this.$store.state.playerInfo.creds[0].pass;
        this.autoLogin = true;
      }
      else {
        return;
      }
    },
    register() {
      this.$router.push("register");
    },
    async copyURL() {
      global.gui.notify.clearAll()

      try {
        await navigator.clipboard.writeText(`discord.gg/gtacity`);
        global.gui.notify.showNotification(
          "Discord davet linki kopyalandı.(CTRL + V ile yapıştırabilirsiniz)",
          false,
          true,
          5000,
          "fa-solid fa-circle-info"
        );
      } catch ($e) {
        console.log($e);
        global.gui.notify.showNotification(
          "An error occured copying URL to clipboard. [ Error: " + $e + " ]",
          false,
          true,
          5000,
          "fa-solid fa-triangle-exclamation"
        );
      }
    }
  }
};
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ FONT ]*/

@font-face {
  font-family: Poppins-Regular;
  src: url("./assets/poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: Poppins-Medium;
  src: url("./assets/poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: Poppins-Bold;
  src: url("./assets/poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: Poppins-SemiBold;
  src: url("./assets/poppins/Poppins-Regular.ttf");
}

/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/

.p-l-55 {
  padding-left: 55px;
}
.p-b-49 {
  padding-bottom: 49px;
}
.p-r-55 {
  padding-right: 55px;
}
.p-t-65 {
  padding-top: 65px;
}
.p-b-65 {
  padding-bottom: 35px;
}
.p-t-8 {
  padding-top: 8px;
}
.p-b-31 {
  padding-bottom: 20px;
}
.p-b-54 {
  padding-bottom: 20px;
}


.register-btn {
  padding-top: 10px;
  color: #a64bf4;
}

.msg {
  font-weight: 1000;
  border-top: solid rgba(255, 0, 0, 0.5) 2px;
  border-bottom: solid rgba(255, 0, 0, 0.5) 2px;
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.forgot-password {
  text-decoration: none;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: Poppins-Regular, sans-serif;
}

.headerSelect {
  color: #fff;
    font-family: "OSL";
    display: flex;
    justify-content: center;
    font-family: Poppins-Regular, sans-serif;
    border-bottom: 0px solid black;
    font-weight: 600;
    text-align: center;
    font-size: 16px;
    background: #b53434;
    padding: 1vw;
    padding-bottom: 0.2vw;
    padding-top: 0.2vw;
    text-align: left;
    margin-bottom: 2vw;
}

/*---------------------------------------------*/


/*---------------------------------------------*/

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/

input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

input:focus:-moz-placeholder {
  color: transparent;
}

input:focus::-moz-placeholder {
  color: transparent;
}

input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}

textarea:focus:-moz-placeholder {
  color: transparent;
}

textarea:focus::-moz-placeholder {
  color: transparent;
}

textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #adadad;
}

input:-moz-placeholder {
  color: #adadad;
}

input::-moz-placeholder {
  color: #adadad;
}

input:-ms-input-placeholder {
  color: #adadad;
}

textarea::-webkit-input-placeholder {
  color: #adadad;
}

textarea:-moz-placeholder {
  color: #adadad;
}

textarea::-moz-placeholder {
  color: #adadad;
}

textarea:-ms-input-placeholder {
  color: #adadad;
}

/*---------------------------------------------*/

button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ Utility ]*/

.txt1 {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  text-transform: uppercase;
}

.bg1 {
  background-color: #3b5998;
}

.bg2 {
  background-color: #1da1f2;
}

.bg3 {
  background-color: #ea4335;
}

/*//////////////////////////////////////////////////////////////////
[ login ]*/

.container-login100 {
  opacity: 1;
  width: 100%;
  min-height: 120vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-size: cover;
  /*-webkit-animation: fadein 2s;*/
}

.bg.image {
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 {
  opacity: 0.6;

  position: absolute;
}

.wrap-login100 {
  width: 500px;
  border-left: none;
  border-right: none;
  background: #373737;
  overflow: hidden;
  border-radius: 6px;
  margin-top: -10vw;
}

@keyframes fadein2 {
  0% {
    opacity: 0.1;
    margin-top: -55vw;
    transform: scale(0);
  }
  15% {
    opacity: 0.7;
    margin-top: -55vw;

    transform: scale(0.3);
  }
  20% {
    opacity: 1;
    margin-top: -55vw;

    transform: scale(1);
  }
  50% {
    opacity: 1;

    transform: scale(1);
  }
  60% {
    opacity: 1;

    transform: scale(1);
  }
  70% {
    opacity: 1;

    transform: scale(1);
  }
  80% {
    opacity: 1;

    transform: scale(1);
  }
  90% {
    opacity: 1;

    transform: scale(1);
  }
  100% {
    opacity: 1;

    transform: scale(1);
  }
}

/*------------------------------------------------------------------
[ Form ]*/

.login100-form {
  width: 100%;
}

.login100-form-title {
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #ffffff;
  line-height: 1.2;
  text-align: center;
}


/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  width: 100%;
  position: relative;
}

.label-input100 {
  background: #252525;
    width: fit-content;
    color: rgb(207, 207, 207) !important;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 2px 4px;
    font-size:10px;
    border-radius: 6px 6px 0px 0px;
}

.input100 {
  font-family: Poppins-Medium;
  font-size: 14px;
  color: #ffffff;
  line-height: 1.2;
  display: block;
  background: #252525;
    border-radius: 0px 6px 6px 6px;
  width: 100%;
  height: 55px;
  padding: 0 7px 0 7px;
}

/*---------------------------------------------*/

.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  color: #fff;
}

.focus-input100::after {
  content: attr(data-symbol);
  font-family: Material-Design-Iconic-Font;
  color: #ffffff;
  font-size: 22px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: calc(100% - 20px);
  bottom: 0;
  left: 0;
  padding-left: 13px;
  padding-top: 3px;
  color: #ffffff;
}

.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;  
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}

.input100:focus + .focus-input100::after {
  color: #a64bf4;
}

.has-val.input100 + .focus-input100::after {
  color: #a64bf4;
}

/*------------------------------------------------------------------
[ Button ]*/

.container-login100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.wrap-login100-form-btn {
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto;
  -moz-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);
}

.login100-form-bgbtn {
  position: absolute;
  z-index: -1;
  width: 300%;
  height: 100%;
  background: #b53434;
  top: 0;
  left: -100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn {
  font-family: Poppins-Medium;
  font-size: 16px;
  color: rgb(255, 255, 255);
  line-height: 1.2;
  text-transform: uppercase;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
}

.wrap-login100-form-btn:hover .login100-form-bgbtn {
  left: 0;
  background: #350000;
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;
  bottom: calc((100% - 20px) / 2);
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(50%);
  -ms-transform: translateY(50%);
  -o-transform: translateY(50%);
  transform: translateY(50%);
  right: 2px;
  pointer-events: none;
  font-family: Poppins-Regular;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f06a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 16px;
  bottom: calc((100% - 20px) / 2);
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(50%);
  -ms-transform: translateY(50%);
  -o-transform: translateY(50%);
  transform: translateY(50%);
  right: 8px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

/*//////////////////////////////////////////////////////////////////
[ Social item ]*/

.login100-social-item {
  font-size: 25px;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
}

.login100-social-item:hover {
  color: #fff;
  background-color: #333333;
}

/*//////////////////////////////////////////////////////////////////
[ Responsive ]*/

@media (max-width: 576px) {
  .wrap-login100 {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>