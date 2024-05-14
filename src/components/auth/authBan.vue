<template>
    <div class="limiter">
        <div>
        <div class="container-login100" style="user-select: none;">
            <div class="wraps-login100" style="    padding-bottom: 32px;
">
                <div class="banHeaderTxt"><i class="fa-sharp fa-solid fa-circle-exclamation"></i> SUNUCUDAN YASAKLISINIZ</div>
                <div style="    margin-top: 21px;
    color: #a7a7a7;
    font-weight: bold;" class="">
                        <div v-for="bans in banInfo" :key="bans.id"><span style="    color: white;">{{banInfo[0].username}}</span>, <span>{{banInfo[0].issueDate}}</span> tarihinde sunucudan <span style="    color: white;">{{banInfo[0].reason}}</span> sebebiyle <span style="    color: rgb(184 62 62);">{{banInfo[0].admin}}</span> tarafından <span style="    color: white;">{{banInfo[0].liftTime}}</span> süresine kadar yasaklandınız.
                          <span> Yanlış bir işlem olduğunu düşünüyorsanız Forum üzerinden destek talebi oluşturabilirsiniz.</span>
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
  methods: {
    ...mapMutations({}),
    replaceWithAsterisk: function(str) {
      var indices = [];
      for (var i = 0; i < str.length; i++) {
        if (!str[i].includes(".")) {
          indices.push(i);
        }
      }
      let res = "";
      res = indices
        .reduce((acc, val) => {
          acc[val] = "*";
          return acc;
        }, str.split(""))
        .join("");
      return res;
    },
  },
  computed: {
    ...mapGetters({
      banInfo: "banInfo"
    })
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

body,
html {
  height: 100%;
  font-family: Poppins-Regular, sans-serif;
}

/*---------------------------------------------*/
.fas {
  float: left;
  margin-top: 0.8vw;
}

/* width */
::-webkit-scrollbar {
  width: 3px;
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

.banHeaderTxt {
  color: #f0f0f0;
  font-family: "OSL";
  font-family: Archivo Black;
  background: rgb(184, 62, 62);
  font-weight: 1000;
  border-radius: 7px 7px 0px 0px;
  font-size: 22px;
  text-align: center;
  padding: 5px 10px;
  text-align: left;
}



s:focus {
  outline: none !important;
}

s:hover {
  text-decoration: none;
  color: #a64bf4;
}


/*---------------------------------------------*/

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  margin-left: 5.2vw;
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 500;
  font-size: 1vw;
  color: #adadad;
  margin-top: 1vw;
  margin-right: 65vw;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/

input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

input:focus:-moz-placeholder {
  color: transparent;
}

input:focus::-moz-placeholder {
  color: transparent;
}

input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}

textarea:focus:-moz-placeholder {
  color: transparent;
}

textarea:focus::-moz-placeholder {
  color: transparent;
}

textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #adadad;
}

input:-moz-placeholder {
  color: #adadad;
}

input::-moz-placeholder {
  color: #adadad;
}

input:-ms-input-placeholder {
  color: #adadad;
}

textarea::-webkit-input-placeholder {
  color: #adadad;
}

textarea:-moz-placeholder {
  color: #adadad;
}

textarea::-moz-placeholder {
  color: #adadad;
}

textarea:-ms-input-placeholder {
  color: #adadad;
}

/*---------------------------------------------*/

button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

@keyframes fadein {
  0% {
    opacity: 0;

    transform: scale(0);
  }
  100% {
    opacity: 0.78;

    transform: scale(1);
  }
}

.container-login100 {
  opacity: 1;
  width: 100%;
  align-items: center;
  padding: 1px;
  user-select: none;
  border-radius: 7px 7px 7px 7px;
  border: none;
  outline: none;
}

.container-login100:focus {
  border: none;
  outline: none;
}


.wraps-login100 {
  width: 635px;
  border-left: none;
  border-right: none;
  align-content: center;
  border-radius: 7px 7px 7px 7px;
  float: center;
  text-align: center;
  --notchSize: 20px;
  background-color: #222222;

}

.btn {
  font-family: "OSL";
  font-family: Myriad Pro, Segoe UI, Verdana, sans-serif;
  font-weight: 500;
  color: rgb(255, 255, 255);
  width: 1.5vw;
  border-radius: 0.3vw;
  transition-duration: 0.3s;
  font-size: 0.8vw;
  float: right;
}

.btn:hover {
  color: rgba(255, 255, 255, 0.609);
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.login100-form-title {
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #333333;
  line-height: 1;
  text-align: center;
  margin-top: -2vw;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.limiter {
  justify-content: center;
}
</style>