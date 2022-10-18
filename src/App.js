import Card from './componets/Card';
import HeroSection from './componets/HeroSection';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App h-full w-screen ">
      <header className="App-header h-full">
        <Navbar />
        <HeroSection />
      </header>
      <main className="card-group flex justify-center flex-wrap w-7/8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
