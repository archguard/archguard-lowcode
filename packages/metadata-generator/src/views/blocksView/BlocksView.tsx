import { defineComponent, inject } from "vue";
import { RegisterConfig } from "@/utils/registerBlocks";

const BlocksView = defineComponent({
  setup() {
    const config = inject("config") as RegisterConfig;

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
          {config.blockList.map((item) => {
            return (
              <div
                style={{
                  border: "1px solid darkgray",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <span>{item.label}</span>
                {item.preview()}
              </div>
            );
          })}
        </div>
      );
    };
  },
});

export default BlocksView;
