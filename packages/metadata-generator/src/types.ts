export interface BlockMetaData {
  top: number;
  left: number;
  zIndex: number;
  type: BlockType;
}

export type BlockType = "input" | "button";

export interface AppMetaData {
  container: {
    width: number;
    height: number;
  };
  blocks: BlockMetaData[];
}
