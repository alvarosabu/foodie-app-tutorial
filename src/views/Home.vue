<template>
  <ion-page>
    <FoodieToolbar />
    <ion-content :fullscreen="true">
      <FoodieToolbar :collapse="'condense'" />
      <ion-progress-bar type="indeterminate" color="primary" v-show="loading" />
      <div class="popular">
        <ion-slides class="row p-4" :options="popularSlideOpts">
          <ion-slide v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </ion-slide>
        </ion-slides>
      </div>
      <div class="products">
        <ion-slides class="row p-4" :options="productsSlideOpts">
          <ion-slide v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
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
    const { loading, products, fetchProducts } = useProduct();
    fetchProducts();

    return { loading, products, popularSlideOpts, productsSlideOpts };
  },
};
</script>
