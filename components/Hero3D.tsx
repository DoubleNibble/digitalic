"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const clock = new THREE.Clock();
    const shapes: THREE.Mesh[] = [];
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    // Central blue icosahedron
    const centerGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const centerMat = new THREE.MeshPhysicalMaterial({
      color: 0x4d8aff, metalness: 0.4, roughness: 0.08,
      clearcoat: 1.0, clearcoatRoughness: 0.05, envMapIntensity: 2.2,
      transmission: 0.2, thickness: 1.0, ior: 1.4,
      emissive: 0x1a1a4a, emissiveIntensity: 0.4,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    centerMesh.position.set(2.2, 0.3, 0);
    centerMesh.userData = { isMain: true, speed: 0.15, rotSpeedX: 0.15, rotSpeedY: 0.2, basePos: centerMesh.position.clone(), floatAmp: 0.15 };
    scene.add(centerMesh);
    shapes.push(centerMesh);

    // Purple glass torus knot
    const torusGeo = new THREE.TorusKnotGeometry(0.7, 0.18, 100, 16);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0xa855f7, metalness: 0.2, roughness: 0.05,
      transmission: 0.6, thickness: 0.8, clearcoat: 1.0, clearcoatRoughness: 0.05,
      ior: 1.5, envMapIntensity: 2.0, emissive: 0x4a1a8a, emissiveIntensity: 0.3,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(3.8, -0.8, -1);
    torusMesh.userData = {
      orbit: Math.PI * 0.5, speed: 0.25, rotSpeedX: 0.3, rotSpeedY: 0.4,
      basePos: torusMesh.position.clone(), floatAmp: 0.2, radius: 1.8
    };
    scene.add(torusMesh);
    shapes.push(torusMesh);

    // Blue metallic sphere
    const sphereGeo = new THREE.SphereGeometry(0.45, 32, 32);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x2e6bff, metalness: 0.6, roughness: 0.05,
      clearcoat: 1.0, clearcoatRoughness: 0.05,
      envMapIntensity: 2.5,
      emissive: 0x0a1a4a, emissiveIntensity: 0.3,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(4.6, 1.2, 0);
    sphereMesh.userData = {
      orbit: Math.PI, speed: 0.35, rotSpeedX: 0.4, rotSpeedY: 0.5,
      basePos: sphereMesh.position.clone(), floatAmp: 0.25, radius: 2.2
    };
    scene.add(sphereMesh);
    shapes.push(sphereMesh);

    // Purple glass cube
    const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0xc084fc,
      metalness: 0.3, roughness: 0.0,
      transmission: 0.8, thickness: 0.6,
      clearcoat: 1.0, clearcoatRoughness: 0.0,
      ior: 1.6, envMapIntensity: 2.5,
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(1.2, -1.2, 1);
    cubeMesh.userData = {
      orbit: Math.PI * 1.5, speed: 0.4, rotSpeedX: 0.5, rotSpeedY: 0.6,
      basePos: cubeMesh.position.clone(), floatAmp: 0.3, radius: 1.5
    };
    scene.add(cubeMesh);
    shapes.push(cubeMesh);

    // Small accents
    for (let i = 0; i < 4; i++) {
      const octGeo = new THREE.OctahedronGeometry(0.15 + Math.random() * 0.1, 0);
      const octMat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0x4d8aff : 0xa855f7,
        metalness: 0.7, roughness: 0.1, clearcoat: 1.0,
        envMapIntensity: 2.0,
        emissive: i % 2 === 0 ? 0x0a1a4a : 0x4a1a8a,
        emissiveIntensity: 0.5,
      });
      const octMesh = new THREE.Mesh(octGeo, octMat);
      const angle = (i / 4) * Math.PI * 2;
      octMesh.position.set(2.5 + Math.cos(angle) * 2.5, 0.3 + Math.sin(angle) * 1.5, -0.5 + Math.sin(angle) * 1);
      octMesh.userData = {
        orbit: angle, speed: 0.5 + Math.random() * 0.3,
        rotSpeedX: 0.6 + Math.random() * 0.4, rotSpeedY: 0.7 + Math.random() * 0.4,
        basePos: octMesh.position.clone(),
        floatAmp: 0.4 + Math.random() * 0.2, radius: 2.5, isAccent: true
      };
      scene.add(octMesh);
      shapes.push(octMesh);
    }


    // Particles
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 3;
      const c = Math.random();
      if (c > 0.5) { colors[i * 3] = 0.3; colors[i * 3 + 1] = 0.42; colors[i * 3 + 2] = 1.0; }
      else { colors[i * 3] = 0.66; colors[i * 3 + 1] = 0.33; colors[i * 3 + 2] = 0.97; }
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, sizeAttenuation: true, depthWrite: false });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    scene.add(new THREE.AmbientLight(0x404060, 0.5));
    const blueLight = new THREE.PointLight(0x4d8aff, 2, 15);
    blueLight.position.set(3, 2, 3);
    scene.add(blueLight);
    const purpleLight = new THREE.PointLight(0xa855f7, 2, 15);
    purpleLight.position.set(-2, -1, 3);
    scene.add(purpleLight);
    const dirLight = new THREE.PointLight(0xffffff, 0.6);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      camera.position.x = mouse.x * 0.5;
      camera.position.y = -mouse.y * 0.3;
      camera.lookAt(2, 0, 0);

      shapes.forEach((shape) => {
        const ud = shape.userData;
        shape.rotation.x += ud.rotSpeedX * 0.01;
        shape.rotation.y += ud.rotSpeedY * 0.01;
        if (ud.isMain) {
          shape.position.y = ud.basePos.y + Math.sin(t * 0.8) * ud.floatAmp;
          shape.position.x = ud.basePos.x + Math.cos(t * 0.5) * 0.1;
        } else {
          shape.position.y = ud.basePos.y + Math.sin(t * ud.speed + ud.orbit) * ud.floatAmp;
          shape.position.x = ud.basePos.x + Math.cos(t * ud.speed * 0.7 + ud.orbit) * 0.2;
        }
      });

      particles.rotation.y = t * 0.02;
      particles.rotation.x = t * 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />;
}
