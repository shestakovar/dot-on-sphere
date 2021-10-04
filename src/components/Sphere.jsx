import React, { useRef, useState } from 'react';

const Sphere = ({ position, radius, setActive, setIntersection }) => {
  const ref = useRef()
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      position={position}
      ref={ref}
      scale={1}
      onClick={(event) => {
        setActive(true);
        setIntersection(event.intersections[0].point)
      }}
      onPointerDown={(e) => setHover(true)}
      onPointerUp={(e) => setHover(false)}
      onPointerMissed={(e) => setActive(false)}
      onPointerMove={(e) => {
        if (hovered) setIntersection(e.intersections[0].point)
      }}
    >
      <sphereGeometry args={[radius, 16, 16]}/>
      <meshStandardMaterial color={'orange'}/>
    </mesh>
  )
};

export default Sphere;
