import { Handle, Position } from "reactflow";
import "./baseNode.css";

export const BaseNode = (props) => {
  const { title, inputs, outputs, children, className } = props;
  return (
    <div className={`relative min-w-[200px] min-h-[80px] bg-white border border-gray-300 rounded-lg shadow-md ${className || ''}`}>
      {inputs &&
        inputs.map((input) => (
          <Handle
            key={input.id}
            type="target"
            position={Position.Left}
            id={input.id}
            style={input.style}
            className="flex flex-row-reverse"
            data-input-label={input?.label}
          />
        ))}

      {title && (
        <div className="px-3 py-1 bg-gray-100 border-b border-gray-300 rounded-t-lg">
          <span className="text-xs font-semibold text-gray-700">{title}</span>
        </div>
      )}

      <div className="p-2">{children}</div>

      {outputs &&
        outputs.map((output) => (
          <Handle
            key={output.id}
            type="source"
            position={Position.Right}
            id={output.id}
            style={output.style}
            className="flex"
            data-output-label={output?.label}
          />
        ))}
    </div>
  );
};
