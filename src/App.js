import { useState, useEffect, useContext } from 'react';

// COMPONENTS
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Main from './Components/Main';
import Footer from './Components/Footer';

// ICONS
import { IoArrowUpOutline } from 'react-icons/io5';
import MenuContext, { MenuProvider } from './Components/MenuContext';

function App() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { isMenuActive } = useContext(MenuContext);

  return (
    <MenuProvider>
      <div>
        <Header />
        <SideBar />
        <Main />
        <Footer />
        <a
          href="#top"
          className={`back-top-btn active`}
          aria-label="back to top"
        >
          <IoArrowUpOutline className="icon" aria-hidden="true" />
        </a>
      </div>
    </MenuProvider>
  );
}

export default App;
