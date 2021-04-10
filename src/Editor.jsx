import React, {Component} from 'react';
import Preview from './Preview';
import TopBar from './TopBar';
import Container from './Container'

class Editor extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           value: "",
           title: "Editor"
       };
        this.handleChange = this.handleChange.bind(this);
   } 
   handleChange(event) {
  
    this.setState({value: event.target.value}, function() {
        this.sendData();
    })    
}

    sendData = () => {
      //  console.log('send data', this.state.value);
        this.props.parentCallback(this.state.value);
    }
  
   render() {
       
       return (     
        <div style={this.props.style}>
            <textarea id="editor" value={this.state.value} onChange={this.handleChange}/>
        </div>
       )
   }

}

export default Editor;

