
import { types } from "../types/types";
import firebaseApp from '../../firebase/index';

function handleSnapshot(snapshot, dispatch) {
  const products = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });
  //almacenar resultados en el state
  dispatch(stockAdd(products));
}
export const loadStock = () => {
  return async (dispatch) => {
    firebaseApp.db.collection('stock').onSnapshot(snapshot => handleSnapshot(snapshot, dispatch));
  }
}

export const addproduct = () => {
  return async () => {
    // const stockRef = collection(db, 'stock');
    // const docSnap = await getDoc(stockRef);
    // console.log(stockRef.data())
    // dispatch(stockAdd(docSnap));
  }
}

const stockAdd = (stock) => ({
  type: types.stockLoadproducts,
  payload: stock,
})

const productAdd = (product) => ({
  type: types.stockCreateProduct,
  payload: product,
})
