import React from 'react'
import DisplayLeaderBoard from './Displays/DisplayLeaderBoard'
import DisplaySettings from './Displays/DisplaySettings'
import DisplayStats from './Displays/DisplayStats'
import { useState } from 'react'

function ConsoleDisplay() {
    const [displayState, setDisplayState] = useState('stats');

    let displayComponent;

    if (displayState === 'stats') {
        displayComponent = <DisplayStats />;
    } else if (displayState === 'settings') {
        displayComponent = <DisplaySettings />;
    } else if (displayState === 'leaderboard') {
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