import { ref } from "vue";
import { defineStore } from "pinia";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const useStore = defineStore("store", () => {
  const email = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const isLoggedIn = ref(false);
  const cart = ref(new Map());


  function setUser(userData) {
    email.value = userData.email;
    const [fName, lName] = userData.displayName?.split(" ") || ["", ""];
    firstName.value = fName;
    lastName.value = lName;
    isLoggedIn.value = true;
  }

  function logout() {
    email.value = "";
    firstName.value = "";
    lastName.value = "";
    isLoggedIn.value = false;
    clearCart();
    localStorage.removeItem(`cart_${email.value}`);
    signOut(auth);
  }

  async function updateUserProfile(newFirstName, newLastName) {
    firstName.value = newFirstName;
    lastName.value = newLastName;
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: `${newFirstName} ${newLastName}`,
        });
      } catch (error) {
        console.error("Error updating user profile:", error);
      }
    }
  }

  function addToCart(item) {
    cart.value.set(item.id, item);
    saveCartToLocalStorage();
  }

  function removeFromCart(itemId) {
    cart.value.delete(itemId);
    saveCartToLocalStorage();
  }

  function clearCart() {
    cart.value.clear();
    saveCartToLocalStorage();
  }

  function saveCartToLocalStorage() {
    if (email.value) {
      localStorage.setItem(`cart_${email.value}`, JSON.stringify([...cart.value]));
    }
  }

  function checkout() {
    clearCart();
    localStorage.removeItem(`cart_${email.value}`);
    alert("Thank you for your purchase!");
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
    checkout,
  };
});

export const userAuthorized = new Promise((resolve) => {
  onAuthStateChanged(auth, (user) => {
    const store = useStore();
    if (user) {
      user.reload().then(() => {
        store.setUser(user);
        const storedCart = localStorage.getItem(`cart_${user.email}`);
        store.cart = storedCart ? new Map(Object.entries(JSON.parse(storedCart))) : new Map();
      });
    } else {
      store.logout(); 
    }
    resolve();
  });
});





