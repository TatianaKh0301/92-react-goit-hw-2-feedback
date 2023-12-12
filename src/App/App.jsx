import { Component } from "react";
import { AppWrap } from "./App.styled";
class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,       
    }

    addFeedback = (option) => {
        this.setState(prevState => (
            {[option]: prevState[option] + 1,}
        ));
    };

    totalFeedbackCount = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    render() {
        const totalCount = this.totalFeedbackCount();
        const options = Object.keys(this.state);
        return (
            <AppWrap>
                <h1 className="feedbackTitle">Please leave feedback</h1>
                <button type="button" onClick={() => this.addFeedback(options)}>Good</button>
                <button type="button" onClick={this.addFeedback}>Neutral</button>
                <button type="button" onClick={this.addFeedback}>Bad</button>
                
                <div>
                    <h2>Statistics</h2>
                    <p>{this.state.good}</p>                
                    <p>{this.state.neutral}</p>                
                    <p>{this.state.bad}</p>
                    <p>Total: {totalCount}</p>
                    <p>Positive feedback:</p>
                </div>
            </AppWrap>
        );
    }
};

export default App;
