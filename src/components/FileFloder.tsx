import {
  defineComponent,
  h,
  ref,
  reactive,
  watchEffect,
  withModifiers,
  PropType,
} from 'vue';

type List = {
  name: string;
  icon: string;
  link: string;
};
export default defineComponent({
  props: {
    list: {
      type: Object as PropType<List[]>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
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
      if (item.link) {
        window.open(item.link);
      }
    };
    // 文件夹点击
    const folderClick = () => {
      if (!canClick.value) {
        canClick.value = true;
      }
      console.log('folder');
    };
    // 标题点击
    const titleClick = () => {
      console.log('000');
      canClick.value = false;
    };
    const style = reactive({
      folder: 'fileFloder',
      folderActive: '',
      container: `grid-template-columns:repeat(3, 1fr)`,
    });
    watchEffect(() => {
      if (canClick.value) {
        // 展开状态
        style.folder = 'width: 108px;';
        style.container = `grid-template-columns:repeat(5, 1fr);width: 540px`;
        style.folderActive = 'fileFloder active';
      } else {
        // 默认状态
        style.folder = 'cursor: pointer;';
        style.container = `grid-template-columns:repeat(3, 1fr);`;
        style.folderActive = 'fileFloder';
      }
    });
    return () => {
      let defaultEles = slots.default ? slots.default() : [];
      return (
        <div
          class={style.folderActive}
          onClick={folderClick}
          title={props.title}
        >
          {canClick.value ? (
            <div
              class="fileFloder-title"
              onClick={withModifiers(
                () => canClick.value && titleClick(),
                canClick.value ? ['stop', 'capture'] : []
              )}
            >
              {props.title}
            </div>
          ) : null}
          <div class="fileFloder-container">
            {props.list.map((ele) => {
              return h('div', { class: 'fileFloder-drag' }, [
                h(
                  'div',
                  {
                    onClick: withModifiers(
                      () => canClick.value && imgClick(ele),
                      canClick.value ? ['stop', 'capture'] : []
                    ),
                    class: 'card-links-item',
                  },
                  [h('img', { src: ele.icon, class: 'card-links-icon' }, {})]
                ),
              ]);
            })}
          </div>
        </div>
      );
    };
  },
});
