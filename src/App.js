import { useEffect } from "react";
// import Graph from "graphology";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // const graph = new Graph();
    // graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });
    const graph = new MultiDirectedGraph();
    graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10, color: "#FA4F40"  });
    graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10, color: "#FA4F40"  });
    graph.addNode("C", { x: -1, y: 1, label: "Node c", size: 10, color: "#FA4F40"  });
    graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    graph.addEdgeWithKey("rel2", "A", "B", { label: "REL_2" });
    graph.addEdgeWithKey("rel3", "A", "C", { label: "REL_3" });
    graph.addEdgeWithKey("rel4", "B", "C", { label: "REL_4" });
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export default function App() {
  return (
    <SigmaContainer graph={MultiDirectedGraph} style={{ height: "1000px", width: "1000px" }}>
      <LoadGraph />
    </SigmaContainer>
  );
};