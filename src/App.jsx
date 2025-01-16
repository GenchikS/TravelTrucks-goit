// import { useState } from 'react'
import { Suspense } from 'react';
import './App.css'
import Layout from './components/Layout/Layout.jsx';
import HomePage from "./pages/HomePage/HomePage.jsx"
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog.jsx';


function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={null}></Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App
