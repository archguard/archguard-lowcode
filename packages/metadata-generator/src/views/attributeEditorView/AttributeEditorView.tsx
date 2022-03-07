import { defineComponent } from "vue";

const AttributeEditorView = defineComponent({
  setup() {
    return () => {
      return (
        <div
          style={{
            border: "1px solid",
            position: "absolute",
            width: "300px",
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          AttributeEditorView
        </div>
      );
    };
  },
});

export default AttributeEditorView;
