import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
