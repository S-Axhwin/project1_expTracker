import Header from './components/Header'
import Balance from './components/Balance';
import History from './components/History'
import AddTrans from './components/AddTrans';
import './app.css'
import { useState } from 'react';

function App() {
  const [tot, setTot] = useState(0);
  const [transaction, setTransaction] = useState([]);
  function addTransaction(state, amt){
    setTransaction([...transaction, {id: Date.now(), topic: state, amt:amt}]);
    setTot(tot+parseInt(amt));
  }
  function remove(id){
    let temp = 0
    setTransaction(transaction.filter((value)=>{
      if(value.id!==id){
        temp = temp + parseInt(value.amt)
        return value;
      }else{
        return false;
      }
  }))
  setTot(temp);
  }
  return (
    <div>
      <Header/>
      <div className='contaienr'>
        <Balance tot={tot}/>
        <History result={transaction} remove={remove} />
        <AddTrans add={addTransaction} />
      </div>
    </div>
  );
}

export default App;
