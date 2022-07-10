<template>

  <div class="bg">
      <div class="greatfilter">
         <div id="registerbox">
    <!-- <input type="text" placeholder="First name" required v-model='name'>  
    <input type="text" placeholder="Last name" required v-model='surname'>
    <input type="number" placeholder="Age" required v-model="age"> -->

    <input type="text" placeholder="Email" required v-model="email" />

    <div id="gender">
                    <div>
                        <input class="radio" type="radio" name="gender"  value="male" required v-model="gender">
                        <label for="male">MALE</label><br>
                        <img class="icon2" src="img/male.jpg" alt="">
                    </div>
                    <div>
                        <label for="female">FEMALE</label>
                        <input class="radio" type="radio" name="gender" value="female" required v-model="gender"><br>
                        <img class="icon2" src="img/female.jpg" alt="">
                        </div>             
                </div>

    <div id="vocation">
                    <div class="choiceholder" >
                        <input class="radio" type="radio" name="vocation"  value="pilot" required v-model="vocation">
                        <label for="male">Fighter Pilot</label><br>
                        <div class="iconholder">
                        <img class="icon" src="img/pilot.jpg" alt="">
                        </div>
                    </div>
                    <div class="choiceholder" >
                        <input class="radio" type="radio" name="vocation"  value="marine" required v-model="vocation">
                        <label for="marine">Space Marine</label><br>
                        <div class="iconholder">
                           <img class="icon" src="img/marine.png" alt="">
                        </div>
                       
                    </div>
                    <div class="choiceholder" >
                        <input class="radio" type="radio" name="vocation" value="captain" required v-model="vocation">
                        <label for="captain">Commander</label><br>
                        <div class="iconholder">
                        <img class="icon" src="img/commander.png" alt="">    
                        </div>                    
                    </div>             
                </div>

    <!-- <input type="text" placeholder="Username" required v-model="username">     -->
    
    <input
      type="password"
      placeholder="Enter password"
      required
      v-model="password"
    />
    <!-- <input type="password" placeholder="Repeat password" v-model="repeatpassword">   -->

    <button @click="register" id="regbutton">Register</button>
  </div>
  <!-- <div v-if="error" class="error">{{ error.message }}</div> -->
  </div>
    </div>
</template>




<style scoped>

.fade-enter-from,
.fade-leave-to
{
    opacity: 0.5;
  filter: invert(100%);
}

.fade-enter-active,
.fade-leave-active
{
  transition: opacity 0.5s, filter 1s ease-out;
}

.bg
{

  background-image: url('../assets/back.jpg'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% -40%; 
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left:0;
  top:0;
  z-index: -1;
  transform: scale(1.1);

}

.greatfilter

{
backdrop-filter: blur(3px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25%;

}


.error {
  color: red;
  font-size: 18px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#registerbox {
  border: 3px solid ivory;
  height: 600px;
  width: 350px;
  background-color: rgb(14, 14, 2);
  padding: 1%;
  margin-top: 15vh;
}

input {
  width: 100%;
  padding: 4px 5px;
  margin-bottom: 10px;
  display: inline-block;
  border: 2px solid ivory;
  border-radius: 3px;
  box-sizing: border-box;
  color: ivory;
  background-color: black;
}

.radio {
  width: auto;
  display: inline-block;
  margin: 8px;
  accent-color: black;
  background-color: red;
}

.iconholder{
  background-color: white;
}



.icon {
  height: 35px;
  width: 35px;
}

.icon2 {
  height: 75px;
  width: 75px;
}

#gender {
  display: flex;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  margin: 5px;
}

#vocation {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 100%;
}

.choiceholder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

label {
  width: 100px;
  margin: 5px;
  color: ivory;
}

#passError {
  color: red;
  font-size: 0.6em;
  font-weight: 800;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

#regbutton {
  width: 80%;
  padding: 15px;
  border: none;
  background-color: ivory;
  color: black;
  margin-top: 5px;
  border-radius: 4px;
  font-family: OpTic;
  font-size: 1em;
  letter-spacing: 0.6em;
}
</style>



<script setup>

import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const email= ref("");
const password=ref("");
const router = useRouter()

const register =()=>{
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
   


    .then((data)=>{

    console.log("registered")
    router.push('/signed')




    })
    .catch((error)=>{
        console.log(error.code);
        alert(error.message);
    })

}


</script>
