import { defineComponent, PropType } from "vue";
import { BlockSchema } from "@/types";

interface EditorBlockProps {
  data: BlockSchema;
}

const EditorBlock = defineComponent({
  props: {
    data: {
      type: Object as PropType<EditorBlockProps["data"]>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return (
        <div
          style={{
            top: `${props.data.top}px`,
            left: `${props.data.left}px`,
            zIndex: props.data.zIndex,
          }}
        >
          {props.data.type}
        </div>
      );
    };
  },
});

export default EditorBlock;
