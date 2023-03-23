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

function PlaygroundForm() {
  return (
    <Form>
      <Form.Item>
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
        <Button type="primary" size="large">
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
  const {prompt, negativePrompt, image} = examples[1];

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="small">
      <Title level={3}>Example</Title>
      <strong>Prompt: </strong>{prompt}
      <strong>Negative prompt:</strong>{negativePrompt}
      <strong>Generated:</strong>
      <Image width={300} src={image} preview={false}/>
    </Space>
  );
}

function App() {
  const { md } = useBreakpoint();

  return ( md ?
    <Row style={{ margin: 24 }}>
      <Col span={12} style={{ padding: 24 }}>
        <Playground />
      </Col>
      <Col span={12} style={{ padding: 24 }}>
        <Example />
      </Col>
    </Row>
  : <Space direction="vertical" style={{width: "100%"}}>
    <Example/>
    <Playground/>
  </Space>);
}

export default App;
