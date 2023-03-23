import { Space, Typography, Image } from "antd";
import { examples } from "./examples";

const {Title, Paragraph} = Typography;

function Example() {
  const { prompt, image } = examples[2];

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="middle">
      <Title level={3}>Example</Title>
      <Paragraph><strong>Prompt (102 words): </strong>
      {prompt}</Paragraph>
      <strong>Generated:</strong>
      <Image width={300} src={image} preview={false} />
    </Space>
  );
}

export default Example;