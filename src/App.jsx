import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/slices";

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const payload = -4

  return (
    <>
      <div>count is: {counter} </div>
      <button onClick={() => { dispatch(increment()) }} >Increment</button>
      <button onClick={() => { dispatch(decrement()) }} >decrement</button>
      <button onClick={
        () => { dispatch(incrementByAmount(payload)) }}
      >IncrementByAmount</button>

    </>
  )
}

export default App;