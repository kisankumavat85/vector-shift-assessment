// llmNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

const methods = [
  { label: "Get", value: "GET" },
  { label: "Post", value: "POST" },
  { label: "Put", value: "PUT" },
  { label: "Patch", value: "PATCH" },
  { label: "Delete", value: "DELETE" },
];

export const ApiNode = ({ id, data }) => {
  const [method, setMethod] = useState("GET");

  const handleMethodChange = (e) => {
    const { value } = e.target;
    setMethod(value);
  };

  return (
    <BaseNode
      title="API"
      inputs={[
        {
          id: `${id}-url`,
          style: { top: `${100 / 3}%` },
          label: "API URL",
        },
        {
          id: `${id}-body`,
          style: { top: `${200 / 3}%` },
          label: "API Payload",
        },  
      ]}
      outputs={[
        {
          id: `${id}-response`,
          style: { top: `${100 / 2}%` },
        },
      ]}
    >
      <div className="text-xs">
        <label className="flex items-center gap-1">
          Method:
          <select className="border border-gray-300 rounded px-1 w-full" value={method} onChange={handleMethodChange}>
            {methods.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
