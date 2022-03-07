export interface BlockMetaData {
  top: number;
  left: number;
  zIndex: number;
  type: "input" | "button";
}

export interface AppMetaData {
  container: {
    width: number;
    height: number;
  };
  blocks: BlockMetaData[];
}
