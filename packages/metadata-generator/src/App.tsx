import { defineComponent } from "vue";
import styles from "./App.scss";
import AttributeEditorView from "@/views/attributeEditorView/AttributeEditorView";
import BlocksView from "@/views/blocksView/BlocksView";
import OperationView from "@/views/operationView/OperationView";

import CoreEditorView from "@/views/coreEditorView/CoreEditorView";
import { testData } from "@/testData";

export default defineComponent({
  setup() {
    return () => (
      <div class={styles.app}>
        <OperationView />
        <div class={styles.body}>
          <BlocksView />
          <CoreEditorView data={testData} />
          <AttributeEditorView />
        </div>
      </div>
    );
  },
});
