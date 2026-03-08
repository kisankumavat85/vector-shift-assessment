// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-[10px]">
      <div className="mt-5 flex flex-wrap gap-[10px]">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="fileInput" label="File Input" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="transform" label="Transform" />
        <DraggableNode type="note" label="Note" />
      </div>
    </div>
  );
};
