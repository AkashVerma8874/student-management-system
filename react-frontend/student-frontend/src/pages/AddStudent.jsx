import StudentForm from "../component/StudentForm";

import {
    addStudent,
    updateStudent
} from "../services/studentService";

function AddStudent({
    selectedStudent,
    refreshStudents
}) {

    const saveStudent = async (student) => {

        try {

            if(selectedStudent){

                await updateStudent(
                    selectedStudent.id,
                    student
                );

                alert("Student Updated");

            }else{

                await addStudent(student);

                alert("Student Added");
            }

            refreshStudents();

        } catch (error) {

            console.log(error);

            alert("Operation Failed");
        }
    };

    return (

        <div className="form-section glass-card">

            <h2>

                {
                    selectedStudent
                    ? "Update Student"
                    : "Add Student"
                }

            </h2>

            <StudentForm
                onSubmit={saveStudent}
                selectedStudent={selectedStudent}
            />

        </div>
    );
}

export default AddStudent;