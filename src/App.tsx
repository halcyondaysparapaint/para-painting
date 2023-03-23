import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  Space,
  Typography,
  Col,
  Row,
  Form,
  Input,
  Button,
  Image,
  Grid,
} from "antd";
import { examples } from "./examples";

const { useBreakpoint } = Grid;
const { Title } = Typography;

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

const getName = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
};

function PlaygroundForm() {
  const [form] = Form.useForm();

  const prompts = collection(db, "prompts");

  const submit = async () => {
    await addDoc(prompts, {
      name: getName() || "unknown-name",
      prompt: form.getFieldValue("prompt"),
    });
  };

  return (
    <Form form={form}>
      <Form.Item name="prompt">
        <Input.TextArea
          placeholder="Enter your prompt"
          style={{ height: 240 }}
          showCount
          maxLength={600}
        />
      </Form.Item>
      {/* <Form.Item>
        <Input.TextArea
          placeholder="Enter a negative prompt"
          showCount
          maxLength={100}
        />
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" size="large" onClick={submit}>
          Generate Image
        </Button>
      </Form.Item>
    </Form>
  );
}

function Playground() {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size="small">
      <Title level={3}>Playground</Title>
      Just enter your prompt and click the generate button.
      <PlaygroundForm />
    </Space>
  );
}

function Example() {
  const { prompt, negativePrompt, image } = examples[1];

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="small">
      <Title level={3}>Example</Title>
      <strong>Prompt: </strong>
      {prompt}
      <strong>Generated:</strong>
      <Image width={300} src={image} preview={false} />
    </Space>
  );
}

function App() {
  const { md } = useBreakpoint();

  return md ? (
    <Row style={{ margin: 24 }}>
      <Col span={12} style={{ padding: 24 }}>
        <Example />
      </Col>
      <Col span={12} style={{ padding: 24 }}>
        <Playground />
      </Col>
    </Row>
  ) : (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Example />
      <Playground />
    </Space>
  );
}

export default App;
