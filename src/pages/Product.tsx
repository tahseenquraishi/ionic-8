import React from 'react';
import { IonContent, IonHeader, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ProductCard from '../components/ProductCard/ProductCard';
import { vehicleData } from '../utils/data';
import { useHistory } from 'react-router';
import useSearch from '../customHooks/useSearch';


const Product: React.FC = () => {

    const history = useHistory();
    const { searchTerm, filteredData, handleSearch } = useSearch(vehicleData);

    const goToProductDetail = (name: string) => {
      history.push(`/productdetail/${name}`);
    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Car Listings</IonTitle>
        </IonToolbar>
      </IonHeader>

     
      <IonContent className='ion-padding'>

      <IonSearchbar
          value={searchTerm}
          onIonInput={(e) => {handleSearch(e.detail.value!)}}
          debounce={300}
          placeholder="Search for cars"
        />
      <IonText>
          <h3>Our Collection</h3>
        </IonText>
        {filteredData.map((car, index) => (
          <div key={index} onClick={() => goToProductDetail(car.name)}>
            <ProductCard car={car} />
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Product;