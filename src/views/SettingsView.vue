<script setup>
import { useStore } from '../store'; 
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

const store = useStore();
const router = useRouter();

const newFirstName = ref(store.firstName);
const newLastName = ref(store.lastName);

const changeName = () => {
 
  store.updateUserProfile(newFirstName.value, newLastName.value);
};
</script>

<template>
  <div class="settings-view">
    <h2>Settings</h2>

    <div class="profile-info">
      <label for="first-name">First Name:</label>
      <input id="first-name" v-model="newFirstName" type="text" />

      <label for="last-name">Last Name:</label>
      <input id="last-name" v-model="newLastName" type="text" />

      <label for="email">Email:</label>
      <input id="email" :value="store.email" type="email" disabled />

      <button @click="changeName" class="save-button">Save Changes</button>
    </div>

    <button @click="router.go(-1)" class="go-back-button">Go Back</button>
  </div>
</template>

<style scoped>
.settings-view {
  padding: 20px;
  background-color: #121212;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

h2 {
  font-size: 2rem;
  color: #f5c518;
  margin-bottom: 20px;
  text-align: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

label {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  margin-bottom: 10px;
}

input:disabled {
  background-color: #444;
  cursor: not-allowed;
}

.save-button {
  padding: 10px 20px;
  background-color: #f5c518;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #e5b518;
}

.go-back-button {
  padding: 10px 20px;
  background-color: #d9534f;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.go-back-button:hover {
  background-color: #c9302c;
}

@media (max-width: 600px) {
  .profile-info {
    padding: 15px;
  }

  h2 {
    font-size: 1.5rem;
  }

  input {
    font-size: 0.9rem;
  }

  .save-button,
  .go-back-button {
    font-size: 0.9rem;
  }
}
</style>



