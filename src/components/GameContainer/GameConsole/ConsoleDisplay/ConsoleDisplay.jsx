import React from 'react'
import DisplayLeaderBoard from './Displays/DisplayLeaderBoard'
import DisplaySettings from './Displays/DisplaySettings'
import DisplayStats from './Displays/DisplayStats'
import { useState } from 'react'

function ConsoleDisplay({displayState}) {

    let displayComponent;

    if (displayState === 'Stats') {
        displayComponent = <DisplayStats />;
    } else if (displayState === 'Settings') {
        displayComponent = <DisplaySettings />;
    } else if (displayState === 'LeaderBoard') {
        displayComponent = <DisplayLeaderBoard />;
    }

    return (
        <div>
            <h3>Console Display:</h3>
            {displayComponent}
        </div>
    );
}

export default ConsoleDisplay;