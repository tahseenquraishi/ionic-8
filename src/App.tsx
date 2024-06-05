import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



/* Theme variables */
import './theme/variables.css';
import './global.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/profile';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <Menu />
        <div id="main-content">
          <Header />
          <div className="body-area">
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/About" component={About} exact={true} />
            <Route path="/Product" component={Product} exact={true} />
            <Route path="/Contact" component={Contact} exact={true} />
            <Route path="/Profile" component={Profile} exact={true} />
            <Route path="/productdetail/:name" component={ProductDetail} exact={true} />
          </IonRouterOutlet>
          </div>
          
        </div>
    </IonReactRouter>
  </IonApp>
);

export default App;
