"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    // Glossy Environment Reflections
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const clock = new THREE.Clock();
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    // Main Group (Offset to the right to match hero text layout)
    const mainGroup = new THREE.Group();
    mainGroup.position.x = 2.5;
    scene.add(mainGroup);

    // ==========================================
    // 1. AI CORE (Purple Glossy Icosahedron)
    // ==========================================
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xa855f7,
      metalness: 0.2,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.3,
      thickness: 1.0,
      ior: 1.4,
      emissive: 0x4a1a8a,
      emissiveIntensity: 0.5,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // AI Neural Wireframe (Inner glow)
    const neuralGeo = new THREE.SphereGeometry(1.4, 16, 16);
    const neuralMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const neuralMesh = new THREE.Mesh(neuralGeo, neuralMat);
    mainGroup.add(neuralMesh);

    // ==========================================
    // 2. BLOCKCHAIN SHELL (Blue Glass Octahedron)
    // ==========================================
    const shellGeo = new THREE.OctahedronGeometry(2.4, 0);
    const shellMat = new THREE.MeshPhysicalMaterial({
      color: 0x4d8aff,
      metalness: 0.1,
      roughness: 0.0,
      transmission: 0.9,
      thickness: 0.5,
      ior: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      envMapIntensity: 2.0,
      transparent: true,
      opacity: 0.6
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    mainGroup.add(shellMesh);

    // ==========================================
    // 3. BLOCKCHAIN DATA BLOCKS (Metallic Blue Cubes)
    // ==========================================
    const cubesGroup = new THREE.Group();
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x2e6bff,
      metalness: 0.8,
      roughness: 0.15,
      clearcoat: 1.0,
      emissive: 0x0a1a4a,
      emissiveIntensity: 0.4,
    });
    const cubes: THREE.Mesh[] = [];

    for (let i = 0; i < 6; i++) {
      const cubeGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      const angle = (i / 6) * Math.PI * 2;
      cube.userData = { angle: angle, radius: 3, speed: 0.5 };
      cubes.push(cube);
      cubesGroup.add(cube);
    }
    mainGroup.add(cubesGroup);

    // ==========================================
    // 4. AI NEURAL NODES (Glossy Purple Accents)
    // ==========================================
    const accents: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const isPurple = i % 2 === 0;
      const geo = new THREE.OctahedronGeometry(0.15, 0);
      const mat = new THREE.MeshPhysicalMaterial({
        color: isPurple ? 0xc084fc : 0x4d8aff,
        metalness: 0.6,
        roughness: 0.0,
        clearcoat: 1.0,
        emissive: isPurple ? 0x4a1a8a : 0x0a1a4a,
        emissiveIntensity: 0.6,
        transmission: 0.5,
        thickness: 0.4,
      });
      const mesh = new THREE.Mesh(geo, mat);

      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1.5;
      const speed = 0.3 + Math.random() * 0.3;
      const yOff = Math.random() * 2 - 1;

      mesh.userData = { angle, radius, speed, yOff };
      accents.push(mesh);
      mainGroup.add(mesh);
    }

    // ==========================================
    // 5. PARTICICLE FIELD (Data Stream) - ENHANCED
    // ==========================================
    const particleCount = 800; // Increased from 400

    // Create a soft glowing circular texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.3)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 3;

      const c = Math.random();
      if (c > 0.5) {
        colors[i * 3] = 0.3; colors[i * 3 + 1] = 0.42; colors[i * 3 + 2] = 1.0; // Blue
      } else {
        colors[i * 3] = 0.66; colors[i * 3 + 1] = 0.33; colors[i * 3 + 2] = 0.97; // Purple
      }
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.1,             // Increased from 0.05
      map: particleTexture,  // Added soft glowing texture
      vertexColors: true,
      transparent: true,
      opacity: 0.9,          // Increased from 0.7
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ==========================================
    // LIGHTING
    // ==========================================
    scene.add(new THREE.AmbientLight(0x404060, 0.5));
    const blueLight = new THREE.PointLight(0x4d8aff, 2.5, 15);
    blueLight.position.set(3, 2, 3);
    scene.add(blueLight);
    const purpleLight = new THREE.PointLight(0xa855f7, 2.5, 15);
    purpleLight.position.set(-2, -1, 3);
    scene.add(purpleLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Event Listeners
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

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse parallax
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      camera.position.x = mouse.x * 0.5;
      camera.position.y = -mouse.y * 0.3;
      camera.lookAt(2.5, 0, 0); // Look at main group offset

      // Core AI Pulsing & Rotation
      coreMesh.rotation.x = t * 0.2;
      coreMesh.rotation.y = t * 0.3;
      coreMesh.scale.setScalar(1 + Math.sin(t * 2) * 0.03);

      // Inner Neural Mesh Rotation
      neuralMesh.rotation.x = -t * 0.1;
      neuralMesh.rotation.y = t * 0.05;

      // Blockchain Shell Rotation
      shellMesh.rotation.x = -t * 0.15;
      shellMesh.rotation.y = -t * 0.1;

      // Orbiting Data Cubes
      cubes.forEach((c) => {
        c.userData.angle += 0.005;
        c.position.x = Math.cos(c.userData.angle) * c.userData.radius;
        c.position.z = Math.sin(c.userData.angle) * c.userData.radius;
        c.position.y = Math.sin(c.userData.angle * 2) * 0.5;
        c.rotation.x = t * 1;
        c.rotation.y = t * 1;
      });

      // Floating AI Nodes
      accents.forEach((a) => {
        a.userData.angle += 0.01 * a.userData.speed;
        a.position.x = Math.cos(a.userData.angle) * a.userData.radius;
        a.position.z = Math.sin(a.userData.angle) * a.userData.radius;
        a.position.y = a.userData.yOff + Math.sin(t * a.userData.speed * 2) * 0.5;
        a.rotation.x = t * 0.5;
        a.rotation.y = t * 0.7;
      });

      // Particle drift
      particles.rotation.y = t * 0.02;
      particles.rotation.x = t * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      neuralGeo.dispose();
      neuralMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />;
}