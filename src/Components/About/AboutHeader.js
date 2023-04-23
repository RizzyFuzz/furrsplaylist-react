import React from "react";
import AboutHeaderTitle from "../../Elements/About/AboutHeaderTitle";
import AboutHeaderCloseIcon from "../../Elements/About/AboutHeaderCloseIcon";
function MenuHeader({ uiState, setUiState }) {
    return (
        <nav className="nav__header">
            <AboutHeaderTitle />
            <AboutHeaderCloseIcon uiState={uiState} setUiState={setUiState} />
        </nav>
    );
}
// eslint-disable-next-line
export default MenuHeader;
