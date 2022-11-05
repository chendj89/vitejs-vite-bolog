<script setup lang="ts">
import { ref, withDefaults } from 'vue';
import FileFloder from './FileFloder.tsx';
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
        link: 'https://cn.vuejs.org/',
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
    desc: 'VUE和VITE核心成员、Icons、unplugin等开源项目的作者。',
    link: 'https://antfu.me/',
    links: [
      {
        name: 'github',
        icon: 'https://api.iconify.design/mdi:github.svg',
        link: 'https://github.com/antfu',
      },
      {
        name: 'bilibili',
        icon: 'https://www.bilibili.com/favicon.ico',
        link: 'https://space.bilibili.com/668380',
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
        name: 'cnpm',
        icon: 'https://raw.githubusercontent.com/chendj89/icons/main/cnpm.png',
        link: 'https://www.npmmirror.com/',
      },
      {
        name: 'volta',
        icon: 'https://api.iconify.design/emojione-v1:high-voltage.svg',
        link: 'https://volta.sh/',
      },
    ],
  },
  {
    name: '视频',
    avatar: 'https://api.iconify.design/fluent-emoji-flat:cinema.svg',
    desc: '常看的直播视频、电影',
    link: '',
    links: [
      {
        name: '斗鱼直播',
        icon: 'https://raw.githubusercontent.com/chendj89/icons/main/douyu.png',
        link: 'https://www.douyu.com/directory/myFollow',
      },
      {
        name: '虎牙直播',
        icon: 'https://raw.githubusercontent.com/chendj89/icons/main/huya.png',
        link: 'https://www.huya.com/myfollow',
      },
      {
        name: '茶杯狐',
        icon: 'https://raw.githubusercontent.com/chendj89/icons/main/cupfox.png',
        link: 'https://cupfox.app/',
      },
    ],
  },
  {
    name: 'Element',
    avatar: 'https://api.iconify.design/noto-v1:man-farmer.svg',
    desc: '常用UI库',
    link: '',
    links: [
      {
        name: 'Element',
        icon: 'https://api.iconify.design/logos:element.svg',
        link: 'ttps://element.eleme.cn/#/zh-CN',
      },
      {
        name: 'ElementPlus',
        icon: 'https://api.iconify.design/ep:element-plus.svg?color=%23409eff',
        link: 'https://element-plus.gitee.io/zh-CN/',
      },
      {
        name: 'ECharts',
        icon: 'https://api.iconify.design/simple-icons:apacheecharts.svg',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        name: 'Greensock',
        icon: 'https://api.iconify.design/fluent-emoji:socks.svg',
        link: 'https://greensock.com/',
      },
      {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.63/dist/ico/favicon.ico',
        link: 'https://www.bootcss.com/',
      },
    ],
  },
  {
    name: '开发工具',
    avatar: 'https://api.iconify.design/noto:hammer-and-wrench.svg',
    desc: '常用开发工具常用开发工具常用开发工具',
    link: '',
    links: [
      {
        name: '翻译',
        icon: 'https://api.iconify.design/dashicons:translation.svg?color=%23329672',
        link: 'https://fanyi.youdao.com/',
      },
      {
        name: '正则',
        icon: 'https://regex101.com/static/assets/icon-32.png',
        link: 'https://regex101.com/',
      },
      {
        name: 'Codepen',
        icon: 'https://api.iconify.design/logos:codepen-icon.svg',
        link: 'https://codepen.io/',
      },
      {
        name: 'stackblitz',
        icon: 'https://api.iconify.design/logos:stackblitz-icon.svg',
        link: 'https://stackblitz.com/',
      },
      {
        name: 'codesandbox',
        icon: 'https://api.iconify.design/logos:codesandbox-icon.svg',
        link: 'https://codesandbox.io/',
      },
      {
        name: 'Deno',
        icon: 'https://www.denojs.cn/img/favicon.ico',
        link: 'https://www.denojs.cn/',
      },
    ],
  },
  {
    name: '其他',
    avatar: 'https://api.iconify.design/fluent-emoji-flat:slot-machine.svg',
    desc: '没有被分类的',
    link: '',
    group: true,
    links: [
      {
        name: '掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
        link: 'https://juejin.cn/pins',
      },
      {
        name: '微博',
        icon: 'https://weibo.com/favicon.ico',
        link: 'https://weibo.com/u/5963931367/home?wvr=5',
      },
      {
        name: '知乎',
        icon: 'https://api.iconify.design/ant-design:zhihu-outlined.svg?color=%23056de8',
        link: 'https://www.zhihu.com/hot',
      },
      {
        name: 'bilibili',
        icon: 'https://www.bilibili.com/favicon.ico',
        link: 'https://www.bilibili.com/',
      },
      {
        name: 'Emoji',
        icon: 'https://emojixd.com/favicon.ico',
        link: 'https://emojixd.com/',
      },
      {
        name: '游戏',
        icon: '',
        link: '',
        group: [
          {
            name: 'Yikm',
            icon: 'https://raw.githubusercontent.com/chendj89/icons/main/Marie.png',
            link: 'https://www.yikm.net/',
          },
        ],
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
  <button class="card" v-for="user in users" :key="user.name">
    <div class="card-content" :class="{ dbl: user.link }" @dblclick="go(user)">
      <img class="card-avatar" :src="user.avatar" alt="" />
      <div class="card-user">
        <h3 class="card-user-name">{{ user.name }}</h3>
        <div class="card-user-desc">
          {{ user.desc }}
        </div>
      </div>
    </div>
    <div class="card-links">
      <template v-for="item in user.links">
        <FileFloder
          v-if="item.group"
          :list="item.group"
          :title="item.name"
        ></FileFloder>
        <div v-else :key="item.name" @click="go(item)" class="card-links-item">
          <img class="card-links-icon" :src="item.icon" :title="item.name" />
        </div>
      </template>
    </div>
  </button>
</template>

<style lang="scss">
$width: 290px;
$space: 10px;
$img: 48px;
.card {
  position: relative;
  display: inline-block;
  margin: 0 $space;
  padding: 0;
  width: $width;
  border-radius: 4px;
  background: #f9f9f9;
  margin-bottom: $space;
  outline: none;
  border: none;
  &:hover {
    // background: #1d49aa;
  }
  &:focus {
    // box-shadow: 0 0 0 4px #cbd6ee;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    padding: $space * 1.2;
    padding-bottom: 0;
    &.dbl {
      cursor: pointer;
    }
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
      height: 40px;
    }
  }
  &-links {
    display: flex;
    text-align: left;
    padding: $space * 1.2;
    overflow: hidden;
    height: 66px;
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
