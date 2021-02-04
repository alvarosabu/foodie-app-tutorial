<template>
  <ion-card :class="getCardClasses">
    <div
      class=" w-full absolute top-0 left-0 h-full flex flex-col items-center justify-between pb-4"
    >
      <ion-img :src="product.media" class="media mx-auto h-auto" />
      <ion-label class="font-display font-bold">{{ product.name }}</ion-label>
    </div>
  </ion-card>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { IonCard, IonLabel } from '@ionic/vue';
import { Product } from '@/composables/useProduct';

const props = {
  product: Object as PropType<Product>,
  size: { type: String, default: 'md' },
};

const compontents = {
  IonCard,
  IonLabel,
};

export default defineComponent({
  name: 'FoodieProductCard',
  props,
  compontents,
  setup(props) {
    const getCardClasses = computed(() => [
      'product-card',
      `product-card--${props.size}`,
      'p-2',
      'bg-gray-200',
      'relative',
    ]);

    return { getCardClasses };
  },
});
</script>

<style lang="css" scoped>
.product-card {
  @apply w-full mt-16  rounded-xl shadow-none h-auto;
  padding-top: 75%;
  overflow: unset;
}
.product-card--md.media {
  width: 75%;
}

.product-card--sm.media {
  min-height: 150px;
}

.media {
  margin-top: -50px;
}
</style>
