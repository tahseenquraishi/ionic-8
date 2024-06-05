import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';

interface ProductCardProps {
  car: {
    name: string;
    price: string;
    model: string;
    image: string;
    fuelType: string;
    transmission: string;
    mileage: string;
    color: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ car }) => {
  return (
    <IonCard>
      <IonImg src={car.image} />
      <IonCardHeader>
        <IonCardTitle>{car.name}</IonCardTitle>
        <IonCardSubtitle>{car.model}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p><strong>Price:</strong> {car.price}</p>
        <p><strong>Fuel Type:</strong> {car.fuelType}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Mileage:</strong> {car.mileage}</p>
        <p><strong>Color:</strong> {car.color}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;