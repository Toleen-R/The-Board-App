import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Columns from './components/Columns';
import { TaskProvider } from './context/TaskContext'; 

import './App.css';

function App() {
    const { columnName } = useParams(); 

    return (
        <TaskProvider>
            <div>
                <Header />
                <Columns columnName={columnName} />
            </div>
        </TaskProvider>
    );
}

export default App;
