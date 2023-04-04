<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<style scoped lang="less"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
  components: {},
})
export default class App extends Vue {
  mounted() {}
}
</script>
