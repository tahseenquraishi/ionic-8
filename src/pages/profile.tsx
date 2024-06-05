import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonList, IonItem } from '@ionic/react';
import './profile.css'; // Import custom CSS

const userData = {
  avatar: "https://qph.cf2.quoracdn.net/main-qimg-6e8e7d415afe917d6045a75b20f78af0-lq",
  name: "John Doe",
  gender: "Male",
  dob: "01/01/1985",
  email: "john.doe@example.com",
  number: "+1234567890"
};

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="profile-header">
          <IonAvatar className="profile-avatar">
            <img src={userData.avatar} alt="Profile Avatar" />
          </IonAvatar>
          <IonLabel className="profile-name">{userData.name}</IonLabel>
        </div>
        <IonList>
          <IonItem>
            <IonLabel>
              <h3>Gender</h3>
              <p>{userData.gender}</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Date of Birth</h3>
              <p>{userData.dob}</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Email</h3>
              <p>{userData.email}</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>Phone Number</h3>
              <p>{userData.number}</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
