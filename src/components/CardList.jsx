import { useSelector } from 'react-redux';
import BasicCard from './BasicCard';

export const CardList = () => {
  // const [stock, setStock] = useState([]);
  const { stock } = useSelector(state => state.stock);
  console.log(stock)

  return (
    <>
      {
        stock.map(product => (
          <BasicCard key={product._id} />
        ))
      }
    </>
  )
}
