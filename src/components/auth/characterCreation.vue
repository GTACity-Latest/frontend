<template>
  <div class="ecreator_container">
    <div style="    display: flex;
    align-items: center;justify-content: space-between;">
          <div class="ecreator_header">
            
            <span style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 26px;">
              Karakter Yaratma
            </span>
            <span style="    font-size: 13px;font-weight: 700;color: #676767;margin-top: -3px;">
              Karakterini oluştur ve oynamaya başla!
            </span>
          </div>
          <img style="width: 50px;
    margin-left: 53px;
    margin-right: 15px;" src="./assets/image/dclogo.png">
        </div>
          <div style="background: #b53434;color: #ebebeb;font-family: 'Poppins-SemiBold';display: flex;">
            <a @click="browsingType='general', menuOneH=31, menuTwoH=22" class="btns">GENEL</a>
            <a @click="browsingType='face', menuOneH=44, menuTwoH=38" class="btns">YÜZ DETAYLARI</a>
            <a @click="browsingType='hair', menuOneH=28, menuTwoH=22" class="btns">SAÇ</a>
            <a @click="browsingType='other', menuOneH=31, menuTwoH=30" class="btns">DİĞER</a>
            <a @click="browsingType='makyaj', menuOneH=31, menuTwoH=30" class="btns">MAKYAJ</a>
          </div>

          <div v-if="browsingType==='general'" class="genel">
            <div style="    margin: 20px;margin-top: 13px;">
                <div style="">
                    <input id="loginPass" class="input100" maxlength="15" placeholder="Karakter adı girin" v-model="fName">
                  </div>
                  <div style="margin-top: 5px;">
                    <input id="loginPass" class="input100" maxlength="15" placeholder="Karakter soyadı girin" v-model="lName">
                  </div>
                  <div style="display: flex;flex-direction: row;justify-content: flex-end;    margin-top: 5px;">
                  <a style="color: #6b99b1;" class="btns2" @click="gender = 'male'" href="#">Erkek</a>
                  <a style="    margin-left:2px;color: rgb(163 72 72);" class="btns2" @click="gender = 'female'" href="#">Kadın</a>
                  </div>
                </div>

                <div class="secimler">
                  <div class="ikili">
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Anne <span style="color: #576163;">{{ mother }}</span></div>
                          <input type="range" min="0" max="46" value="0" class="creationSliders"  v-model="mother">
                      </div>
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Baba <span style="color: #576163;">{{ father }}</span></div>
                          <input type="range" min="0" max="46" value="0" class="creationSliders"  v-model="father">
                      </div>
                  </div>
                  <div class="ikili">
                    <div class="secimseysi">
                          <div class="subText" style="float:left;">Anne Ten Rengi <span style="color: #576163;">{{ skinMother }}</span></div>
                          <input type="range" min="0" max="46" value="0" class="creationSliders"  v-model="skinMother">
                      </div>
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Baba Ten Rengi <span style="color: #576163;">{{ skinFather }}</span></div>
                          <input type="range" min="0" max="46" value="0" class="creationSliders"  v-model="skinFather">
                      </div>
                  </div>
                  <div class="ikili">
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Ebeveyn <span style="color: #576163;">{{ third }}</span></div>
                          <input type="range" min="0" max="46" value="0" class="creationSliders"  v-model="third">
                      </div>
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Ebeveyn Ten Rengi <span style="color: #576163;">{{ skinThird }}</span></div>
                          <input type="range" min="0" max="46" value="0" class="creationSliders"  v-model="skinThird">
                      </div>
                    </div>
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Yüz Karışımı <span style="color: #576163;">{{ mix }}%</span></div>
                          <input type="range" min="0" max="100" value="0" class="creationSliders"  v-model="mix">
                      </div>
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Ten Rengi Karışımı <span style="color: #576163;">{{ skinMix }}%</span></div>
                          <input type="range" min="0" max="100" value="0" class="creationSliders"  v-model="skinMix">
                      </div>
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">Ebeveyn Benzerliği <span style="color: #576163;">{{ thirdMix }}%</span></div>
                          <input type="range" min="0" max="100" value="0" class="creationSliders"  v-model="thirdMix">
                      </div>
                </div>
          </div>

          <div v-if="browsingType==='hair'" class="genel">
                    <div class="toplu">
                      <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">SAÇ</span>
                      <div style="margin-top:5px;" class="secimseysi">
                        <div class="subText" style="float:left;">Saç Stili {{ hairStyle }}</div>
                        <input type="range" min="0" max="76" value="0" class="creationSliders" style="margin-top: 1vw;"  v-model="hairStyle">
                      </div>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Saç Rengi {{ hairColour }}</div>
                        <input type="range" min="0" max="63" value="0" class="creationSliders"  v-model="hairColour">
                      </div>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Saç İkinci Rengi {{ hairHighlights }}</div>
                        <input type="range" min="0" max="63" value="0" class="creationSliders"  v-model="hairHighlights">
                      </div>
                    </div>
                    <div class="toplu">
                      <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">KAŞ</span>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Kaş Şekli	 {{ eyebrowsStyle }}</div>
                        <input type="range" min="0" max="33" value="0" class="creationSliders"  v-model="eyebrowsStyle">
                      </div>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Kaş Rengi {{ eyebrowsColour }}</div>
                        <input type="range" min="0" max="63" value="0" class="creationSliders"  v-model="eyebrowsColour">
                      </div>
                    </div>
                    <div class="toplu">
                      <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">SAKAL</span>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Sakal Stili {{ facialHairStyle }}</div>
                        <input type="range" min="-1" max="28" value="0" class="creationSliders"  v-model="facialHairStyle">
                      </div>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Sakal Rengi {{ facialHairColour }}</div>
                        <input type="range" min="0" max="63" value="0" class="creationSliders"  v-model="facialHairColour">
                      </div>
                    </div>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Vücut Tüyleri {{ chestHairStyle }}</div>
                        <input type="range" min="0" max="16" value="0" class="creationSliders" style="margin-top: 1vw;"  v-model="chestHairStyle">
                      </div>              
          </div>
          <div v-if="browsingType==='makyaj'" class="genel">
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

          <div v-if="browsingType==='other'" class="genel">
                      <div style="margin-top:5px;" class="secimseysi">
                        <div class="subText" style="float:left;">Lekeler {{ blemishes }}</div>
                        <input type="range" min="-1" max="12" value="0" class="creationSliders" style="margin-top: 1vw;"  v-model="blemishes">
                      </div>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Yaşlanma {{ ageing }}</div>
                        <input type="range" min="-1" max="14" value="0" class="creationSliders" style="margin-top: 1vw;"  v-model="ageing">
                      </div>
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Kırışıklık {{ complexion }}</div>
                        <input type="range" min="0" max="11" value="0" class="creationSliders"  v-model="complexion">
                      </div> 
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Benler / Çiller {{ molesFreckles }}</div>
                        <input type="range" min="0" max="18" value="0" class="creationSliders"  v-model="molesFreckles">
                      </div> 
                      <div class="secimseysi">
                        <div class="subText" style="float:left;">Güneş Yanığı {{ sunDamage }}</div>
                        <input type="range" min="0" max="16" value="0" class="creationSliders" style="margin-top: 1vw;"  v-model="sunDamage">
                      </div> 
          </div> 

          <div v-if="browsingType==='face'" class="genel">
            <div class="toplu">
                      <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">BURUN</span>
              <div style="margin-top:5px;" class="secimseysi">
                  <div class="subText" style="float:left;">Burun Genişliği {{ noseWidth/10 }}</div>
                  <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="noseWidth">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Burun Uzunluğu	 {{ noseLength/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="noseLength">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Burun Ucu {{ noseTip/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="noseTip">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Burun Yüksekliği {{ noseHeight/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="noseHeight">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Burun Köprüsü {{ noseBridge/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="noseBridge">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Burun Köprüsü Eğriliği {{ noseBridgeShift/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="noseBridgeShift">
              </div>
              </div>
              <div class="toplu">
                    <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">KAŞ</span>
                    <div class="secimseysi">
                      <div class="subText" style="float:left;">Kaş Yüksekliği {{ browHeight/10 }}</div>
                      <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="browHeight">
                    </div>
                    <div class="secimseysi">
                <div class="subText" style="float:left;">Kaş Genişliği {{ browWidth/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="browWidth">
              </div>
              </div>
              <div class="toplu">
                    <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">YANAK</span>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Elmacık Kemiği Yüksekliği {{ cheekboneHeight/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="cheekboneHeight">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Elmacık Kemiği Genişliği {{ cheekboneWidth/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="cheekboneWidth">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Yanak Genişliği {{ cheeksWidth/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="cheeksWidth">
              </div>
              </div>
              <div class="toplu">
                    <span style="font-family: Archivo Black;font-size: 17px;padding: 12px;color: #dbdbdb;">ÇENE</span>
                    <div class="secimseysi">
                <div class="subText" style="float:left;">Çene Pozisyonu {{ chinPosition/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="chinPosition">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Çene Şekli {{ chinShape/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="chinShape">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Çene Uzunluğu {{ chinLength/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="chinLength">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Çene Genişliği {{ chinWidth/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="chinWidth">
              </div>
                    </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Dudak Şekli {{ lips/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="lips">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Çene Yüksekliği {{ jawHeight/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="jawHeight">
              </div>  
              <div class="secimseysi">
                <div class="subText" style="float:left;">Çene Genişliği {{ jawWidth/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="jawWidth">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Boyun Genişliği {{ neckWidth/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="neckWidth">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Göz Rengi {{ eyeColour }}</div>
                <input type="range" min="0" max="31" value="0" class="creationSliders"  v-model="eyeColour">
              </div>
              <div class="secimseysi">
                <div class="subText" style="float:left;">Göz Tipi {{ eyes/10 }}</div>
                <input type="range" min="-10" max="10" value="0" class="creationSliders"  v-model="eyes">
              </div>



             
          </div>


          <div>
          <div style="background: #161616;color: #ebebeb;text-transform: uppercase;padding: 4px;display: flex;font-family: 'Archivo Black', sans-serif;justify-content: center;">Karakter Rotasyonu</div>
          <div style="padding: 0px 15px;
    background: #232323;
    margin: 11px;
    border-radius: 5px;"><input type="range" min="0" max="360" value="0" class="creationSliders" style="margin-top: 1vw;    margin-bottom: 1vw;"  v-model="rot"></div>
          </div>

          <button @click="finishCharacter()" class="bizmbuton">TAMAMLA</button>

  </div>
</template>


<script>
export default {
  data() {
    return {
      browsingType: "general",
      menuOneH: 30,
      menuTwoH: 22,
      gender: "male",
      fName: "",
      lName: "",
      mother: 0,
      father: 0,
      third: 0,
      skinMother: 0,
      skinFather: 0,
      skinThird: 0,
      mix: 0,
      skinMix: 0,
      thirdMix: 0,
      noseWidth: 0,
      noseHeight: 0,
      noseLength: 0,
      noseBridge: 0,
      noseTip: 0,
      noseBridgeShift: 0,
      browHeight: 0,
      browWidth: 0,
      cheekboneWidth: 0,
      cheekboneHeight: 0,
      cheeksWidth: 0,
      eyes: 0,
      lips: 0,
      jawWidth: 0,
      jawHeight: 0,
      chinLength: 0,
      chinPosition: 0,
      chinWidth: 0,
      chinShape: 0,
      neckWidth: 0,
      eyeColour: 0,
      hairStyle: 0,
      hairColour: 0,
      hairHighlights: 0,
      eyebrowsStyle: 0,
      eyebrowsColour: 0,
      facialHairStyle: -1,
      facialHairColour: 0,
      chestHairStyle: -1,
      blemishes: -1,
      ageing: -1,
      blushStyle: -1,
      blushColour: -1,
      blushOpacity: 0,
      makeup: -1,
      makeupColour: -1,
      makeupOpacity: 0,
      complexion: -1,
      molesFreckles: -1,
      sunDamage: -1,
      lipstick: -1,
      lipstickColour: -1,
      lipstickOpacity: 0,
      rot: 0
    };
  },
  computed: {
    menuHeightOne() {
      return {
        height: `${this.menuOneH}vw`
      };
    },
    menuHeightTwo() {
      return {
        height: `${this.menuTwoH}vw`
      };
    }
  },
  watch: {
    gender(oldType, newType) {
      console.log(`${oldType} ${newType}`);
      if (window.mp) {
        window.mp.trigger("serverFunctionCEF", "setSex", oldType);
      }
    },
    mother(oldType, newType) {
      console.log(`${newType} ${this.father} ${this.third} ${oldType} ${this.father} ${this.third} ${this.mix} ${this.skinMix} ${this.thirdMix}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          oldType,
          this.father,
          this.third,
          this.skinMother,
          this.skinFather,
          this.skinThird,
          this.mix * 0.01,
          this.skinMix * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    father(oldType, newType) {
      console.log(`${oldType} ${newType}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          oldType,
          this.third,
          this.skinMother,
          this.skinFather,
          this.skinThird,
          this.mix * 0.01,
          this.skinMix * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    third(oldType, newType) {
      console.log(`${oldType} ${newType}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          this.father,
          oldType,
          this.skinMother,
          this.skinFather,
          this.skinThird,
          this.mix * 0.01,
          this.skinMix * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    skinMother(oldType, newType) {
      console.log(`${newType} ${this.father} ${this.third} ${oldType} ${this.father} ${this.third} ${this.mix} ${this.skinMix} ${this.thirdMix}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          this.father,
          this.third,
          oldType,
          this.skinFather,
          this.skinThird,
          this.mix * 0.01,
          this.skinMix * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    skinFather(oldType, newType) {
      console.log(`${newType} ${this.father} ${this.third} ${oldType} ${this.father} ${this.third} ${this.mix} ${this.skinMix} ${this.thirdMix}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          this.father,
          this.third,
          this.skinMother,
          oldType,
          this.skinThird,
          this.mix * 0.01,
          this.skinMix * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    skinThird(oldType, newType) {
      console.log(`${newType} ${this.father} ${this.third} ${oldType} ${this.father} ${this.third} ${this.mix} ${this.skinMix} ${this.thirdMix}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          this.father,
          this.third,
          this.skinMother,
          this.skinFather,
          oldType,
          this.mix * 0.01,
          this.skinMix * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    mix(oldType, newType) {
      console.log(`${oldType} ${newType}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          this.father,
          this.third,
          this.skinMother,
          this.skinFather,
          this.skinThird,
          oldType * 0.01,
          this.skinMix * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    skinMix(oldType, newType) {
      console.log(`${oldType} ${newType}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          this.father,
          this.third,
          this.skinMother,
          this.skinFather,
          this.skinThird,
          this.mix * 0.01,
          oldType * 0.01,
          this.thirdMix * 0.01
        );
      }
    },
    thirdMix(oldType, newType) {
      console.log(`${oldType} ${newType}`);
      if (window.mp) {
        window.mp.trigger(
          "setHeadBlend:creator",
          this.mother,
          this.father,
          this.third,
          this.skinMother,
          this.skinFather,
          this.skinThird,
          this.mix * 0.01,
          this.skinMix * 0.01,
          oldType * 0.01
        );
      }
    },
    hairStyle(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setComponentVariation", 2, oldType, 0);
      }
    },
    hairColour(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHairColour", oldType, this.hairHighlights);
      }
    },
    hairHighlights(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHairColour", this.hairColour, oldType);
      }
    },
    eyebrowsStyle(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 2, oldType, this.eyebrowsColour);
      }
    },
    eyebrowsColour(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 2, this.eyebrowsStyle, oldType);
      }
    },
    facialHairStyle(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 1, oldType, this.facialHairColour);
      }
    },
    facialHairColour(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 1, this.facialHairStyle, oldType);
      }
    },
    chestHairStyle(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 10, oldType, this.chestHairColour);
      }
    },
    noseWidth(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 0, oldType / 10);
      }
    },
    noseHeight(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 1, oldType / 10);
      }
    },
    noseLength(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 2, oldType / 10);
      }
    },
    noseBridge(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 3, oldType / 10);
      }
    },
    noseTip(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 4, oldType / 10);
      }
    },
    noseBridgeShift(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 5, oldType / 10);
      }
    },
    browHeight(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 6, oldType / 10);
      }
    },
    browWidth(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 7, oldType / 10);
      }
    },
    cheekboneHeight(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 8, oldType / 10);
      }
    },
    cheekboneWidth(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 9, oldType / 10);
      }
    },
    cheeksWidth(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 10, oldType / 10);
      }
    },
    eyes(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 11, oldType / 10);
      }
    },
    lips(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 12, oldType / 10);
      }
    },
    jawWidth(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 13, oldType / 10);
      }
    },
    jawHeight(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 14, oldType / 10);
      }
    },
    chinLength(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 15, oldType / 10);
      }
    },
    chinPosition(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 16, oldType / 10);
      }
    },
    chinWidth(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 17, oldType / 10);
      }
    },
    chinShape(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 18, oldType / 10);
      }
    },
    neckWidth(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setFaceFeature", 19, oldType / 10);
      }
    },
    eyeColour(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setPlayerEyeType", oldType);
      }
    },
    blemishes(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 0, oldType, 0);
      }
    },
    ageing(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 3, oldType, 0);
      }
    },
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
    complexion(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 6, oldType, 0);
      }
    },
    molesFreckles(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 9, oldType, 0);
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
    },
    sunDamage(oldType, newType) {
      console.log(oldType, newType);
      if (window.mp) {
        window.mp.trigger("setHeadOverlay", 7, oldType, 0);
      }
    },
    rot(oldType, newType) {
      console.log(`${oldType} ${newType}`);
      if (window.mp) {
        window.mp.trigger("setPlayerRot", oldType);
      }
    }
  },
  methods: {
    /* eslint-disable */
    finishCharacter() {
      function containsNumbers(str) {
        return /\d/.test(str);
      }
      if (
        this.fName.length == 0 ||
        this.lName.length == 0 ||
        this.fName.match(/\W/) ||
        this.lName.match(/\W/) ||
        this.fName.length > 15 ||
        this.lName.length > 15 ||
        containsNumbers(this.fName) ||
        containsNumbers(this.lName)
      ) {
        global.gui.notify.clearAll();
        global.gui.notify.showNotification(
          "Enter a valid character name using the format: Fname Lname",
          false,
          true,
          5000,
          "fa-solid fa-triangle-exclamation"
        );
        return;
      } else if (window.mp) {
        this.rot = 0;
        this.fName = this.fName[0].toUpperCase() + this.fName.toLowerCase().slice(1);
        this.lName = this.lName[0].toUpperCase() + this.lName.toLowerCase().slice(1);
        window.mp.trigger(
          "serverFunctionCEF",
          "characterCreationFinish",
          JSON.stringify(this.$data)
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

select {
  background-color: transparent;
  border: none;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  color: white;
  font-size: 20px;
  user-select: none;
}

select:focus {
  background-color: rgba(0, 0, 0, 0.663);
  border: none;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  color: white;
  font-size: 20px;
  user-select: none;
}
option:active {
  background-color: transparent;
  border: none;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  color: white;
  font-size: 20px;
  user-select: none;
}
select:focus {
  border: none;
  user-select: none;
}
select::after {
  border: none;
  user-select: none;
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