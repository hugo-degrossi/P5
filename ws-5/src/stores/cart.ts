import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        user_cart: []
    }),
    getters: {
        getCart: (state) => {
            return state.user_cart
        },
        getNumberOfItemsInCart: (state) => {
            return state.user_cart.length
        },
        getNumberOfItemsInCartWithId: (state) => {
            return (productId: Number) => state.user_cart.filter(item => item === productId).length
        }
    },
    actions: {
        addItemToCard(id: Number) {
            console.log(id)
            // @ts-ignore
            this.user_cart.push(id)
        }
    },
});
