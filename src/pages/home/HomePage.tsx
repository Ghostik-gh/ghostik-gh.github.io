import Header from '../../components/Header';
import Footer from '../../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <div className="card">
        <h1>Furniture</h1>
        <p>
          It's just <code>HomePage.jsx</code>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
