import "./App.css";
import { Button } from "@nextui-org/react";
function App() {
  return (
    <>
      <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </>
  );
}

export default App;
