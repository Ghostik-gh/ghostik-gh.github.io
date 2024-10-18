import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard/ProductCard';

function HomePage() {
  return (
    <>
      <Header />
      <div className="card">
        <h1>Furniture</h1>
        <p>
          It's just <code>HomePage.tsx</code>
        </p>
      </div>
      <ProductCard title="Card Title" price={100} imageUrl='/vite.svg' />
      <Footer />
    </>
  );
}

export default HomePage;
