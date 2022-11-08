<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import VpImg from './components/VpImg';
const imgClick = () => {
  console.log('img');
};
</script>

<template>
  <HelloWorld />
  <div class="cc-button" tabindex="0" role="button">按钮</div>
  <div
    style="margin-left: 20px"
    class="cc-btn cc-primary"
    tabindex="0"
    role="button"
  >
    按钮
  </div>
  <VpImg />
</template>

<style lang="scss">
.fileFloder {
  display: inline-block;
  width: 36px;
  min-width: 36px;
  height: 36px;
  user-select: none;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &.active {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    cursor: default;
    z-index: 1;
  }
  &-title {
    display: none;
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
    padding: 10px;
    grid-gap: 10px;
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
    }
  }
}
.cc {
  &-button {
    --theme: #4676d7;
    --theme-hover: dark(#4676d7, 0.1);
    --color: #fff;
    display: inline-block;
    text-align: center;
    min-width: 100px;
    font-family: inherit;
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: var(--theme);
    color: var(--color);
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    &:focus {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
      box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
    }
  }
  &-btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    :not(:disabled) {
      cursor: pointer;
    }
  }
  &-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    &:hover {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }
    &:focus {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
      box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
    }
  }
}
</style>
