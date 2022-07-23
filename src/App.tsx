import React from 'react';
import { Router } from './react-router';
import { Routes } from './react-router';
import { Route } from './react-router';
import { User } from './pages/User';
import { Home } from './pages/Home';
import { Board } from './pages/Board';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/board" element={<Board />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
