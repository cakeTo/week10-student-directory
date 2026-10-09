function StudentCard({ id, name, major, score, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Major: {major}</p>
      <p>
        Score: {score} ·{" "}
        <span className={score >= 60 ? "passed" : "failed"}>
          {score >= 60 ? "Passed" : "Failed"}
        </span>
      </p>
      <button onClick={() => onDelete(id)} style={{ marginTop: "10px", cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;