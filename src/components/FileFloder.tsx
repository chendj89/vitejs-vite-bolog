import {
  defineComponent,
  h,
  ref,
  reactive,
  watchEffect,
  withModifiers,
} from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    const canClick = ref(false);
    let links = new Array(7).fill({
      name: '微博',
      icon: 'https://weibo.com/favicon.ico',
      link: 'https://weibo.com/u/5963931367/home?wvr=5',
    });
    // 图片点击
    const imgClick = (item: any) => {
      canClick.value = false;
      console.log('img');
    };
    // 文件夹点击
    const folderClick = () => {
      if (!canClick.value) {
        canClick.value = true;
      }
      console.log('folder');
    };
    const style = reactive({
      folder: 'fileFloder',
      container: `grid-template-columns:repeat(3, 1fr)`,
    });
    watchEffect(() => {
      if (canClick.value) {
        style.folder = 'width: 108px;';
        style.container = `grid-template-columns:repeat(6, 1fr);width: 540px`;
      } else {
        style.folder = 'cursor: pointer;';
        style.container = `grid-template-columns:repeat(3, 1fr);`;
      }
    });
    return () => {
      let defaultEles = slots.default ? slots.default() : [];
      return (
        <div class="fileFloder" style={style.folder} onClick={folderClick}>
          <div class="fileFloder-container" style={style.container}>
            {links.map((ele) => {
              return h('div', { class: 'fileFloder-drag' }, [
                h(
                  'img',
                  {
                    onClick: withModifiers(
                      () => canClick.value && imgClick(ele),
                      canClick.value ? ['stop', 'capture'] : []
                    ),
                    src: ele.icon,
                  },
                  {}
                ),
              ]);
            })}
          </div>
        </div>
      );
    };
  },
});
