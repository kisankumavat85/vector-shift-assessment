import { useState } from "react";
import { BaseNode } from "./baseNode";

export const FileInputNode = ({ id, data }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const { files } = e.target;
    const file = files[0];
    if (file.size > 0) {
      setFile(file);
    }
  };

  return (
    <BaseNode outputs={[{id: `${id}-input`}]} >
      <label>
        File:
        <input type="file" value={file} onChange={handleFileChange} />
      </label>
    </BaseNode>
  );
};
