import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="overlay" data-overlay data-nav-toggler></div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
