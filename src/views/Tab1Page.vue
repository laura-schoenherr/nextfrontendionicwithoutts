<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Einkaufsliste</ion-title>
        <!-- <ion-title size="large">Einkaufsliste</ion-title> -->
        <ion-item slot="end">
          <div>
            <img width="80" height="80" alt="FridgiGo logo" src="../assets/FridgiGoLogo250.png"/>
          </div>
        </ion-item>
      </ion-toolbar>

    </ion-header>

   <ion-content :fullscreen="true">
     <!-- header
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Einkaufsliste</ion-title>
      </ion-toolbar>
     </ion-header>
      -->

    
      <ExploreContainer name="Einloggen" />
      <div class="home">
        <HelloWorld msg="Welcome to the secured FridgiGo App"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';


export default  {
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  },
  computed: {
    isAuthenticated: () => {
      return vuekeycloak.authenticated
    }
  },
  methods: {
    login () {

    }
  }
}



</script>