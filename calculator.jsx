import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // your code here
        this.state = {
            result: 0,
            num1: "",
            num2: ""
        };

        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.calculateResult = this.calculateResult.bind(this);
        this.reset = this.reset.bind(this);
    }

    // your code here
    setNum1(e) {
        e.preventDefault();
        this.setState({ num1: e.target.value });
    }

    setNum2(e) {
        e.preventDefault();
        this.setState({ num2: e.target.value });
    }

    calculateResult(e) {
        e.preventDefault();
        let num1 = Number(this.state.num1);
        let num2 = Number(this.state.num2);
        let result;
        switch (e.target.textContent) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }
        this.setState({ result: result});
    }

    reset(e) {
        e.preventDefault();
        this.setState({
            result: 0,
            num1: "",
            num2: ""
        });
    }

    render() {
        const {result, num1, num2} = this.state;
        return (
            <div>
                <h1>{result}</h1><br />
                <input
                    type="text"
                    value={num1}
                    onChange={this.setNum1}/>
                <input
                    type="text"
                    value={num2}
                    onChange={this.setNum2} />
                <button onClick={this.reset}>Clear</button><br />
                <button onClick={this.calculateResult}>+</button>
                <button onClick={this.calculateResult}>-</button>
                <button onClick={this.calculateResult}>*</button>
                <button onClick={this.calculateResult}>/</button>
            </div>
        );
    }
}

export default Calculator;