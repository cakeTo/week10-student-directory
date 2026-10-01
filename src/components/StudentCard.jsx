function StudentCard({ name, major, score }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{major}</p>
      <p>
        {score} ·{" "}
        <span className={score >= 60 ? "passed" : "failed"}>
          {score >= 60 ? "Passed" : "Failed"}
        </span>
      </p>
    </div>
  );
}

export default StudentCard;