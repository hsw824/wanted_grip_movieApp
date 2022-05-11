import { ProductProps } from '../../../types/ProductList'

const MovieList = ({ data }: { data: ProductProps[] }) => {
  if (!data) {
    return null
  }
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <div key={`movie-key-${index}`}>
            <li>
              <img src={item.Poster} alt='movie poster' />
            </li>
            <li>{item.Title}</li>
            <li>{item.Year}</li>
            <li>{item.Type}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export { MovieList }
