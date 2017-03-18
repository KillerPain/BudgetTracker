import Graph from './line-graph.component';

let mdl = angular.module("app.line-graph", []);

mdl.component(Graph.name, Graph.component);

export default mdl.name;