import Counter from "./components/Counter";
import InputPreview from "./components/InputPreview";
import FormSubmit from "./components/FormSubmit";
import HoverBox from "./components/HoverBox";
import KeyPress from "./components/KeyPress";
import BackgroundColor from "./components/BackgroundColor";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Event Handling Project</h1>
      <Counter />
      <InputPreview />
      <FormSubmit />
      <HoverBox />
      <KeyPress />
      <BackgroundColor />
    </div>
  );
}

export default App;
