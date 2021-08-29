
import './App.css';
import { Switch,Route,Redirect } from 'react-router';
import routes from'./routes'
import Menu from 'rc-menu/lib/Menu';

function App() {
  return (
    <div className='app_div'>
      <Menu></Menu>
      <Switch>
        {
          routes.map(routeobj=><Route key={routeobj.path}{...routeobj}/>)
        }
        <Redirect to='/MainMenu'/>
      </Switch>
    </div>
  );
}
export default App
