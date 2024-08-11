import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
    const { scene } = useGLTF("/TVs/scene.gltf");

    return (
        <primitive
            object={scene}
            scale={0.15}
            position={[-1, -1, 0]}
            rotation={[0, -Math.PI / 2, 0]}
        />
    );
}

export default function NotFound(): JSX.Element {
    return (
        <div className="flex justify-center items-center">
            <Canvas
                style={{ width: "80vw", height: "80vh" }}
                camera={{ position: [0, 0, 5] }}
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Model />
                <OrbitControls />
            </Canvas>
        </div>
    );
}
