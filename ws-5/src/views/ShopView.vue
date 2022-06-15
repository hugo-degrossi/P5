<script setup lang="ts">

  import Title from "@/components/Title.vue";
  import ShopItem from "@/components/ShopItem.vue";
  import { useProductsStore } from "@/stores/products";
  import { storeToRefs } from 'pinia'
  import {useCartStore} from "@/stores/cart";

  const { updateLikes, setProduct } = useProductsStore()
  const { getProducts } = storeToRefs(useProductsStore())
  const { addItemToCard } = useCartStore()

  setProduct()

</script>

<template>
  <Title msg="SOCKS-SHOP" />
  <ShopItem v-for="product in getProducts" :product="product" v-on:like="updateLikes" v-on:addToCart="addItemToCard"/>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
