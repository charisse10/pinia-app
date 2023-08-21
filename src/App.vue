<script setup>

</script>

<template>
  <main>

    <!-- HEADER -->
    <header>
      <h1>Camping Checklist</h1>
    </header>

    <!-- FILTER ITEMS -->
    <div class="filter">
      <button :class=" { active: filter === 'all' }"
      @click="filter = 'all'">CHECKLIST</button>
      <button :class=" { active: filter === 'ready' }"
      @click="filter = 'ready'">READY</button>
    </div>
    
    <!-- CAMPING LIST -->
   <div class="item-list" v-if="filter === 'all'">
      <div v-for="item in itemStore.items" :key="item.id">
        <ItemDetails :item="item" />
      </div>
      <h5>You have {{ itemStore.totalCount }} items on your list.</h5>
    </div>

    <div class="item-list" v-if="filter === 'ready'">
      <div v-for="item in itemStore.ready" :key="item.id">
        <ItemDetails :item="item" />
      </div>
      <h5>You have prepared {{ itemStore.readyCount }} of {{ itemStore.totalCount }} items on your list!</h5>
    </div>
    
    <!-- FORM -->
    <div class="new-item-form">
      <ItemForm />
    </div>

  </main>
</template>

<script>
import { ref } from 'vue'
import ItemDetails from './components/ItemDetails.vue'
import ItemForm from './components/ItemForm.vue'
import { useItemStore } from './stores/ItemStore'
export default {
  components: {
    ItemDetails,
    ItemForm
  },
  setup () {
    const itemStore = useItemStore()

    const filter = ref('all')

    return {
      itemStore, filter
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: rgb(215, 249, 250);
}

header {
  padding: 25px;
}

h1 {
  color: rgb(2, 59, 5);
  text-align: center;
}

.item-list {
  padding: 25px;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0 5px;
  border-bottom: 0.25px solid rgb(2, 59, 5);
}

.btns button{
  margin-left: 10px;
  padding: 2px 5px;
  border: 1px solid rgb(2, 59, 5);
  border-radius: 5px;
}

.filter {
  text-align: center;
  padding: 25px 15px 0;
}

.filter button{
  margin-left: 15px;
  padding: 10px 15px;
  border: 1px solid rgb(3, 19, 112);
  border-radius: 5px;
}

.active {
  background-color: rgb(3, 19, 112);
  color: white;
}

h5 {
  color:rgb(3, 19, 112);
  margin-top: 1rem;
}

form {
  text-align: center;
  padding: 25px;
}

input {
  padding: 10px;
  border: 1px solid rgb(2, 59, 5);
  border-radius: 5px;
}

form button {
  background-color: rgb(2, 59, 5);
  color: white;
  margin-left: 10px;  
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
}

.ready {
  background-color: rgb(2, 59, 5);
  color: white;
}

</style>
