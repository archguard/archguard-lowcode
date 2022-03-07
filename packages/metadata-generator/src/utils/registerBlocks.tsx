import { BlockType } from "@/types";
import { ElButton, ElInput } from "element-plus";

interface BlockConfig {
  type: BlockType;
  label: string;
  preview: () => any;
  render: () => any;
}

const createRegisterConfig = () => {
  const blockList: BlockConfig[] = [];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const blockMap: Record<BlockType, BlockConfig> = {};

  return {
    blockList,
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

export type RegisterConfig = ReturnType<typeof createRegisterConfig>;

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
  preview: () => <ElInput>preview</ElInput>,
  render: () => <ElInput>render</ElInput>,
});

export default registerConfig;
