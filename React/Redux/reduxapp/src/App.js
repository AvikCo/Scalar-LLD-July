import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserDetails } from './redux/actions/saveUserDetails';
import Counter from './Counter';
import Movies from './redux/Movies';

function App() {
  console.log("rendering app component");
  const user = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  console.log(user);

  const onFormSubmit=(e)=>{
    e.preventDefault();

    const name=e.target[0].value;
    const age=e.target[1].value;

    dispatch(changeUserDetails({name,age}));

  }

  return (
    <div className="App">

      <Movies/>

      <hr/>

      <Counter/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <form onSubmit={onFormSubmit} >
        Name:
        <input  type="text"  />
        Age:
        <input type="number" />

        <input value=" Save Data " type="submit"/>
      </form>

      <hr/>



      <h2> Saved Data </h2>

     Name : <h3> {user.name} </h3>
     Age:   <h3> {user.age} </h3>

     


    </div>
  );
}

export default App;
