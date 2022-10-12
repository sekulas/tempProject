import React from "react"

function SubmitButton(props) {

    //ciekawa sprawa - bez thego onClick={props.onClick} nie dzialalo
    return (
        <div id="submit-button">
            <button onClick={props.onClick}>Submit</button>
        </div>
    )

}

export default SubmitButton;