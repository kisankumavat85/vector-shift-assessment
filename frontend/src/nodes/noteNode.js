import React, { useState } from "react";
import { BaseNode } from "./baseNode";

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    const { value } = e.target;
    setNote(value);
  };

  return (
    <BaseNode title="Note" inputs={[]} outputs={[]}>
      <div>
        <label>
          Note:
          <textarea type="file" value={note} onChange={handleNoteChange} />
        </label>
      </div>
    </BaseNode>
  );
};
