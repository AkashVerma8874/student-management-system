function DashboardCards({ students }) {

    // Total Students
    const totalStudents = students.length;

    // Average Marks
    const averageMarks =
        students.length > 0

        ? (
            students.reduce(
                (total, student) =>
                    total + student.marks,

                0
            ) / students.length
        ).toFixed(2)

        : 0;

    // Top Performer
    const topPerformer =
        students.length > 0

        ? students.reduce(
            (top, student) =>

                student.marks > top.marks
                ? student
                : top
        )

        : null;

    return (

        <div className="cards-container">

            {/* Total Students */}

            <div className="dashboard-card">

                <h3>Total Students</h3>

                <p>{totalStudents}</p>

            </div>

            {/* Average Marks */}

            <div className="dashboard-card">

                <h3>Average Marks</h3>

                <p>{averageMarks}</p>

            </div>

            {/* Top Performer */}

            <div className="dashboard-card">

                <h3>Top Performer</h3>

                <p>
                    {
                        topPerformer
                        ? topPerformer.name
                        : "N/A"
                    }
                </p>

            </div>

        </div>
    );
}

export default DashboardCards;