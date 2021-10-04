import React, { useRef } from 'react';

const Dot = ({ radius, active, intersection }) => {
  const ref = useRef()

  return (
    <mesh
      visible={active}
      position={intersection}
      ref={ref}
      scale={1}
    >
      <sphereGeometry args={[radius, 16, 16]}/>
      <meshStandardMaterial color={'hotpink'}/>
    </mesh>
  )
};

export default Dot;
