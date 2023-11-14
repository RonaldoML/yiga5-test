
import './App.css'
import { CardList } from './components/CardList'
import { useDispatch } from 'react-redux'
import { loadStock } from './redux/actions/stock'

function App() {

  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(loadStock())}>
          LoadStock
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <CardList />

    </>
  )
}

export default App
