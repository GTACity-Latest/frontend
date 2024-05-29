<template>
  <div style="display: flex;justify-content: center;align-items: center;">
    <div style="display:flex;">
    <div style="border-radius: 9px 9px 7px 7px;margin-right:0px;" class="ecreator_container">
      <div style="display: flex;
    align-items: center;
    justify-content: space-between;
    background: #b53434;
    border-radius: 9px 9px 0px 0px;justify-content: space-between;">
            <div class="ecreator_header">
              
              <span style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 20px;">
                BİRLİK YÖNETİMİ
              </span>
              <span style="color: rgb(201 201 201);font-family: Archivo Black;text-transform: uppercase;font-size: 17px;margin-bottom: 7px;line-height: 5px;font-weight: bold;">
                Los Santos Police Department [1] [Tür]
              </span>
            </div>
          </div>

            <div class="genel" style="padding:10px;flex-direction:column;display:flex;">    
              <div style="width: 100%;border-left:none;font-size:12px;text-transform:uppercase;" class="membera">
                <span class="cname">Onay Durumu</span>
                <span style="font-weight:bold;" class="rank">Onaylı</span>
              </div>
              <div style="width: 100%;border-left:none;font-size:12px;text-transform:uppercase;" class="membera">
                <span class="cname">Hood Onay Durumu</span>
                <span style="font-weight:bold;" class="rank">Onaylı</span>
              </div>
              <div style="width: 100%;border-left:none;font-size:12px;text-transform:uppercase;" class="membera">
                <span class="cname">Birlik Lideri</span>
                <span style="font-weight:bold;text-transform:none;" class="rank">Eira Test</span>
              </div>
              <div style="width: 100%;border-left:none;font-size:12px;text-transform:uppercase;" class="membera">
                <span class="cname">Birlik Kasası</span>
                <span style="font-weight:bold;color:green;" class="rank">$567</span>
              </div>
              <div style="display:flex;">
              <div style="    display: flex;flex-direction: column;margin-top: 10px;background: #3f3f3f;border-radius: 5px;width: fit-content;padding: 7px;">
                <span style="color: #b7b7b7;font-weight: bold;font-size: 12px;">Oyuncu Davet Et</span>
                <span><input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;font-size: 11px;padding: 3px 8px;" type="text" placeholder="Oyuncu ID"><button style="margin-top:3px;font-size:11px;border-radius: 4px" class="bizmbuton">ONAYLA</button></span>
              </div>  
              <div style="    display: flex;flex-direction: column;margin-top: 10px;margin-left:7px;background: #3f3f3f;border-radius: 5px;width: fit-content;padding: 7px;">
                <span style="color: #b7b7b7;font-weight: bold;font-size: 12px;">Para Çek</span>
                <span><input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;font-size: 11px;padding: 3px 8px;" type="text" placeholder="$0"><button style="margin-top:3px;font-size:11px;border-radius: 4px" class="bizmbuton">ONAYLA</button></span>
              </div>
              <div style="    display: flex;flex-direction: column;margin-top: 10px;margin-left:7px;background: #3f3f3f;border-radius: 5px;width: fit-content;padding: 7px;">
                <span style="color: #b7b7b7;font-weight: bold;font-size: 12px;">Para Yatır</span>
                <span><input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;font-size: 11px;padding: 3px 8px;" type="text" placeholder="$0"><button style="margin-top:3px;font-size:11px;border-radius: 4px" class="bizmbuton">ONAYLA</button></span>
              </div> 
            </div>  
            <button style="margin-top:6px;font-size:11px;border-radius: 4px" class="bizmbuton">ARAÇLARI YENİLE</button>  
            </div>
            
            
            <button style="margin-top:5px;border-radius: 0px 0px 7px 7px;" class="bizmbuton">TAMAMLA</button>
  
    </div>
    <div style="border-radius: 9px 9px 0px 0px;margin-left:10px;" class="ecreator_container">
      <div STYLE=" background: #b53434;
    border-radius: 9px 9px 0px 0px;" class="ecreator_header">              
              <span style="font-family: 'Archivo Black', sans-serif;    color: white;text-transform: uppercase;font-size: 15px;">
                ÜYELER [1/50]
              </span>
            </div>
            <div class="list">
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
              <div class="member" @click="handleClick(x)" :class="{ active: isxClicked(x) }">
                <span class="cname">Eira Test</span>
                <span class="rank">Owner</span>
              </div>
            </div>
            <span style="background:#b53434;display: flex;justify-content: space-between;">
            <select class="rankk" name="rank">
            <option value="1">Owner</option>
            <option value="2">Co-Owner</option>
            <option value="3">Asso</option>
            <option value="4">Member</option>
          </select>
          <button class="obtn">GÜNCELLE</button>
          <button class="obtn">BİRLİKTEN ÇIKART</button>
            </span>
    </div>
  </div>
    <div style="margin-left:7px;    height: 338px;border-radius: 9px" class="ecreator_container">
      <div class="ecreator_header" STYLE=" background: #b53434;border-radius: 9px 9px 0px 0px;">
        <SPAN style="font-family: 'Archivo Black', sans-serif;    color: #ebebeb;text-transform: uppercase;font-size: 15px;">RÜTBE YÖNETİMİ</SPAN>
      </div>
      <div style="height: 296px;" class="list">
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#20</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 20">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#19</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 19">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
              <div style="width: 100%;    align-items: center;border-left:none;" class="membera" >
                <span class="cname">#18</span>
                <input style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="Rank 18">
                <input  style="background: rgb(47 47 47);border-radius: 4px;color: #a7a7a7;margin-left:4px;font-size: 11px;padding: 3px 8px;width: 84px;" type="text" placeholder="$500">
                <button style="font-size:11px;margin-left:4px;border-radius: 4px" class="bizmbuton">KAYDET</button>
              </div>
            </div>
    </div>
  </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        clickedIndices: [],
        blushStyle: -1,
        blushColour: -1,
        blushOpacity: 0,
        makeup: -1,
        makeupColour: -1,
        makeupOpacity: 0,
        lipstick: -1,
        lipstickColour: -1,
        lipstickOpacity: 0
      };
    },
    watch: {
      blushStyle(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 5, oldType, this.blushOpacity / 10, this.blushColour);
        }
      },
      blushColour(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 5, this.blushStyle, this.blushOpacity / 10, oldType);
        }
      },
      blushOpacity(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 5, this.blushStyle, oldType / 10, this.blushColour);
        }
      },
      makeup(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 4, oldType, this.makeupOpacity / 10, this.makeupColour);
        }
      },
      makeupColour(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 4, this.makeup, this.makeupOpacity / 10, oldType);
        }
      },
      makeupOpacity(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 4, this.makeup, oldType / 10, this.makeupColour);
        }
      },
      lipstick(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 8, oldType, this.lipstickOpacity / 10, this.lipstickColour);
        }
      },
      lipstickColour(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 8, this.lipstick, this.lipstickOpacity / 10, oldType);
        }
      },
      lipstickOpacity(oldType, newType) {
        console.log(oldType, newType);
        if (window.mp) {
          window.mp.trigger("setHeadOverlayMakeup", 8, this.lipstick, oldType / 10, this.lipstickColour);
        }
      }
    },
    methods: {
      /* eslint-disable */
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
    },
      finishUpdate() {   
         if (window.mp) {
          window.mp.trigger(
            "characterMakeup",
            "closeRoute",
            JSON.stringify(this.$data)
          );
        }
      },
      backToSelection() {
        this.$router.push("charselect");
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
  .bizmbuton {
    background: #b53434;
      color: rgb(235, 235, 235);
      text-transform: uppercase;
      padding: 4px;
      display: flex;
      font-family: "Archivo Black", sans-serif;
      justify-content: center;
  }
  .obtn {
    background: #8d4343;
    color: white;
    font-family: Archivo Black;
    font-size: 11px;
    padding: 0px 13px;
  }
  .obtn:hover {
    background: #4d2626;
  }
  .bizmbuton:hover {
    background: #811515;
  }
  .genel {
    overflow: auto;
  }
  .rankk {
    background: #8d4343;
    border: none;
    font-family: 'Poppins-Medium';
    text-align: center;
    color: white;
    font-size: 13px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .list {
    padding: 6px;
    height: 284px;
    overflow: auto;
  }
  .member {
    background: #3f3f3f;
    color: #9ca3af;
    margin-top: 4px;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 3px;
    border-left: 2px solid #46a145;
    display: flex;
    justify-content: space-between;
    width: 308px;
  }
  .membera {
    background: #3f3f3f;
    color: #9ca3af;
    margin-top: 4px;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 3px;
    border-left: 2px solid #46a145;
    display: flex;
    justify-content: space-between;
    width: 308px;
  }
  .member:hover {
    background: rgb(46, 46, 46);
  }
  .member.active {
    background: rgb(46, 46, 46);
  }
  .secimseysi {
    margin: 11px;
      /* margin-left: 3px; */
      margin-top: 0px;
      background: #1e1e1e;
      padding: 10px;
      border-radius: 7px;
      width: 96%;
  }
  .ikili {
    display:flex;
  }
  .toplu {
    PADDING: 3px;
      background: #3f3f3f;
      margin: 13px;
      border-radius: 4px;
  }
  .ecreator_container {
      display: flex;
      flex-direction: column;
      background: #2d2d2d;
      margin-top:150px;
  }
  .btnn {
    margin-top: 7px;
    background: #b53434;
    padding: 4px 11px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    border-radius: 3px;
  }
  .btnn:hover {
    background: rgb(99, 37, 37);
  }
  .ecreator_header {
    display: flex;
    padding: 5px 9px;
      flex-direction: column;
  }
  .btns {
    padding: 4px 30px;
      font-size: 14px;
  }
  .btns2 {
    font-family: 'Poppins-Medium';
      background: #1e1e1e;
      font-size: 11px;
      font-weight: 600;
      border-radius: 5px;
      padding: 2px 6px;
      
  }
  .btns2:hover {
    background: #111111;
  }
  .input100 {
    font-family: Poppins-Medium;
      font-size: 12px;
      color: #ffffff;
      line-height: 1.2;
      display: block;
      background: #0a0a0a;
      border-radius: 6px;
      width: 100%;
      height: 32px;
      background: #232323;
      padding: 0 7px 0 7px;
  }
  .btns:hover {
    background: #811515;
  }
  /* The slider itself */
  .creationSliders {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 3px; /* Specified height */
    background: #ffffff; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.6; /* Set transparency (for mouse-over effects on hover) */
  }
  
  /* Mouse-over effects */
  .creationSliders:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
  
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .creationSliders::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 15px; /* Set a specific slider handle width */
    height: 15px; /* Slider handle height */
    background: #b53434; /* Green background */
    cursor: pointer; /* Cursor on hover */
    border-radius: 10px;
  }
  
  .creationSliders::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04aa6d; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  
  .subText {
    color: #9fa8ab;
      font-family: Poppins-Medium;
      font-weight: 400;
      font-size: 12px;
      text-align: center;
      background: #161616;
      padding: 4px;
      border-radius: 6px;
  }
  
  .creationButton {
    user-select: none;
    background: -webkit-linear-gradient(
      right,
      rgba(10, 10, 10, 0.944),
      rgba(1, 1, 1, 0.789)
    );
    border-bottom: solid rgb(197, 146, 255) 6px;
    color: #fffffffb;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 650;
    margin-top: auto;
    font-size: 23px;
    padding: 6px;
    width: 30vw;
    --notchSize: 12px;
    margin-top: 5px;
    margin-left: 68vw;
    position: absolute;
  }
  
  .creationButton:hover {
    border-bottom: solid rgba(118, 255, 163, 0.882) 2px;
  }
  .dropbtn {
    background-color: rgba(0, 0, 0, 0.182);
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    min-width: 160px;
    border-top: solid rgb(183, 119, 255) 3px;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgb(40,40,40);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {background-color: rgba(0, 0, 0, 0.182);}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: rgba(69, 69, 69, 0.182);;}
  
  .slidescontainer {
    margin-left: 2vw;
    margin-top: 1vw;
    max-width: 10vw;
    line-height: 1vw;
    min-width: 10vw;
  }
  
  .mixContainer {
    margin-left: 5vw;
    margin-top: 0.1vw;
    max-width: 20vw;
    line-height: 1vw;
    min-width: 10vw;
  }
  

  
  * {
  
    user-select: none;
  }
  .unitList {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
  }
  
  .listItem {
    float: left;
    border-bottom: solid rgba(255, 255, 255, 0.311) 2px;
  }
  
  .listItem a {
    display: block;
    color: white;
    text-align: center;
    padding: 20px 1.6vw;
    text-decoration: none;
  }
  
  .inputFields {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
    display: block;
    color: white;
    text-align: center;
    padding: 20px 1.6vw;
    text-decoration: none;
  }
  
  li a:hover {
    border-bottom: solid rgba(118, 255, 163, 0.882) 2px;
  }
  
  .creationContainer {
    opacity: 0.8;
    min-height: 10vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 40vw;
  }
  
  .creationMenuBase {
    background: -webkit-linear-gradient(right, #4b4b4b, #d8d8d864);
    color: #fff;
    height: 12vw;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 700;
    text-align: center;
    margin-top: 1vw;
    font-size: 15px;
    line-height: 1.5vw;
    --notchSize: 20px;
    border-top: solid rgba(255, 255, 255, 0.311) 2px;
    background: -webkit-linear-gradient(
      right,
      rgba(1, 1, 1, 0.651),
      rgba(10, 10, 10, 0.944)
    );
  }
  
  .navCreation {
    margin-left: 5vw;
    margin-top: 0.5vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .head1 {
    color: #fff;
    font-family: "OSL";
    font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
    font-weight: 1000;
    text-align: center;
    font-size: 27px;
    line-height: 1vw;
    background: -webkit-linear-gradient(
      left,
      rgba(10, 10, 10, 0.115),
      rgba(1, 1, 1, 0.651)
    );
    padding: 1vw;
    padding-bottom: 0.5vw;
    padding-top: 0.7vw;
    text-align: left;
  }
  </style>