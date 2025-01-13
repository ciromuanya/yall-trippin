import React from 'react';

function Welcome() {
    return (
        <div className="welcome">
            <h1>Good Morning, '$(user_first_name)'</h1>
            <h2>'$(todays day), $(todays date)'</h2>
        </div>
    );
}

export default Welcome;