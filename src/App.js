import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import MapGallery from './components/MapGallery';
import OfferNearYou from './components/OfferNearYou';
import RestaurantAbout from './components/RestaurantAbout';
import RestaurantAddress from './components/RestaurantAddress';
import RestaurantMeals from './components/RestaurantMeals';
import RestaurantReviews from './components/RestaurantReviews';
import RestaurantTabs from './components/RestaurantTabs';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <RestaurantTabs />
      <RestaurantAddress />
      <RestaurantMeals />
      <RestaurantAbout />
      <MapGallery />
      <RestaurantReviews />
      <OfferNearYou />
      <Footer />
    </div>
  );
}

export default App;
