import "./App.css";
import { Button } from "@nextui-org/react";
import Header from "./components/Header";
import { useState } from "react";
import HomePage from "./pages/HomePage";

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
        <HomePage />
      </main>
    </>
  );
}

export default App;
