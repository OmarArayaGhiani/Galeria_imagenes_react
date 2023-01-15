import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Assets/Components/Header'
import ImagesCarousel from './Assets/Components/Carousel'
import ImagesCards from './Assets/Components/Cards'
import Footer from './Assets/Components/Footer'

function App() {
  return (
    <div>
      <Header title="Galería de imágenes de Heartstone con React" />
      <ImagesCarousel />
      <ImagesCards />
      <Footer />  
    </div>
  );
}

export default App;
