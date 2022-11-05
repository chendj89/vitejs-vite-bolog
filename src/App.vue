<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import FileFloder from './components/FileFloder.tsx';
const imgClick = () => {
  console.log('img');
};
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <FileFloder>
    <img
      @click="imgClick"
      src="https://api.iconify.design/bi:1-square-fill.svg?color=%23999999"
      alt=""
    />
    <img
      src="https://api.iconify.design/bi:2-square-fill.svg?color=%23999999"
      alt=""
    />
    <img
      src="https://api.iconify.design/bi:3-square-fill.svg?color=%23999999"
      alt=""
    />
    <img
      src="https://api.iconify.design/bi:3-square-fill.svg?color=%23999999"
      alt=""
    />
    <img
      src="https://api.iconify.design/bi:3-square-fill.svg?color=%23999999"
      alt=""
    />
    <img
      src="https://api.iconify.design/bi:3-square-fill.svg?color=%23999999"
      alt=""
    />
    <img
      src="https://api.iconify.design/bi:3-square-fill.svg?color=%23999999"
      alt=""
    />
  </FileFloder>
</template>

<style lang="scss">
.fileFloder {
  width: 36px;
  height: 36px;
  user-select: none;
  &-container {
    width: 180px;
    height: 180px;
    display: inline-grid;
    padding: 16px;
    grid-gap: 16px;
    transform-origin: left top;
    transform: scale(0.2);
    border-radius: 16px;
    background-color: #e5e5e5;
    grid-template-rows: repeat(3, 1fr);
  }
  &-drag {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
