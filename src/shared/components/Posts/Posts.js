import "./style.css";

export function Posts({ data, onRemove = console.log, onEdit = console.log }) {
  return (
    <ul className="posts-container">
      {data.map((item) => {
        const { id, text, title } = item;

        return (
          <li key={id}>
            <div className="post-container">
              <span className="post-title">{title}</span>
              <div className="post-body">
                <textarea
                  value={text}
                  onChange={(e) => {
                    onEdit(id, e.target.value);
                  }}
                />

                <button type="button" onClick={() => onRemove(id)}>
                  remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
