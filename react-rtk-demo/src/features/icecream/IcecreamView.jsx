import React ,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,restocked} from './icecreamSlice'
export const IcecreamView = () => {
  const  [value,setValue] = useState(1)
  const numOfIcecreams =useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Ice cream - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input type="number" onChange={(e) => setValue(parseInt(e.target.value))} value={value} />
      <button onClick={() => dispatch(restocked(value))}>Restock Ice creams</button>
    </div>
  )
}

