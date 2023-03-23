import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  Space,
  Typography,
  Col,
  Row,
  Grid,
} from "antd";
import Playground from "./Playground";
import Example from "./Example";

const { useBreakpoint } = Grid;

const firebaseConfig = {
  apiKey: "AIzaSyC9mHXRI3KWs6dy3F7CEZcuPjHylpL5JTo",
  authDomain: "para-painting.firebaseapp.com",
  projectId: "para-painting",
  storageBucket: "para-painting.appspot.com",
  messagingSenderId: "9088299632",
  appId: "1:9088299632:web:db22e009c929e6a7127ab5",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

    
function App() {
  const { md } = useBreakpoint();

  return md ? (
    <Row style={{ margin: 24 }}>
      <Col span={12} style={{ padding: 24 }}>
        <Example />
      </Col>
      <Col span={12} style={{ padding: 24 }}>
        <Playground db={db} />
      </Col>
    </Row>
  ) : (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Example />
      <Playground db={db} />
    </Space>
  );
}

export default App;
