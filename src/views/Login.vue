<template>
     <div class="bg">
        <div class="greatfilter">
                        <div id="loginbox">  
                    <input type="email" placeholder="Enter email" name="email" required v-model="email">  
                    <input type="password" placeholder="Enter Password" name="password" required v-model="password">  
                    <!-- <div id="memberme">
                        <input id="checkbox" type="checkbox" checked="checked">
                        <p>Remember me</p> 
                    </div>  -->
                    <button @click="register" id="loginbutton" >Login</button>    
                      <p v-if="errMsg" class="error">{{ errMsge }}</p>  
                      <br><br>              
                    <p id="amnesia">Forgot <a href="#"> password? </a></p>  
            </div>  

        </div>

        </div> 
</template>

<script setup>

import {ref} from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const email= ref("");
const password=ref("");
const errMsg = ref()
const router = useRouter()

const register =()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)

    .then((data)=>{

    console.log("Signed in")
    router.push('/signed')


    })

    .catch((error)=>{
        console.log(error.code);
        switch(error.code)
        {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
             case "auth/usern-not-found":
                errMsg.value = "There is no user with that email";
                break;
              case "auth/wrong-password":
                errMsg.value = "The password is incorrect";
                break;
                default:
                    errMsg.value = "Email or password is incorrect";
                    break;

        }

    })

}

</script>


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



.error {
  color: red;
  font-size: 18px;
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

@keyframes fadeIn {

    from{
        opacity:0;

    }
    to{
        opacity: 1;

    }    
}

#loginbox {   
    border: 3px solid ivory;
    height: 225px;
    width:300px;
    background-color: black;
    padding: 1%;
}

    input
{
    width: 100%;
    margin-bottom: 10px;
    display: inline-block;   
    border: 2px solid ivory;   
    border-radius: 3px; 
    box-sizing: border-box; 
    padding: 4px 5px;   
    color: ivory;
    background-color: black;

}       



#loginbutton{

    width: 100%;
    padding: 10px;
    border: none;
    background-color: ivory;
    color: black;
    font-family: OpTic;
    font-size: 1em;
    letter-spacing: 0.6em;
}

#amnesia, a{
    color: ivory;
}





</style>