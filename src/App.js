import './App.css';
import Home from './Home';
import { Row, Col } from 'antd';

function App() {
  return (
    <div id="app">
      <Row>
        <Col span={18} push={6} align={"middle"}  justify={"center"}  gutter={[16, 16]}>
          <Home />
        </Col>
      </Row>
    </div>
  );
}

export default App;
