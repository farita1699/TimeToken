import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Home';
import Navibar from './Navibar';
import Pomo from './Pomo';
import Dashboard from './Dashborad';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app bg-slate-200">
        <Navibar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pomodoro' element={<Pomo/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
