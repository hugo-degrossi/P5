<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
  import {useCartStore} from "@/stores/cart";
  import {storeToRefs} from "pinia";

  const { getNumberOfItemsInCart } = storeToRefs(useCartStore())


</script>

<template>
  <nav>
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
    </div>
    <span class="green cart">{{ getNumberOfItemsInCart }} items in cart</span>
  </nav>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.cart {
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  text-align: left;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
