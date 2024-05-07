<template>
<Transition name="slide-fade">
    <div v-if="showDisplay" class="displayBack" style="position:absolute;">
        <div class="liters">
            <p class="subTextTitle">Lİtre</p>
            <font class="digiFont" style="padding: 1px 4px;">{{ liters }}</font>
        </div>
        <div class="salePrice" style="margin-top:0.5vw;">
            <p class="subTextTitle">Fİyat</p>
            <font class="digiFont" style="    padding: 1px 4px;color: rgb(43 167 53);">${{ formatNum(salePrice) }}</font>
        </div>
    </div>
</Transition>
</template>

<script>
export default {
    data() {
        return {
            showDisplay: false,
            liters: 0,
            salePrice: 0
        }
    },
    methods: {
        fuelToggle(tog) {
            switch(tog) {
                case true:
                {
                    this.showDisplay = true;
                    break;
                }
                case false:
                {
                    this.showDisplay = false;
                    break;
                }
                default:
                    break;
            }
        },
        updateDisplay(liter, price) {
            this.liters = liter;
            this.salePrice = price;
        },
        formatNum(price) {
            price = price.toLocaleString('en-US').replace(/,/g, '.')
            return price;
        }
    }

}

</script>

<style>
@font-face {
    font-family: "digital-counter-7";
    src: url('./assets/digital-counter-7.ttf');
}

.slide-fade-enter-active {
    transition: all 0.6s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-10020px);
    opacity: 0;
  }

.displayBack {

    width: 10%;
    margin-top: 28vw;
    min-height: 4vw;
    border-radius: 10px;
    margin-left: 0.2vw;
    padding: 0.4vw;
}

.digiFont {
    font-family: "digital-counter-7", sans-serif;
    font-family: Poppins-Medium;
    font-size: 16px;
    font-weight: 500;
    color:rgb(223, 223, 223);
}

.subTextTitle {
    background-color: rgb(193 67 67);
    color:white;
    border-radius: 5px 5px 0px 0px;
    font-family: 'Archivo Black';
    font-weight: 600;
    padding: 0px 3px;
    text-transform: uppercase;
}

.liters, .salePrice {
    background-color: rgb(49 49 49);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}
</style>