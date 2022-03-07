import { defineComponent, provide } from "vue";
import styles from "./App.module.scss";
import AttributeEditorView from "@/views/attributeEditorView/AttributeEditorView";
import BlocksView from "@/views/blocksView/BlocksView";
import OperationView from "@/views/operationView/OperationView";

import CoreEditorView from "@/views/coreEditorView/CoreEditorView";
import { testData } from "@/testData";
import registerConfig from "@/utils/registerBlocks";

export default defineComponent({
  setup() {
    provide("config", registerConfig);

    return () => (
      <div class={styles.app}>
        <OperationView />
        <div class={styles.body}>
          <BlocksView />
          <CoreEditorView metaData={testData} />
          <AttributeEditorView />
        </div>
      </div>
    );
  },
});
