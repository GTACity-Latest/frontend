<template>
    <div class="limiter">
        <div>
        <div class="container-login100" style="user-select: none;">
            <div class="wraps-login100" style="padding-bottom: 54px;">
                <div class="headPageStat" style="font-size: 15px; padding-left: 5px;background: #b53434;">İSTATİSTİKLER
                  <menu-button style="font-size: 14px;width: 459px; position:absolute;"/>
                </div>
                <div v-for="stat in playerStats" :key="stat.id" class="login100-form-title">
                        <div class="inserst" style="overflow:scroll;    height: 37vw; overflow-x: hidden; margin-top: 2.2vw;">

                          <div id="c1" class="statInsert"><i class="fa-solid fa-person" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Karakter Adı </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> {{stat.name}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-id-card-clip" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> ID </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> {{stat.id}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-building-columns" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Banka </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw; color:rgba(95, 255, 138, 0.835)"> ${{stat.bank}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-money-bill" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Nakit </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw; color:rgba(95, 255, 138, 0.835)"> ${{stat.cash}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-credit-card" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Krediler </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;color:rgba(255, 223, 63, 0.835)"> ${{stat.credits}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-phone" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Telefon Numarası </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> {{stat.phone}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-star" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Occupation </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> {{stat.occupation}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-clock" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Toplam Saat </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> {{stat.hours}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-check-to-slot" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Maaş </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> ${{stat.salary}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-car" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Toplam Araç </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> {{stat.vehicles}} </b>
                            </div>
                            <div id="c1" class="statInsert"><i class="fa-solid fa-people-group" style="color: rgb(177, 177, 177); float: left; margin-top: 7px;margin-left: 7px;"></i><b style="float: left; margin-left: 0.3vw; margin-top: -0.3vw;"> Toplam Karakter </b><b id="cname1" style="float: right;margin-right: 11px;margin-top: -0.3vw;"> {{stat.characters}} </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import menuButton from './menuButton.vue';

export default {
    components: {
        menuButton
    },
    methods: {
        close() {
            if(window.mp) {
                window.mp.trigger('closeRoute');
            }
        },
        ...mapMutations([
            'addReport',
        ])
    },
    computed: {
        ...mapGetters({
            playerStats: 'statsList'
        })
    }
}

</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
  }

  body,
  html {
    height: 100%;
    font-family: Poppins-Regular, sans-serif;
  }

  /*---------------------------------------------*/
  .fas {
    float: left;
    margin-top: 0.8vw;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(10, 10, 10, 0);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(181, 52, 52);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #838383;
  }

  a:focus {
    outline: none !important;
  }

  a:hover {
    text-decoration: none;
    color: #a64bf4;
  }

  .headPageStat {
    color: #fff;
    font-family: "OSL";
    font-family: Archivo Black;
    text-transform: uppercase;
    font-size: 13px;
    padding: 2px 4px;
    border-radius: 5px 5px 0px 0px;
    text-align: left;
    color: #ffffff;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    font-weight: 500;

  }

  .banHeaderTxt {
    position: absolute;
    text-align: center;
    margin-left: 6.6vw;
    margin-top: 0.4vw;
    font-family: Poppins-Medium;
    font-size: 1vw;
    color: #fc1e1e;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    font-weight: 700;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  a::after {
    content: "";
    color: #ffffff;

    width: 100%;
    height: 0.2vw;
    background: rgba(220, 171, 255, 20);

    opacity: 0.5;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  s {
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-size: 1vw;
    line-height: 1.7;
    color: #ffffff;
    margin-left: 2vw;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    font-weight: 700;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    text-decoration: none;
    text-align: left;
  }

  s:focus {
    outline: none !important;
  }

  s:hover {
    text-decoration: none;
    color: #a64bf4;
  }

  s::after {
    color: #ffffff;

    width: 100%;
    height: 0.2vw;
    background: rgba(220, 171, 255, 20);

    opacity: 0.5;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  s {
    position: relative;
  }

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
    margin-left: 5.2vw;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 700;
    font-size: 1vw;
    color: #adadad;
    margin-top: 1vw;
    margin-right: 65vw;
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
    border-color: rgba(0, 0, 0, 0) !important;
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

  @keyframes fadein {
    0% {
      opacity: 0;

      transform: scale(0);
    }
    100% {
      opacity: 0.78;

      transform: scale(1);
    }
  }

  .container-login100 {
    opacity: 0.8;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    padding: 1px;
    height: 20vw;
    user-select: none;
    border: none;
    outline: none;
  }

  .container-login100:focus {
    border: none;
    outline: none;
  }

  .statInsert {
    background: #0a0a0a;
    margin-left: 0.4vw;
    color: #fff;
    height: 1.5vw;
    border-radius: 4px;
    font-family: "OSL";
    font-family: 'Poppins-Regular';
    padding-top: 1px;
    font-weight: 350;
    text-align: center;
    margin-top: 0.3vw;
    font-size: 0.7vw;
    line-height: 2vw;
  }

  .wraps-login100 {
    width: 379px;
    border-left: none;
    border-right: none;
    height: 525px;
    align-content: center;
    border-radius: 5px;
    float: center;
    margin-left: 39vw;
    text-align: center;
    --notchSize: 20px;
    background-color: #252525;
  }

  .btn {
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 600;
    color: rgb(255, 255, 255);
    width: 1.5vw;
    border-radius: 0.3vw;
    transition-duration: 0.3s;
    font-size: 0.8vw;
    float: right;
  }

  .btn:hover {
    color: rgba(255, 255, 255, 0.609);
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .login100-form-title {
    display: block;
    font-family: Poppins-Bold;
    font-size: 39px;
    color: #333333;
    line-height: 1;
    text-align: center;
    margin-top: -2vw;
  }
</style>