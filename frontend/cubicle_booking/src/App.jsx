import "./App.css";
import { Button } from "@nextui-org/react";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <>
      <main
        className={
          isSelected
            ? "dark text-foreground bg-background h-[100dvh]"
            : "light text-foreground bg-background h-[100dvh]"
        }
      >
        <Header isSelected={isSelected} setIsSelected={setIsSelected} />
        <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </main>
    </>
  );
}

export default App;
