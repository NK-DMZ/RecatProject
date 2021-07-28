import './App.css';
import { Button,Card } from 'antd-mobile';

function App() {
  return (
    <div className="App">
      <Button>default</Button>
      <Card>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
      </Card>
    </div>
  );
}

export default App;
