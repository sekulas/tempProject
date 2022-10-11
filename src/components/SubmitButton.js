import React from "react"


export default function SubmitButton(props) {

    //ciekawa sprawa - bez thego onClick={props.onClick} nie dzialalo
    return (
        <div id="submit-button" onClick={props.onClick}>
            <button>Submit</button>
        </div>
    )

}