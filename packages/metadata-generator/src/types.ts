export interface BlockSchema {
  top: number;
  left: number;
  zIndex: number;
  type: "input" | "button";
}

export interface PageSchema {
  container: {
    width: number;
    height: number;
  };
  blocks: BlockSchema[];
}
