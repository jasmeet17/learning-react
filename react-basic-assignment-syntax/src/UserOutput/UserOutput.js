import React from 'react';

import './UserOutput.css'

const UserOutput = (props) =>{
    return(
        <div className="UserOutput">
            <p>Username:{props.username}. This is Paragraph 1</p>
            <p>This is Paragraph 2</p>
        </div>
    )
}

export default UserOutput;