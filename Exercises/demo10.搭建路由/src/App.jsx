import './App.css';
import { Switch,Route,Redirect } from 'react-router';
import routes from'./config/routes'
import './untils/rem'

function App() {
  return (
    <div className="App">
        <Switch>
          {
            routes.map(routeobj=><Route key={routeobj.path}{...routeobj}/>)
          }
          <Redirect to='/login'/>
        </Switch>
    </div>
  );
}

export default App;
