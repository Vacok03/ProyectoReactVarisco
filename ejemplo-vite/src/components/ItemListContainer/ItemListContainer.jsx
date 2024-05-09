import { useEffect, useState } from 'react';
import styles from './ItemListContainer.module.css';
import { getProducts } from '../../utils/MokeData';
import { ItemList }  from '../ItemList/ItemList';
import spinnerImage from '../Spinner/spinner.gif';
import { usePaginate } from "../../Hooks/usePaginate"; // Importa el hook de paginación

export const ItemListContainer = (props) => {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentPage, totalPages, nextPage, prevPage, paginate, totalPagesArray, currentData } = usePaginate(products, 2); // Utiliza el hook de paginación

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  
  const defaulttitulo = "no hay titulo";
  
  return (
    <div>
      <h1>{props.greeting ? props.greeting : defaulttitulo}</h1>
      {loading ? (
        <img src={spinnerImage} alt="Loading..." />
      ) : (
        <div>
          <ItemList productsList={currentData} />
          <button onClick={prevPage}>prev page</button>
          {totalPagesArray.map((page) => {
            if (page < 6) {
              return (
                <button key={page} onClick={() => paginate(page)}>
                  {page}
                </button>
              );
            }
            if (page === 6) {
              return "...";
            }
            if (page === totalPages) {
              return (
                <button key={page} onClick={() => paginate(page)}>
                  {page}
                </button>
              );
            }
          })}
          <button onClick={nextPage}>next page</button>
        </div>
      )}
    </div>
  );
};
