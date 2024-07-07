import { useState } from 'react';
import TaskTable from './TaskTable';
import 'bootstrap/dist/css/bootstrap.css';

const initialTasks = [
    {id: 1, name: 'Étude de marché', status: 'Completed', progress: 100},
    {id: 2, name: 'Écriture des spécifications', status: 'In Progress', progress: 91},
    {id: 3, name: 'Design du produit', status: 'In Progress', progress: 67},
    {id: 4, name: 'Développement', status: 'In Progress', progress: 42},
    {id: 5, name: 'Tests', status: 'In Progress', progress: 0},
    {id: 6, name: 'Marketing et vente', status: 'To Do', progress: 0}
];

const TaskManager = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [filter, setFilter] = useState(null);
    const [isSorted, setIsSorted] = useState(false);

    const sortByName = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
        setTasks(sortedTasks);
        setIsSorted(true);
    };

    const filterByStatus = (status) => {
        setFilter(status);
    };

    const resetFilter = () => {
        setFilter(null);
        setTasks(initialTasks);
        setIsSorted(false);
    };

    const calculateAverageProgress = () => {
        const filteredTasks = getFilteredTasks();
        const totalProgress = filteredTasks.reduce((acc, task) => acc + task.progress, 0);
        return totalProgress / filteredTasks.length;
    };

    const getFilteredTasks = () => {
        let filteredTasks = tasks;
        if (filter) {
            filteredTasks = tasks.filter(task => task.status === filter);
        }
        return filteredTasks;
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Task Manager</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Task Manager</h1>
            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-primary mb-2 mr-2" onClick={sortByName}>Sort by name</button>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                    <button className="btn btn-secondary mb-2 mr-2" onClick={() => filterByStatus('To Do')}>To Do</button>
                    <button className="btn btn-secondary mb-2 mr-2" onClick={() => filterByStatus('In Progress')}>In Progress</button>
                    <button className="btn btn-secondary mb-2 mr-2" onClick={() => filterByStatus('Completed')}>Completed</button>
                </div>
                <button className="btn btn-warning" onClick={resetFilter}>Reset filter</button>
            </div>
            <TaskTable tasks={getFilteredTasks()} />
            <div className="mt-3 text-center">
                <h4>Average progress: {calculateAverageProgress()}%</h4>
            </div>
        </div>
        </>
    );
};

export default TaskManager;