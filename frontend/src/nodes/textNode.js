// textNode.js

import { useEffect, useRef, useState } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
    updateNodeInternals(id);
  }, [currText]);

  const matches = [...currText.matchAll(/\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g)];
  const allVariables = matches.map((match) => match[1]);
  const variables = Array.from(new Set(allVariables));
  const inputs = variables.map((variable, i) => {
    return {
      id: `${id}-${variable}`,
      label: variable,
      style: {
        top: `${(100 * (i + 1)) / (variables.length + 1)}%`,
      },
    };
  });

  return (
    <BaseNode
      title="Text"
      inputs={inputs}
      outputs={[{ id: `${id}-output` }]}
      className="w-fit max-w-[250px]"
    >
      <div className="text-xs">
        <label className="flex items-center gap-1">Text:</label>
        <textarea
          ref={textareaRef}
          className="min-w-full border border-gray-300 rounded px-1 resize-none overflow-hidden"
          style={{ fieldSizing: "content" }}
          rows={1}
          value={currText}
          onChange={handleTextChange}
        />
      </div>
    </BaseNode>
  );
};
