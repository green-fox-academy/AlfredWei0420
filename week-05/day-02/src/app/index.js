'use strict';

var React =  require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponet = React.createClass({
    getInitialState:function(){
        return{
            todos:['get up', 'wash face', 'eat breakfast'],
            age: 28
        }
    },
    render:function(){
        var todos = this.state.todos;
        todos = todos.map(function(e,i){
            return(
                <li>{e}</li>
            )
        });
        return(
            <div id="todo-list">
               <p>The things we do every morning</p> 
               <p>{this.state.age}</p>
               <ul>{todos}</ul>
            </div>
        );//render
    }
});


//put componetnt into html page
ReactDOM.render(<TodoComponet />,document.getElementById("aaa"));