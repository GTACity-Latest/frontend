<template>
  <div v-if="hudState">
    <div style="position: absolute;
  bottom:18px;
  left: 15.9vw;">
    <div v-if="protectedArea" style="margin-top:5px;background: rgb(93 161 87 / 65%);border:none;padding:5px;font-size: 13px;" class="cont">Güvenli Bölge</div>
    <div style="margin-top:5px;    background: #66cd329c;" class="cont"><Icon icon="f7:wallet-fill"  width="17px"  style="margin-right:4px;" />${{  hudInfo[0].money.toLocaleString('en-US') }}</div>
    <div style="margin-top:5px;" class="cont"><Icon icon="fa6-solid:user" width="15px"  style="margin-right:5px;" />{{ hudInfo[0].cityName }} ({{ hudInfo[0].id }})</div>
    <div style="display: flex;    align-items: flex-end;">
      <div style="margin-top:5px;height:fit-content;    padding: 5px;padding-right:10px;" class="cont"><i class="fa-solid fa-location-dot" style="    margin-right: 8px;font-size: 28px;"></i><div style="display: flex;
    flex-direction: column;"><span style="font-weight:bold;">{{  hudInfo[0].location }}</span><span style="    margin-top: -6px;
    font-size: 12px;
    color: #d7d7d7;">{{  hudInfo[0].locationTwo }}</span></div></div>
    <div style="margin-top:5px;margin-left:4px;" class="cont"><Icon icon="eos-icons:compass" width="17px" style="margin-right:4px;" />{{ hudInfo[0].direction }}</div>
    <div style="margin-top:5px;margin-left:4px;" class="cont"><Icon icon="mdi:speedometer"  width="17px" style="margin-right:4px;" />{{ hudInfo[0].fps }} FPS</div>
    
    </div>
  </div>
  <div style="position: absolute;
  bottom:18px;
  right: 0.3vw;
  display: flex;
    flex-direction: column;
    align-items: flex-end;">

<div style="margin-bottom:5px;height:fit-content;    padding: 5px;" class="cont"><i class="fa-solid fa-clock" style="    margin-right: 8px;font-size: 25px;"></i><div style="display: flex;
    flex-direction: column;"><span style="font-weight:bold;">{{ getTime() }}</span><span style="    margin-top: -6px;
    font-size: 12px;
    color: #d7d7d7;">{{ getDate() }}</span></div></div>
    <span class="cont" style="overflow: hidden;">
    <div style="font-family: 'Poppins-Medium', sans-serif;font-weight: 600;display: flex;color:white;    align-items: center;margin-right: 3px;">
      <span style="font-size: 18px;
    font-weight: 900;margin-right:4px;">V0.0.1</span>
      <span style="font-weight: 400;
    color: lightgrey;">gtacity.com.tr</span>
    </div>
    <img style="width: 24px;" src="./assets/dclogo.png"></span>
  </div>
</div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
import { Icon } from '@iconify/vue2';

export default {
  components: {
    Icon
  },

  computed: {
    ...mapGetters({
      hudState: "getHudState",
      hudInfo: "hudInfo",
      playerStats: "statsList",
      protectedArea: "getProtectedHud",
      hungerThirst: 'hungerThirstData'
    }),
    ...mapMutations({}),
  },
  methods: {
    formatNum(num) {
      return num.toLocaleString("en-US");
    },
    getDate() {
    const date = new Date();
    const formattedDate = `${date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`}.${(date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`}.${date.getFullYear()}`;
    return formattedDate;
  },
  // Saat bilgisini döndüren fonksiyon
  getTime() {
    const date = new Date();
    const formattedTime = `${date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`}`;
    return formattedTime;
  },
    getNotifs() {
      return global.gui.notify.getAll();
    }
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
.cont {
    /* background: linear-gradient(90deg, rgba(40, 167, 255, 1) 0%, rgb(68, 68, 68) 0%, rgba(0, 0, 0, 0) 100%); */
    color: rgb(239 239 239);
    font-family: 'Poppins-Regular';
    font-weight: 600;
    padding: 6px;
    width: -moz-fit-content;
    width: fit-content;
    height: 31px;
    border-radius: 6px;
    /* padding-right: 27px; */
    font-size: 14px;
    background: #2b2b2b96;
    /* border-left: 3px solid #2d2d2d; */
    /* padding-left: 3px; */
    display: flex;
    align-items: center;
}

.vicinity {
  position: absolute;
  top: 50.2vw;
  left: 15.9vw;
  color: rgb(255, 255, 255);
  font-size: 0.75vw;
  font-weight: 650;
  padding: 0.3vw;
  padding-right:1.3vw;
  text-overflow:ellipsis;
  overflow:hidden;
  min-width: 14vw;
  max-width: 25vw;
  height: 1.9vw;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(40, 167, 255, 1) 0%, rgb(109 109 109) 0%, rgba(0, 0, 0, 0) 100%);
  border-left: 3px solid #333333;
}
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body {
  user-select: none;
}
.pmrp {
    color: rgb(229 229 229) !important;
    border-radius: 2px;
    border-top: solid #cf5450 4px;
    background: #373737;
    font-family: Inter;
    font-size: 14px;
}

#heal
{
  position:absolute;
  left: -10.19%;
  top:96.21%;
  margin: 1.12%;
  margin-left: 11.7%;
  width: 7.1%;
  height: 1.5%;
  text-align: center;
  border-style: solid;
  border-right: none;
  border-top: solid rgba(0, 0, 0, 0.525) 4px;
  border-bottom: solid rgba(0, 0, 0, 0.525) 4px;
  border-right: solid rgba(0, 0, 0, 0.525) 4px;
  border-left: none;
  float:left;
  background-color:#69b7ff68;
}
#armor
{
  position:absolute;
  left: -3.1%;
  top:96.21%;
  margin: 1.12%;
  margin-left: 11.71%;
  width: 6.982%;
  height: 1.5%;
  padding: 0px;
  text-align: center;
  border-style: solid;
  border-right: none;
  border-top: solid rgba(0, 0, 0, 0.525) 4px;
  border-bottom: solid rgba(0, 0, 0, 0.525) 4px;
  border-left: none;
  background: rgba(255, 221, 109, 0.548)

}

#boxArmor
{
  background: #095a00;
  width: 20%;
  height: 100%;
}
#boxArmor
{
  background: #e5ff5191;
}

#box
{
  background: #095a00;
  width: 20%;
  height: 100%;
}
#box
{
  background: #5473ff80;
}

body
{
      overflow:hidden;
}
</style>