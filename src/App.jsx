import { useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";
import Footer from "./components/Footer";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ana",  major: "IT", score: 82 },
    { id: 2, name: "Boon", major: "CS", score: 58 },
    { id: 3, name: "Chai", major: "IT", score: 74 },
    { id: 4, name: "Dara", major: "CS", score: 91 },
    { id: 5, name: "Eve",  major: "IT", score: 55 }
  ]);

  // Immutable Add (Spread operator)
  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  // Immutable Delete (Filter method)
  function handleDeleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div className="page">
      <Header />
      <AddStudentForm onAdd={handleAddStudent} />
      <main className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            major={student.major}
            score={student.score}
            onDelete={handleDeleteStudent}
          />
        ))}
      </main>
      <Footer count={students.length} />
    </div>
  );
}

export default App;