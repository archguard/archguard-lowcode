import { defineComponent, PropType } from "vue";
import { AppMetaData } from "@/types";
import EditorBlock from "@/views/coreEditorView/components/EditorBlock";

interface CoreEditorViewProps {
  metaData: AppMetaData;
}

const CoreEditorView = defineComponent({
  props: {
    metaData: {
      type: Object as PropType<CoreEditorViewProps["metaData"]>,
      required: true,
    },
  },
  setup(props) {
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
          <div>
            {props.metaData.blocks.map((item) => {
              return <EditorBlock metaData={item} />;
            })}
          </div>
        </div>
      );
    };
  },
});

export default CoreEditorView;
