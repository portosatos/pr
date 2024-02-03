import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { useCart } from '../../components/CartContext';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../../components/nav/Nav"
import Cart from './Cart';

interface Item {
  id: number;
  thumbnailUrl: string;
  title: string;
  price: number;
  label: string;
  date: {
    year: number;
    month: number;
    day: number;
  };
}

function Shop() {
  const { addToCart } = useCart();
  const [data, setData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [_, setCartItems] = useState<Item[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const itemsPerPage = 12;

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        const modifiedData: Item[] = response.data.map((item: any) => ({
          id: item.id,
          thumbnailUrl: item.thumbnailUrl,
          title: item.title,
          price: Math.floor(Math.random() * (200 - 100 + 1)) + 100,
          label: Math.random() < 0.5 ? 'old' : 'new',
          date: {
            year: Math.floor(Math.random() * (2024 - 2006 + 1)) + 2006,
            month: Math.floor(Math.random() * 12) + 1,
            day: Math.floor(Math.random() * 31) + 1,
          },
        }));
        setData(modifiedData);
      })
      .catch((error) => console.error(error));
  }, []);

  const totalPages: number = Math.ceil(data.length / itemsPerPage);
  const pagesToShow: number = 6;
  const halfPagesToShow: number = Math.floor(pagesToShow / 2);

  const getPaginationRange = (): number[] => {
    const startPage: number = Math.max(1, currentPage - halfPagesToShow);
    const endPage: number = Math.min(totalPages, startPage + pagesToShow - 1);
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  let currentItems: Item[] = data.slice(indexOfFirstItem, indexOfLastItem);

  const sortOptions: Record<string, string> = {
    '': 'Sort by',
    priceHigh: 'Price High',
    priceLow: 'Price Low',
    new: 'New',
    old: 'Old',
    titleAZ: 'Title A-Z',
    titleZA: 'Title Z-A',
    dateNewest: 'Date Newest',
    dateOldest: 'Date Oldest',
  };

  const sortItems = (): Item[] => {
    switch (sortBy) {
      case 'priceHigh':
        return [...currentItems].sort((a, b) => b.price - a.price);
      case 'priceLow':
        return [...currentItems].sort((a, b) => a.price - b.price);
      case 'new':
        return [...currentItems].filter((item) => item.label === 'new');
      case 'old':
        return [...currentItems].filter((item) => item.label === 'old');
      case 'titleAZ':
        return [...currentItems].sort((a, b) => a.title.localeCompare(b.title));
      case 'titleZA':
        return [...currentItems].sort((a, b) => b.title.localeCompare(a.title));
      case 'dateNewest':
        return [...currentItems].sort(
          (a, b) =>
            new Date(b.date.year, b.date.month - 1, b.date.day).getTime() -
            new Date(a.date.year, a.date.month - 1, a.date.day).getTime()
        );
      case 'dateOldest':
        return [...currentItems].sort(
          (a, b) =>
            new Date(a.date.year, a.date.month - 1, a.date.day).getTime() -
            new Date(b.date.year, b.date.month - 1, b.date.day).getTime()
        );
      default:
        return currentItems;
    }
  };

  const handleAddToCart = (item: Item): void => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    addToCart(item);
  };

  const handleSort = (value: string): void => {
    setSortBy(value);
  };

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);
  const goToNextPage = (): void => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const goToPrevPage = (): void => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <>
    <Nav/>
    <header className='header-shop'></header>
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {sortOptions[sortBy]}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Object.keys(sortOptions).map((option) => (
              <Dropdown.Item key={option} onClick={() => handleSort(option)}>
                {sortOptions[option]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="card-container">
        {sortItems().map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnailUrl} className="card-img" alt={`Thumbnail ${item.id}`} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">${item.price}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{item.label === 'new' ? 'New' : 'Old'}</li>
              <li className="list-group-item">{`${item.date.year}-${item.date.month}-${item.date.day}`}</li>
            </ul>
            <div className="card-body">
              <Link to={`/item/${item.id}`} className="card-link">
                See More
              </Link>
              <button onClick={() => handleAddToCart(item)} className="card-link add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn" onClick={goToPrevPage} disabled={currentPage === 1}>
          Назад
        </button>

        {getPaginationRange().map((pageNumber) => (
          <button
            key={pageNumber}
            className={`page-btn ${currentPage === pageNumber ? 'active' : ''}`}
            style={{
              backgroundColor: currentPage === pageNumber ? '#555' : '#ccc',
              color: currentPage === pageNumber ? 'white' : 'black',
            }}
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button className="page-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
          Вперед
        </button>
      </div>
      <Cart/>
    </>
  );
}

export default Shop;
