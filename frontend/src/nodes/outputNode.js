// outputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode title="Output" inputs={[{ id: `${id}-value` }]}>
      <div className="flex flex-col gap-1 text-xs">
        <label className="flex items-center gap-1">
          Name:
          <input className="border border-gray-300 rounded px-1 w-full" type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label className="flex items-center gap-1">
          Type:
          <select className="border border-gray-300 rounded px-1 w-full" value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
