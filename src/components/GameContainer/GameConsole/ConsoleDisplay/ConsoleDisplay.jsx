import React from 'react'
import DisplayLeaderBoard from './Displays/DisplayLeaderBoard'
import DisplaySettings from './Displays/DisplaySettings'
import DisplayStats from './Displays/DisplayStats'
import { useState } from 'react'
import  './ConsoleDisplay.css'

function ConsoleDisplay({displayState, user, setUser}) {

    let displayComponent;

    if (displayState === 'Stats') {
        displayComponent = <DisplayStats user={user} />;
    } else if (displayState === 'Settings') {
        displayComponent = <DisplaySettings user={user} setUser={setUser} />;
    } else if (displayState === 'LeaderBoard') {
        displayComponent = <DisplayLeaderBoard />;
    }

    return (
        <div>
            {/* <h3>Console Display:</h3> */}
            <div class="console-display">
            {displayComponent}
            </div>
        </div>
    );
}



export default ConsoleDisplay;