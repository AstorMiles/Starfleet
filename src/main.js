import { createApp, VueElement } from 'vue'
// import vueConfig from 'vue.config'
import App from './App.vue'
import router from './router'


//  

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUqD2rGAmOMEJRKZoXCFPP6-eDjrBzDBY",
  authDomain: "loginapp-486dd.firebaseapp.com",
  projectId: "loginapp-486dd",
  storageBucket: "loginapp-486dd.appspot.com",
  messagingSenderId: "290743096070",
  appId: "1:290743096070:web:1184c65b19f2cbee74c487"
};

// Initialize Firebase
initializeApp(firebaseConfig);



createApp(App).use(router).mount('#app')
