import HeroSection from './componets/HeroSection';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App h-screen">
      <header className="App-header h-full">
        <Navbar />
        <HeroSection />
      </header>
    </div>
  );
}

export default App;
