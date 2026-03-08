// textNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode title="Text" outputs={[{ id: `${id}-output` }]}>
      <div className="text-xs">
        <label className="flex items-center gap-1">
          Text:
          <input className="border border-gray-300 rounded px-1 w-full" type="text" value={currText} onChange={handleTextChange} />
        </label>
      </div>
    </BaseNode>
  );
};
