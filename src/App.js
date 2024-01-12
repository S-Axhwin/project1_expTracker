import Header from './components/Header'
import Balance from './components/Balance';
import History from './components/History'
import AddTrans from './components/AddTrans';
import './app.css'

function App() {
  return (
    <div>
      <Header/>
      <div className='contaienr'>
        <Balance/>
        <History/>
        <AddTrans/>
      </div>
    </div>
  );
}

export default App;
