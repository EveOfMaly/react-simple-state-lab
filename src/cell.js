import React, { Component } from 'react';


export default class Cell extends Component {
    constructor(props){
    super()
    this.state = {
        color: props.value //define initial state of a key of color set to the 'value' of prop
    }
}


//event listener transform the color to #33

updatesColor = () => {

    this.setState({
        color: '#333'
    })
}

//create div with classanme cell on click runs updatesColor()
render(){
    return <div onClick={this.updatesColor} className="cell" style={{backgroundColor: `${this.state.color}` }}>{this.val}</div>
}



}



