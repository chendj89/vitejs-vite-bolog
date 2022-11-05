<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
const imgClick = () => {
  console.log('img');
};
</script>

<template>
  <HelloWorld />
</template>

<style lang="scss">
.fileFloder {
  width: 36px;
  height: 36px;
  user-select: none;
  background-color: #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  &.active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &-title {
    display: flex;
    height: 36px;
    background: #ff5c00;
    color: #fff;
    align-items: center;
    justify-content: center;
  }
  &-container {
    width: 180px;
    height: 180px;
    display: inline-grid;
    padding: 16px;
    grid-gap: 16px;
    transform-origin: left top;
    transform: scale(0.2);
    border-radius: 16px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  &.active &-container {
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(6, 1fr);
    transform: none;
  }
  &-drag {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
