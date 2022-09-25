// undirected graph class implementation

class Graph {
    constructor () {
        this.adjacencyList = {};
    }
    
    addVertex (vertex) {
        // str.value = []
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge (v1, v2) {
        if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
        this.adjacencyList[v1].push(v2);
        if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
        this.adjacencyList[v2].push(v1);

    }

    removeEdge (vertex1,vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter (
            v => v !== vertex2
        ); // keep every element which is not vertex2
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter (
            v => v !== vertex1
        );
    } 
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    // removeVertex(vertex){
    //     While(this.adjacencyList[vertex].length){
    //         const adjacentVertex = this.adjacencyList[vertex].pop();
    //         this.removeEdge(vertex, adjacentVertex);
    //     }
    //     delete this.adjacencyList[vertex]
    // }

}


var g = new Graph()
g.addVertex("Tokyo")
g.addVertex("London")
g.addVertex("Oregon")
g.adjacencyList["Tokyo"].push("SOMETHING")
g.addVertex("Tokyo")

g.addEdge("Tokyo", "Dallas")
g.removeEdge("Tokyo", "Dallas")


let g1 = new Graph();
g1.addVertex("Dallas");
g1.addVertex("Tokyo");
g1.addVertex("Aspen");
g1.addVertex("Los Angeles");
g1.addVertex("Hong Kong");
g1.addEdge("Dallas","Tokyo");
g1.addEdge("Dallas","Aspen");
g1.addEdge("Hong Kong","Tokyo");
g1.addEdge("Hong Kong","Dallas");
g1.addEdge("Los Angeles","Hong Kong");
g1.addEdge("Los Angeles","Aspen");
g1.removeVertex("Hong Kong");


console.log(g1)