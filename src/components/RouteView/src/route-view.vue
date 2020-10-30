<template>
  <div class="route-view">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key" />
  </div>
</template>

<script>
export default {
  name: "RouteView",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
