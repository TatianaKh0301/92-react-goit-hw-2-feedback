import React from "react";
import Notification from "components/Notification/Notification";
import { StatisticsWrapper, StatisticsInfo } from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, perсentageGood}) => {
    return(
        <div>
            {total > 0 ? <StatisticsWrapper>
                            <StatisticsInfo>Good: <span>{good}</span></StatisticsInfo>
                            <StatisticsInfo>Neutral: <span>{neutral}</span></StatisticsInfo>
                            <StatisticsInfo>Bad: <span>{bad}</span></StatisticsInfo>
                            <StatisticsInfo>Total:<span>{total}</span></StatisticsInfo>
                            <StatisticsInfo>Perсent good:<span>{perсentageGood}%</span></StatisticsInfo>
                        </StatisticsWrapper>
                  : <Notification message="There is no feedback"/>}                       
        </div>
    );
}

export default Statistics;
