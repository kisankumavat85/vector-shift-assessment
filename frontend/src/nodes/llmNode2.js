// llmNode.js

import { BaseNode } from "./baseNode";

export const LLMNode2 = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        {
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
        },
      ]}
      outputs={[
        {
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
