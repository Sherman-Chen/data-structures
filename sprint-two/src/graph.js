

// Instantiate a new graph
var Graph = function(nodes = [], edges = []) {
  this.nodes = nodes;
  this.edges = edges;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
}; // time complexity === O(1)

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
}; // time complexity === O(n)

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes.splice(this.nodes.indexOf(node), 1);
  this.edges.splice(this.edges.indexOf(node), 1);
}; // time complexity === O(n)

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;

  if (this.edges[fromNode] && this.edges[toNode]) {
    result = this.edges[fromNode].includes(toNode) && this.edges[toNode].includes(fromNode);
  }

  return result;
}; // time complexity === O(n)

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
}; // time complexity === O(1)

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdge = this.edges[fromNode];
  var toNodeEdge = this.edges[toNode];

  fromNodeEdge.splice(fromNodeEdge.indexOf(toNode), 1);
  toNodeEdge.splice(toNodeEdge.indexOf(fromNode), 1);
}; // time complexity === O(n)

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  this.nodes.forEach(node => cb(node));
}; // time complexity === O(n)

Graph.prototype.numberOfNodes = function() {
  if (this.nodes.length > 0) {
    return this.nodes.length;
  } else {
    return 'this graph is currently empty';
  }
}; // time complexity === O(1)

/*
 * Complexity: What is the time complexity of the above functions?
 */


