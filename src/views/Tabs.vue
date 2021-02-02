<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button tab="products" href="/tabs/products">
          <ion-icon :icon="pizzaOutline" />
        </ion-tab-button>

        <ion-tab-button :tab="'groceries'" href="/tabs/groceries">
          <ion-icon :icon="locationOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { Ref, ref } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from '@ionic/vue';
import { homeOutline, pizzaOutline, locationOutline } from 'ionicons/icons';

export interface Tab {
  icon: string;
  slug: string;
}

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeOutline,
      pizzaOutline,
      locationOutline,
    };
  },
};
</script>
