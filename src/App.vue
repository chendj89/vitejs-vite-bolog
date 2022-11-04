<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import FileFloder from './components/FileFloder.tsx';
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <FileFloder>
    <img
      style="width: 36px; height: 36px"
      src="https://api.iconify.design/bi:1-square-fill.svg?color=%23409eff"
      alt=""
    />
    <img
      style="width: 36px; height: 36px"
      src="https://api.iconify.design/bi:2-square-fill.svg?color=%23409eff"
      alt=""
    />
    <img
      style="width: 36px; height: 36px"
      src="https://api.iconify.design/bi:3-square-fill.svg?color=%23409eff"
      alt=""
    />
  </FileFloder>
</template>

<style lang="scss">
.fileFloder {
  &-drag {
    display: inline-block;
    cursor: pointer;
  }
}
</style>
