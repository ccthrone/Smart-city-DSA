// dsa/algorithms.js

// Dijkstra's Algorithm implementation
function dijkstra(graph, startNode) {
    let distances = {};
    let visited = new Set();
    let priorityQueue = [{ node: startNode, distance: 0 }];
    
    // Initialize distances with Infinity
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;
    
    while (priorityQueue.length > 0) {
        // Sort the queue and get the node with the smallest distance
        priorityQueue.sort((a, b) => a.distance - b.distance);
        let { node, distance } = priorityQueue.shift();
        
        if (visited.has(node)) continue;
        visited.add(node);
        
        for (let neighbor in graph[node]) {
            let newDist = distance + graph[node][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                priorityQueue.push({ node: neighbor, distance: newDist });
            }
        }
    }
    
    return distances;
}
