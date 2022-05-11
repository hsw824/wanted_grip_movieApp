import { ProductProps } from "../../../types/ProductList";
import styles from "./movieList.module.scss";

const MovieList = ({ data }: { data: ProductProps[] }) => {
  if (!data) {
    return <h1>검색 결과가 없습니다</h1>;
  }
  return (
    <div className={styles.movieList}>
      <ul>
        {data.map((item, index) => (
          <div className={styles.movieCard} key={`movie-key-${index}`}>
            <li className={styles.poster}>
              <img src={item.Poster} alt="movie poster" />
            </li>
            <li className={styles.title}>{item.Title}</li>
            <li className={styles.year}>{item.Year}</li>
            <li className={styles.type}>{item.Type}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export { MovieList };
