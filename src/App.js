import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { CharacterDetailView, Home } from './views';
import { ErrorBoundary } from "react-error-boundary";
import { FallBack } from './components';


function App() {

    const errorHandler = (error, errorInfo) => {
        console.log("errorHandler", error, errorInfo);
    }

    return (
        <>
            <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/characters/:id/:name" element={<CharacterDetailView />} />
                </Routes>
            </ErrorBoundary>
        </>
    );
}

export default App;
