import { ref } from "vue";
import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useStore = defineStore("store", () => {
  const email = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const isLoggedIn = ref(false);
  const cart = ref(new Map());

  function setUser(userData) {
    email.value = userData.email;
    firstName.value = userData.firstName;
    lastName.value = userData.lastName;
    isLoggedIn.value = true;
  }

  function logout() {
    email.value = "";
    firstName.value = "";
    lastName.value = "";
    isLoggedIn.value = false;
    clearCart(); 
  }

  function updateUserProfile(newFirstName, newLastName) {
    firstName.value = newFirstName;
    lastName.value = newLastName;
  }

  function addToCart(item) {
    cart.value.set(item.id, item);
  }

  function removeFromCart(itemId) {
    cart.value.delete(itemId);
  }

  function clearCart() {
    cart.value.clear();
  }

  return {
    email,
    firstName,
    lastName,
    isLoggedIn,
    cart,
    setUser,
    logout,
    addToCart,
    removeFromCart,
    updateUserProfile,
    clearCart, 
  };

});

export const userAuthorized = new Promise((resolve, reject) => {
  onAuthStateChanged(auth, user => {
    try {
      const store = useStore();
      store.user = user;
      const storedCart = localStorage.getItem(`cart_${store.user.email}`);

      store.cart = storedCart ? new Map(Object.entries(JSON.parse(storedCart))) : new Map();
      resolve();
    } catch (error) {
      reject();
    }
  })
})