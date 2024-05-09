import styles from './Item.module.css'; // Importa los estilos CSS

export const Item = ({ id, name, price, description, image }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item_image}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.item_info}>
                <h2 className={styles.item_info_title}>{name}</h2>
                <p className={styles.item_info_price}>{description}</p>
                <p>{price}</p>
                <a href="#">Ver Detalles</a>
            </div>
        </div>
    );
};
