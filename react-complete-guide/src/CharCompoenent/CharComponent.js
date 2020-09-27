import React, {Component} from 'react';

class CharComponent extends Component {
    render(props) {
        
        return (
            <div>
                <p onClick={this.props.clicked}>Text: {this.props.textValue}</p>
            </div>
        );
    }

}

export default CharComponent;