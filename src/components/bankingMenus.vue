<template>
    <div style="position:absolute;">
        <div v-if="bankType === 'atm'" class="uiBase" style="clip-path: none;margin-top:10vw; margin-left:38.7vw;border:none; background-color:rgba(0, 0, 0, 0); background-image:none; height:25vw;">
            <menuButton style="position:absolute; margin-left:21.5vw;" />
            <div class="textHeader" style="border:none;margin-bottom:0px;    background: rgb(67 167 79); text-align:center;border-radius: 5px 5px 0px 0px;"><i class="fa-solid fa-building-columns"></i> ATM</div>
            <div  style="    background-color: rgb(55 55 55); padding:0.5vw; color:white;border-radius: 0px 0px 5px 5px;">
                <div v-if="atmData.length == 0" class="pinPad">
                    <div style="text-align:center; margin-bottom:1vw;">
                        <div style="font-size:25px; background-color:rgba(0, 0, 0, 0.864); border-radius:10px;">{{pinNumbers.length == 0 ? "..." : pinNumbers.join("")}}</div>
                    </div>
                    <div style="display:inline-block; margin-bottom:2vw;">
                        <div>
                            <div style="margin-left:4vw;">
                                <button @click="numInput(1)" class="atmButton">1</button>
                                <button @click="numInput(2)" class="atmButton" style="margin-left:1vw;">2</button>
                                <button @click="numInput(3)" class="atmButton" style="margin-left:1vw;">3</button>
                            </div>
                            <div style="margin-left:4vw; margin-top:1vw;">
                                <button @click="numInput(4)" class="atmButton">4</button>
                                <button @click="numInput(5)" class="atmButton" style="margin-left:1vw;">5</button>
                                <button @click="numInput(6)" class="atmButton" style="margin-left:1vw;">6</button>
                            </div>
                            <div style="margin-left:4vw; margin-top:1vw;">
                                <button @click="numInput(7)" class="atmButton">7</button>
                                <button @click="numInput(8)" class="atmButton" style="margin-left:1vw;">8</button>
                                <button @click="numInput(9)" class="atmButton" style="margin-left:1vw;">9</button>
                            </div>
                            <div style="margin-left:4vw; margin-top:1vw;">
                                <button @click="shortArr()" class="atmButton"><i class="fa-solid fa-delete-left" style="color:rgba(253, 73, 73, 0.961);"></i></button>
                                <button @click="numInput(0)" class="atmButton" style="margin-left:1vw;">0</button>
                                <button @click="sendPin(pinNumbers)" class="atmButton" style="margin-left:1vw;"><i class="fa-solid fa-square-check" style="color:rgba(115, 253, 73, 0.961);"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div v-if="!cashWithdraw && !confirmScreen">
                        <div class="insert" style="">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Toplam Bakiye</font> <font style="float:right;color:#118C4F;margin-top: -6px;">${{atmData[0].moneyAmount.toLocaleString('en-US')}}</font></p>
                        </div>
                        <div class="insert" style="">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Toplam Nakit</font> <font style="float:right;color:#118C4F;margin-top: -6px;">${{atmData[0].cashAmount.toLocaleString('en-US')}}</font></p>
                        </div>
                        <div class="insert" style="">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Maaş</font> <font style="float:right;color:#118C4F;margin-top: -6px;">${{atmData[0].salary}}</font></p>
                        </div>
                        <div class="insert" style="">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Maaş Vergi Oranı</font> <font style="float:right;margin-top: -6px;">{{atmData[0].taxRate}}%</font></p>
                        </div>
                        <div style="text-align:center;">
                            <button @click="cashWithdraw = true" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500; line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;">Para Çek</button>
                        </div>
                    </div>
                    <div v-else-if="!confirmScreen">
                        <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Banka hesabında <font color="#118C4F">${{atmData[0].moneyAmount.toLocaleString('en-US')}}</font> bulunmakta.</p>
                        <div style="border-bottom: solid rgba(255, 255, 255, 0.311) 2px;">
                            <input class="input100" style="padding:10px;font-size:14px;height:fit-content;" maxlength="15" type="number" placeholder="Çekmek istediğin miktarı gir" v-model="enteredCash">
                        </div>
                        <div style="text-align:center;">
                            <button @click="cashWithdraw = false" class="modButton" style="height:2vw; line-height:0.2vw;font-family:'Poppins-Medium';font-weight: 500; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;">Geri Dön</button>
                            <button @click="confirmSelect('withdraw')" class="modButton" style="height:2vw; line-height:0.2vw;font-family:'Poppins-Medium';font-weight: 500; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw; margin-left:1vw;">Çek</button>
                        </div>
                    </div>
                    <div v-if="confirmScreen" style="text-align:center;">
                        <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Banka hesabından<font color="#118C4F"> ${{enteredCash.toLocaleString('en-US')}}</font> çekmek istediğine emin misin?</p>
                        <button @click="confirmScreen = false" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;">Geri Dön</button>
                        <button @click="withdrawCash()" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500; line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw; margin-left:1vw;">Onayla</button>
                    </div>
                </div>

            </div>

        </div>
        <div v-if="bankType === 'bank'" class="uiBase" style="clip-path: none;margin-top:10vw; margin-left:38.7vw;border:none; background-color:rgba(0, 0, 0, 0); background-image:none; height:25vw;">
            <menuButton style="position:absolute; margin-left:21.5vw;" />
            <div class="textHeader" style="border:none;margin-bottom:0px;    background: rgb(67 167 79); text-align:center;border-radius: 5px 5px 0px 0px;"><i class="fa-solid fa-building-columns"></i> Bankacılık</div>
            <div v-if="!confirmScreen && !depositScreen &&  !cashWithdraw && !withDrawScreen && !salaryScreen && !salaryConfirm" style="background-color: rgb(55 55 55); padding:0.5vw; color:white;border-radius: 0px 0px 5px 5px;">
                <div class="insert">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Toplam Bakiye</font> <font style="float:right;color:#118C4F;margin-top: -6px;">${{atmData[0].moneyAmount.toLocaleString('en-US')}}</font></p>
                        </div>
                        <div class="insert" style="">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Toplam Nakit</font> <font style="float:right;color:#118C4F;margin-top: -6px;">${{atmData[0].cashAmount.toLocaleString('en-US')}}</font></p>
                        </div>
                        <div class="insert" style="">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Maaş</font> <font style="float:right;color:#118C4F;margin-top: -6px;">${{atmData[0].salary}}</font></p>
                        </div>
                        <div class="insert" style="">
                            <p style="color:white; font-size:13px;display: flex;flex-direction: column;align-items: flex-start;"><font style="float:left;">Maaş Vergi Oranı</font> <font style="float:right;margin-top: -6px;">{{atmData[0].taxRate}}%</font></p>
                        </div>
                <div style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;">
                    <button @click="confirmScreen = true" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500; line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw;    margin-top: 8px;margin-right:8px;">Para Yatır</button>            
                    <button @click="cashWithdraw = true, confirmScreen = false" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500; line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw;    margin-top: 8px;">Para Çek</button>
                    <button @click="salaryScreen = true" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500; line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw;    margin-top: 8px;">Maaş Çek</button>

                </div>
            </div>
            <div v-else-if="confirmScreen">
                <div style="background-color: rgb(49 49 49);padding: 0.5vw;border-radius: 0px 0px 5px 5px;">
                    <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Şu an üzerinde <font color="#118C4F"> ${{atmData[0].cashAmount.toLocaleString('en-US')}}</font> bulunmakta.</p>

                    <div style="border-bottom: solid rgba(255, 255, 255, 0.311) 2px;">
                        <input class="input100" style="padding:10px;font-size:14px;height:fit-content;" maxlength="15" type="number" placeholder="Yatırmak istediğin miktarı gir" v-model="enteredCash">
                    </div>
                    <div style="text-align:center;">
                        <button @click="confirmScreen = false" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;">Geri Dön</button>
                        <button @click="confirmSelect('deposit')" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:5px;">Yatır</button>
                    </div>
                </div>
            </div>
            <div v-if="salaryScreen">
                <div style="background-color: rgb(49, 49, 49);padding: 0.5vw;border-radius: 0px 0px 5px 5px;">
                    <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Şu an maaş hesabında <font color="#118C4F"> ${{atmData[0].salary.toLocaleString('en-US')}}</font> bulunuyor.</p>
                    <div style="border-bottom: solid rgba(255, 255, 255, 0.311) 2px;">
                        <input class="input100" style="padding:10px;font-size:14px;height:fit-content;" maxlength="15" placeholder="Enter cash amount" v-model="enteredCash">
                    </div>
                    <div style="text-align:center;">
                        <button @click="salaryScreen = false" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;">Geri Dön</button>
                        <button @click="confirmSelect('collectSalary')" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:5px;">Çek</button>
                    </div>
                </div>
            </div>
            <div v-if="salaryConfirm">
                <div style="background-color: rgb(49, 49, 49);padding: 0.5vw;border-radius: 0px 0px 5px 5px;">
                    <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Maaş hesabından, banka hesabına<font color="#118C4F"> ${{enteredCash.toLocaleString('en-US')}}</font> tutarında çekim yapmak istediğine emin misin?</p>
                    <button @click="salaryScreen = true, salaryConfirm = false" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:10px;">Geri Dön</button>
                    <button class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:5px;">Onayla</button>
                </div>
            </div>
            <div v-if="cashWithdraw"> 
                <div style="background-color: rgb(49, 49, 49);padding: 0.5vw;border-radius: 0px 0px 5px 5px;">
                    <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Şu an banka hesabında <font color="#118C4F"> ${{atmData[0].moneyAmount.toLocaleString('en-US')}}</font> bulunuyor.</p>
                    <div style="border-bottom: solid rgba(255, 255, 255, 0.311) 2px;">
                        <input class="input100" style="padding:10px;font-size:14px;height:fit-content;" maxlength="15" placeholder="Çekmek istediğiniz miktarı girin" v-model="enteredCash">
                    </div>
                    <div style="text-align:center;">
                        <button @click="cashWithdraw = false" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;">Geri Dön</button>
                        <button @click="confirmSelect('bankWithdraw')" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:5px;">Çek</button>
                    </div>
                </div>
            </div>
            <div v-if="withDrawScreen">
                <div style="background-color: rgb(49, 49, 49);padding: 0.5vw;border-radius: 0px 0px 5px 5px;">
                    <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Banka hesabından<font color="#118C4F"> ${{enteredCash.toLocaleString('en-US')}}</font> tutarında çekim yapmak istediğine emin misin?</p>
                    <button @click="depositScreen = false, confirmScreen = false, withDrawScreen = false, cashWithdraw = true " class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:0.7vw;">Geri Dön</button>
                    <button @click="withdrawCash()" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:5px;">Onayla</button>
                </div>
            </div>
            <div v-if="depositScreen">
                <div style="background-color: rgb(49, 49, 49);padding: 0.5vw;border-radius: 0px 0px 5px 5px;">
                    <p style="color:white;font-family:'Poppins-Medium'; font-size:15px; line-height:2vw; text-align:center; padding:10px;">Banka hesabına<font color="#118C4F"> ${{enteredCash.toLocaleString('en-US')}}</font> yatırmak istediğine emin misin?</p>
                    <button @click="depositScreen = false, confirmScreen = true, withDrawScreen = false" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:0.7vw;">Geri Dön</button>
                    <button @click="depositCash()" class="modButton" style="height:2vw;font-family:'Poppins-Medium';font-weight: 500;  line-height:0.2vw; clip-path:none; border-radius:10px; opacity: 1; border-top:none; font-size:0.8vw; margin-top:1vw;margin-left:5px;">Onayla</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import menuButton from './menuButton.vue';

export default {
    data() {
        return {
            pinNumbers: [],
            cashWithdraw: false,
            confirmScreen: false,
            withDrawScreen: false,
            depositScreen: false,
            salaryScreen: false,
            salaryConfirm: false,
            enteredCash: ''
        }
    },
    created() {
        this.$store.state.playerInfo.bankInfo = [];
    },
    components: {
        menuButton
    },
    computed: {
        ...mapGetters({ atmData: 'getAtmInfo' }),
        ...mapGetters({ bankType: 'getBankUI' })
    },
    methods: {
        numInput(number) {
            window.mp.trigger('client:sound', "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET");
            if(this.pinNumbers.length < 4) {
                this.pinNumbers.push(number);
            } else {
                this.pinNumbers.length = 0;
                this.pinNumbers.push(number);
            }
        },
        shortArr() {
            this.pinNumbers.splice(this.pinNumbers.length-1);
            window.mp.trigger('client:sound', "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET");
        },
        formatNumbers(arr) {
            return arr.join("");
        },
        sendPin(number) {
            if(number.length == 0) return window.mp.trigger('client:sound', "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET");

            if(window.mp) {
                window.mp.trigger('client:sound', "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET");
                window.mp.trigger('compressDataToServer', 'numPinData', number.join(""));
            }
        },
        confirmSelect(handle) {
            function containsNumbers(str) {
                return /\d/.test(str);
            }
            if(!containsNumbers(this.enteredCash) || this.enteredCash.length == 0 || this.enteredCash == '' || this.enteredCash.match(/\W/) || /[a-zA-Z]/g.test(this.enteredCash)) {
                global.gui.notify.clearAll();
                global.gui.notify.showNotification(
                    "Entered a valid cash amount.",
                    false,
                    true,
                    5000,
                    "fa-solid fa-triangle-exclamation"
                );
                return;
            }
            switch(handle) {
                case 'withdraw':
                {
                    this.confirmScreen = true;
                    break;
                }
                case 'deposit':
                {
                    this.confirmScreen = false;
                    this.depositScreen = true;
                    break;
                }
                case 'bankWithdraw':
                {
                    this.confirmScreen = false, this.depositScreen = false, this.cashWithdraw = false, this.withDrawScreen = true;
                    break;
                }
                case 'collectSalary':
                {
                    this.confirmScreen = false, this.depositScreen = false, this.cashWithdraw = false, this.salaryScreen = false,  this.salaryConfirm = true;
                    break;
                }
                default: break;
            }
        },
        withdrawCash() {
            window.mp.trigger('client:sound', "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET");
            function containsNumbers(str) {
                return /\d/.test(str);
            }
            if(!containsNumbers(this.enteredCash) || this.enteredCash.length == 0 || this.enteredCash == '' || this.enteredCash.match(/\W/) || /[a-zA-Z]/g.test(this.enteredCash)) {
                global.gui.notify.clearAll();
                global.gui.notify.showNotification(
                    "Entered a valid cash amount.",
                    false,
                    true,
                    5000,
                    "fa-solid fa-triangle-exclamation"
                );
                return;
            } else {
                window.mp.trigger('compressDataToServer', 'withdrawCash', this.enteredCash);
            }
        },
        depositCash() {
            window.mp.trigger('client:sound', "5_SEC_WARNING", "HUD_MINI_GAME_SOUNDSET");
            function containsNumbers(str) {
                return /\d/.test(str);
            }
            if(!containsNumbers(this.enteredCash) || this.enteredCash.length == 0 || this.enteredCash == '' || this.enteredCash.match(/\W/) || /[a-zA-Z]/g.test(this.enteredCash)) {
                global.gui.notify.clearAll();
                global.gui.notify.showNotification(
                    "Entered a valid cash amount.",
                    false,
                    true,
                    5000,
                    "fa-solid fa-triangle-exclamation"
                );
                return;
            } else {
                window.mp.trigger('compressDataToServer', 'depositCash', this.enteredCash);
            }
        }

    }
}
</script>

<style scoped>
* {
    transition: 1s;
}

.atmButton {
    padding:1vw; background-color:rgba(0, 0, 0, 0.864); width:4vw; border-radius:10px;
}
.atmButton:hover {
    background-color: rgba(0, 0, 0, 0.307);
}
</style>