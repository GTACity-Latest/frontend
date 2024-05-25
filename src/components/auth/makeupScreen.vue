<template>
    <div style="border-radius: 9px 9px 0px 0px;" class="ecreator_container">
      <div style="display: flex;
    align-items: center;
    justify-content: space-between;
    background: #b53434;
    border-radius: 9px 9px 0px 0px;justify-content: space-between;">
            <div class="ecreator_header">
              
              <span style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 26px;">
                MAKYAJ
              </span>
              <span style="    font-size: 13px;font-weight: 700;color: #b3b3b3;margin-top: -6px;">
                Karakterinin makyajını bu ekranda değiştirebilirsin.
              </span>
            </div>
            <img style="width: 50px;
      margin-left: 53px;
      margin-right: 15px;" src="./assets/image/dclogo.png">
          </div>

            <div class="genel">
              <div class="toplu">
                      <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">KIZARIKLIK</span>
              <div class="secimseysi">
                          <div class="subText" style="float:left;">Kızarıklık {{ blushStyle }}</div>
                          <input type="range" min="0" max="33" value="0" class="creationSliders"  v-model="blushStyle">
                        </div>
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Kızarıklık Rengi {{ blushColour }}</div>
                          <input type="range" min="0" max="63" value="5" class="creationSliders"  v-model="blushColour">
                        </div> 
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Kızarıklık Opaklığı {{ blushOpacity/10 }}</div>
                          <input type="range" min="0" max="10" value="0" class="creationSliders"  v-model="blushOpacity">
                        </div> 
                      </div>
                        <div class="toplu">
                      <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">RUJ</span>
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Ruj {{ lipstick }}</div>
                          <input type="range" min="0" max="10" value="0" class="creationSliders"  v-model="lipstick">
                        </div>
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Ruj Rengi {{ lipstickColour }}</div>
                          <input type="range" min="0" max="10" value="0" class="creationSliders"  v-model="lipstickColour">
                        </div>
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Ruj Opaklığı	 {{ lipstickOpacity/10 }}</div>
                          <input type="range" min="0" max="10" value="0" class="creationSliders"  v-model="lipstickOpacity">
                        </div>
                      </div>
                        <div class="toplu">
                      <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">MAKYAJ</span>
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Makyaj	 {{ makeup }}</div>
                          <input type="range" min="0" max="100" value="0" class="creationSliders"  v-model="makeup">
                        </div> 
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Makyaj Rengi	 {{ makeupColour }}</div>
                          <input type="range" min="0" max="100" value="0" class="creationSliders"  v-model="makeupColour">
                        </div>
                        <div class="secimseysi">
                          <div class="subText" style="float:left;">Makyaj Opaklığı	 {{ makeupOpacity/10 }}</div>
                          <input type="range" min="0" max="10" value="0" class="creationSliders"  v-model="makeupOpacity">
                        </div> 
                      </div>                     
            </div>
            
  
            <button @click="finishCharacter()" class="bizmbuton">TAMAMLA</button>
  
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        blushStyle: -1,
        blushColour: -1,
        blushOpacity: 0,
        makeup: -1,
        makeupColour: -1,
        makeupOpacity: 0,
        lipstick: -1,
        lipstickColour: -1,
        lipstickOpacity: 0
      };
    },
    watch: {
      blushStyle(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 5, oldType, this.blushOpacity / 10, this.blushColour);
        }
      },
      blushColour(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 5, this.blushStyle, this.blushOpacity / 10, oldType);
        }
      },
      blushOpacity(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 5, this.blushStyle, oldType / 10, this.blushColour);
        }
      },
      makeup(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 4, oldType, this.makeupOpacity / 10, this.makeupColour);
        }
      },
      makeupColour(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 4, this.makeup, this.makeupOpacity / 10, oldType);
        }
      },
      makeupOpacity(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 4, this.makeup, oldType / 10, this.makeupColour);
        }
      },
      lipstick(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 8, oldType, this.lipstickOpacity / 10, this.lipstickColour);
        }
      },
      lipstickColour(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 8, this.lipstick, this.lipstickOpacity / 10, oldType);
        }
      },
      lipstickOpacity(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 8, this.lipstick, oldType / 10, this.lipstickColour);
        }
      }
    },
    methods: {
      /* eslint-disable */
      finishCharacter() {   
         if (window.mp) {
          window.mp.trigger(
            "closeRoute"
          );
        }
      },
      backToSelection() {
        this.$router.push("charselect");
      }
    }
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
    position: absolute;
      right: 1px;
      display: flex;
      flex-direction: column;
      background: #2d2d2d;
      margin: 49px;
      height: 91%;
  }
  .ecreator_header {
    display: flex;
    padding:10px;
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
  
  .creationBase {
    opacity: 1;
    width: 30vw;
    border-top: solid rgba(220, 171, 255, 20) 6px;
    height: 19vw;
    border-radius: 15px;
    /*background-color: rgba(0, 0, 0, 0.85);*/
    color: rgba(10, 10, 10, 0.644);
    background: -webkit-linear-gradient(
      right,
      rgba(10, 10, 10, 0.944),
      rgba(1, 1, 1, 0.651)
    );
    margin-top: 2vw;
    margin-left: 68vw;
  
    --notchSize: 20px;
    border-top: solid rgb(183, 119, 255) 5px;
    border-bottom: solid rgb(183, 119, 255) 5px;
  
    background-color: #000000ec;
    background-image: url("./assets/image/diagmonds.png");
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
    border-bottom: solid rgb(183, 119, 255) 3px;
    box-shadow: 0 0 30px rgba(183, 119, 255, 0.69);
  }
  </style>