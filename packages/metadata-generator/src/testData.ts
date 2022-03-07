import { AppMetaData } from "@/types";

export const testData: AppMetaData = {
  container: { width: 500, height: 500 },
  blocks: [
    { top: 10, left: 10, type: "input", zIndex: 1 },
    { top: 20, left: 20, type: "button", zIndex: 2 },
  ],
};
