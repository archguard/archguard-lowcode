import { defineComponent, PropType } from "vue";
import { BlockMetaData } from "@/types";

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
          {props.metaData.type}
        </div>
      );
    };
  },
});

export default EditorBlock;
