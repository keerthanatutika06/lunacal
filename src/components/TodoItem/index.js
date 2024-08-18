import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './index.css';

const TodoItem = (props) => {
    const { todoDetails, onClickDeleteItem, statusClassName } = props;
    const { text, status, id, todoId } = todoDetails;

    const [isActive, setIsActive] = useState(false); 

    const onClickDeleteIcon = () => {
        onClickDeleteItem(id); 
    };

    const onClickTodo = () => {
        setIsActive(!isActive); 
    };

    
    const activeCheckboxClassName = isActive ? 'active todo-text' : 'todo-text';

    return (
        <tr className="todo-item">
            <td className="sub-small-item todo-id">{todoId}</td>
            <td className="sub-small-item todo-checkbox-item">
                <input
                    type="checkbox"
                    className="todo-box"
                    onClick={onClickTodo} 
                />
            </td> 
            <td className={`sub-item ${activeCheckboxClassName}`}>{text}</td>
            <td className={`sub-item todo-status ${statusClassName}`}>{status}</td>
            <td><FaEdit className="sub-item edit-icon" /></td>
            <td><MdDelete onClick={onClickDeleteIcon} className="sub-item delete-icon" /></td>
        </tr>
    );
};

export default TodoItem;
