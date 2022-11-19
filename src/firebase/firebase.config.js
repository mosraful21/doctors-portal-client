import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbvM3fi48Esgm2vdlAp_eWXQ7oQqMZ7Y4",
  authDomain: "doctor-portal-fd960.firebaseapp.com",
  projectId: "doctor-portal-fd960",
  storageBucket: "doctor-portal-fd960.appspot.com",
  messagingSenderId: "664830214223",
  appId: "1:664830214223:web:a76704c042fa3e13e2ea3a"
};

const app = initializeApp(firebaseConfig);

export default app;