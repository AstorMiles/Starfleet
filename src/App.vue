<template>

  <div id="nav" >
    <router-link to="/">Home</router-link>
    <router-link to="/login" v-if="!isLogged">Login</router-link>
    <router-link to="/register" v-if="!isLogged">Register</router-link>
     <router-link to="/signed" v-if="isLogged">Database</router-link>
     <button id="logout" @click="logout" v-if="isLogged">Logout</button> 
  </div>  
        <transition name="fade" mode="out-in">
       <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
      </transition>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLogged = ref(false);

let auth;
onMounted(() =>{
  auth=getAuth()
  onAuthStateChanged(auth, (user) =>{
    if(user){
      isLogged.value=true;
    }else {
      isLogged.value=false;
    }

  })

})

const logout = () => {
  signOut(auth).then(()=>{
    router.push("/")

  }
  )
}

</script>




<style>

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fade-enter-from,
.fade-leave-to
{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active
{
  transition: opacity 1s ease-out;
}




@font-face {
  font-family: OpTic;
  src: url(assets/fonts/OpTic.ttf);
}

body {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {

 
    height: 10%;
    width: 100%;
    border-bottom: 2px solid ivory;
    background-color:black;
    background-size: 100%;
    background-position: 50% 20%;
    color: ivory;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    padding: 2vw;
    font-family: OpTic;
    flex-wrap: wrap;
    font-size: clamp(1em, 5vw, 2em);

}

#nav a {
  font-weight: bold;
  transition: 0.5s;
  text-decoration: none;
  color: rgba(255, 255, 240, 0.699);
}

#nav a.router-link-exact-active {
  color: ghostwhite;
}

#nav a:hover{
  color: ghostwhite;
}

#logout {
  font-family: OpTic;
  left: 1em;
  position: absolute;
  height: 3em;
  width: 8em;
  font-size: clamp(0.2em, 5vw, 0.5em);
}

@media only screen and (max-width: 320px)
{

  #logout {
  left: 1em;
  height: 2em;
  width: 6em;
  top: 6vh;
  font-size: clamp(0.2em, 5vw, 0.5em);
}

}

</style>
