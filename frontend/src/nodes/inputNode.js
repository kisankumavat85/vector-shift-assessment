// inputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode title="Input" outputs={[{ id: `${id}-value` }]}>
      <div className="flex flex-col gap-1 text-xs">
        <label className="flex items-center gap-1">
          Name:
          <input className="border border-gray-300 rounded px-1 w-full" type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label className="flex items-center gap-1">
          Type:
          <select className="border border-gray-300 rounded px-1 w-full" value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
