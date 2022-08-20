import React from "react"

const Content = props => (

    <div className="content">
        <p>{props.question}</p>
        <form>
            <input type="radio"/>
            <label>Tak</label>
            <input type="radio"/>
            <label>Nie</label>
        </form>
    </div>

)

export default Content