
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {Increment,Decrement} from "./action/index"
function App() {
  const myState=useSelector((state)=> state.changeTheNumber)
  //dispatch(actionName) then it will dispatch that action and move to reducer function associated to it and change the state and store to redux store
  const dispatch=useDispatch();
  return (
    <>
      <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(Decrement())}><span>-</span></a>
        <input className="quantity" type="text" class="quantity__input" value={myState} />
        <a className="quantity__plus" title="Increment" onClick={()=>dispatch(Increment())} ><span>+</span></a>
      </div>
  
          </div>
        </div>
    </>
  );
}

export default App;
