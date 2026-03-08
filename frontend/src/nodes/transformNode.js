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
      <div>
        <label>
          Method:
          <select value={transformation} onChange={handleTransformationChange}>
            {transformations.map((transformation) => (
              <option key={transformation.value} value={transformation.value}>
                {transformation.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
