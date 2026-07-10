"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function ServiceIcon3D({ iconType }: { iconType: string }) {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(80, 80);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    scene.add(new THREE.AmbientLight(0x404060, 0.6));
    const l1 = new THREE.PointLight(0x4d8aff, 1.5, 10); l1.position.set(2, 2, 2); scene.add(l1);
    const l2 = new THREE.PointLight(0xa855f7, 1.5, 10); l2.position.set(-2, -1, 2); scene.add(l2);

    let mesh: THREE.Mesh | THREE.Group;
    const sharedMat = (color: number, emissive: number, opts: any = {}) => new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color), metalness: opts.metalness ?? 0.5, roughness: opts.roughness ?? 0.08,
      clearcoat: 1.0, clearcoatRoughness: 0.05, envMapIntensity: 2.0,
      emissive: new THREE.Color(emissive), emissiveIntensity: 0.3,
      transmission: opts.transmission ?? 0, thickness: opts.thickness ?? 0, ior: 1.5,
    });

    switch (iconType) {
      case "bitcoin":
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.2, 32), sharedMat(0x4d8aff, 0x0a1a4a, { metalness: 0.8, roughness: 0.15 }));
        mesh.rotation.x = Math.PI / 2;
        break;
      case "blockchain": {
        const group = new THREE.Group();
        const g = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const m1 = new THREE.Mesh(g, sharedMat(0x4d8aff, 0x0a1a4a, { transmission: 0.4, thickness: 0.5 })); m1.position.set(-0.6, 0.3, 0);
        const m2 = new THREE.Mesh(g, sharedMat(0xa855f7, 0x2a0a5a, { transmission: 0.4, thickness: 0.5 })); m2.position.set(0.3, -0.2, 0.3);
        const m3 = new THREE.Mesh(g, sharedMat(0xc084fc, 0x3a0a6a, { transmission: 0.4, thickness: 0.5 })); m3.position.set(0.5, 0.5, -0.3);
        group.add(m1, m2, m3); mesh = group; break;
      }
      case "ai":
        mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), sharedMat(0xa855f7, 0x2a0a5a, { metalness: 0.6, roughness: 0.05, transmission: 0.3, thickness: 0.8 }));
        break;
      default:
        mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 0), sharedMat(0xa855f7, 0x2a0a5a));
    }

    scene.add(mesh);
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mesh.rotation.y = t * 0.5;
      mesh.rotation.x = Math.sin(t * 0.3) * 0.3;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, [iconType]);

  return <canvas ref={mountRef} className="w-20 h-20 rounded-2xl border border-white/10" style={{ background: "radial-gradient(circle at 30% 30%, rgba(46,107,255,0.1), rgba(168,85,247,0.05))" }}></canvas>;
}
