import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './store/actions/'
import './App.css';

function App() {
  const amount = useSelector(state => state.amountReducer)
  const dispatch = useDispatch();
  const {Increase, Decrease} = bindActionCreators(actionCreators ,dispatch)
  return (
    <div className="App">
      <header className="App-header">
        <h3>Amount - {amount}</h3>
        <div className="btn-div">
          <div>
            <button disabled={!amount} onClick={() => Decrease(100)}>-</button>
          </div>
          <div><p>Change Amount</p></div>
          <div>
            <button onClick={() => Increase(100)}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
