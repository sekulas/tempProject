import React from "react"

const Content = props => (

    <div className="content">
        <h1>{props.question}</h1>
        <form>
            <section>
                <input type="radio" name="answer"/>
                <label>Tak</label>
            </section>
            <section>
                <input type="radio" name="answer"/>
                <label>Nie</label>
            </section>
        </form>
    </div>

)

export default Content