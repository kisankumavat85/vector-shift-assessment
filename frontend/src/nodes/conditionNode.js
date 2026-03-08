// llmNode.js

import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[
        {
          id: `${id}-input`,
          style: { top: `${100 / 2}%` },
        },
      ]}
      outputs={[
        {
          id: `${id}-true`,
          style: { top: `${100 / 3}%` },
          label: "true"
        },
        {
          id: `${id}-false`,
          style: { top: `${200 / 3}%` },
          label: "false"
        },
      ]}
    >
      <div>
        <span>This is condition</span>
      </div>
    </BaseNode>
  );
};
