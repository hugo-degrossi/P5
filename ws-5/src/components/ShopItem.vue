<script setup lang="ts">

import {storeToRefs} from "pinia";
import {useCartStore} from "@/stores/cart";

defineProps<{
  product: {
    id: number,
    name: string,
    isLiked: boolean,
    url: string,
  };
}>();

const { getNumberOfItemsInCartWithId } = storeToRefs(useCartStore())

</script>

<template>
  <h2 class="green">{{product.name}}</h2>
  <div class="card">
    <img :src=product.url :alt=product.name width="150">
    <div class="text">test</div>
    <div class="actions">
      <button @click="$emit('addToCart', product.id)">
        <p>({{ getNumberOfItemsInCartWithId(product.id) }}) Add to Cart</p>
      </button>
      <button @click="$emit('like', product.id)">
        <p v-if="!product.isLiked" >Like</p>
        <p v-else>Liked</p>
      </button>
    </div>

  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  margin-top: 20px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.card {
  display: flex;
  flex-direction: row;
  background-color: #222222;
  border-radius: 20px;
  padding: 10px;
  position: relative;
}

img {
  border-radius: 20px;
}

.text {
  margin-left: 20px;
}

.actions {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

button {
  background-color: hsla(160, 100%, 37%, 1);
  min-width: 100px;
  margin-left: 10px;
  border-radius: 20px;
  padding: 10px;
  border: none
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
