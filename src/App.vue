<template>
  <div id="app">
    <h1>Пример запроса API</h1>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useApi } from './composables/useApi'; // Именованный импорт

export default defineComponent({
  setup() {
    const { data, error, loading, fetchData } = useApi('https://jsonplaceholder.typicode.com/posts', 'GET');

    return {
      data,
      error,
      loading,
      fetchData,
    };
  },
});
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: left;
  color: #000000;
  margin-top: 20px;
}

pre {
	white-space: pre-wrap;
}

button {
    width: 50%;
    margin: auto;
    padding: 12px;
    font-size: 18px;
    background: red;
    color: white;
    border-radius: 36px;
    cursor: pointer;

}

button:hover {
  opacity: 0.7;
}
</style>
