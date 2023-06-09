import {computed, ref} from "vue";

export const useSortedAndSearchedPosts = (sortedPosts) => {
    const searchQuery = ref('')
    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })
    return {
        searchQuery, sortedAndSearchedPosts
    }
}