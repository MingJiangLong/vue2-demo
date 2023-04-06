<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
  components: {},
})
export default class App extends Vue {
  mounted() {}
}
</script>
