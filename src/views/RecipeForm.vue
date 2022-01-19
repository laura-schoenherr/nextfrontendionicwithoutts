<template>
  <ion-page>
    <ion-router-outlet></ion-router-outlet>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
              :text="buttonText"
              :icon="buttonIcon">
          </ion-back-button>
        </ion-buttons>
        <!-- <ion-grid>
           <ion-row>
           <ion-col>-->
        <!--Going back to recipe collection button-->
        <!-- <ion-button router-link="/">
           <ion-icon :icon="arrowBackOutline"></ion-icon>
         </ion-button>
        </ion-col>
         <ion-col>-->
        <ion-title>Rezepteingabe</ion-title>
        <!-- </ion-col>
         </ion-row>
       </ion-grid>-->
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">


      <!--Button to go back to the recipe collection -->
      <!--<ion-fab vertical="top" horizontal="start" slot="fixed">
        <ion-fab-button router-link="/">
          <ion-icon :icon="arrowBackOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>-->

      <!--Input form for recipe-->
      <ion-list>
        <ion-item-divider>
          <ion-label>
            Rezepttitel
          </ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-input placeholder="Hier eintragen" pattern="text"></ion-input>

        </ion-item>
        <ion-item-divider>
          <ion-label>
            Zutaten
          </ion-label>
        </ion-item-divider>
        <ion-grid>
          <ion-row >
            <ion-col size="2">
              <ion-input placeholder="200"></ion-input>
            </ion-col>
            <ion-col size="2">
              <ion-input placeholder="Gramm"></ion-input>
            </ion-col>
            <ion-col size="8">
              <ion-input placeholder="Tofu" pattern="text"></ion-input>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-item>

        </ion-item>
      </ion-list>

      <!--Ion Buttons for saving and delete all-->
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button color="medium">Löschen</ion-button>
            <ion-item>
              <ion-button>Speichern</ion-button>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>


    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput,
  IonItem, IonLabel, IonList, IonButton, IonGrid, IonCol, IonRow, } from '@ionic/vue';
import { defineComponent } from "vue";
import { arrowBackOutline, } from "ionicons/icons";
import axios from "axios";

export default defineComponent( {
  name: "RecipeForm",
  components:{ IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput,
    IonItem, IonLabel, IonList, IonButton, IonGrid, IonCol, IonRow, },
  setup() {
    return {
      arrowBackOutline,
    };
  },

  sendRecipeTitle() {
    axios
        .post("")
        .then(function (response) {
          console.log(response);
        })
  }
})
</script>

<style scoped>

</style>