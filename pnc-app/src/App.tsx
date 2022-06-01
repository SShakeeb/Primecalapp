import React from "react";
import './App.css';
import {
  Container
} from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import InputModal from './scenes/InputModal';
function App() {
  return (
    <div>
      <h1 className='App'>Check Prime Number</h1>
      <Container><RoutingComponent /></Container>
    </div>
  );
}

function RoutingComponent() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path='/scenes/InputModal' element={<InputModal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;