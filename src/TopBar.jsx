import React, {Component} from 'react';
import Editor from './Editor';
import Button from 'react-bootstrap/Button';
import ExpandIcon from './ExpandIcon';
import CollapseIcon from './CollapseIcon';
import 'bootstrap/dist/css/bootstrap.min.css';


class TopBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
}

    handleClick(){
        this.setState({
            isToggleOn: !this.state.isToggleOn}, function() {
            this.sendData();})
    }

    sendData = () => {
     //   console.log('toggle state is', this.state.isToggleOn);
        this.props.parentCallbackTopBar({isToggleOn: this.state.isToggleOn, isTitle: this.props.title});
    }

    render() {

        const boxStyle = {
            display: 'grid',
            gridTemplateColumns: '40px auto 40px',
            gridTemplateRows: '40px',
          //  spread operator merge two styles in ES6
            ...this.props.style
        };
        const expandButton = {
            marginLeft: 'auto'
        }

        const isToggleOn = this.state.isToggleOn;

        let button;
        if (!isToggleOn) {
            button = <ExpandIcon onClick={this.handleClick}/>;
        } else {
            button = <CollapseIcon onClick={this.handleClick}/> ;
        }

        return (
            <div style={boxStyle}>
                <div style={{display: 'grid', gridColumnStart:1}}><img style={{height:'75%', width:'75%', margin: 'auto' }} src="./favicon.ico" /></div>
                <div style={{display: 'grid', gridColumnStart:2, justifyItems: 'start', alignItems: 'center', paddingLeft:'25px', color:'white', fontWeight:'bold'}}>{this.props.title}</div>
                <div style={{display: 'grid', gridColumnStart:3, alignItems: 'center'}}>
               {button}      
                </div>
            </div>
    );
}

}



export default TopBar;