import Header from './components/Header'
import Balance from './components/Balance';
import History from './components/History'
import AddTrans from './components/AddTrans';
import './app.css'
import { useState } from 'react';

function App() {
  const [tot, setTot] = useState(0);
  const [transaction, setTransaction] = useState([]);
  function edit(id){
    setTransaction(transaction.map((cur)=>{
      if(cur.id === id){
        return {...cur, isEdit: !cur.isEdit}
      }return cur
    }
    ))
  }
  function edited(id, text, amt){

    setTransaction(transaction.map((cur)=>{

      if(cur.id === id){
        setTot(tot-cur.amt+parseInt(amt))
        return {...cur, isEdit: false, topic: text, amt: parseInt(amt)}
      }

      return cur;
    }))
  }
  function addTransaction(state, amt){
    setTransaction([...transaction, {id: Date.now(), topic: state, amt:amt, isEdit: false}]);
    setTot(tot+parseInt(amt));
  }
  function remove(id){

    setTransaction(transaction.filter((value)=>{
      if(value.id!==id){
        setTot(tot-value.amt)
        return value;
      }else{
        return false;
      }
  }))
  
  }
  return (
    <div id='placeholder'>
      <Header/>
      <div className='contaienr'>
        <Balance tot={tot}/>
        <History result={transaction} remove={remove} edit={edit} edited={edited} />
        <AddTrans add={addTransaction} />
      </div>
    </div>
  );
}

export default App;
