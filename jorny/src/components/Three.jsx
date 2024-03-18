import { useEffect } from "react";
import * as THREE from "../../node_modules/three/build/three.module"


export default function ThreeExample() {

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      1, // near
      1000 // far
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x0ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 화면이 새로고침될 때마다 렌더링
    function animate() {
      requestAnimationFrame(animate);
      // 큐브 회전시키기
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }, [])

  return (
    <>
    </>
  );
}