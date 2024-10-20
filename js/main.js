
// Function to run Dijkstra's Algorithm and show result
document.getElementById('run-dijkstra').addEventListener('click', () => {
    const graph = {
        A: { B: 5, C: 2 },
        B: { A: 5, C: 8, D: 4 },
        C: { A: 2, B: 8, D: 7 },
        D: { B: 4, C: 7 }
    };
    
    const startNode = 'A';
    const result = dijkstra(graph, startNode);
    
    const output = document.getElementById('dijkstra-output');
    output.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
});
