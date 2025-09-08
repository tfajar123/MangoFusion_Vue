import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const useCartStore = defineStore(
  'cartStore',
  () => {
    const cartItems = ref([])

    const cartCount = computed(() => {
      return cartItems.value.reduce((total, item) => total + item.quantity, 0)
    })

    const cartTotal = computed(() => {
      return cartItems.value.reduce((total, item) => total + item.quantity * item.price, 0)
    })

    function addToCart(menuItem, quantity = 1) {
      const existingItem = cartItems.value.find((item) => item.id === menuItem.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        cartItems.value.push({ ...menuItem, quantity })
      }
    }

    function updateQuantity(itemId, quantity) {
      const item = cartItems.value.find((item) => item.id === itemId)
      if (item) {
        if (quantity <= 0) {
          removeFromCart(itemId)
        } else {
          item.quantity = quantity
        }
      }
    }

    function removeFromCart(itemId) {
      const itemIndex = cartItems.value.findIndex((item) => item.id === itemId)
      if (itemIndex !== -1) {
        cartItems.value.splice(itemIndex, 1)
      }
    }

    function clearCart() {
      cartItems.value = []
    }

    return { cartItems, cartCount, cartTotal, addToCart, clearCart, updateQuantity, removeFromCart }
  },
  { persist: true },
)
