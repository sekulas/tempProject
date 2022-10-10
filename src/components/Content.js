import React from "react"

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "no",
            question: props.question
        };
    }

    onChange = e => {
        this.setState({value: e.target.value})
    }

    render() {
        return(
            <div className="content">
                <h1>{this.state.question}</h1>
                <form>
                    <label>
                        Tak
                        <input type="radio" 
                            value = "yes"
                            checked={this.state.value === "yes"}
                            onChange={this.onChange}/>
                    </label>
                    <label>
                        Nie
                        <input type="radio" 
                            value = "no"
                            checked={this.state.value === "no"}
                            onChange={this.onChange}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Content