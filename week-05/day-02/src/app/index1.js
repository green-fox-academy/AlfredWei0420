'use strict';

var React =  require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponet = React.createClass({
    render:function(){
        return(
            <div id="todo-list">
                
                {/* <h1>Wowooooooo</h1>
                <p>Very Coooooool</p>
                <p>{this.props.mssg}</p> */}
                <p><strong>Cake name: </strong>{this.props.cake.name}</p>
                <p><strong>Brix: </strong>{this.props.cake.Brix}</p>
                <p><strong>Price: </strong>{this.props.cake.price}</p>
            </div>
        );//render
    }
});

var myCake = {name:'New York', Brix:'Sweet', price:"$5"}

//put componetnt into html page
ReactDOM.render(<TodoComponet mssg = "I like Cheese cake" cake = {myCake}/>,document.getElementById("aaa"));