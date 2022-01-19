<template>
  <ion-app>
    <ion-router-outlet />
    <img alt="FridgiGo logo" src="./assets/FridgiGoLogo250.png">
    <HelloWorld msg="Welcome to the FridgiGo App"/>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>