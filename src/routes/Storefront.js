import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product, addToCart }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/item/${product.id}`}>
        {imageError ? (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Image not available</span>
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover" 
            onError={handleImageError}
          />
        )}
      </Link>
      <div className="p-4">
        <Link to={`/item/${product.id}`} className="font-bold mb-2 hover:text-blue-500">{product.name}</Link>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Storefront = () => {
  const { dispatch } = useCart();
  
  const featuredProducts = [
    { id: 1, name: 'Luxury Dog Bed', price: 129.99, image: '/api/placeholder/300/200' },
    { id: 2, name: 'Gourmet Treats', price: 24.99, image: '/api/placeholder/300/200' },
    { id: 3, name: 'Interactive Toy', price: 39.99, image: '/api/placeholder/300/200' },
    { id: 4, name: 'Stylish Collar', price: 19.99, image: '/api/placeholder/300/200' },
  ];

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Suprise your favorite pet</h2>
          <p className="text-xl mb-8">Discover fun items for your furry friend</p>
          <Link 
            to="/all-products" 
            className="bg-white text-purple-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/all-products" 
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Storefront;