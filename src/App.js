
import './App.scss';
import Header from './components/header/header';
import { Outlet } from "react-router-dom";



const App = () => {


  return (

    <div className="app-container">
      <div className='header-container'>


        <Header />

        <div className='main-container'>

        </div>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <Outlet />
        </div>

      </div>
    </div>

  );
}
export default App;
