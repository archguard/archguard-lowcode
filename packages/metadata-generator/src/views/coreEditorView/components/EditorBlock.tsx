import { defineComponent, inject, PropType } from "vue";
import { BlockMetaData } from "@/types";

import { ElButton } from "element-plus";

interface EditorBlockProps {
  metaData: BlockMetaData;
}

const EditorBlock = defineComponent({
  props: {
    metaData: {
      type: Object as PropType<EditorBlockProps["metaData"]>,
      required: true,
    },
  },
  setup(props) {
    const config = inject("config");
    console.log("-> config", config);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const RenderComponent = config.use(props.metaData.type).render();
    console.log("-> RenderComponent", RenderComponent);

    return () => {
      return (
        <div
          style={{
            top: `${props.metaData.top}px`,
            left: `${props.metaData.left}px`,
            zIndex: props.metaData.zIndex,
            position: "absolute",
          }}
        >
          {RenderComponent}
          {/*{use(props.metaData.type).render()}*/}
          {/*<ElButton type="success">Default</ElButton>*/}
        </div>
      );
    };
  },
});

export default EditorBlock;
