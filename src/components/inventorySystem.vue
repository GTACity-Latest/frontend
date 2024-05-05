<template>
<div>
  <div style="    position: absolute;display: flex;width: 100%;flex-direction: column;margin-left:auto;margin-top: 8vw;margin-left: 25%;">
    <div style="    display: flex;">
    <div style="display:flex;align-items: center;justify-content: space-between;font-family: 'Archivo Black';background: #b53434;text-transform: uppercase;color: white;width: 284px;padding:4px;border-radius: 4px 4px 0px 0px;">
      <span>Eira Test</span>
      <span style="font-family: Poppins-Medium;color: #c98181;font-size: 13px;">{{ gridItems }}/50</span>
    </div>
    <div style="display:flex;align-items: center;margin-left:5px;justify-content: space-between;font-weight:bold;background: #b53434;text-transform: uppercase;color: white;width: 284px;padding:4px;border-radius: 4px 4px 0px 0px;">
      <div>
        <span class="tst">KULLAN</span>
        <span class="tst">TAŞI</span>
        <span class="tst">SİL</span>
      </div>
      <span style="font-family: Poppins-Medium;color: #c98181;font-size: 13px;">SEÇİLİ :{{ gridItems }}</span>
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

           <div> <li v-for="item in inventoryItems" :key="item.id">
        {{ item.name }}
      </li></div>

          </div>

        </div>

      </div>

    </div>


    <div class="uiBase" style="opacity: 1;font-size:14px;    margin-left: 0px;
    border-left: 4px solid #0e0e0e;border-radius: 0px;border-top:none;margin-top: 0px; background-image:none;    background: rgb(28 28 28); clip-path:none;    height: 31vw; padding:none;width: 600px;overflow: auto;">
      <div style="margin-top:7px;">
        <div>
          <span style="    color: rgb(91 91 91);padding: 11px;font-weight: bold;margin-top: 2px;">Envanter</span>
          <div class="layout" style="">

            <div v-for="x in gridItems" :key="x">
              <div>
                <div class="itemcnt" @click="handleClick(x)" :class="{ active: isxClicked(x) }">

                <div style="">
                  <img src="./utils//inventory//img//assaultrifle.png" height="10" width="50" style="margin-left: 17px;margin-right: 17px;">
                </div>
                  <p style="color: #c9c9c9;font-size: 12px;display: flex;flex-direction: column;margin-top:2px;">Item ismi<span style="color: gray;font-size: 11px;margin-top: -7px;">#232</span></p>
                </div>
              </div>
            </div>

          </div>

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
      gridItems: 30,
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
    ...mapMutations(['clearInventory']),
    ...mapGetters({ inventoryItems: 'inventoryList' }),
  },
  methods: {
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
    }
  }
}

</script>

<style>
.tst {
  color: #ebebeb;
    background: #7f2020;
    padding: 1px 3px;
    font-size: 12px;
    font-family: 'Archivo Black';
    border-radius: 2px;
    margin-right: 5px;
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

