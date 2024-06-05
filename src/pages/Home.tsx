import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonText } from '@ionic/react';
import './Home.css'; // Import custom CSS
import { vehicleData } from '../utils/data';
import ProductCard from '../components/ProductCard/ProductCard';
import { useHistory } from 'react-router';

const Home: React.FC = () => {

  const history = useHistory();

  const goToProductDetail = (name: string) => {
    history.push(`/productdetail/${name}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Car Website</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h2>Welcome to Our Website</h2>
          <IonImg src={'https://t4.ftcdn.net/jpg/06/13/61/41/360_F_613614157_42biJRsRnBM8S2rhUMT9ZG8IETHi0pxr.jpg'} />
          <p>
            This website is dedicated to providing detailed information about various cars.
            Browse through our collection to find the perfect car for you.
          </p>
        </IonText>

        <IonText>
          <h3>Our Collection</h3>
        </IonText>

        {vehicleData.map((car, index) => (
           <div onClick={() => goToProductDetail(car.name)} key={index}>
          <ProductCard  car={car} />
           </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;