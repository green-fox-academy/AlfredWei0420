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
        var ager = setTimeout(function(){
            this.setState({
                age:30
            });
        }.bind(this),3000);//第一个this不指代任何，第二个this指代整个component
        return(
            <div id="todo-list">
               <p>The things we do every morning</p> 
               <p>{this.state.age}</p>
               <ul>
                   <li>{this.state.todos[0]}</li>
                   <li>{this.state.todos[1]}</li>
                   <li>{this.state.todos[2]}</li>
               </ul>
               {/* <ListComponent todos = {this.state.todos} /> */}
            </div>
        );//render
    }
});


//put componetnt into html page
ReactDOM.render(<TodoComponet />,document.getElementById("aaa"));