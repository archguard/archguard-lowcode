import { defineComponent } from "vue";
import styles from "./App.scss";

export default defineComponent({
  setup() {
    return () => (
      <div class={styles.app}>
        hello world
        <div>222</div>
      </div>
    );
  },
});
