<template>
  <ion-header :collapse="collapse">
    <ion-toolbar>
      <ion-title class="font-display"
        >Foodie <span class="text-primary-500">App</span></ion-title
      >
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

const props = {
  collapse: { type: String },
};

const components = {
  IonHeader,
  IonToolbar,
  IonTitle,
};

export default defineComponent({
  name: 'FoodieToolbar',
  components,
  props,
});
</script>

<style></style>
