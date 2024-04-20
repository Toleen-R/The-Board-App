import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

ReactDOM.createRoot(document.getElementById('root')).render(
   
        <Router>
            <Routes>
                <Route path="/" element={<App />}></Route>
                {/* Dynamically create routes for each column */}
                <Route path='/:columnName' element={<App />}></Route>
            </Routes>
        </Router>
    
);
