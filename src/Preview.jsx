import React, {Component} from 'react';
import Editor from './Editor';
import {markdown} from 'markdown';
import TopBar from './TopBar';
import Container from './Container'


class Preview extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            title: "Preview"
        };
    }
        render() {
            const element = {__html: markdown.toHTML(this.props.message)};

            const previewStyle = {          
               // backgroundColor: 'lavender',
                height: '400px'
            };
            return (
               // value={markdown.toHTML(this.props.message)}
                  //ReactDOM.render(element, document.getElementById('root'));
                <div style={this.props.style}>
                    {/* <textarea id="preview" value={markdown.toHTML(this.props.message)} disabled />  */}
                    <div id='preview' dangerouslySetInnerHTML={element} style={previewStyle} />
                  
                    </div>
            )
        }
}


/*const Preview = (props) => {
    const element = {__html: markdown.toHTML(props.message)};
    //ReactDOM.render(element, document.getElementById('root'));
    return(
      
        <div>
            <textarea id="preview" value={markdown.toHTML(props.message)} disabled/>  
           <div dangerouslySetInnerHTML={element} />
        </div>
    )
}
*/
export default Preview;