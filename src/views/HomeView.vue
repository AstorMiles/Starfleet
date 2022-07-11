<template>
     <div class="bg">
     </div> 
</template>

<script></script>

<style>

.fade-enter-from,
.fade-leave-to
{
  opacity: 0;
  filter: grayscale(100%)
}

.fade-enter-active,
.fade-leave-active
{
  transition: opacity 1s, filter 2s ease-out;
}

{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    height: 100%;
    width: 100%;

}

.bg{

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

}



</style>
