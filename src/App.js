// COMPONENTS
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Main from './Components/Main';
import Footer from './Components/Footer';

// ICONS
import { IoArrowUpOutline } from 'react-icons/io5';

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <div className={`overlay`} data-overlay data-nav-toggler></div>
      <Main />
      <Footer />
      <a href="#top" className={`back-top-btn`} aria-label="back to top">
        <IoArrowUpOutline className="icon" aria-hidden="true" />
      </a>
    </div>
  );
}

export default App;
