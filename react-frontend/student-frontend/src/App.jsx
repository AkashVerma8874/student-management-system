import { useState } from "react";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Student";

function App() {

    const [selectedStudent, setSelectedStudent] =
        useState(null);

    const [refresh, setRefresh] =
        useState(false);

    // Refresh Students
    const refreshStudents = () => {

        setRefresh(!refresh);
    };

    return (

        <div className="container">

            <Home />

            <div className="dashboard">

                <AddStudent
                    selectedStudent={selectedStudent}
                    refreshStudents={refreshStudents}
                />

                <Students
                    onEdit={setSelectedStudent}
                    refresh={refresh}
                />

            </div>

        </div>
    );
}

export default App;