<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="newItem" placeholder="Type item" required>
        <button>Add</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useItemStore } from '../stores/ItemStore'
export default {
    setup() {
        const itemStore = useItemStore()

        const newItem = ref('')

        const handleSubmit = () => {
            if (newItem.value.length > 0) {
                itemStore.addItem({
                    name: newItem.value,
                    isReady: false,
                    // id: Math.floor(Math.random() * 100000)
                    id: itemStore.items.length + 1
                })
                newItem.value = ''
                }
            }
        return {
            handleSubmit, newItem }
    }
}
</script>
<style>

</style>>