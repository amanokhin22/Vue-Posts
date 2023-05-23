<template>
  <div>
    <h1>Posts page</h1>
    <MyInput
        v-model="searchQuery"
        placeholder="Search..."
        v-focus
    />
    <div class="app__btns">
      <my-button
          style="align-self: flex-start;"
      >
        Create post
      </my-button>
      <MySelect
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm/>
    </my-dialog>
    <PostList
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else style="align-self: center; font-size: 25px">Loading in progress...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostForm, PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By content'},
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

</style>