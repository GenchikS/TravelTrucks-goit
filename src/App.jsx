// import { useState } from 'react'
import { Suspense } from 'react';
import './App.css'
import Layout from './components/Layout/Layout.jsx';
import HomePage from "./pages/HomePage/HomePage.jsx"
import { Route, Routes } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Layout>
        <Suspense fallback={null}></Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App
