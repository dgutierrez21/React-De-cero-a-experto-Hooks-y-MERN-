export const TodoItem = ({
  todo: { description, id, done },
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between ">
      <span
        role="button"
        className={`align-self-center ${
          done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(id)}
        data-testid="span"
      >
        {description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(id)}
        data-testid="btnBorrar"
      >
        Borrar
      </button>
    </li>
  );
};
