// src/components/Header.tsx
import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { useLocation } from 'react-router';

const Header: React.FC = () => {
    const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/home':
        return 'Car App';
      case '/about':
        return 'About';
      case '/product':
        return 'Product';
        case '/profile':
        return 'Profile';
      case '/contact':
        return 'Contact';
      case location.pathname.match(/^\/productdetail\/.+$/)?.input:
        return 'Product Detail';
      default:
        return 'Car App';
    }
  };


  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{getTitle()}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;