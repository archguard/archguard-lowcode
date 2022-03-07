import { defineComponent } from "vue";

const BlocksView = defineComponent({
  setup() {
    return () => {
      return (
        <div
          style={{
            border: "1px solid",
            position: "absolute",
            width: "300px",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          BlocksView
        </div>
      );
    };
  },
});

export default BlocksView;
