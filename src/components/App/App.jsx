import { Component } from "react";
import Section from "Section/Section";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import { AppWrap } from "./App.styled";
class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,       
    }

    addFeedback = (option) => {
        this.setState(prevState =>({[option]: prevState[option] + 1}));
    };

    totalFeedbackCount = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    percentageGoodCount = () => {
        return Number(((this.state.good / this.totalFeedbackCount()) * 100).toFixed(0))
    }

    render() {
        const totalCount = this.totalFeedbackCount();
        const percentageGood = this.percentageGoodCount();
        const options = Object.keys(this.state);
        return (
            <AppWrap>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        options={options}
                        onLeaveFeedback={this.addFeedback}
                    />
                </Section>
              
                <Section title="Statistic"> 
                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalCount} perсentageGood={percentageGood}/>                
                </Section>
            </AppWrap>
        );
    }
};

export default App;
