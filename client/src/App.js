import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import StudentTable from './components/StudentTable';
import StudentDetails from './pages/StudentDetails';
import PNF from './pages/PNF';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />}></Route>
          <Route path='/students' element={<StudentTable />}></Route>
          <Route path='/student/:userId' element={<StudentDetails />}></Route>
        </Route>
        <Route path='*' element={<PNF />} />
      </Routes>

    </>
  );
}

export default App;

