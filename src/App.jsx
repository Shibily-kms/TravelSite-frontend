import './App.scss';
import { Routes, Route } from 'react-router-dom'
import User from './routes/User';
import Admin from './routes/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<User />} path='/*' />
        <Route element={<Admin />} path="/admin/*" />
      </Routes>
    </div>
  );
}

export default App;
