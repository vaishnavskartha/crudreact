// import logo from './logo.svg';
// import Create from './components/create/create';
import Read from './components/read/Read';
import './App.css';

function App() {
  return (
    <>
    <div className='main'>
      <div>
        <h3>React CRUD Operation</h3>
        <br />
      </div>
    {/* <div>
      <Create />
    </div> */}
    <div>
      <Read />
    </div>
    </div>
  </>
  );
}

export default App;
