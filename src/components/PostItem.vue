<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <MyButton
          @click="$router.push(`/posts/${post.id}`)"
      >
        Open
      </MyButton>
      <MyButton
          class="deleteBtn"
          @click="$emit('remove', post)"

      >
        Delete
      </MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns {
  display: flex;
}

.deleteBtn {
  margin-left: 10px;
}

.deleteBtn:hover {
  background-color: red;
}
</style>