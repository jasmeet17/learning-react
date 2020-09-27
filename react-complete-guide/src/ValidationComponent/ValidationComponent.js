import React, {Component} from 'react';

class ValidationComponent extends Component {
    render(props) {
        let textLength = null;
        if (this.props.textValue!==undefined){
            let text = "Text long enough";
            if (this.props.textValue.length<5){
                text = "Text TOO SHORT"
            }
            textLength = (
                <p>{text}</p>
            )
        }
        return (
            <div>
                {/* <input type="text" onChange={this.props.changed} value={this.props.name}/> */}
                <p>Text: {this.props.textValue}</p>
                <p>Length: {this.props.textValue.length}</p>
                {textLength}

            </div>
        );
    }

}

export default ValidationComponent;