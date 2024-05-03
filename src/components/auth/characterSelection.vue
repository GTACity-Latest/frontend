<template>
   <div style="display: flex;
    justify-content: space-between;
    margin: 65px;">

    <div>

        <div v-if="charNames.length > 0" style="display: flex;background: #292929;width: fit-content;    flex-direction: column;    border-radius: 5px;">
          <div class="ecreator_header">
            
            <span style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 26px;">
            HESAP BİLGİLERİ
            </span>
            <span style="    font-size: 13px;font-weight: 700;color: #676767;margin-top: -3px;">
              {{ charNames[0].accName }} hesabının bilgileri
            </span>
          </div>
          <div class="secimseysi">
                          <div class="subText" style="float:left;">HESAP OLUŞTURULMA TARİHİ<span style="color: #576163;">{{ cut(charNames[0].creation) }}</span></div>
                          
                      </div>
                      <div class="secimseysi">
                          <div class="subText" style="float:left;">TOPLAM SAAT<span style="color: #576163;">{{ formatNum(charNames[0].totalHours) }}</span></div>
                          
                      </div>
        </div>

        <div style="display: flex;background: #292929;width: fit-content;    flex-direction: column;    border-radius: 5px;margin-top: 24px;">
          <div class="ecreator_header">
            
            <span style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 26px;">
              BİLDİRİMLER
            </span>
            <span style="    font-size: 13px;font-weight: 700;color: #676767;margin-top: -3px;">
              Bildirimlerini burada görüntüleyebilirsin
            </span>
          </div>
          <div v-for="notif in accNotifs" :key="notif.id" class="secimseysi">
                          <div class="subText" style="    display: flex;flex-direction: row;"><span>{{notif.text}}</span><button @click="clearNotif(notif.id)"><i class="fa-sharp fa-solid fa-circle-check" style="color:rgba(145, 255, 145, 0.887); font-size:0.8vw;margin-left:4px;"></i></button></div>
                          
                      </div>
                      <div v-if="accNotifs.length < 1" class="secimseysi">
                          <div class="subText" style="    display: flex;flex-direction: row;"><span>Bekleyen hiç bildirimin bulunmuyor.</span></div>
                          
                      </div>
        </div>

    </div>

    <div>

      <div style="display: flex;background: #292929;width: fit-content;    flex-direction: column;    border-radius: 5px;">
          <div class="ecreator_header">
            
            <span style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 26px;">
              KARAKTERLERİM
            </span>
            <span style="    font-size: 13px;font-weight: 700;color: #676767;margin-top: -3px;">
              {{ charNames.length }}/100 slot kullanılıyor.
            </span>
          </div>
                      <a  v-for="cName in charNames" :key="cName.id" @click="previewCharacter(cName.name)" style="    display: flex;justify-content: space-between;" class="secimseysi">
                        <div style="display: flex;flex-direction: column;">
                          <div class="subText" style="float: left;display: flex;flex-direction: row;align-items: center;"><i class="fa-solid fa-user" style="margin-right:0.3vw;"></i><span>{{ formatName(cName.name) }}</span></div>
                          <div class="subText" style="float: left;display: flex;flex-direction: row;align-items: center;"><i class="fa-solid fa-clock" style="margin-right:0.3vw;"></i><span>{{ cName.hours }}</span></div>                        
                          <div class="subText" style="float: left;display: flex;flex-direction: row;align-items: center;    font-size: 11px;color: #5b5b5b;"><span style="margin-right:0.3vw;">Son Giriş: </span><span>{{ formatUnixTimestamp(cName.lastPlayed) }}</span></div>
                        </div>
                        <button class="selectButton" @click="playerCharacter(cName.name)" style="float:left; margin-bottom: 2vw;"><i class="fa-solid fa-play"></i></button>
                      </a>
                      
        </div>
        <button class="newbuton" style="margin-top:1vw;" @click="goToCharCreation()">Karakter Yarat</button>
    </div>

   </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      charNames: "charactersList",
      accNotifs: "selectNotifs"
    }),
    ...mapMutations({})
  },
  methods: {
    playerCharacter(name) {
      if (window.mp) {
        window.mp.trigger(`serverFunctionCEF`, "load:character", name);
        window.mp.trigger("client:loginHandler", ["success"]);
      }
    },
    goToCharCreation() {
      if(window.mp) {
        window.mp.trigger('serverFunctionCEF', 'characterCreationStart')
      }
    },
    previewCharacter(name) {
      if (window.mp) {
        window.mp.trigger(`serverFunctionCEF`, "previewCharacter", name);
      }
    },
    formatUnixTimestamp(unixTimestamp) {
      let date = new Date(unixTimestamp * 1000);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
    formatName(name) {
      return name.replace('_', ' ')
    },
    formatNum(num) {
      return num.toLocaleString('en-US')
    },
    clearNotif(id) {
      var idx = null;
      this.accNotifs.length == 0 ? id = id-1 : '_';
      this.accNotifs.find(function(item, i) {
        if(id == i) { idx = i }
      })
      if(idx != null && window.mp) {
        this.accNotifs.splice(idx, 1);
        window.mp.trigger('serverFunctionCEF', 'clearAccNotif', idx);
      }
    },
    cut(string) {
      var newStr = []
      for(var x = 0; x < string.length-30; x++) {
        newStr.push(string[x]);
      }
      return newStr.join('')
    }
  }
};
</script>

<style scoped>
.newbuton {
  margin-top: 1vw;
    background: #b53434;
    font-family: 'Poppins-Regular';
    font-weight: 700;
    color: white;
    width: 100%;
    border-radius: 5px;
    padding: 15px 49px;
}
.newbuton:hover {
  background: #641a1a;
  transition: 0.5s;
}

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
  margin: 20px;
    margin-top: 0px;
    background: #1e1e1e;
    padding: 10px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
}
.secimseysi:hover {
  background: #464646;
}
.ecreator_container {
  position: absolute;
    right: 1px;
    display: flex;
    flex-direction: column;
    background: #1e1e1ee6;
    margin: 49px;
    height: 91%;
}
.ecreator_header {
  display: flex;
  padding:10px;
  padding-right: 71px;
    flex-direction: column;
    background: #1a1a1a;
    margin-bottom: 9px;
    border-radius: 5px 5px 0px 0px;
}

* {
  background-color: transparent;
  user-select: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari, Chrome, Opera, Samsung */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Edge, IE */
  user-select: none; /* Modern browsers */
  outline: none;
}
/*rgba(210, 133, 255, 0.822)     border-radius: 0px 0px 5px 5px;
*/

body::-webkit-scrollbar {
  display: none;
} /* Chrome, Safari and Opera */
body {
  -ms-overflow-style: none;
} /* IE and Edge */
html {
  scrollbar-width: none;
} /* Firefox */
body:focus {
  border: none;
}
.tableOne {
  width: 100%;
  width: 24vw;
  margin: auto;
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  background: -webkit-linear-gradient(
    right,
    rgba(10, 10, 10, 1),
    rgba(1, 1, 1, 0.851)
  );
  height: 10vw;
}
.selectButton {
  border: none;
    color: #3b3b3b;
    height: 0.1vw;
    transition-duration: 0.4s;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 1000;
    margin-left: 4.4vw;
    margin-top: 4px;
    margin-right: 12px;
    font-size: 30px;
}
.selectButton:hover {
  color: #181818;
}

.createCharBtn {
  border-top: solid rgba(220, 171, 255, 20) 6px;
  color: #fffffffb;
  transition-duration: 0.4s;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 650;
  margin-top: 0.5vw;
  margin-left: 70.99vw;
  font-size: 20px;
  padding: 20px;
  width: 23vw;
  --notchSize: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000000ec;
  background-image: url("./assets/image/diagmonds.png");
}

.createCharBtn:hover {
  border-top: solid rgba(140, 255, 117, 20) 6px;
}
a::after {
  background: none !important;
}
.subText {
  float: left;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins-Regular';
    font-size: 13px;font-weight: 700;color: #a1a1a1;
}
.character {
  background: -webkit-linear-gradient(right, #4b4b4b, #d8d8d864);
  color: #fff;
  height: 10vw;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  margin-top: 1vw;
  font-size: 15px;
  line-height: 1.5vw;
  margin-left: 0.2vw;
  --notchSize: 20px;
  border-top: solid rgba(255, 255, 255, 0.311) 2px;
  background: -webkit-linear-gradient(
    right,
    rgba(1, 1, 1, 0.651),
    rgba(10, 10, 10, 0.944)
  );
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

.selectionBase {
  opacity: 1;
  width: 23vw;
  border-top: solid rgba(220, 171, 255, 20) 6px;
  height: 44vw;
  border-radius: 15px;
  /*background-color: rgba(0, 0, 0, 0.85);*/
  margin-top: 2vw;
  margin-left: 71vw;

  --notchSize: 20px;
  border-top: solid rgb(183, 119, 255) 5px;
  background-color: #000000ec;
  background-image: url("./assets/image/diagmonds.png");
}

.headSelect {
  color: #fff;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 1000;
  text-align: center;
  margin-top: 2vw;
  font-size: 27px;
  line-height: 1vw;
}

.headerSelect {
  color: #fff;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 1000;
  text-align: center;
  font-size: 23px;
  line-height: 1vw;
  background: -webkit-linear-gradient(
    left,
    rgba(10, 10, 10, 0.115),
    rgba(1, 1, 1, 0.651)
  );
  text-align: left;
  border-bottom: solid rgb(183, 119, 255) 3px;
  box-shadow:0 0 30px rgba(183, 119, 255, 0.69);
  padding: 1vw;
  padding-bottom: 0.5vw;
  padding-top: 0.7vw;
}

.container-charSelect {
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
  /*-webkit-animation: fadein 2s;*/
}

a::after {
  display: block;
  content: "";
  width: 100%;
  height: 0.2vw;
  background: rgba(220, 171, 255, 20);
  opacity: 0.5;
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
}
a {
  position: relative;
}

th {
  background-color: rgba(35, 35, 35, 0.326);
  margin-right: 2vw;
}
td {
  text-align: center;
  background-color: rgb(156, 156, 156);
  font-weight: 650;
  max-width: 20vw;
  word-wrap: break-word;
}
</style>