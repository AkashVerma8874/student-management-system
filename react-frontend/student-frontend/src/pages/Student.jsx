import { useEffect, useState } from "react";
import DashboardCards
from "../component/DashboardCards";
import {
    getStudents,
    deleteStudent
} from "../services/studentService";

function Students({ onEdit, refresh }) {

    const [students, setStudents] = useState([]);

    const [searchTerm, setSearchTerm] =
        useState("");

    // Fetch Students
    const fetchStudents = async () => {

        try {

            const response = await getStudents();

            setStudents(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    // Delete Student
    const removeStudent = async (id) => {

        try {

            await deleteStudent(id);

            fetchStudents();

        } catch (error) {

            console.log(error);
        }
    };

    // Load Students
    useEffect(() => {

        fetchStudents();

    }, [refresh]);

    // Filter Students
    const filteredStudents = students.filter(
        (student) =>

            student.name
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )
    );

    return (

        <div className="student-section glass-card">

            <h2>Student List</h2>
            <DashboardCards
                students={filteredStudents}
            />
            {/* Search Input */}

            <input
                type="text"
                placeholder="Search Student By Name..."

                value={searchTerm}

                onChange={(e) =>
                    setSearchTerm(e.target.value)
                }

                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "20px",
                    borderRadius: "14px",
                    border: "none",
                    outline: "none",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    fontSize: "15px"
                }}
            />

            {
                filteredStudents.length === 0 ? (

                    <p>No Students Found</p>

                ) : (

                    <table>

                        <thead>

                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Branch</th>
                                <th>Marks</th>
                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                filteredStudents.map((student) => (

                                    <tr key={student.id}>

                                        <td>{student.name}</td>

                                        <td>{student.email}</td>

                                        <td>{student.branch}</td>

                                        <td>{student.marks}</td>

                                        <td
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                justifyContent: "center"
                                            }}
                                        >

                                            <button
                                                style={{
                                                    background:
                                                    "#3b82f6",

                                                    color: "white",

                                                    border: "none",

                                                    padding:
                                                    "10px 16px",

                                                    borderRadius:
                                                    "10px",

                                                    cursor: "pointer"
                                                }}

                                                onClick={() =>
                                                    onEdit(student)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="delete-btn"

                                                onClick={() =>
                                                    removeStudent(student.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                )
            }

        </div>
    );
}

export default Students;