<template>
<div style="    display: flex;
    justify-content: center;">
  <div style="    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10vw;">
    <div style="    display: flex;">
    <div style="display:flex;align-items: center;justify-content: space-between;font-family: 'Archivo Black';background: #b53434;text-transform: uppercase;color: white;width: 284px;padding:4px;border-radius: 4px 4px 0px 0px;">
      <span>MARKET</span>
      <span v-if="inventoryItems.length > 0" style="font-family: Poppins-Medium;color: #c98181;font-size: 13px;">{{ inventoryItems.length }}/50</span>
    </div>
  </div>
<div style="display: flex;">
    <div class="uiBase" style="opacity: 1;font-size:14px;    margin-left: 0px;
   border-radius: 0px 5px 5px 5px;border-top:none;margin-top: 0px; background-image:none;    background: rgb(28 28 28); clip-path:none;    height: 550px; padding:none;width: 550px;overflow: auto;">
      <div style="margin-top:7px;">
        <div>
          <div  class="layout" style="">

            <div v-for="x in gridItems" :key="x">
              <div>
                <div class="itemcnta" :class="{ active: isxClicked(x) }">

                <div style="">
                  <img :src="x.img" height="10" width="50" style="margin-left: 17px;margin-right: 17px;">
                </div>
                  <p style="color: #c9c9c9;font-size: 12px;display: flex;flex-direction: column;margin-top:2px;">{{ x.name }}<span style="color: green;    font-weight: bold;font-size: 11px;margin-top: -7px;">${{  x.price  }}</span></p>
                  <div @click="handleClick(x)" class="butoni">SEPETE EKLE</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="gridItems.length <1"> <span style="    color: rgb(91 91 91);padding: 11px;font-weight: bold;margin-top: 2px;">Envanterinde hiç eşya bulunmuyor.</span></div>
        </div>

      </div>

    </div>
    <div v-if="clickedIndices.length > 0" style="    margin-top: -23px;">
      <span style="    background: rgb(181 52 52);
    margin-left: 15px;padding-bottom: 2px;padding-top: 4px;padding-left: 6px;padding-right: 7px;font-family: 'Archivo Black';color: white;border-radius: 4px 4px 0px 0px;">SEPET</span>
  <div class="uiBase" style="opacity: 1;    width: 361px;font-size:14px;    margin-left: 15px;
    border-radius: 0px 5px 5px 5px;border-top:none;margin-top: 0px; background-image:none;    background: rgb(28 28 28); clip-path:none;    height: 550px; padding:none;overflow: auto;">
      <div style="margin-top:7px;">
        <div>
          <div  class="layout" style="">

            <div v-for="x in clickedIndices" :key="x">
              <div>
                <div class="itemcnta" :class="{ active: isxClicked(x) }">

                <div style="">
                  <img :src="x.img" height="10" width="50" style="margin-left: 17px;margin-right: 17px;">
                </div>
                  <p style="color: #c9c9c9;font-size: 12px;display: flex;flex-direction: column;margin-top:2px;">{{ x.name }}<span style="color: green;    font-weight: bold;font-size: 11px;margin-top: -7px;">${{  x.price  }}</span></p>
                  <div @click="deleteClick(x)" class="butonidel">ÇIKAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div v-if="clickedIndices .length <1"> <span style="    color: rgb(91 91 91);padding: 11px;font-weight: bold;margin-top: 2px;">Sepetinde hiç eşya bulunmuyor!</span></div>
        </div>
      </div>
      <span style="display:flex;margin-top: 6px;justify-content: flex-end;">
        <span style="padding: 5px 10px;font-size: 12px;background: #1c1c1c;border-radius:5px;color: white;display: flex;margin-left: 15px;margin-right:6px;font-weight: bold;"><span style="    color: #4caf59;
    font-size: 17px;">${{ totalPrice }}</span></span>
        <div @click="handleClick(x)" style="padding:10px;margin-right: 6px;" class="butoni">NAKİT İLE ÖDE</div>
        <div @click="handleClick(x)" style="padding:10px;" class="butoni">KART İLE ÖDE</div>
      </span>
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
      gridItems: [{"id": 32, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "price": 300, "equipped": false},{"id": 15, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "price": 250, "equipped": false}, {"id": 39, "name": "Pistol 50", "img": "https://i.imgur.com/J6MQr8G.png", "price": 100, "equipped": false}],
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
    ...mapGetters({ inventoryItems: 'inventoryList', hudInfo: "hudInfo",  playerStats: 'statsList'}),
    totalPrice() {
      return this.clickedIndices.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    }
  },
  methods: {
    ...mapMutations(['clearInventory']),
    handler: function(e) {
        console.log(e.x, e.y)
        e.preventDefault();
    },
    handleClick(x) {
     
        this.clickedIndices.push(x);
    
    },
    deleteClick(x) {
      const xPosition = this.clickedIndices.indexOf(x);

      this.clickedIndices.splice(xPosition, 1);
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
    ustCikar() {
      if(this.inventoryItems[0].sex == 'female') {
        if (window.mp) {
        window.mp.trigger("setPlayer:clothes", 11, 18, 0);
        window.mp.trigger("setPlayer:clothes", 3, 15, 0);
      }
    } else {
      window.mp.trigger("setPlayer:clothes", 11, 15, 0);
      window.mp.trigger("setPlayer:clothes", 3, 15, 0);
    }
    },
    icgiyimCikar() {
      if(this.inventoryItems[0].sex == 'female') {
        if (window.mp) {
        window.mp.trigger("setPlayer:clothes", 8, 2, 0);
      }
    } else {
      window.mp.trigger("setPlayer:clothes", 8, 15, 0);
    }
    },
    pantolonCikar() {
      if(this.inventoryItems[0].sex == 'female') {
        if (window.mp) {
        window.mp.trigger("setPlayer:clothes", 4, 17, 0);
      }
    } else {
      window.mp.trigger("setPlayer:clothes", 4, 61, 0);
    }
    },
    ayakkabiCikar() {
      if(this.inventoryItems[0].sex == 'female') {
        if (window.mp) {
        window.mp.trigger("setPlayer:clothes", 6, 35, 0);
      }
    } else {
      window.mp.trigger("setPlayer:clothes", 6, 34, 0);
    }
    },
    giyin() {
      if (window.mp) {
        window.mp.trigger("reset:clothes");
      }
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
.butoni {
  background: #4caf59;
    font-family: 'Archivo Black';
    color: white;
    font-size: 11px;
    display: flex;
    border-radius: 3px;
    justify-content: center;
    padding:3px;
}
.butoni:hover {
  background:rgb(20, 78, 20);
  transition: 0.5s;
  cursor: pointer;
}
.butonidel {
  background: #802222;
    font-family: 'Archivo Black';
    color: white;
    font-size: 11px;
    display: flex;
    border-radius: 3px;
    justify-content: center;
    padding:3px;
}
.butonidel:hover {
  background:rgb(63, 16, 16);
  transition: 0.5s;
  cursor: pointer;
}
.kiyafets {
  background: rgb(34, 34, 34);
    padding: 1px 7px;
    border-bottom: 2px solid;
    color: rgb(157 157 157);
    border-radius: 5px;
    font-weight: bold;
    font-size: 13px;
}
.kiyafets:hover {
  color: #c04343;
  cursor:pointer
}
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
.itemcnta {
  background-color: #0a0a0adb;
    border-radius: 7px;
    margin-top: 9px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 2px;
}
.layout {
    display: flex;
    flex-wrap: wrap;
}
</style>

