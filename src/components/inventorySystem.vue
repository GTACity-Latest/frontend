<template>
<div style="    display: flex;
    justify-content: center;">
  <div style="    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10vw;">
    <div style="    display: flex;">
    <div style="display:flex;align-items: center;justify-content: space-between;font-family: 'Archivo Black';background: #b53434;text-transform: uppercase;color: white;width: 284px;padding:4px;border-radius: 4px 4px 0px 0px;">
      <span>{{ hudInfo[0].cityName }}</span>
      <span v-if="inventoryItems.length > 0" style="font-family: Poppins-Medium;color: #c98181;font-size: 13px;">{{ inventoryItems.length }}/50</span>
    </div>
    <div v-if="clickedIndices.length > 0" style="display:flex;align-items: center;margin-left:5px;justify-content: space-between;font-weight:bold;background: #b53434;text-transform: uppercase;color: white;width: 504px;padding-right:4px;border-radius: 4px 4px 0px 0px;">
      <div style="display: flex;height: 100%;">
        <span @click="handleConfirm" class="tst" style="margin-right:0px;">BAŞKA OYUNCUYA AKTAR</span>
        <span v-if="showSpan" style="display:flex;align-items: center;background: #1c1c1c;font-size: 13px;font-weight: 500;">
          <input style="    width: 41px;
    padding: 0px 0px 0px 3px;
    height: 100%;
    background: rgb(57, 57, 57);
    margin-right: -3px;
    display: flex;
    font-family: Poppins-Medium;
    color: rgb(129, 129, 129);" type="text" v-model="givenId" placeholder="ID">
          <span @click="handleConfirm" style="    background: #44893c;color: #e3e3e3;padding: 6px;margin-left: 3px;font-family: 'Archivo Black';font-weight: bold;">ONAYLA</span>
        </span>
        <span @click="deleteItem" class="tst" style="margin-left:4px;margin-right:0px;">SİL</span>
      </div>
      <span style="font-family: Poppins-Medium;color: #c98181;font-weight:normal;text-transform:none;font-size:13px;">Seçili: {{ clickedIndices.length }}/{{ inventoryItems.length }}</span>
    </div>
  </div>
<div style="display: flex;">
    <div class="uiBase" style="border-top: none;opacity: 1;border-radius: 0px;margin-top: 0px;
    background: rgb(28 28 28);
    clip-path: none;
    height: 31vw;
    font-size:14px;
    overflow: auto;
    width: 240px;
    margin-left: 0px;">
      <div style="margin-top:7px;">
        <div>
          <span style="    color: rgb(91 91 91);padding: 11px;font-weight: bold;margin-top: 2px;">Karakter</span>
          <div class="layout">

          </div>

        </div>

      </div>

    </div>


    <div class="uiBase" style="opacity: 1;font-size:14px;    margin-left: 0px;
    border-left: 4px solid #0e0e0e;border-radius: 0px;border-top:none;margin-top: 0px; background-image:none;    background: rgb(28 28 28); clip-path:none;    height: 31vw; padding:none;width: 600px;overflow: auto;">
      <div style="margin-top:7px;">
        <div>
          <span style="    color: rgb(91 91 91);padding: 11px;font-weight: bold;margin-top: 2px;">Envanter</span>
          <div  class="layout" style="">

            <div v-for="x in inventoryItems" :key="x">
              <div>
                <div class="itemcnt" @click="handleClick(x)" :class="{ active: isxClicked(x) }">

                <div style="">
                  <img :src="x.img" height="10" width="50" style="margin-left: 17px;margin-right: 17px;">
                </div>
                  <p style="color: #c9c9c9;font-size: 12px;display: flex;flex-direction: column;margin-top:2px;">{{ x.name }}<span style="color: gray;font-size: 11px;margin-top: -7px;">#{{  x.id  }}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="inventoryItems.length <1"> <span style="    color: rgb(91 91 91);padding: 11px;font-weight: bold;margin-top: 2px;">Envanterinde hiç eşya bulunmuyor.</span></div>
        </div>

      </div>

    </div>
  </div>
  </div>
</div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      gridItems: [{"id": 32, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "ammo": 30, "equipped": false},{"id": 15, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "ammo": 30, "equipped": false}, {"id": 39, "name": "Pistol 50", "img": "https://i.imgur.com/J6MQr8G.png", "ammo": 30, "equipped": false}],
      showSpan: false,
      givenId: "",
      clickedIndices: [],
      inventory: [{"id": 1, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "ammo": 30, "equipped": false},{"id": 1, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "ammo": 30, "equipped": false}, {"id": 2, "name": "Pistol 50", "img": "https://i.imgur.com/J6MQr8G.png", "ammo": 30, "equipped": false}]
    }
  },
  created() {
   // this.$store.state.playerInfo.inventoryItems = []
   this.itemsCount = this.inventoryItems.length;
   console.log('Clicked indices:', this.clickedIndices);
  },
  
  computed: {
    ...mapGetters({ inventoryItems: 'inventoryList', hudInfo: "hudInfo" }),
  },
  methods: {
    ...mapMutations(['clearInventory']),
    handler: function(e) {
        console.log(e.x, e.y)
        e.preventDefault();
    },
    handleClick(x) {
      // Tıklanan indeksin zaten seçilip seçilmediğini kontrol edin
      const xPosition = this.clickedIndices.indexOf(x);

      // Tıklanan indeks dizide mevcutsa, onu kaldırın
      if (xPosition !== -1) {
        this.clickedIndices.splice(xPosition, 1);
      } else {
        // Tıklanan indeks dizide yoksa, onu ekleyin
        this.clickedIndices.push(x);
      }
    
    },
    isxClicked(x) {
      // İndeksin seçilip seçilmediğini kontrol etmek için bir işlev
      return this.clickedIndices.includes(x);
    },

    showInputField() {
      // TAŞI'ya tıklandığında, showSpan'ı true yaparak span'ı gösteriyoruz
      this.showSpan = true;
    },
    handleConfirm() {
      // ONAYLA'ya tıklanınca, showSpan'ı false yaparak span'ı gizliyoruz
      // Ayrıca burada istediğiniz işlemleri gerçekleştirin
      this.clickedIndices.forEach(x => {
        // esyaver fonksiyonunu çalıştırın ve givenId ve clickedId'yi geçirin
        console.log('Test', x.id);
        if (window.mp) {
        window.mp.trigger('esyaver:client', x.id);
        }
      });

      
      mapGetters({inventoryItems: 'inventoryList'});
      this.showSpan = false;

      
      // Diğer işlemler için bir fonksiyon çağırabilirsiniz
      // Örneğin: this.confirmAction();
    },
    deleteItem() {
      this.clickedIndices.forEach(x => {
        // esyaver fonksiyonunu çalıştırın ve givenId ve clickedId'yi geçirin
        console.log('Test', x.id);
        if (window.mp) {
        window.mp.trigger('esyasil:client', x.id);
        }
      });
      mapGetters({ inventoryItems: 'inventoryList'});
    }
  }
}

</script>

<style>
.tst {
    color: #dbdbdb;
    background: #6b1d1d;
    padding: 1px 3px;
    font-size: 12px;
    font-family: 'Archivo Black';
    border-radius: 2px;
    margin-right: 5px;
    display: flex;
    align-items: center;
}
.tst2 {
  color: #d3d3d3;
    background: #2e2e2e;
    padding: 1px 3px;
    font-size: 12px;
    font-family: 'Archivo Black';
    border-radius: 2px;
    margin-right: 5px;
}
.tst2:hover {
  color: #999999;
    background: #535353;
}
.tst:hover {
  background: #3f1313;
}
.itemcnt {
  background-color: #0a0a0adb;
    border-radius: 7px;
    margin-top: 9px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 2px;
}
.itemcnt:hover {
  background-color: rgb(33 33 33 / 86%);
}
.itemcnt.active {
  background-color: rgb(49 49 49 / 86%);
}
.layout {
    display: flex;
    flex-wrap: wrap;
}
</style>

