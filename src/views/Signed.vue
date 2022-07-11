<template>
      <div class="bg2">
        <div class="sidebar">
            <div style="overflow: hidden">
        <table>
            <ul>
                <li> <a @click="comp='Pilots'">Pilots </a></li>
                <li> <a @click="comp='Marines'">Marines </a></li>
                <li> <a @click="comp='Commanders'">Commanders </a></li>
            </ul>
        </table>

            </div>

      </div>
      <div id="central">
           <transition
            name="slide" 
            leave-active-class="animate_animated animate__fadeInRight" 
            mode="out-in">
        <component :is='comp'></component>
        </transition>
        </div>
      </div>
</template>

<script>

import Pilots from '../components/Pilots.vue'
import Marines from '../components/Marines.vue'
import Commanders from '../components/Commanders.vue'

export default {
    components:{
        Pilots, Marines, Commanders
    },
    data(){
        return{ comp:"" }
    }
}

</script>


<style scoped>

.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(150px);
  opacity: 0;
}



.bg2{

  background-image: url('../assets/signed.jpg'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% -20%; 
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left:0;
  top:0;
  z-index: -1;
  display: flex;
}

.sidebar
{
    height: 100vh;
    width:25vw;
    border-right:2px solid ivory;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

#central
{
    height: 100vh;
    width:75vw;
    color: white;
    font-size: 3em;
    display: flex;
    /* justify-content: center;
    align-items: center; */

}

table
{

    color: white;
    font-family: OpTic;   
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    

}

ul
{
    list-style-type: none;
}

li
{
    margin: 3em;

}

a
{
    display: inline-block;
    cursor: pointer;  
    font-size: clamp(0.2em, 2vw, 2em);

}


a:hover 
{
color: red;
transition: 0.3s;
}

a:active  
{
color: red;
transition: 0.3s;
}


</style>