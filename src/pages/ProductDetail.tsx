import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonText,
} from "@ionic/react";
import { useParams } from "react-router";
import { vehicleData } from "../utils/data";

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

const ProductDetail: React.FC<ProductCardProps> = () => {
  const { name } = useParams<{ name: string }>();
  const car = vehicleData.find((car) => car.name === name);

  if (!car) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Car Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Car not found</p>
        </IonContent>
      </IonPage>
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Car Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonImg src={car.image} />
        <IonText>
          <h2>{car.name}</h2>
          <p>
            <strong>Model:</strong> {car.model}
          </p>
          <p>
            <strong>Price:</strong> {car.price}
          </p>
          <p>
            <strong>Fuel Type:</strong> {car.fuelType}
          </p>
          <p>
            <strong>Transmission:</strong> {car.transmission}
          </p>
          <p>
            <strong>Mileage:</strong> {car.mileage}
          </p>
          <p>
            <strong>Color:</strong> {car.color}
          </p>
          <p>
            <strong>Detail:</strong>{" "}
          </p>
          <p>
            Cars have transformed our world, evolving from simple horse-drawn
            carriages to complex machines that are essential to modern life.
            They come in various shapes and sizes, from compact city cars to
            large SUVs and trucks. The car industry is a dynamic field,
            continuously innovating with advancements in technology, design, and
            engineering.
          </p>
          <p>
            The primary types of cars include sedans, hatchbacks, SUVs, coupes,
            and convertibles. Each type serves different purposes, from daily
            commuting to luxury experiences. Sedans offer a balance of comfort
            and efficiency, making them popular among families and
            professionals. Hatchbacks, with their versatile cargo space, appeal
            to urban dwellers and small families.
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
