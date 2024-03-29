import CardList from './CardList';
import NavBar from './NavBar';
import Overview from './Overview';
import SearchBox from './SearchBox';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <header>
        <NavBar />
        <SearchBox />
      </header>
      <main>
        <CardList />
        <section className='middle'>
          <Overview />
        </section>
        <section className='bottom'></section>
      </main>
    </div>
  );
}

export default Dashboard;
