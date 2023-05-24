import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import PenjajahanBelandaPage from './pages/PenjajahanBelandaPage';
import PenjajahanJepangPage from './pages/PenjajahanJepangPage';
import QuizPage from './pages/QuizPage';
import KemerdekaanPage from './pages/KemerdekaanPage';
function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/penjajahanbelanda" Component={PenjajahanBelandaPage} />
        <Route path="/penjajahanjepang" Component={PenjajahanJepangPage} />
        <Route path="/kemerdekaan" Component={KemerdekaanPage} />
        <Route path="/quiz" Component={QuizPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
