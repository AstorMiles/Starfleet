<template>
      <div class="bg2">
        <div class="sidebar">
        <!-- <table>
            <ul>
                <li>Pilots</li>
                <li>Marines</li>
                <li>Commanders</li>
            </ul>
        </table> -->
      </div>
      <div id="central">
        <h1>BUM</h1>
        </div>
      </div>
</template>


<style scoped>


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
    justify-content: center;
    align-items: center;

}

table{
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

li{
    margin: 2em;
    font-size: 3em;
}

</style>