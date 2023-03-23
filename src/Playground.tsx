import { Form, Input, Button, Skeleton, Space, Typography } from "antd";
import { addDoc, collection, Firestore } from "firebase/firestore";
import { useState } from "react";
import YouTube from "react-youtube";

const { Title } = Typography;

const getName = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("q");
};

function PlaygroundResult() {
  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return <YouTube videoId={"dQw4w9WgXcQ"} opts={opts} />
}

enum ResultState {
  NONE, LOADING, DONE
}

function PlaygroundForm({db}: {db: Firestore}) {
  const [form] = Form.useForm();
  const [resultState, setResultState] = useState(ResultState.NONE);
  const [errorString, setErrorString] = useState("");

  const prompts = collection(db, "prompts");

  const submit = async () => {

    const prompt = form.getFieldValue("prompt");

    if (prompt.length < 300 || prompt.length > 1000) {
      setErrorString("Error: text must be between 300 and 1000 characters.")
    } else {
      setResultState(ResultState.LOADING);

      await addDoc(prompts, {
        name: getName() || "unknown-name",
        prompt,
      });
      setTimeout(() => setResultState(ResultState.DONE), 3000);
    }
  };

  return (
    <>
    <Form form={form} onChange={() => setErrorString("")}>
      <Form.Item name="prompt"
        validateStatus={errorString !== "" ? "error" : ""} help={errorString}>
        <Input.TextArea
          placeholder="Enter your prompt"
          style={{ height: 180 }}
          showCount
          maxLength={1000}
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
    {resultState === ResultState.LOADING ? <Skeleton />
      : resultState === ResultState.DONE ? <PlaygroundResult /> : <></>}
    </>
  );
}

interface PlaygroundProps {
  db: Firestore,
}

function Playground({db}: PlaygroundProps) {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size="middle">
      <Title level={3}>Playground</Title>
      Just enter your prompt and click the generate button.
      <PlaygroundForm db={db}/>
    </Space>
  );
}

export default Playground;