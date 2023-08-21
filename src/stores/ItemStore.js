import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [
            { id: 1, name: 'tent', isReady: true },
            { id: 2, name: 'air mattress', isReady: true },
            { id: 3, name: 'tarpauline', isReady: false},
        ],
    }),
    getters: {
        ready() {   
            return this.items.filter(i => i.isReady)
        },
        readyCount() {
            return this.items.reduce((prev, curr) => {
                return curr.isReady ? prev + 1 : prev
            }, 0)
        },
        totalCount: (state) => { 
            return state.items.length
        }
    },
    actions: {
        addItem(item) {
            this.items.push(item)
        },
        deleteItem(id) {
            this.items = this.items.filter(i => {
                return i.id !== id
            })
        },
        toggleReady(id) {
            const item = this.items.find(i => i.id === id)
            item.isReady = !item.isReady
            // console.log('toggleReady')
        }
    }
})
