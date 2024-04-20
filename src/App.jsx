import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Columns from './components/Columns';
import { TaskProvider } from './context/TaskContext'; // Import TaskProvider from TaskContext.jsx

import './App.css';

function App() {
    const { columnName } = useParams(); // Access columnName from the route

    return (
        <TaskProvider>
            <div>
                <Header />
                {/* Pass the columnName to the Columns component */}
                <Columns columnName={columnName} />
            </div>
        </TaskProvider>
    );
}

export default App;
