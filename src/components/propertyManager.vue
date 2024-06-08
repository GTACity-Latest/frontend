<template>
  <div style="display: flex;justify-content: center;">
    <div style="border-radius: 9px 9px 7px 7px;" class="ecreator_container">
      <div style="display: flex;
    align-items: center;
    justify-content: space-between;
    background: #b53434;
    border-radius: 9px 9px 0px 0px;justify-content: space-between;">
            <div class="ecreator_header">
              
              <span style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 20px;">
                MÜLK YÖNETİMİ
              </span>
            </div>
          </div>

            <div class="genel" style="padding:10px;">
              <div style="display:flex;    justify-content: center;">
              <div style="display:flex;margin-left:5px;">
                <span style="color: rgb(183, 183, 183);background: #161616;border-radius: 5px 0px 0px 5px;width: fit-content;font-weight: bold;font-size: 12px;padding: 5px;margin: 5px 0px;    margin-top: 0px;">
                  Mülk ID
                </span>
                <span style="color: rgb(183, 183, 183);background: #4f4f4f;width: fit-content;font-size: 12px;border-radius: 0px 3px 3px 0px;padding: 5px;margin: 5px 0px;margin-top: 0px;">
                  {{  propertyBilgi[0].id  }}
                </span>
              </div>
              <div style="display:flex;margin-left:5px;">
                <span style="color: rgb(183, 183, 183);background: #161616;border-radius: 5px 0px 0px 5px;width: fit-content;font-weight: bold;font-size: 12px;padding: 5px;margin: 5px 0px;    margin-top: 0px;">
                  Mülk Adı
                </span>
                <span style="color: rgb(183, 183, 183);background: #4f4f4f;width: fit-content;font-size: 12px;border-radius: 0px 3px 3px 0px;padding: 5px;margin: 5px 0px;margin-top: 0px;">
                  {{  propertyBilgi[0].adi }}
                </span>
              </div>
            </div>
            <div style="display:flex;    justify-content: center;">
              <div style="display:flex;">
                <span style="color: rgb(183, 183, 183);background: #161616;border-radius: 5px 0px 0px 5px;width: fit-content;font-weight: bold;font-size: 12px;padding: 5px;margin: 5px 0px;    margin-top: 0px;">
                  Mülk Fiyatı
                </span>
                <span style="color: rgb(183, 183, 183);background: #4f4f4f;width: fit-content;font-size: 12px;border-radius: 0px 3px 3px 0px;padding: 5px;margin: 5px 0px;margin-top: 0px;">
                  $95.000
                </span>
              </div>
              <div style="display:flex;margin-left:5px;">
                <span style="color: rgb(183, 183, 183);background: #161616;border-radius: 5px 0px 0px 5px;width: fit-content;font-weight: bold;font-size: 12px;padding: 5px;margin: 5px 0px;    margin-top: 0px;">
                  Sisteme Satış Fiyatı
                </span>
                <span style="color: rgb(183, 183, 183);background: #4f4f4f;width: fit-content;font-size: 12px;border-radius: 0px 3px 3px 0px;padding: 5px;margin: 5px 0px;margin-top: 0px;">
                  $30.000
                </span>
              </div>
            </div>

              <div style="display: flex;flex-direction: column;margin-top: 7px;padding-top: 8px;border-top: 1px solid #515151;">
                <span style="color: #b7b7b7;font-weight: bold;font-size: 12px;">İsim Değiştir</span>
                <span><input style="background: rgb(63 63 63);border-radius: 4px;color: #a7a7a7;font-size: 13px; padding: 4px 8px;" type="text" v-model="name" :placeholder="propertyBilgi[0].adi" >
                <button style="margin-left:5px;font-size:13px;" @click="nameChange()" class="btnn">Kaydet</button>
              </span>
              </div>
              <div style="display:flex;flex-direction: column;margin-top:5px;">
                <span style="color: #b7b7b7;font-weight: bold;font-size: 12px;">Anahtar Ver</span>
                <span><input style="background: rgb(63 63 63);border-radius: 4px;color: #a7a7a7;font-size: 13px;    padding: 4px 8px;" type="text" placeholder="Karakter Adı">
                <button style="margin-left:5px;font-size:13px;" class="btnn">Onayla</button>
              </span>
              </div>
              <div style="display:flex;flex-direction: column;margin-top:5px;">
                <span style="color: #b7b7b7;font-weight: bold;font-size: 12px;">Kiralama Fiyatı</span>
                <span><input style="background: rgb(63 63 63);border-radius: 4px;color: #a7a7a7;font-size: 13px;    padding: 4px 8px;" type="text" placeholder="0$">
                <button style="margin-left:5px;font-size:13px;" class="btnn">Kaydet</button>
              </span>
              </div>
              <div style="display:flex;flex-direction: column;margin-top:5px;">
                <span style="color: #b7b7b7;font-weight: bold;font-size: 12px;">Giriş Fiyatı</span>
                <span><input style="background: rgb(63 63 63);border-radius: 4px;color: #a7a7a7;font-size: 13px;    padding: 4px 8px;" type="text" placeholder="0$">
                <button style="margin-left:5px;font-size:13px;" class="btnn">Kaydet</button>
              </span>
              </div>
              <div style="margin-top:7px;">
              <button class="btnn">Interior Değiştir</button>    
              <button style="margin-left:5px;" class="btnn">Kilit</button>  
              <button style="margin-left:5px;" class="btnn">Kiralığa Çıkart</button>
              <button style="margin-left:5px;" class="btnn">Sisteme Sat</button>    
            </div>            
            </div>
            
            
            <button @click="close()" style="margin-top:5px;border-radius: 0px 0px 7px 7px;" class="bizmbuton">TAMAMLA</button>
  
    </div>
  </div>
  </template>
  
  
  <script>
  import { mapGetters } from "vuex";

  export default {
    data() {
      return {
        blushStyle: -1,
        blushColour: -1,
        blushOpacity: 0,
        makeup: -1,
        name: null,
        makeupColour: -1,
        makeupOpacity: 0,
        lipstick: -1,
        lipstickColour: -1,
        lipstickOpacity: 0
      };
    },
    
    watch: {
      lipstickOpacity(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 8, this.lipstick, oldType / 10, this.lipstickColour);
        }
      }
    },
    computed: {
    ...mapGetters({ propertyBilgi: 'propertyDetails' }),
  },
    methods: {
      close() {
      if (window.mp) {
        window.mp.trigger("closeRoute");
      } 
      },
      nameChange() {
        console.log(this.name);
        if (window.mp) {
          window.mp.trigger("intisimdegislaamaclientten", this.propertyBilgi[0].id, this.name);
        }
      },
      /* eslint-disable */
      finishUpdate() {   
         if (window.mp) {
          window.mp.trigger(
            "characterMakeup",
            "closeRoute",
            JSON.stringify(this.$data)
          );
        }
      },
      backToSelection() {
        this.$router.push("charselect");
      }
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
  .bizmbuton {
    background: #b53434;
      color: rgb(235, 235, 235);
      text-transform: uppercase;
      padding: 4px;
      display: flex;
      font-family: "Archivo Black", sans-serif;
      justify-content: center;
  }
  .bizmbuton:hover {
    background: #811515;
  }
  .genel {
    overflow: auto;
  }
  .secimseysi {
    margin: 11px;
      /* margin-left: 3px; */
      margin-top: 0px;
      background: #1e1e1e;
      padding: 10px;
      border-radius: 7px;
      width: 96%;
  }
  .ikili {
    display:flex;
  }
  .toplu {
    PADDING: 3px;
      background: #3f3f3f;
      margin: 13px;
      border-radius: 4px;
  }
  .ecreator_container {
      display: flex;
      flex-direction: column;
      background: #2d2d2d;
      margin: 150px;
  }
  .btnn {
    margin-top: 7px;
    background: #b53434;
    padding: 4px 11px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    border-radius: 3px;
  }
  .btnn:hover {
    background: rgb(99, 37, 37);
  }
  .ecreator_header {
    display: flex;
    padding: 5px 9px;
      flex-direction: column;
  }
  .btns {
    padding: 4px 30px;
      font-size: 14px;
  }
  .btns2 {
    font-family: 'Poppins-Medium';
      background: #1e1e1e;
      font-size: 11px;
      font-weight: 600;
      border-radius: 5px;
      padding: 2px 6px;
      
  }
  .btns2:hover {
    background: #111111;
  }
  .input100 {
    font-family: Poppins-Medium;
      font-size: 12px;
      color: #ffffff;
      line-height: 1.2;
      display: block;
      background: #0a0a0a;
      border-radius: 6px;
      width: 100%;
      height: 32px;
      background: #232323;
      padding: 0 7px 0 7px;
  }
  .btns:hover {
    background: #811515;
  }
  /* The slider itself */
  .creationSliders {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 3px; /* Specified height */
    background: #ffffff; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.6; /* Set transparency (for mouse-over effects on hover) */
  }
  
  /* Mouse-over effects */
  .creationSliders:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
  
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .creationSliders::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 15px; /* Set a specific slider handle width */
    height: 15px; /* Slider handle height */
    background: #b53434; /* Green background */
    cursor: pointer; /* Cursor on hover */
    border-radius: 10px;
  }
  
  .creationSliders::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04aa6d; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  
  .subText {
    color: #9fa8ab;
      font-family: Poppins-Medium;
      font-weight: 400;
      font-size: 12px;
      text-align: center;
      background: #161616;
      padding: 4px;
      border-radius: 6px;
  }
  
  .creationButton {
    user-select: none;
    background: -webkit-linear-gradient(
      right,
      rgba(10, 10, 10, 0.944),
      rgba(1, 1, 1, 0.789)
    );
    border-bottom: solid rgb(197, 146, 255) 6px;
    color: #fffffffb;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 650;
    margin-top: auto;
    font-size: 23px;
    padding: 6px;
    width: 30vw;
    --notchSize: 12px;
    margin-top: 5px;
    margin-left: 68vw;
    position: absolute;
  }
  
  .creationButton:hover {
    border-bottom: solid rgba(118, 255, 163, 0.882) 2px;
  }
  .dropbtn {
    background-color: rgba(0, 0, 0, 0.182);
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    min-width: 160px;
    border-top: solid rgb(183, 119, 255) 3px;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgb(40,40,40);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.182);}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: rgba(69, 69, 69, 0.182);;}
  
  .slidescontainer {
    margin-left: 2vw;
    margin-top: 1vw;
    max-width: 10vw;
    line-height: 1vw;
    min-width: 10vw;
  }
  
  .mixContainer {
    margin-left: 5vw;
    margin-top: 0.1vw;
    max-width: 20vw;
    line-height: 1vw;
    min-width: 10vw;
  }
  
  * {
  
    user-select: none;
  }
  .unitList {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
  }
  
  .listItem {
    float: left;
    border-bottom: solid rgba(255, 255, 255, 0.311) 2px;
  }
  
  .listItem a {
    display: block;
    color: white;
    text-align: center;
    padding: 20px 1.6vw;
    text-decoration: none;
  }
  
  .inputFields {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
    display: block;
    color: white;
    text-align: center;
    padding: 20px 1.6vw;
    text-decoration: none;
  }
  
  li a:hover {
    border-bottom: solid rgba(118, 255, 163, 0.882) 2px;
  }
  
  .creationContainer {
    opacity: 0.8;
    min-height: 10vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 40vw;
  }
  
  .creationMenuBase {
    background: -webkit-linear-gradient(right, #4b4b4b, #d8d8d864);
    color: #fff;
    height: 12vw;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 700;
    text-align: center;
    margin-top: 1vw;
    font-size: 15px;
    line-height: 1.5vw;
    --notchSize: 20px;
    border-top: solid rgba(255, 255, 255, 0.311) 2px;
    background: -webkit-linear-gradient(
      right,
      rgba(1, 1, 1, 0.651),
      rgba(10, 10, 10, 0.944)
    );
  }
  
  .navCreation {
    margin-left: 5vw;
    margin-top: 0.5vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .head1 {
    color: #fff;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 1000;
    text-align: center;
    font-size: 27px;
    line-height: 1vw;
    background: -webkit-linear-gradient(
      left,
      rgba(10, 10, 10, 0.115),
      rgba(1, 1, 1, 0.651)
    );
    padding: 1vw;
    padding-bottom: 0.5vw;
    padding-top: 0.7vw;
    text-align: left;
  }
  </style>