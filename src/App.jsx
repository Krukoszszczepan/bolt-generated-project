import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaseList from './components/CaseList';
import CaseDetails from './components/CaseDetails';
import NewCaseForm from './components/NewCaseForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<CaseList />} />
            <Route path="/cases/new" element={<NewCaseForm />} />
            <Route path="/cases/:id" element={<CaseDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
