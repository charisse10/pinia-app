<template>
    <div class="item">
        <h3>{{ item.name }}</h3>
        <div class="btns">
            <button
                @click="itemStore.deleteItem(item.id)"
            >Delete</button>
            <button :class="{ ready: item.isReady }"
                @click="itemStore.toggleReady(item.id)"
            >Ready</button>
        </div>
    </div>
</template>

<script>
import { useItemStore } from '../stores/ItemStore'
export default {
    props: ["item"],
    setup() {
        const itemStore = useItemStore()
        return {
            itemStore
        }
    }
}
</script>

<style>
    
</style>