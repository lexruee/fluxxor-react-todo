/*
 * @author     Alexander Rüedlinger <a.rueedlinger@gmail.com>
 * @date       04.05.2015
 */

var Fluxxor = require('fluxxor');
var React = require('react');
var actions = require('./store/actions')
var stores = require('./store/stores');


var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

flux.on("dispatch", function(type, payload) {
  console.log("[Dispatch]", type, payload);
});


var TodoApp = require('./ui/TodoApp.react');

React.render(
    <TodoApp flux={flux} />,
    document.getElementById('content')
);
