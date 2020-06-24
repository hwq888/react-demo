import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodos } from "../../../store/selectors";
import {toggleTodo} from "../../../store/actions";

const TodoList = ({ todos,toggleTodo }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} toggleTodo={toggleTodo} />;
        })
      : "No todos, yay!"}
  </ul>
);

// const mapStateToProps = state => {
//     const { byIds, allIds } = state.todos || {};
//     const todos =
//         allIds && allIds.length
//             ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//             : null;
//     return { todos };
// };

// export default TodoList;
// export default connect(mapStateToProps)(TodoList);
export default connect(
    state => ({ todos: getTodos(state) }),
    { toggleTodo })(TodoList);
