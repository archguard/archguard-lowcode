import { BlockType } from "@/types";
import { ElButton } from "element-plus";

interface BlockConfig {
  type: BlockType;
  label: string;
  preview: () => any;
  render: () => any;
}

const createRegisterConfig = () => {
  const blockList = [];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const blockMap: Record<BlockType, BlockConfig> = {};

  return {
    register(config: BlockConfig) {
      blockList.push(config);
      blockMap[config.type] = config;
      console.log("-> blockMap", blockMap);
    },
    use(type: BlockType) {
      return blockMap[type];
    },
  };
};

const registerConfig = createRegisterConfig();

registerConfig.register({
  label: "按钮",
  type: "button",
  preview: () => <ElButton>preview</ElButton>,
  render: () => <ElButton>render</ElButton>,
});

registerConfig.register({
  label: "输入框",
  type: "input",
  preview: () => <ElButton>preview</ElButton>,
  render: () => <ElButton>render</ElButton>,
});

export default registerConfig;
