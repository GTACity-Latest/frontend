<template>
<div>
  <div style="position:absolute;display: flex;width: 100%;justify-content: center;">

    <div class="uiBase" style="border-top: none;opacity: 1;border-radius: 5px;    margin-top: 8vw;
    background: rgb(28 28 28);
    clip-path: none;
    height: 31vw;
    overflow: auto;
    width: 15vw;
    margin-left: 0px;">
      <div>
        <div>
          <div style="background: rgb(181, 52, 52);color: white;font-family: 'Archivo Black', sans-serif;padding-left: 9px;">KARAKTER</div>
          <div class="layout">

           <div> <li v-for="item in inventoryItems" :key="item.id">
        {{ item.name }}
      </li></div>

          </div>

        </div>

      </div>

    </div>


    <div class="uiBase" style="margin-left:10px;opacity: 1;border-radius: 5px;    margin-top: 8vw; border-top:none; background-image:none;    background: rgb(28 28 28); clip-path:none;    height: 31vw; padding:none;width: 30vw;overflow: auto;">
      <div>
        <div>
          <div style="background: rgb(181, 52, 52);color: white;font-family: 'Archivo Black', sans-serif;padding-left: 9px;">ENVANTER</div>
          <div class="layout" style="">

            <div v-for="x in gridItems" :key="x">
              <div>
                <div class="itemcnt">
                <div style="">
                  <img src="./utils//inventory//img//assaultrifle.png" height="10" width="50" style="margin-left:1vw;margin-right:1vw;">
                </div>
                  <p style="color: #c9c9c9;font-size: 12px;display: flex;flex-direction: column;margin-top:2px;">{{ x.name }}<span style="color: gray;font-size: 11px;margin-top: -7px;">#{{ x.id }}</span></p>
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
      inventory: [{"id": 1, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "ammo": 30, "equipped": false},{"id": 1, "name": "Assault Rifle", "img": "https://i.imgur.com/kCG7bOP.png", "ammo": 30, "equipped": false}, {"id": 2, "name": "Pistol 50", "img": "https://i.imgur.com/J6MQr8G.png", "ammo": 30, "equipped": false}]
    }
  },
  created() {
   // this.$store.state.playerInfo.inventoryItems = []
  },
  computed: {
    ...mapMutations(['clearInventory']),
    ...mapGetters({ inventoryItems: 'inventoryList' }),
  },
  methods: {
    handler: function(e) {
        console.log(e.x, e.y)
        e.preventDefault();
    }
  }
}

</script>

<style>
.itemcnt {
  background-color: #0a0a0adb;border-radius:7px; margin-top:0.5vw; padding:10px; margin-left:0.7vw; margin-right:0.5vw;    width: fit-content;
}
.itemcnt:hover {
  background-color: rgb(33 33 33 / 86%);
}
.layout {
    display: flex;
    flex-wrap: wrap;
}
</style>

