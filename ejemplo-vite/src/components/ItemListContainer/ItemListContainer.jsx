import styles from './ItemListContainer.module.css'

const ItemListContainer = (props) => {
    console.log (props)
    const defaulttitulo = "no hay titulo"
    const bg_verde = false
  return (
    <>
        <h1>{props.greeting ? props.greeting : defaulttitulo}</h1>
            <div className={props.bg_verde ? styles.background : styles.backgroundpink}>
            <p> Primer parrafo </p>
            <p> Segundo parrafo </p>

            </div>
    </>        
  )
}

export default ItemListContainer;

