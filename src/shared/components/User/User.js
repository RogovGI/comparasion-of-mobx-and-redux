import "./style.css";

export function User({ name }) {
  return (
    <div className="user-name-container" title="User name">
      <span className="user-name">Leave a comment on behalf of: {name}</span>
    </div>
  );
}
