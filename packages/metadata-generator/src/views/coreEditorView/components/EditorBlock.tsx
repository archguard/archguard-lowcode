import { defineComponent, inject, PropType } from "vue";
import { BlockMetaData } from "@/types";
import { RegisterConfig } from "@/utils/registerBlocks";

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
    const config = inject("config") as RegisterConfig;

    const RenderComponent = config.use(props.metaData.type).render();

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
        </div>
      );
    };
  },
});

export default EditorBlock;
