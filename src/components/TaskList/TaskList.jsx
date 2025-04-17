import { Button, Item, List, Text } from "./TaskList.styled"


export const TaskList = ({ todos, onDeleteToDo }) => (
    <List>
        {todos.map(({id, text}) => {
            return <Item key={id}>
                <Text>{text}</Text>
                <Button onClick={() => onDeleteToDo(id)}>Completed</Button>
            </Item>
        })}
    </List>
)