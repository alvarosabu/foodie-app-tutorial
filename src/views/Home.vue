<template>
  <ion-page>
    <FoodieToolbar />
    <ion-content :fullscreen="true">
      <FoodieToolbar :collapse="'condense'" />
      <ion-progress-bar type="indeterminate" color="primary" v-show="loading" />
      <div class="popular p-4 mb-8">
        <h2 class="font-display text-gray-600 pl-2 mb-4">Popular 🤩</h2>
        <ion-slides :options="popularSlideOpts">
          <ion-slide v-for="product in popularProducts" :key="product.id">
            <ProductCard :product="product" />
          </ion-slide>
        </ion-slides>
      </div>
      <div class="products p-4">
        <ion-searchbar class="searchbar py-0"></ion-searchbar>
        <ion-slides class="" :options="productsSlideOpts">
          <ion-slide v-for="product in regularProducts" :key="product.id">
            <ProductCard :product="product" :size="'sm'" />
          </ion-slide>
        </ion-slides>
      </div>
      <!-- <div class="row flex py-4 justify-center">
        <ion-spinner name="crescent" color="primary" />
      </div> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonSlides, IonSlide } from '@ionic/vue';
import FoodieToolbar from '../components/toolbar/FoodieToolbar.vue';
import ProductCard from '../components/product-card/ProductCard.vue';

import useProduct from '../composables/useProduct';

const components = {
  FoodieToolbar,
  ProductCard,
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
};

export default {
  name: 'Tab1',
  components,
  setup() {
    const popularSlideOpts = {
      slidesPerView: 1.5,
    };
    const productsSlideOpts = {
      slidesPerView: 2.5,
    };
    const {
      loading,
      popularProducts,
      regularProducts,
      fetchProducts,
    } = useProduct();
    fetchProducts();

    return {
      loading,
      popularProducts,
      regularProducts,
      popularSlideOpts,
      productsSlideOpts,
    };
  },
};
</script>

<style>
.searchbar {
  --border-radius: 10px;
  --background: theme('colors.primary.100');
  --box-shadow: none;
}
</style>
