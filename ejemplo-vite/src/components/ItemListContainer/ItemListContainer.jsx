import { useEffect, useState } from 'react';
import styles from './ItemListContainer.module.css';
import { ItemList } from '../ItemList/ItemList';
import spinnerImage from '../Spinner/spinner.gif';
import { usePaginate } from "../../Hooks/usePaginate";
import { products, getProductByCategory } from "../../utils/MokeData"; // Importa tus productos y la función de filtro por categoría
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {

  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]); // Nuevo estado para los productos filtrados
  const { currentPage, totalPages, nextPage, prevPage, paginate, totalPagesArray, currentData } = usePaginate(filteredProducts, 2);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true); // Establece el estado de carga como verdadero cuando comienza la solicitud

    if (categoryId) {
      getProductByCategory(categoryId)
        .then((res) => {
          setFilteredProducts(res); // Establece los productos filtrados en el estado
          setLoading(false); // Establece el estado de carga como falso después de obtener los datos
        })
        .catch((error) => {
          console.log("error", error);
          setLoading(false); // Asegúrate de cambiar el estado de carga en caso de error
        });
    } else {
      setFilteredProducts(products); // Establece los productos sin filtrar en el estado
      setLoading(false); // Establece el estado de carga como falso
    }
  }, [categoryId]);

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
