<template>
        <div id="header" style="user-select: none;">
          <h1></h1>
          <div class="container-login100" style="overflow-x: hidden;opacity: 1; overflow-y: hidden;">
            <div class="listMenu">
                <menu-button :menu="'list'" style="position: absolute;color: rgb(255, 255, 255);width: 650px;display: flex;font-size: 16px;margin-top: 8px;padding-right: 12px;justify-content: flex-end;"></menu-button>
                <div style="text-transform: uppercase;" class="head1"> {{ name.name }}<a></a><p style="margin-top: -8px;text-transform: none;color: #976464;font-size: 12px;">{{name.subText}}</p></div>
                        <div style="overflow:scroll;     height: 455px; overflow-x: hidden; margin-top:0vw">                     
                              <b v-for="lm in list" :key="lm.id">
                                <div @click="clickHandler(lm.funcs, lm.id)" class="insert">
                                  <button class="subIndex" style="float: left;width: 35px;">{{getIndex(lm.id)}}</button>
                                  <b style="font-size: 13px;color: #b7b7b7;margin-top: -1px;padding-left: 5px;display: flex;" v-html="lm.name"></b>
                              </div>
                              </b>
                        </div>
                        </div>
                        </div>
            </div>
</template>

<script>
// eslint-disable-next-line
import { mapGetters, mapMutations } from "vuex";
import menuButton from "../components/menuButton.vue";

export default {
  created() {
    this.$store.state.listMenu.list = [];
    this.$store.state.listMenu.table = [];
    this.store.state.listMenu.active = true;
  },
  computed: {
    ...mapGetters({
      list: "menuList",
      name: "menuName"
    }),
    arrLen() {
      return this.list.length;
    }
  },
  components: {
    menuButton
  },
  watch: {
    arrLen() {
      setTimeout(() => {
        if (window.mp && this.list.length == 0 && this.name.name == "View Mods") {
          window.mp.trigger("closeRoute");
        }
        }, 1000)
      }
  },
  methods: {
    clickHandler: function(funcs, itemId) {
      if (window.mp) {
        window.mp.trigger("serverFunctionCEF", funcs, itemId);
        if (this.name.name == "View Mods") {
          var index = null;
          this.list.find(function(item, i) {
            if (JSON.parse(item.id).id == JSON.parse(itemId).id) {
              index = i;
            }
          });
          if (index != null) {
            this.list.splice(index, 1);
          }
        }
        if (this.name.name !== "View Mods") {
          window.mp.trigger("closeRoute");
        }
      }
    },
    ...mapMutations({}),
    getIndex(name) {
      if(this.list.length > 0) {
        var indx = null
        this.list.find(function(item, i) {
          if(item.id == name) {
            indx = i
          }
        })
        return indx+1;
      }
    }
  }
};
</script>


<style scoped>
table {
  margin-left:2vw;
  position:absolute;
  margin-top: 3.6vw;
  padding-right: 3vw;
  padding-left: 3vw;
  background-color: rgba(122, 122, 122, 0.251);
}

th, tr {
  background: transparent;
  color:white;
}

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: hidden;
  overflow-y: hidden;
}

.subIndex {
    color: #fffffffb;
    transition-duration: 0.4s;
    font-family: "OSL";
    font-family: 'Poppins-Regular';
    font-weight: 700;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    float: left;
    line-height: 29px;
    margin-left: -6px;
    padding: 0px 7px;
    width: fit-content;
    border: none;
    background: #474747;
    margin-top: -2px;
}
.insert {
    /* background: -webkit-linear-gradient(right, #4b4b4b, #818181); */
    background: #292929;
    color: #fff;
    height: 29px;
    /* font-family: 'OSL'; */
    font-family: "OSL";
    font-family: 'Poppins-Regular';
    font-weight: 400;
    src: url(http://localhost:3000/fonts/OSL.36ff7a66.ttf) format("truetype");
    margin-top: 4px;
    font-size: 18px;
    line-height: 27px;
    text-align: left;
    margin-left: 4px;
}

.selectButton {
  background: transparent;
  border-top: solid rgba(220, 171, 255, 20) 3px;
  color: #fffffffb;
  transition-duration: 0.4s;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 650;
  font-size: 16px;
  width: 4vw;
  height: 1.5vw;
  margin-top: 0.8vw;
  --notchSize: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.selectButton:hover {
  border-top: solid rgba(140, 255, 117, 20) 3px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
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

.listMenu {
  opacity: 1;
  width: 650px;
  /*border-right: solid rgba(255, 255, 255, 0.311) 2px;
    border-left: solid rgba(255, 255, 255, 0.311) 2px;
    border-radius: 10px;
    */
  height: 500px;
  /*border-image: linear-gradient(45deg, rgba(220, 171, 255, 20), rgba(220, 171, 255, 90)) 1;*/
  /*background-color: rgba(0, 0, 0, 0.85);*/
  color: rgba(10, 10, 10, 0.644);
  background: #181818;
  position: absolute;
  --notchSize: 20px;
  border-radius: 5px;
}

.head1 {
   
    color: #fff;
    font-family: "OSL";
    font-family: Archivo Black;
    font-weight: 1000;
    text-align: center;
    font-size: 20px;
    /* background: -webkit-linear-gradient(left, rgba(10, 10, 10, 0.115), rgba(1, 1, 1, 0.651)); */
    padding: 4px 6px;
    padding-bottom: 0px;
    padding-top: 0px;
    text-align: left;
    border-radius: 5px 5px 0px 0px;
    /* box-shadow: 0 0 30px rgba(183, 119, 255, 0.69); */
    background: #b53434;
    /* background-image: url(data:image/png;base64,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); */

}

th {
  background: -webkit-linear-gradient(right, #929292, #929292);
  border-radius: 5px;
  color: #000000;
  max-width: 5vw;
  word-wrap: break-word;
}
td {
  text-align: center;
  background-color: rgb(156, 156, 156);
  font-weight: 650;
}

.btn {
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 600;
  src: url("../assets/fonts/OSL.ttf") format("truetype");
  font-size: 0.7vw;
  color: white;
  width: 2vw;
  position: absolute;
  margin-left: 12.5vw;
  margin-top: 0.23vw;
  border-radius: 0.3vw;
  transition-duration: 0.4s;
  border: none;
}
</style>