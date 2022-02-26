import { defineComponent } from "vue";
import styles from "./App.module.scss";

export default defineComponent({
  setup() {
    return () => <div class={styles.app}>hello world</div>; //写一个 hello world祭天
  },
});
