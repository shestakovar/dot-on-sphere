import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import Sphere from "../components/Sphere"
import classes from "./Home.module.css";
import Dot from "../components/Dot";

const Home = () => {
  const [active, setActive] = useState(false);
  const [intersection, setIntersection] = useState();

  return (
    <div className={classes.canvas_container}>
      <Canvas>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        <Sphere position={[0, 0, 0]} radius='1' setActive={setActive} setIntersection={setIntersection}/>
        <Dot radius='0.1' active={active} intersection={intersection}/>
      </Canvas>
    </div>
  );
};

export default Home;
