import { defineComponent } from "vue";

const OperationView = defineComponent({
  setup() {
    return () => {
      return <div style={{ height: "50px" }}>OperationView</div>;
    };
  },
});

export default OperationView;
