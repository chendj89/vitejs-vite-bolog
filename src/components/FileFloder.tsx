import { defineComponent, h } from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    return () => {
      let defaultEles = slots.default ? slots.default() : [];
      return (
        <div>
          <div class="fileFloder">
            {defaultEles.map((ele) => {
              return h('div', { class: 'fileFloder-drag' }, [h(ele, {}, {})]);
            })}
          </div>
        </div>
      );
    };
  },
});
