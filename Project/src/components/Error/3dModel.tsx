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
        <div className="relative flex justify-center items-center min-h-screen">
            <div className="absolute min-h-screen flex items-center justify-center">
                <h1 className="text-[clamp(5rem,30vw,100rem)]">404</h1>
            </div>
            <Canvas
                style={{
                    width: "80vw",
                    height: "80vh",
                    backgroundColor: "transparent",
                }}
                camera={{ position: [0, 0, 5] }}
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Model />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}
