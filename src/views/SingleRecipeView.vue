<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Rezeptansicht</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Filter</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-chip>
        <ion-icon :icon="pin" color="primary"></ion-icon>
        <ion-label>Icon Chip</ion-label>
        <ion-icon :icon="close"></ion-icon>
      </ion-chip>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonChip, IonIcon, IonLabel } from "@ionic/vue";
import { defineComponent } from "vue";
import { close } from "ionicons/icons";

export default defineComponent( {
  name: "SingleRecipeView",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonChip, IonIcon, IonLabel },
  setup() {
    return {
      close,
    };
  },
})
</script>

<style scoped>

</style>