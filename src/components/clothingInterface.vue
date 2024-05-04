<template>
  <div style="    display: flex;
    flex-direction: column;
    align-items: flex-end;">

    <div style="background: rgb(53 53 53);margin: 38px;    border-radius: 5px;">
      <div style="background: rgb(45 45 45);padding: 8px;margin-bottom: 11px;    border-radius: 5px 5px 0px 0px;    display: flex;justify-content: space-between;align-items: center;">
        <div style="color: white;font-family: 'Archivo Black', sans-serif; font-size: 23px;;text-transform: uppercase;font-weight: 600;">KIYAFET MAĞAZASI</div>
        <span @click="close()" class="exitbtn">X</span>
      </div>
      <div style="display: flex;flex-wrap: wrap;    border-bottom: 2px #434343 solid;padding: 1px 10px;padding-bottom: 11px;">
        <div @click="browsingType='Tops', componentId=11" class="icons"><i class="fa-solid fa-shirt"></i><span style="font-size:12px;">Üst</span></div>
        <div @click="browsingType='Undershirts', componentId=8" class="icons"><i class="fa-solid fa-vest"></i><span style="font-size:12px;">İç Giyim</span></div>
        <div @click="browsingType='Bottoms', componentId=4" class="icons"><i class="fa-solid fa-person-walking"></i><span style="font-size:12px;">Pantolon</span></div>
        <div @click="browsingType='Shoes', componentId=6" class="icons"><i class="fa-solid fa-shoe-prints"></i><span style="font-size:12px;">Ayakkabı</span></div>
        <div @click="browsingType='Acces', componentId=7" class="icons"><i class="fa-solid fa-headphones-simple"></i><span style="font-size:12px;">Aksesuar</span></div>
        <div @click="browsingType='Body', componentId=3" class="icons"><i class="fa-solid fa-person"></i><span style="font-size:12px;">Vücut</span></div>
        <div @click="browsingType='Head', componentId=0" class="icons"><i class="fa-solid fa-hat-cowboy"></i><span style="font-size:12px;">Şapka</span></div>
        <div @click="browsingType='Vest', componentId=9" class="icons"><i class="fa-solid fa-vest"></i><span style="font-size:12px;">Zırh</span></div>
        <div @click="browsingType='Bags', componentId=5" class="icons"><i class="fa-solid fa-bag-shopping"></i><span style="font-size:12px;">Çanta</span></div>
        <div @click="browsingType='Decals', componentId=10" class="icons"><i class="fa-solid fa-hand"></i><span style="font-size:12px;">Decals</span></div>
      </div>
      <div v-if="browsingType==='Tops'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Üst <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">Üst Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Undershirts'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">İç Giyim <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">İç Giyim Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Bottoms'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Pantolon <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">Pantolon Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Shoes'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Ayakkabı <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">Ayakkabı Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Acces'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Aksesuar <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">Aksesuar Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Body'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Vücut <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
      </div>
      <div v-if="browsingType==='Head'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Şapka <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">Şapka Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Vest'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Zırh <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">Zırh Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Bags'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Çanta <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>  
                  <div class="icsey">
                    <div class="subText" style="float:left;">Çanta Texture <span style="color: rgb(189 82 82);font-size: 11px;">{{ texture }} / 10</span></div>
                    <input type="range" min="0" max="10" value="0" class="slider" id="myRange" v-model="texture">
                  </div>
      </div>
      <div v-if="browsingType==='Decals'">
                  <div class="icsey">
                    <div class="subText" style="float:left;">Decals <span style="color: rgb(189 82 82);font-size: 11px;">{{ type }} / 392</span></div>
                    <input type="range" min="0" max="392" value="0" class="slider" id="myRange" v-model="type">
                  </div>
      </div>
    </div>
    <span @click="buyClothesForAll()" class="buybtn">SATIN AL</span>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  data: function() {
    return {
      browsingType: 'Tops',
      type: 0,
      texture: 0,
      componentId: 11,
      rotation: 0,
      clothesData: []
    };
  },
  watch: {

    // eslint-disable-next-line
    type(oldType, newType) {
        if (window.mp) {
        window.mp.trigger("setPlayer:clothes", this.componentId, oldType, this.texture);
        this.saveClothesData(this.componentId, oldType, this.texture);
      }
    },
    // eslint-disable-next-line
    texture(oldType, newType) {
      if (window.mp) {
        window.mp.trigger("setPlayer:clothes", this.componentId, this.type, oldType);
        this.saveClothesData(this.componentId, this.type, oldType);
      }
    },
    // eslint-disable-next-line
    rotation(oldType, newType) {
      if (window.mp) {
        window.mp.trigger("setPlayerRot", oldType);
      }
    }
  },
  computed: {
    ...mapGetters({}),
    ...mapMutations({})
  },
  methods: {
    
    saveClothesData(componentId, type, texture) {
      const index = this.clothesData.findIndex(data => data.componentId === componentId);
      if (index !== -1) {
        this.clothesData.splice(index, 1, { componentId, type, texture });
      }   else {       
        this.clothesData.push({ componentId, type, texture });
      }
    },

    close() {
      if (window.mp) {
        window.mp.trigger("closeRoute");
        window.mp.trigger("reset:clothes")
      }
    },
    resetPlayerClothes() {
        if(window.mp) {
            window.mp.trigger("reset:clothes")
        }
    },
    buyClothes() {
        if(window.mp) {
          window.mp.trigger('playerBuyClothes:client', this.componentId, this.type, this.texture);
        }
    },
    buyClothesForAll() {
    for (const data of this.clothesData) {
      const { componentId, type, texture } = data;
      if (window.mp) {
        window.mp.trigger('playerBuyClothes:client', componentId, type, texture);
      }
    }
    }
   }
};
</script>


<style>
.buybtn {
  margin-right: 38px;
    margin-top: -31px;
    border-radius: 5px;
    font-weight: 500;
    background: #cf5450;
    font-family: 'Poppins-Medium';
    PADDING: 5px 53px;
    color: white;
}
.buybtn:hover {
  background: #792a27;
  cursor:pointer;
  transition: 0.2s;
}
.subText {
  font-family: 'Poppins-Medium';
    font-weight: 400;
    font-size: 14px;
}
.icsey {
  margin: 17px;
    padding: 12px;
    background: #474747;
    border-radius: 6px;
}
.exitbtn {
  color: rgb(238, 238, 238);
    font-size: 12px;
    padding: 2px 9px;
    background: #9f3838;
    border-radius: 3px;
    font-weight: bold;
}
.exitbtn:hover {
  background: #4b1a1a;
  color: rgb(167, 167, 167);
}
.icons {
  color: #ababab;
    font-size: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    margin: 3px;
    background: #414141;
    border-radius: 6px;
}
.icons:hover {
  color: #af4a4a;
  background:rgb(46, 46, 46);
  transition: 0.2s;
  cursor: pointer;
}
.navOne {
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 20vw;
  background-color: transparent;
}

.navTwo {
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-size: 1vw;
  line-height: 50px;
  line-height: 1.5em;
  text-transform: normal;
  letter-spacing: normal;
  list-style-type: none;
  border-right: solid rgba(255, 255, 255, 0.311) 5px;
  border-left: solid rgba(255, 255, 255, 0.311) 5px;
  transition: 0.5s;
}

.navTwo:hover {
  background-color: #555;
  color: white;
}

.clothingSliders {
  position: absolute;
}

.purchaseBtn {
  background: transparent;
  border-top: solid rgba(220, 171, 255, 20) 6px;
  color: #fffffffb;
  transition-duration: 0.4s;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 650;
  margin-top: auto;
  font-size: 17px;
  padding: 1px;
  width: 9vw;
  --notchSize: 10px;


  transition: 0.5s;
  position: relative;
  margin-top: 0.2vw;
}

.purchaseBtn:hover {
  border-top: solid #6eff7f 6px;
}

.subContainer {
  background: #8c8c8c;
  margin-top: 1vw;
  padding: 20px;
  --notchSize: 20px;


}

.container-clothingStores {
  opacity: 0.8;
  min-height: 10vh;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 50vw;
}

.clothingList {
  background: -webkit-linear-gradient(right, #4b4b4b, #d8d8d864);
  color: #fff;
  height: 22vw;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 550;
  text-align: center;
  font-size: 12px;
  line-height: 1.5vw;
  margin-left: 14vw;
  --notchSize: 20px;
  border-top: solid rgba(255, 255, 255, 0.311) 2px;
  background: -webkit-linear-gradient(
    right,
    rgba(1, 1, 1, 0.651),
    rgba(10, 10, 10, 0.944)
  );
}

.clothingBase {
  opacity: 1;
  width: 23vw;
  border-top: solid rgba(220, 171, 255, 20) 6px;
  height: 22vw;
  border-radius: 12px;
  /*background-color: rgba(0, 0, 0, 0.85);*/
  color: rgba(10, 10, 10, 0.644);
  background: -webkit-linear-gradient(
    right,
    rgba(10, 10, 10, 1),
    rgba(1, 1, 1, 0.851)
  );
  backdrop-filter: blur(30px);
  margin-top: 10vw;
  margin-left: 75vw;
  --notchSize: 20px;
  border-top: solid rgb(183, 119, 255) 5px;
  background-color: #000000ec;
  background-image: url("../assets/img/diagmonds.png");
}

.textBase {
  color: #ffffff;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 2vw;
}

.textSub {
  color: #ffffff;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
}

.slidecontainer {
  margin-left: 2vw;
  margin-top: 1vw;
  max-width: 10vw;
  line-height: 2vw;
  min-width: 10vw;
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 5px; /* Specified height */
  background: #ffffff; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.6; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  border-radius: 8px;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 17px; /* Set a specific slider handle width */
  height: 17px; /* Slider handle height */
  background: rgb(189, 82, 82); /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 10px;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  cursor: pointer; /* Cursor on hover */
}
</style>