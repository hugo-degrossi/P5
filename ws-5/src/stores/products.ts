import { defineStore } from "pinia";

export interface Product {
  id: number
  name: string
  isLiked: boolean
  url: string
}

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [
      {
        id: 0,
        name: "Socks1",
        isLiked: false,
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.1846277416.0884%2Fur%2Csocks_female_back_medium%2Ctall_portrait%2C750x1000-bg%2Cf8f8f8.4.jpg&f=1&nofb=1"
      },
      {
        id: 1,
        name: "Socks2",
        isLiked: true,
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.1846277416.0884%2Fur%2Csocks_female_back_medium%2Ctall_portrait%2C750x1000-bg%2Cf8f8f8.4.jpg&f=1&nofb=1"
      },
    ]
  }),
  getters: {
    getProductById: (state) => {
      return (productId: Number) => state.products.find((product) => product.id === productId)
    },
    getProducts: (state) => {
      return state.products
    },
  },
  actions: {
    updateLikes(id: Number) {
      let product = this.products.find(product => product.id === id)
      if (product) {
        product.isLiked = !product.isLiked
        console.log(product.isLiked)
      }
    },
  },
});
