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
      <div className="text-xs">
        <label className="flex flex-col gap-1">
          Note:
          <textarea className="border border-gray-300 rounded px-1 w-full resize-none" rows={3} value={note} onChange={handleNoteChange} />
        </label>
      </div>
    </BaseNode>
  );
};
