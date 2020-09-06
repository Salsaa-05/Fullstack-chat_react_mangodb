import React from 'react';
import "./SidebarChat .css";
import { Avatar } from '@material-ui/core';
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Roo</h2>
                <p>last massge</p>
            </div>
        </div>
    );
}

export default SidebarChat;