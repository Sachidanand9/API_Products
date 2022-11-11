import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Product';
import useToken from './useToken';
import LogIn from './Components/LogIn';
import NavBar from './Components/Nav';




function App() {
  const { token, setToken } = useToken();
 
  if(!token) {
        return (
      <LogIn setToken={setToken}/>
    )    
  }
  if(token){
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      <Route eaxact path='/home' element={<HomePage />} />
    </Routes>
  </div>
  );
}
}



export default App;