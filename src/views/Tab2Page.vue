<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Plan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Plan</ion-title>
        </ion-toolbar>
      </ion-header>

      <!--List of Sliding recipe Items to choose from-->
      <ion-list>
        <ion-item-sliding>
          <ion-item-options side="start">
            <ion-item-option expandable>Unread</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <ion-label>Recipe</ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="unread(item)">Unread</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItemSliding,
  IonItem, IonItemOptions, IonItemOption } from '@ionic/vue';


export default  {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonLabel, IonItemSliding,
    IonItem, IonItemOptions, IonItemOption }
}
</script>