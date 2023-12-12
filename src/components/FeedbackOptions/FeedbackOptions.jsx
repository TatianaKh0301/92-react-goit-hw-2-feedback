import { Button, ListItem, ListWrapper } from "./FeedbackOptions.styled";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ListWrapper>
            {options.map(option => (
                <ListItem key={option}>
                    <Button type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
                </ListItem>
            ))}
        </ListWrapper>
    );
};

export default FeedbackOptions;