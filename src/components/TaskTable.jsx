import PropTypes from 'prop-types';

const TaskTable = ({ tasks }) => {
    console.log(tasks); 
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Progress</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.status}</td>
                        <td>{task.progress}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TaskTable.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            progress: PropTypes.number.isRequired
        })
    ).isRequired
};

export default TaskTable;