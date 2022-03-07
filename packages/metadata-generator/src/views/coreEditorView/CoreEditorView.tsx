import { defineComponent, PropType } from "vue";
import { PageSchema } from "@/types";
import EditorBlock from "@/views/coreEditorView/components/EditorBlock";

interface CoreEditorViewProps {
  data: PageSchema;
}

const CoreEditorView = defineComponent({
  props: {
    data: {
      type: Object as PropType<CoreEditorViewProps["data"]>,
      required: true,
    },
  },
  setup(props) {
    console.log("-> props", props.data);

    return () => {
      return (
        <div
          style={{
            border: "1px solid",
            position: "absolute",
            left: "300px",
            right: "300px",
            top: 0,
            bottom: 0,
          }}
        >
          CoreEditorView
          {props.data.blocks.map((item) => {
            return <EditorBlock data={item} />;
          })}
        </div>
      );
    };
  },
});

export default CoreEditorView;
