import { Routes, Route } from 'react-router-dom';
import WelcomePage from './app/pages/WelcomePage/WelcomePage';
import HomePage from './app/pages/Home/Home';
import AddEntry from './app/pages/AddEntry/AddEntry';
import Gallery from './app/pages/Gallery/Gallery';
import SingleEntry from './app/pages/SingleEntry/SingleEntry';
import EditEntry from './app/pages/EditEntry/EditEntry';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddEntry />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:date" element={<SingleEntry />} />
        <Route path="/edit/:date" element={<EditEntry />} />
      </Routes>
    </div>
  );
}

export default App;
