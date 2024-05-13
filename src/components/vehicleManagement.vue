<template>
    <div>
        <div class="uiBase" style="position:absolute; margin-left:1vw; margin-top:16vw; background-color:transparent;height:fit-content;    width: 308px;background-image: url('...');">
            <h2 class="textHeader" style="display: flex;align-items: center;justify-content: space-between;"><span><i style="margin-top:1px;" class="fa-solid fa-car"></i> {{ browsingType === 'home' ? 'Araç Yönetimi' : browsingType }}
                <p style="text-transform: none;color: #e1e1e1;font-size: 12px;margin-top: -5px;">{{formatName(JSON.parse(vehicleData[0].vehicleData).modelName)}} [{{JSON.parse(vehicleData[0].vehicleData).plate}}]</p></span><menuButton style="margin-left:50px;" /></h2>
            <div v-if="browsingType === 'home'">
                <ul class="navOne" style="width: 100%;margin-top: 0px;padding: 6px;background: #555555;width: 100%;">
                    <li class="navTwo"><a @click="browsingType='Vehicle Keys'"><i class="fa-solid fa-key"></i> Araç Anahtarları</a></li>
                    <li class="navTwo" ><a @click="browsingType='Vehicle Location'"><i class="fa-sharp fa-solid fa-location-dot"></i> Araç Konumu</a></li>
                    <li class="navTwo" ><a @click="browsingType='Vehicle Stats'"><i class="fa-solid fa-list"></i> Araç Bilgileri</a></li>
                    <li class="navTwo" ><a @click="browsingType='Sell Vehicle'"><i class="fa-solid fa-dollar-sign"></i> Aracı Sat</a></li>
                    <button @click="listReturn()" class="modButton">Geri Dön</button>
                </ul>
            </div>
            <div v-if="browsingType === 'Vehicle Keys'">
                <div style="background-color:rgb(63 63 63); padding:0.3vw;     border-radius: 0px 0px 5px 5px;">
                    <div v-if="!keyAdd" style="overflow:scroll; height:12vw; overflow-x: hidden; margin-top:0vw">
                        <b v-for="key in keyHolders" :key="key.id" >
                            <div class="insert">
                              <button class="subIndex" style="float: left;">#{{key.id}}</button><span style="    font-size: 13px;position: absolute;margin-left: 4px;margin-top: -1px;">{{key.nickName}}</span>
                              <button @click="deleteKey(key.id)" style="float: right;font-size:13px;    color: #bf4c4c;font-weight:bold;">Geri al</button>
                          </div>
                        </b>

                        <b v-if="!keyHolders || keyHolders.length == 0">
                            <div style="text-align:center">
                                <p style="color:white; padding:1vw; font-size: 13px; font-weight:100;">Aracınızın anahtarı kimsede bulunmuyor.</p>
                            </div>
                        </b>
                    </div>
                    <div v-if="keyAdd">
                        <div style="text-align:center;">
                            <p style="color:white;font-size: 13px;">İstediğin zaman verdiğin anahtarı geri alabilirsin.</p>
                        </div>
                        <div style="">
                            <input class="input100" maxlength="15" placeholder="Oyuncu ID" v-model="keyUserId">
                        </div>
                        <div style="">
                            <input class="input100" maxlength="30" placeholder="Karakter Adı"  v-model="keyNickName">
                        </div>
                    </div>
                    <div v-if="!keyAdd" style="text-align:center; margin-top:0.5vw;">
                        <button @click="keyAdd = true" class="modButton" style="border-top:none;">Anahtar Ver</button>
                        <button @click="browsingType = 'home'" class="modButton" style="margin-top:3px;border-top:none;">Geri Dön</button>
                    </div>
                    <div v-else style="text-align:center; margin-top:0.2vw;">
                        <button @click="addUserKey(keyUserId, keyNickName)" class="modButton" style="border-top:none;">Onayla</button>
                        <button @click="keyAdd = false" class="modButton" style="border-top:none;">Geri Dön</button>
                    </div>
                </div>
            </div>
            <div v-if="browsingType === 'Vehicle Location'">
                <div style="background-color:rgb(63 63 63); padding:0.3vw;     border-radius: 0px 0px 5px 5px;">
                    <div v-if="JSON.parse(vehicleData[0].vehicleData).spawned == 1" style="text-align:center; margin-top:0.5vw;">
                        <p style="color:white; padding:4px; font-size:13px; ">Aracın dışarıda, aşağıdaki butondan yerini görüntüleyebilirsin.</p>
                        <button @click="pingVehicleLocation()" class="modButton" style="border-top:none;">Haritada İşaretle</button>
                        <button @click="browsingType = 'home'" class="modButton" style="margin-top:3px;border-top:none;">Geri Dön</button>
                    </div>
                    <div  style="text-align:center;">
                        <p style="color:white; padding:4px; font-size:13px; ">Aracın garajda veya sigorta şirketinde.</p>
                        <button @click="browsingType = 'home'" class="modButton" style="border-top:none;">Geri Dön</button>
                    </div>
                </div>
            </div>
            <div v-if="browsingType === 'Vehicle Stats'">
                <div style="background-color:rgb(63 63 63); padding:0.3vw;     border-radius: 0px 0px 5px 5px;">
                    <div>
                    <div class="insert">
                        <button class="subIndex" style="float: left;">Benzin</button><span style="    font-size: 13px;position: absolute;margin-left: 4px;margin-top: -1px;">{{Math.trunc(JSON.parse(vehicleData[0].vehicleData).fuelLevel)}}%</span>
                    </div>
                    <div class="insert">
                        <button class="subIndex" style="float: left;">Kilometre</button><span style="    font-size: 13px;position: absolute;margin-left: 4px;margin-top: -1px;">{{Math.floor(JSON.parse(vehicleData[0].vehicleData).distance)}}KM</span>
                    </div>
                    <div class="insert">
                        <button class="subIndex" style="float: left;">Son Aktivite</button><span style="    font-size: 13px;position: absolute;margin-left: 4px;margin-top: -1px;">{{timeFormat(JSON.parse(vehicleData[0].vehicleData).lastActive)}}</span>
                    </div>
                    <div class="insert">
                        <button class="subIndex" style="float: left;">Trafiğe Çıkış Tarihi</button><span style="    font-size: 13px;position: absolute;margin-left: 4px;margin-top: -1px;">{{timeFormat(JSON.parse(vehicleData[0].vehicleData).createdAt)}}</span>
                    </div>
                    </div>

                    <div style="text-align:center; margin-top:0.8vw;">
                        <button @click="showPerformance ? showPerformance = false : browsingType = 'home'" class="modButton" style="border-top:none; margin-right:1vw;">Geri Dön</button>
                    </div>
                </div>
            </div>
            <div v-if="browsingType === 'Sell Vehicle'">
                <div style="background-color:rgb(63 63 63); padding:0.3vw;     border-radius: 0px 0px 5px 5px;">
                    <div style="text-align:center">
                        <p style="color:white">Aracı satacağınız kişi ve kendiniz aracın içinde olmalısınız.</p>
                    </div>
                    <div style="">
                        <input class="input100" maxlength="15" placeholder="Oyuncu ID" v-model="keyUserId">
                    </div>
                    <div style="">
                        <input class="input100" maxlength="15" placeholder="Fiyat" v-model="vehicleSellPrice">
                    </div>
                    <div style="text-align:center; margin-top:1vw;">
                        <button @click="browsingType = 'home'" class="modButton" style="border-top:none; margin-right:1vw;">Geri Dön</button>
                        <button @click="sellVehicle(keyUserId)" class="modButton" style="border-top:none;margin-top:3px; margin-right:1vw;">Sat</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import menuButton from './menuButton.vue';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            browsingType: 'home',
            keyAdd: false,
            showPerformance: false,
            keyUserId: '',
            keyNickName: '',
            vehicleSellPrice: ""
        }
    },
    components: {
        menuButton
    },
    computed: {
        ...mapGetters({ vehicleData: 'vehManageData' }),
        ...mapGetters({ keyHolders: 'keysGetter' }),
        ...mapGetters({ vPerformance: 'getVehPerformance' }),
        baseMenuHeight() {
            switch(this.browsingType) {
                case 'home':
                {
                    return 19+'vw';
                }
                case 'Vehicle Stats':
                {
                    return 30+'vw';
                }
                default:
                    return 22+'vw';
            }
        }
    },
    methods: {
       addUserKey(userId, userNick) {
        function containsNumbers(str) {
            return /\d/.test(str);
        }
        if (userId.length == 0 || userId == -1 || userNick.length == 0 || userId.match(/\W/) || userNick.length > 15 || containsNumbers(userNick) || !containsNumbers(userId)) {
            global.gui.notify.clearAll();
            global.gui.notify.showNotification(
                "Girmiş olduğun değerlerin doğru olduğundan emin ol.",
                false,
                true,
                6000,
                "fa-solid fa-triangle-exclamation"
            );
            return;
        } else {
            if(window.mp && this.vehicleData.length > 0) {
                var keyObj = {
                    playerId: userId,
                    playerNick: userNick,
                    vehicleId: JSON.parse(this.vehicleData[0].vehicleData).sqlID
                }
                window.mp.trigger('compressDataToServer', 'vehicleAddKey', JSON.stringify(keyObj));
            }
        }
       },
       timeFormat(time) {
        var newStr = [];
        for(var x = 0; x < time.length; x++) {
            if( !(time[x] == 'Z' || time[x] == 'T') ) {
                newStr.push(time[x]);
            }
        }
        newStr.length = 10;
        return newStr.join("");
       },
       listReturn() {
        if(window.mp) {
            window.mp.trigger('serverFunctionCEF', 'requestList', "");
        }
       },
       pingVehicleLocation() {
        if(window.mp) {
            window.mp.trigger('blipLocationcreate', JSON.parse(this.vehicleData[0].vehicleData).location.x, JSON.parse(this.vehicleData[0].vehicleData).location.y, JSON.parse(this.vehicleData[0].vehicleData).location.z, `Your personal vehicle [${JSON.parse(this.vehicleData[0].vehicleData).plate}]`)
        }
       },
       deleteKey(id) {
        var idx = null;
        this.keyHolders.find(function(item, i) {
            console.log(`${item.id}`);
            if(item.id == id) {
                idx = i;
            }
        })
        if(idx != null) {
            this.keyHolders.splice(idx, 1);
            if(window.mp) {
                window.mp.trigger('serverFunctionCEF', 'keyDataUpdate', id);
            }
        }
       },
       loadPerformanceData() {
        if(window.mp && this.vehicleData.length > 0) {
            window.mp.trigger('serverFunctionCEF', 'getVehPerformance', JSON.parse(this.vehicleData[0].vehicleData).model);
        }
       },
       formatName(name) {
        var newArr = name.split(" ");
        return newArr[0];
       },
       sellVehicle(userId) {
        function containsNumbers(str) {
            return /\d/.test(str);
        }
        if (userId.length == 0 || userId == -1 || userId.match(/\W/) || !containsNumbers(userId) || !containsNumbers(this.vehicleSellPrice) || this.vehicleSellPrice.match(/\W/)) {
            global.gui.notify.clearAll();
            global.gui.notify.showNotification(
                "Girmiş olduğun değerlerin doğru olduğundan emin ol.",
                false,
                true,
                6000,
                "fa-solid fa-triangle-exclamation"
            );
            return;
        } else {
            if(window.mp && this.vehicleData.length > 0) {
                var sellObj = {
                    playerId: userId,
                    vehicleId: JSON.parse(this.vehicleData[0].vehicleData).sqlID,
                    sellPrice: this.vehicleSellPrice
                }
                window.mp.trigger('compressDataToServer', 'sellVehicle', JSON.stringify(sellObj));
            }
        }
       },
    }

}
</script>

<style scoped>
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
    background: #676767;
    border-radius: 3px;
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
.input100 {
    height: fit-content;
    border: none;
    /* margin: 10px 0px; */
    padding: 6px;
    background: #252525;
    font-size: 13px;
    margin-top:3px;
}
.uiBase{
    position: absolute;
    margin-left: 1vw;
    margin-top: 16vw;
    width: 17vw;
    height: 19vw;
    clip-path: none;
    border: none;
    opacity: 1;
}
.textHeader {
    background: #bf4c4c;
    font-family: 'Archivo Black';
    text-transform: uppercase;
    font-size: 17px;
    padding: 1px 5px;
    margin: 0px;
    border-radius: 3px 3px 0px 0px;
}
.navOne {
    border-radius: 0px 0px 4px 4px;
    height:fit-content;
}
.navTwo {
    font-family: 'Poppins-Medium';
    background-color: rgb(45 45 45);
    padding: 2px 7px;
    font-size: 14px;
    margin-bottom:5px;
    border: none;
    border-radius: 3px;
    text-align: left;
}

.navTwo:hover {
    color: #bf4c4c;
    cursor: pointer;
}
.modButton {
    opacity: 1;
    margin-top: 0.5vw;
    /* width: 17vw; */
    width: 100%;
    clip-path: none;
    border: none;
    background: #bf4c4c;
    padding: 2px;
    font-family: 'Poppins-Medium';
    font-weight: 500;
    font-size: 12px;
}
.modButton:hover {
    background: #6b1c1c;
}

td {
    text-align: center;
}

.delete:hover {
    background-color: rgba(255, 0, 0, 0.278);
}
</style>