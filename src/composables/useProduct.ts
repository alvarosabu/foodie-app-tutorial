import axios from 'axios';
import { computed, Ref, ref } from 'vue';

const loadProducts = async () => axios.get('data/products.mock.json');

export interface Product {
  id: string | number;
  name: string;
  popular: boolean;
  media: string;
  favorite: boolean;
}
export default function useProduct() {
  const products: Ref<Product[]> = ref([]);
  const loading = ref(false);

  async function fetchProducts() {
    loading.value = true;
    try {
      const { data } = await loadProducts();
      products.value = data;
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  }
  return {
    loading: computed(() => loading.value),
    products,
    fetchProducts,
  };
}
