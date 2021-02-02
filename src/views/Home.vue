<template>
  <ion-page>
    <FoodieToolbar />
    <ion-content :fullscreen="true">
      <FoodieToolbar :collapse="'condense'" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import FoodieToolbar from '../components/toolbar/FoodieToolbar.vue';

const components = {
  FoodieToolbar,
  IonContent,
  IonPage,
};

export default {
  name: 'Tab1',
  components,
};
</script>
