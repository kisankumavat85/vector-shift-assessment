// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();

            alert(
                `Pipeline Summary:\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            alert('Failed to connect to the backend. Make sure the server is running.');
        }
    };

    return (
        <div className="flex items-center justify-center">
            <button onClick={handleSubmit} className="border rounded px-4 py-1 text-xs">Submit</button>
        </div>
    );
}
