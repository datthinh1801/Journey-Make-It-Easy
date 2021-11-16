<template>
  <div>
    <Header />
    <post-editor :class="$style['editor']" class="width-control" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import PostEditor from "../components/PostEditor.vue";
export default {
  components: {
    PostEditor,
    Header,
  },
  name: "ArticleEditor",
  data() {
    return {};
  },
};
</script>

<style module>
.editor {
  margin-top: 80px;
}
</style>
