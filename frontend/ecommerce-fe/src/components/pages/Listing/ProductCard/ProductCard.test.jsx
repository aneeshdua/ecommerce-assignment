import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const product = {
    id: 1,
    imageUrl: 'https://example.com/image.jpg',
    title: 'Example Product',
    description: 'Lorem ipsum',
    price: 9.99,
    rating: 4.5,
  };

  it('renders product details correctly', () => {
    render(<ProductCard {...product} />);
    
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });

  it('renders product image', () => {
    render(<ProductCard {...product} />);
    
    const productImages = screen.getAllByRole('img');
    expect(productImages.some(image => image.getAttribute('src') === product.imageUrl)).toBeTruthy();
  });

  // Add more test cases as needed
});