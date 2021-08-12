import './App.css';
import Example1 from './example/Example1';
import Example2 from './example/Example2';
import Example3 from './example/Example3';
import Example4 from './example/Example4';
import Example5 from './example/Example5';
import Example6 from './example/Example6/Example6';
import Example7 from './example/Example7';
import Example8 from './example/Example8';
function App() {
  return (
    <div className="App">
      <div className="example"><Example1></Example1></div>
      <div className="example"><Example2></Example2></div>
      <hr  className="examplehr"/>
      <div ><Example3></Example3></div>
      <hr/>
      <div className="example"><Example4></Example4></div>
      <div className="example"><Example5></Example5></div>
      <hr  className="examplehr"/>
      <div className="example1"><Example6></Example6></div>
      <hr className="examplehr"/>
      <div className="example1"><Example7></Example7></div>
      <hr className="examplehr"/>
      <div className="example1"><Example8></Example8></div>
    </div>
  );
}

export default App;
