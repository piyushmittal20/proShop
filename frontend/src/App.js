import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => (
  <>
    <Header />
    <main className='py-3'>
      <Container>
        <Switch>
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeScreen} />
        </Switch>
      </Container>
    </main>
    <Footer />
  </>
)

export default App;
