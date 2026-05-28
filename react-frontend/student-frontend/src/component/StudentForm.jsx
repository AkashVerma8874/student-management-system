import { useEffect, useState } from "react";

function StudentForm({
    onSubmit,
    selectedStudent
}) {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        branch: "",
        marks: ""
    });

    useEffect(() => {

        if(selectedStudent){

            setStudent(selectedStudent);
        }

    }, [selectedStudent]);

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(student);

        setStudent({
            name: "",
            email: "",
            branch: "",
            marks: ""
        });
    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={student.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={student.email}
                onChange={handleChange}
            />

            <input
                type="text"
                name="branch"
                placeholder="Enter Branch"
                value={student.branch}
                onChange={handleChange}
            />

            <input
                type="number"
                name="marks"
                placeholder="Enter Marks"
                value={student.marks}
                onChange={handleChange}
            />

            <button type="submit">

                {
                    selectedStudent
                    ? "Update Student"
                    : "Add Student"
                }

            </button>

        </form>
    );
}

export default StudentForm;