import { MdDelete } from "react-icons/md";
import './index.css';

const TodoItem = (props) => {
    const { todoDetails, onClickDeleteItem } = props;
    const { text, status, id } = todoDetails;

    const onClickDeleteIcon = () => {
        onClickDeleteItem(id); 
    };

    return (
        <li className="todo-item">
            <p className="todo-item-input">{text}</p>
            <p className="todo-status">{status}</p>
            <MdDelete onClick={onClickDeleteIcon} className="delete-icon"/> 
        </li>
    );
};

export default TodoItem;
