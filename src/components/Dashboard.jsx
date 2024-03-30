import CardList from './CardList';
import NavBar from './NavBar';
import Overview from './Overview';
import SearchBox from './SearchBox';
import './Dashboard.css';
import Customers from './Customers';
import ProductSell from './ProductSell';

function Dashboard() {
  return (
    <div className='dashboard'>
      <header className='header'>
        <NavBar />
        <SearchBox />
      </header>
      <main>
        <CardList />
        <section className='hero-section'>
          <Overview />
          <Customers />
        </section>
        <section className='footer-section'>
          <ProductSell />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
