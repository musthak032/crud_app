
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Detail from './Detail';
import Edit from './Edit';



function App() {

  



 

  return (
    <div className="App">
      <h1> CRUD OPERATION</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path="/crud_app" element={<Home />}></Route>
          <Route path="/crud_app/create" element={<Create />}></Route>
          <Route path="/crud_app/:detailid" element={<Detail />}></Route>
          
          <Route path="/crud_app/edit/:editid" element={<Edit />}></Route>

        </Routes>
      </BrowserRouter>

    
    </div>
  );
 
}

export default App;
