<template>
  <div v-if="state" style="position: absolute;bottom: 10px;display: flex;width: 100%;justify-content: center;align-items: center;">
    <span style="background: #80808094;padding: 3px;border-radius: 4px;border-top: 2px solid #393939;color: white;
  "><i style="margin-right:3px;" class="fa-solid fa-gears"></i>{{ speedoData[0].vehHealth }}%</span>
    <span style="background: #80808094;padding: 3px;border-radius: 4px;border-top: 2px solid #393939;font-weight: bold;font-size:20px;color: white;margin: 4px;
  ">{{getSpeed()}} <span style="font-weight: normal;    color: #cfcfcf;">KM/H</span></span>
    <span style="background: #80808094;padding: 3px;border-radius: 4px;border-top: 2px solid #393939;color: white;
  "><i style="margin-right:3px;" class="fa-solid fa-gas-pump"></i>{{ speedoData[0].vehicleFuel }}%</span>
  </div>
  </template>

<script>
/* eslint-disable */
import { mapGetters, mapMutations } from "vuex";

export default {
  data: function() {
    return {
      rpmDegMin: -117,
      rpmDegMax: 117,
      maxRpm: 10000,
      text: '',
      canvas: ''
    };
  },
  computed: {
    ...mapGetters({
      state: "speedoState",
      speedoData: "speedoData"
    }),
    needleRot() {
      return {
        transform: `rotate(${this.calculateRpmAngle(
          this.speedoData[0].vehRpm
        )}deg)`
      };
    },
    rpmWidth() {
      if(this.speedoData.length == 0) return;
      return {
        width: `${this.speedoData[0].vehRpm * 100}%`,
        "background-color": `${this.speedoData[0].vehRpm*100 > 90 ? 'red' : 'white'}`
      }
    }
  },
  methods: {
    ...mapMutations({}),
    roundTo(value, round) {
      return round * Math.floor(value / 25);
    },
    getSpeed() {
      if(this.speedoData.length > 0 && this.speedoData[0].vehSpeed) {
        var speed = this.speedoData[0].vehSpeed;
        if(speed < 10) return ""+speed;
        if(speed > 10 && speed < 100) return ""+speed;
        else return speed;
      }
    },
  }
};
</script>

<style>
@font-face {
  font-family: DS-DIGI;
  src: url("./assets/DS-DIGI.TTF");
}

.tachCluster {
  font-family: DS-DIGI;
  padding-right: 2vw;
  font-size: 2vw;
  margin-left: 1.2vw;
  text-align: center;
}

.speedoBase {
  background: -webkit-linear-gradient(
    right,
    rgba(10, 10, 10, 1),
    rgba(0, 0, 0, 0.34)
  );
  font-family: DS-DIGI;
  font-size: 1.3vw;
  color: white;
  list-style-type: none;
  text-align: center;
  margin-top: 52vw;
  margin-left: 71vw;
  display: block;
  position: absolute;
  min-width: 25vw;
  max-width: 25vw;
  padding: 0.5vw;
}

.speedo {
  font-family: DS-DIGI;
  right: 22vw;
  position: absolute;
  transform: scale(0.11);
  display: block;
  margin-top: 42vw;
}

.speedo .board {
  position: absolute;
}

.speedo .needle {
  position: absolute;
  left: 975px;
  transform-origin: center 1234px;
  transition: 500ms linear all;
}

@keyframes fadeTacho {
  from {
    bottom: -20vw;
  }
  to {
    bottom: 16vw;
  }
}

td {overflow:hidden;}

</style>