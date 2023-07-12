import React from "react";

function SidebarOption({ text, Icon, active }) {
    return (
    <div className={`sidebarOption`}>
        <Icon />
        <h2>{text}</h2>
    </div>
    );
}

export default SidebarOption;