<script setup lang="ts">
import { ref, withDefaults } from 'vue';
interface User {
  name: string;
  avatar: string;
  links: { link: string; name: string; icon: string }[];
}
const users: User[] = ref([
  {
    name: 'Evan You',
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
    desc: '一位独立软件开发者，也是开源 JavaScript 框架 Vue.js 的创造者',
    link: 'https://evanyou.me/',
    links: [
      {
        name: 'github',
        icon: 'https://api.iconify.design/mdi:github.svg',
        link: 'https://github.com/yyx990803',
      },
      {
        name: 'vue3',
        icon: 'https://api.iconify.design/logos:vue.svg',
        link: 'https://www.bilibili.com/',
      },
      {
        name: 'vite',
        icon: 'https://api.iconify.design/logos:vitejs.svg',
        link: 'https://cn.vitejs.dev/',
      },
      {
        name: 'vue-router',
        icon: 'https://api.iconify.design/noto:package.svg',
        link: 'https://router.vuejs.org/',
      },
    ],
  },
  {
    name: 'Anthony Fu',
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
    desc: 'VUE和VITE核心成员，也是VueUse、Icons几个开源项目的作者。',
    link: 'https://antfu.me/',
    links: [
      {
        name: 'github',
        icon: 'https://api.iconify.design/mdi:github.svg',
        link: 'https://github.com/antfu',
      },
      {
        name: 'bilibili',
        icon: 'https://api.iconify.design/ri:bilibili-line.svg',
        link: 'https://www.bilibili.com/',
      },
      {
        name: 'icons',
        icon: 'https://icones.netlify.app/favicon.svg',
        link: 'https://icones.netlify.app/',
      },
      {
        name: 'unplugin',
        icon: 'https://api.iconify.design/carbon:plug.svg',
        link: 'https://github.com/unjs/unplugin',
      },
      {
        name: 'unplugin-vue-components',
        icon: 'https://api.iconify.design/carbon:workspace-import.svg',
        link: 'https://github.com/antfu/unplugin-vue-components',
      },
      {
        name: 'unplugin-auto-import',
        icon: 'https://api.iconify.design/carbon:row-insert.svg',
        link: 'https://github.com/antfu/unplugin-auto-import',
      },
    ],
  },
  {
    name: 'Node',
    avatar: 'https://api.iconify.design/logos:nodejs.svg',
    desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。',
    link: 'http://nodejs.cn/',
    links: [
      {
        name: 'npm',
        icon: 'https://api.iconify.design/vscode-icons:file-type-npm.svg',
        link: 'https://www.npmjs.com/',
      },
      {
        name: 'yarn',
        icon: 'https://api.iconify.design/vscode-icons:file-type-yarn.svg',
        link: 'https://yarnpkg.com/',
      },
      {
        name: 'volta',
        icon: 'https://api.iconify.design/emojione-v1:high-voltage.svg',
        link: 'https://volta.sh/',
      },
    ],
  },
]);
const go = (item) => {
  if (item.link) {
    window.open(item.link);
  }
};
</script>

<template>
  <div class="card" v-for="user in users" :key="user.name">
    <div class="card-content" @click="go(user)">
      <img class="card-avatar" :src="user.avatar" alt="" />
      <div class="card-user">
        <h3 class="card-user-name">{{ user.name }}</h3>
        <div class="card-user-desc">
          {{ user.desc }}
        </div>
      </div>
    </div>
    <div class="card-links">
      <div
        class="card-links-item"
        v-for="item in user.links"
        :key="item.name"
        @click="go(item)"
      >
        <img class="card-links-icon" :src="item.icon" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$width: 308px;
$space: 10px;
$img: 48px;
.card {
  display: block;
  padding: $space * 1.2;
  width: $width;
  border-radius: 4px;
  background: #f9f9f9;
  margin-bottom: $space;
  &-content {
    display: flex;
    justify-content: space-between;
  }
  &-avatar {
    display: block;
    width: $img;
    height: $img;
    min-width: $img;
    min-height: $img;
    border-radius: 6px;
  }
  &-info {
    display: flex;
  }
  &-user {
    text-align: left;
    width: $width - $img - $space * 4;
    &-name {
      margin-top: 0;
      margin-bottom: 5px;
    }
    &-desc {
      font-size: 14px;
      line-height: 20px;
      word-break: break-all;
      color: #777;
    }
  }
  &-links {
    text-align: left;
    padding-top: $space;
    &-item {
      display: inline-flex;
      margin-right: $space;
      align-items: center;
      justify-content: center;
      background-color: #e5e5e5;
      width: $img * 0.75;
      height: $img * 0.75;
      min-width: $img * 0.75;
      min-height: $img * 0.75;
      font-size: $img * 0.45;
      border-radius: 6px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
    &-icon {
      width: $img * 0.5;
      height: $img * 0.5;
    }
  }
}
</style>
