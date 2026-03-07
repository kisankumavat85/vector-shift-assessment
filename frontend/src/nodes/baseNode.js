import { Handle, Position } from "reactflow";

export const BaseNode = (props) => {
  const { title, inputs, outputs, children } = props;
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      {inputs &&
        inputs.map((input) => (
          <Handle
            key={input.id}
            type="target"
            position={Position.Left}
            id={input.id}
            style={input.style}
          />
        ))}

      <div>
        <span>{title}</span>
      </div>

      {children}

      {outputs &&
        outputs.map((output) => (
          <Handle
            key={output.id}
            type="source"
            position={Position.Right}
            id={output.id}
            style={output?.style}
          />
        ))}
    </div>
  );
};
