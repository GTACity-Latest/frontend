<template>
    <div v-if="hudState && keys[0].alt" style="position:absolute;">
        <div class="buttons" style="margin-top:28vw; margin-left:1.5vw; ">
            <div style="margin-top:.5vw;">
                <p style="color:white;display:flex;align-items: center;font-family: 'Poppins-Regular';font-weight: bold;background: #232323;width: fit-content;    border-radius: 4px;">
                <font style="    background: #b53434;font-weight: 600;padding: 2px 7px;    border-radius: 3px 0px 0px 3px;">F2</font>
                <font style="margin-left: 0.5vw;margin-right: 0.5vw;font-size: 11px;color: #838383;">İmleci Göster</font>
                </p>
            </div>
            <div style="margin-top:.5vw;">
                <p style="color:white;display:flex;align-items: center;font-family: 'Poppins-Regular';font-weight: bold;background: #232323;width: fit-content;    border-radius: 4px;">
                <font style="    background: #b53434;font-weight: 600;padding: 2px 7px;    border-radius: 3px 0px 0px 3px;">O</font>
                <font style="margin-left: 0.5vw;margin-right: 0.5vw;font-size: 11px;color: #838383;">Oyuncu Listesi</font>
                </p>
            </div>
            <div style="margin-top:.5vw;">
                <p style="color:white;display:flex;align-items: center;font-family: 'Poppins-Regular';font-weight: bold;background: #232323;width: fit-content;    border-radius: 4px;">
                <font style="    background: #b53434;font-weight: 600;padding: 2px 7px;    border-radius: 3px 0px 0px 3px;">X</font>
                <font style="margin-left: 0.5vw;margin-right: 0.5vw;font-size: 11px;color: #838383;">Animasyon Durdur</font>
                </p>
            </div>
            <div style="margin-top:.5vw;">
                <p style="color:white;display:flex;align-items: center;font-family: 'Poppins-Regular';font-weight: bold;background: #232323;width: fit-content;    border-radius: 4px;">
                <font style="    background: #b53434;font-weight: 600;padding: 2px 7px;    border-radius: 3px 0px 0px 3px;">ALT</font>
                <font style="margin-left: 0.5vw;margin-right: 0.5vw;font-size: 11px;color: #838383;">Yardım Menüsü</font>
                </p>
            </div>
            <div v-if="keys[0].staff > 0" style="margin-top:.5vw;">
                <p style="color:white;display:flex;align-items: center;font-family: 'Poppins-Regular';font-weight: bold;background: #232323;width: fit-content;    border-radius: 4px;">
                <font style="    background: #b53434;font-weight: 600;padding: 2px 7px;    border-radius: 3px 0px 0px 3px;">F4</font>
                <font style="margin-left: 0.5vw;margin-right: 0.5vw;font-size: 11px;color: rgb(181 52 52);">Noclip</font>
                </p>
            </div>
            <div v-if="keys[0].staff > 0" style="margin-top:.5vw;">
                <p style="color:white;display:flex;align-items: center;font-family: 'Poppins-Regular';font-weight: bold;background: #232323;width: fit-content;    border-radius: 4px;">
                <font style="    background: #b53434;font-weight: 600;padding: 2px 7px;    border-radius: 3px 0px 0px 3px;">F9</font>
                <font style="margin-left: 0.5vw;margin-right: 0.5vw;font-size: 11px;color: rgb(181 52 52);">Admin Paneli</font>
                </p>
            </div>            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            arrPos: 0,
            allAnims: [
                {"name": "Test One"},
                {"name": "Test Two"},
                {"name": "Test Three"},
                {"name": "Test Four"}
            ]
        }
    },
    created() {
        document.addEventListener("keydown", this.addKeyListener);
    },
    watch: {
        keys(oldType) {
            if(!this.keys[0].alt) return;
            if(oldType[0].wheelUp) {
                this.arrPos >= this.allAnims.length-1 ? this.arrPos = 0 : "";

                this.arrPos += 1
            } else if(oldType[0].wheelDown) {
                this.arrPos <= 0 ? this.arrPos = 0 : this.arrPos -= 1;
            }
        }
    },
    methods: {
        addKeyListener(event) {
            if(event.keyCode == 16) {
                console.log('Shift pressed');
                console.log(`Anim Data: ${JSON.stringify(this.allAnims[this.arrPos])}`);
            }
        }
    },
    computed: {
        ...mapGetters({ hudState: 'getHudState' }),
        ...mapGetters({ keys: 'getPhoneKeys' })
    },

}
</script>

<style scoped>
* {
    transition-duration: .4s;
}
</style>

