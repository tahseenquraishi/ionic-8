import React from 'react';
import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar, IonAvatar, IonLabel, IonFooter, IonButton } from '@ionic/react';
import './Menu.css'; // Import custom CSS
import { useHistory } from 'react-router';

const Menu: React.FC = () => {
    const history = useHistory();

    const goToProfile = () => {
      history.push(`/profile`);
    };

    const handleLogout = () => {
        // Handle logout logic
        console.log('User logged out');
      };
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonMenuToggle>
        <div className="profile-section" onClick={goToProfile}>
          <IonAvatar className="profile-avatar">
            <img src="https://qph.cf2.quoracdn.net/main-qimg-6e8e7d415afe917d6045a75b20f78af0-lq" alt="Profile" />
          </IonAvatar>
          <IonLabel className="profile-name">John Doe </IonLabel> 
        </div>
        </IonMenuToggle>
       
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/home" routerDirection="root">Home</IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/product">Product</IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/about">About</IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/contact">Contact</IonItem>
          </IonMenuToggle>
        </IonList>

       
      </IonContent>
      <IonFooter>
        <IonButton expand="full" color="danger" onClick={handleLogout}>Logout</IonButton>
      </IonFooter>
    </IonMenu>
  );
};

export default Menu;
