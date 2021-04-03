import React, {Component} from 'react';
import Editor from './Editor';
import Preview from './Preview';
import TopBar from './TopBar';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            title: "Container",
            message: " ",
            toggleState: ''
        };

    }

    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    callbackFunctionTopBar = (childData) => {
        this.setState({toggleState: childData})
        console.log(`parent level state is, ${this.state.toggleState}`)
    }

    render() {
        const gridStyle = {
            display: 'grid',
            gridTemplateColumns: '40px auto 20px',
            gridTemplateRows: 'auto',
         
          //  height: '200px'
        };
        
        return(
            <div style={gridStyle}>
                <TopBar style={{display: 'grid', gridColumnStart:2, gridRowStart: 1, backgroundColor:'#008060', border:'1px solid black', boxShadow:'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}} title={"Editor"} parentCallbackTopBar = {this.callbackFunctionTopBar}/>
                <Editor style={{display: 'grid', gridColumnStart:2, gridRowStart: 2, backgroundColor:'#e1e3e5'}} parentCallback = {this.callbackFunction}/>
                <TopBar style={{display: 'grid', gridColumnStart:2, gridRowStart: 3, backgroundColor:'#008060', border: '1px solid black', boxShadow:'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }} title={"Preview"} parentCallbackTopBar = {this.callbackFunctionTopBar}/>
                <Preview style={{display: 'grid', gridColumnStart:2, gridRowStart: 4, backgroundColor:'#e1e3e5', zIndex: '-1'}} message={this.state.message}/>
            </div>
                )
                }

    }

    export default Container;