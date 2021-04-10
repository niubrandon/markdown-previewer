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
            toggleState: false,
            sectionTitle:''
        };
    }

    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    callbackFunctionTopBar = (childData) => {
        this.setState({toggleState: childData.isToggleOn, sectionTitle: childData.isTitle})
    }   

    render() {
        const gridStyle = {
            display: 'grid',
            gridTemplateColumns: '40px auto 20px',
            gridTemplateRows: 'auto',       
        };
        
        return (
            <div style={gridStyle}>
                <TopBar style={{display: (this.state.toggleState && this.state.sectionTitle == 'Preview') ? 'none' : 'grid', gridColumnStart:2, gridRowStart: 1, backgroundColor:'#008060', border:'1px solid black', boxShadow:'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}} title={"Editor"} parentCallbackTopBar = {this.callbackFunctionTopBar}/>
                <Editor  style={{display: (this.state.toggleState && this.state.sectionTitle == 'Preview') ? 'none' : 'grid', gridColumnStart:2, gridRowStart: 2, backgroundColor:'#e1e3e5', height: (this.state.toggleState && this.state.sectionTitle == 'Editor') ? '700px' : '300px'}} parentCallback = {this.callbackFunction}/>
                <TopBar style={{display: (this.state.toggleState && this.state.sectionTitle == 'Editor') ? 'none' : 'grid', gridColumnStart:2, gridRowStart: 3, backgroundColor:'#008060', border: '1px solid black', boxShadow:'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }} title={"Preview"} parentCallbackTopBar = {this.callbackFunctionTopBar}/>
                <Preview style={{display: (this.state.toggleState && this.state.sectionTitle == 'Editor') ? 'none' : 'grid', gridColumnStart:2, gridRowStart: 4, backgroundColor:'#e1e3e5', height: (this.state.toggleState && this.state.sectionTitle == 'Preview') ? '700px' : '300px'}} message={this.state.message}/>
            </div>
            )}
    }

    export default Container;