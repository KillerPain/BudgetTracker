import Donut from './donut-chart.component';

let mdl = angular.module('app.donut-chart', []);

mdl.component(Donut.name, Donut.component);

export default mdl.name;