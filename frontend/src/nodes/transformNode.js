import React, { useState } from "react";
import { BaseNode } from "./baseNode";

const transformations = [
  { label: "Uppercase", value: "UPPERCASE" },
  { label: "Lowercase", value: "LOWERCASE" },
  { label: "Reverse", value: "REVERSE" },
];

export const TransformNode = ({ id, data }) => {
  const [transformation, setTransformation] = useState("UPPERCASE");

  const handleTransformationChange = (e) => {
    const { value } = e.target;
    setTransformation(value);
  };
  return (
    <BaseNode
      title="Transform"
      inputs={[
        {
          id: `${id}-input`,
          style: { top: `${100 / 2}%` },
        },
      ]}
      outputs={[
        {
          id: `${id}-output`,
          style: { top: `${100 / 2}%` },
        },
      ]}
    >
      <div className="text-xs">
        <label className="flex items-center gap-1">
          Transform:
          <select className="border border-gray-300 rounded px-1 w-full" value={transformation} onChange={handleTransformationChange}>
            {transformations.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
