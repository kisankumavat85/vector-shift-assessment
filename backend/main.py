from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Any

app = FastAPI()

# Allow requests from the React frontend (port 3000)
# Without this, the browser will block requests due to CORS policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the shape of the request body using Pydantic
# nodes and edges are lists of any shape (we only need their count and connections)
class Pipeline(BaseModel):
    nodes: List[Any]
    edges: List[Any]

def is_dag(nodes: List[Any], edges: List[Any]) -> bool:
    # Build an adjacency list: { node_id: [list of node_ids it points to] }
    adjacency = {node["id"]: [] for node in nodes}
    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        if source in adjacency:
            adjacency[source].append(target)

    # Track visit state for each node:
    # "unvisited" = not seen yet
    # "visiting"  = currently in the recursion stack (cycle detected if we see this again)
    # "visited"   = fully processed, no cycle from this node
    state = {node["id"]: "unvisited" for node in nodes}

    def has_cycle(node_id: str) -> bool:
        state[node_id] = "visiting"
        for neighbor in adjacency.get(node_id, []):
            if state.get(neighbor) == "visiting":
                # We found a back edge — there's a cycle
                return True
            if state.get(neighbor) == "unvisited":
                if has_cycle(neighbor):
                    return True
        state[node_id] = "visited"
        return False

    # Run cycle detection from every unvisited node
    # (graph may be disconnected, so we can't just start from one node)
    for node in nodes:
        if state[node["id"]] == "unvisited":
            if has_cycle(node["id"]):
                return False  # Cycle found, not a DAG

    return True  # No cycles found, it is a DAG

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    dag = is_dag(pipeline.nodes, pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag,
    }
