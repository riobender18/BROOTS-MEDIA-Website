import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SmartphoneProduct, PhoneAngle } from '../../types';
import { Rotate3d, Compass, Eye, Maximize2 } from 'lucide-react';

interface Phone3DCanvasProps {
  product: SmartphoneProduct;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  autoRotate?: boolean;
  showControls?: boolean;
  className?: string;
  activeAngle?: PhoneAngle;
  onAngleChange?: (angle: PhoneAngle) => void;
}

export const Phone3DCanvas: React.FC<Phone3DCanvasProps> = ({
  product,
  size = 'md',
  interactive = true,
  autoRotate = true,
  showControls = false,
  className = '',
  activeAngle = 'studio',
  onAngleChange,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(activeAngle === 'orbit' || autoRotate);
  const [internalAngle, setInternalAngle] = useState<PhoneAngle>(activeAngle);

  // References for animation and rotation control
  const phoneGroupRef = useRef<THREE.Group | null>(null);
  const chassisMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const targetRotationRef = useRef<{ x: number; y: number }>(
    activeAngle === 'front'
      ? { x: 0, y: 0 }
      : activeAngle === 'rear'
      ? { x: 0, y: Math.PI }
      : activeAngle === 'side'
      ? { x: 0, y: -Math.PI / 2 }
      : { x: 0.15, y: -0.45 }
  );
  const isDraggingRef = useRef(false);
  const previousPointerPositionRef = useRef({ x: 0, y: 0 });

  // Size styling map
  const heightMap = {
    sm: 'h-48 sm:h-52',
    md: 'h-64 sm:h-72',
    lg: 'h-80 sm:h-96',
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL to adapt renderer features per Three.js guidelines
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Width and height
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, size === 'lg' ? 4.8 : size === 'md' ? 4.2 : 3.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Studio 3-Point Lighting Rig with BROOTS Emerald Rim Glow
    const hemiLight = new THREE.HemisphereLight(0xd4e2d8, 0x050c08, 0.9);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.shadow) {
      keyLight.shadow.mapSize.width = 512;
      keyLight.shadow.mapSize.height = 512;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    // Emerald back rim light giving signature BROOTS dark luxury look
    const rimLight = new THREE.DirectionalLight(0x36d17c, 1.6);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Soft fill light
    const fillLight = new THREE.DirectionalLight(0xa5c4b1, 0.6);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    // ----------------------------------------------------
    // BUILD HIGH-FIDELITY PROCEDURAL 3D SMARTPHONE MODEL
    // ----------------------------------------------------
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;

    // Brand finish colors
    const brand = product.brand;
    let chassisColor = 0x1f2b23; // default dark emerald slate
    let chassisMetalness = 0.85;
    let chassisRoughness = 0.22;
    let cameraRingColor = 0x36d17c;

    if (brand === 'Apple') {
      if (product.id === 'apple-iphone-17') {
        chassisColor = 0xe6eae7; // Pure White / Silver Titanium for iPhone 17
        chassisMetalness = 0.95;
        chassisRoughness = 0.12;
        cameraRingColor = 0xd2d8d4;
      } else {
        chassisColor = 0x222a25; // Titanium dark slate
        chassisMetalness = 0.92;
        chassisRoughness = 0.18;
        cameraRingColor = 0xa4b0a8;
      }
    } else if (brand === 'POCO') {
      chassisColor = 0x1c1e13; // Carbon with yellow edge
      chassisMetalness = 0.8;
      chassisRoughness = 0.28;
      cameraRingColor = 0xfacc15;
    } else if (brand === 'vivo') {
      chassisColor = 0x12241b; // Forest deep teal
      chassisMetalness = 0.88;
      chassisRoughness = 0.2;
      cameraRingColor = 0x36d17c;
    } else if (brand === 'realme') {
      chassisColor = 0x18281e; // Curved emerald green
      chassisMetalness = 0.85;
      chassisRoughness = 0.24;
      cameraRingColor = 0x4ade80;
    }

    // Phone dimensions (scaled to realistic smartphone aspect ratio: ~1:2)
    const phoneW = 1.35;
    const phoneH = 2.65;
    const phoneD = 0.12;

    // Part 1: Main Metallic Chassis Frame
    const chassisGeo = new THREE.BoxGeometry(phoneW, phoneH, phoneD);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: chassisColor,
      metalness: chassisMetalness,
      roughness: chassisRoughness,
    });
    chassisMatRef.current = chassisMat;
    const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
    chassisMesh.castShadow = !isSoftwareGl;
    chassisMesh.receiveShadow = !isSoftwareGl;
    phoneGroup.add(chassisMesh);

    // Part 2: Front Display with Procedural Screen Canvas
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 1024;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      // Dark emerald luxury wallpaper gradient
      const grad = ctx.createLinearGradient(0, 0, 512, 1024);
      grad.addColorStop(0, '#0f241a');
      grad.addColorStop(0.5, '#070f0b');
      grad.addColorStop(1, '#020504');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 1024);

      // Subtle geometric mesh lines
      ctx.strokeStyle = 'rgba(54, 209, 124, 0.12)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 1024; i += 64) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i + 128);
        ctx.stroke();
      }

      // Top Status Bar (5G, battery, time)
      ctx.fillStyle = '#A4B0A8';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('09:41', 40, 60);
      ctx.fillText('5G · 100%', 360, 60);

      // Model Brand Watermark in center
      ctx.fillStyle = '#36D17C';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(product.brand.toUpperCase(), 256, 440);

      ctx.fillStyle = '#F5F7F5';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(product.name.replace(/Apple |vivo |POCO |realme |Ai\+ /g, ''), 256, 490);

      ctx.fillStyle = '#A4B0A8';
      ctx.font = '20px monospace';
      ctx.fillText(product.specs.processor.split(' ')[0] + ' · ' + product.category, 256, 530);

      // BROOTS MEDIA verified device seal
      ctx.strokeStyle = 'rgba(54, 209, 124, 0.4)';
      ctx.lineWidth = 3;
      ctx.strokeRect(96, 680, 320, 70);

      ctx.fillStyle = '#36D17C';
      ctx.font = 'bold 18px monospace';
      ctx.fillText('BROOTS MEDIA VERIFIED', 256, 722);

      // Bottom Home Indicator Bar
      ctx.fillStyle = '#36D17C';
      ctx.fillRect(180, 980, 152, 6);
    }

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    const screenGeo = new THREE.PlaneGeometry(phoneW * 0.94, phoneH * 0.95);
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTexture,
      roughness: 0.15,
      metalness: 0.1,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = phoneD / 2 + 0.002;
    phoneGroup.add(screenMesh);

    // Part 3: Front Camera (Dynamic Island for Apple, Punch-hole for others)
    const isApple = product.brand === 'Apple';
    if (isApple) {
      const pillGeo = new THREE.CapsuleGeometry(0.04, 0.18, 8, 16);
      const pillMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const pillMesh = new THREE.Mesh(pillGeo, pillMat);
      pillMesh.rotation.z = Math.PI / 2;
      pillMesh.position.set(0, phoneH / 2 - 0.12, phoneD / 2 + 0.004);
      phoneGroup.add(pillMesh);
    } else {
      const punchGeo = new THREE.CircleGeometry(0.035, 24);
      const punchMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const punchMesh = new THREE.Mesh(punchGeo, punchMat);
      punchMesh.position.set(0, phoneH / 2 - 0.12, phoneD / 2 + 0.004);
      phoneGroup.add(punchMesh);
    }

    // Part 4: Rear Camera Bump Array
    const bumpW = 0.52;
    const bumpH = 0.65;
    const bumpD = 0.04;
    const bumpGeo = new THREE.BoxGeometry(bumpW, bumpH, bumpD);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: 0x0d1410,
      metalness: 0.9,
      roughness: 0.15,
    });
    const bumpMesh = new THREE.Mesh(bumpGeo, bumpMat);
    bumpMesh.position.set(-phoneW / 2 + bumpW / 2 + 0.08, phoneH / 2 - bumpH / 2 - 0.08, -phoneD / 2 - bumpD / 2);
    phoneGroup.add(bumpMesh);

    // Part 5: Optical Lens Cylinders & Rims
    const lensRingGeo = new THREE.CylinderGeometry(0.11, 0.11, 0.03, 32);
    const lensRingMat = new THREE.MeshStandardMaterial({
      color: cameraRingColor,
      metalness: 0.95,
      roughness: 0.1,
    });

    const lensGlassGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.032, 32);
    const lensGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x030805,
      roughness: 0.05,
      metalness: 0.1,
      transmission: isSoftwareGl ? 0 : 0.8,
      ior: 1.6,
    });

    // Top Lens
    const lens1Ring = new THREE.Mesh(lensRingGeo, lensRingMat);
    lens1Ring.rotation.x = Math.PI / 2;
    lens1Ring.position.set(bumpMesh.position.x, bumpMesh.position.y + 0.16, -phoneD / 2 - bumpD - 0.015);
    phoneGroup.add(lens1Ring);

    const lens1Glass = new THREE.Mesh(lensGlassGeo, lensGlassMat);
    lens1Glass.rotation.x = Math.PI / 2;
    lens1Glass.position.copy(lens1Ring.position);
    lens1Glass.position.z -= 0.005;
    phoneGroup.add(lens1Glass);

    // Bottom Lens
    const lens2Ring = new THREE.Mesh(lensRingGeo, lensRingMat);
    lens2Ring.rotation.x = Math.PI / 2;
    lens2Ring.position.set(bumpMesh.position.x, bumpMesh.position.y - 0.16, -phoneD / 2 - bumpD - 0.015);
    phoneGroup.add(lens2Ring);

    const lens2Glass = new THREE.Mesh(lensGlassGeo, lensGlassMat);
    lens2Glass.rotation.x = Math.PI / 2;
    lens2Glass.position.copy(lens2Ring.position);
    lens2Glass.position.z -= 0.005;
    phoneGroup.add(lens2Glass);

    // LED Flash / Secondary Sensor
    const flashGeo = new THREE.CircleGeometry(0.04, 16);
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const flashMesh = new THREE.Mesh(flashGeo, flashMat);
    flashMesh.rotation.y = Math.PI;
    flashMesh.position.set(bumpMesh.position.x + 0.18, bumpMesh.position.y, -phoneD / 2 - bumpD - 0.002);
    phoneGroup.add(flashMesh);

    // Part 6: Physical Side Buttons
    const buttonMat = new THREE.MeshStandardMaterial({
      color: cameraRingColor,
      metalness: 0.9,
      roughness: 0.2,
    });
    // Power Button on right edge
    const powerBtn = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.22, 0.04), buttonMat);
    powerBtn.position.set(phoneW / 2 + 0.01, 0.2, 0);
    phoneGroup.add(powerBtn);

    // Volume Rockers on left edge
    const volUpBtn = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.15, 0.04), buttonMat);
    volUpBtn.position.set(-phoneW / 2 - 0.01, 0.35, 0);
    phoneGroup.add(volUpBtn);

    const volDownBtn = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.15, 0.04), buttonMat);
    volDownBtn.position.set(-phoneW / 2 - 0.01, 0.15, 0);
    phoneGroup.add(volDownBtn);

    // Part 7: Soft Grounding Contact Shadow
    const shadowGeo = new THREE.PlaneGeometry(1.8, 1.8);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowCtx = shadowCanvas.getContext('2d');
    if (shadowCtx) {
      const grad = shadowCtx.createRadialGradient(64, 64, 0, 64, 64, 60);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.6)');
      grad.addColorStop(0.5, 'rgba(5, 20, 12, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      shadowCtx.fillStyle = grad;
      shadowCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.65,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -phoneH / 2 - 0.25;
    scene.add(shadowMesh);

    // Add group to scene
    scene.add(phoneGroup);

    // Initial orientation: Sleek 3D isometric angle
    phoneGroup.rotation.x = targetRotationRef.current.x;
    phoneGroup.rotation.y = targetRotationRef.current.y;

    // ----------------------------------------------------
    // POINTER & TOUCH INTERACTION (DRAG ROTATION & TILT)
    // ----------------------------------------------------
    const onPointerDown = (e: PointerEvent) => {
      if (!interactive) return;
      isDraggingRef.current = true;
      setIsRotating(false);
      previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || !phoneGroupRef.current) return;
      const deltaX = e.clientX - previousPointerPositionRef.current.x;
      const deltaY = e.clientY - previousPointerPositionRef.current.y;

      targetRotationRef.current.y += deltaX * 0.01;
      targetRotationRef.current.x += deltaY * 0.01;

      // Clamp X tilt to prevent inverted tumbling
      targetRotationRef.current.x = Math.max(-0.8, Math.min(0.8, targetRotationRef.current.x));

      previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // ----------------------------------------------------
    // ANIMATION & RENDER LOOP
    // ----------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      const delta = clock.getDelta();

      if (phoneGroupRef.current) {
        // Idle gentle 3D float rotation if enabled
        if (isRotating && !isDraggingRef.current) {
          targetRotationRef.current.y += 0.008;
          // Subtle floating bob
          phoneGroupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.04;
        }

        // Smooth physical damping toward target rotation
        phoneGroupRef.current.rotation.y +=
          (targetRotationRef.current.y - phoneGroupRef.current.rotation.y) * 0.1;
        phoneGroupRef.current.rotation.x +=
          (targetRotationRef.current.x - phoneGroupRef.current.rotation.x) * 0.1;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // ----------------------------------------------------
    // RESIZE OBSERVER
    // ----------------------------------------------------
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 320;
      const newH = container.clientHeight || 260;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ----------------------------------------------------
    // CLEANUP DISPOSAL
    // ----------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      // Dispose Three.js objects
      chassisGeo.dispose();
      chassisMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      screenTexture.dispose();
      lensRingGeo.dispose();
      lensRingMat.dispose();
      lensGlassGeo.dispose();
      lensGlassMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();

      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [product, size, interactive]);

  // Synchronize activeAngle prop changes
  useEffect(() => {
    if (!activeAngle) return;
    setInternalAngle(activeAngle);
    if (activeAngle === 'orbit') {
      setIsRotating(true);
    } else {
      setIsRotating(false);
      if (activeAngle === 'studio') {
        targetRotationRef.current = { x: 0.15, y: -0.45 };
      } else if (activeAngle === 'front') {
        targetRotationRef.current = { x: 0, y: 0 };
      } else if (activeAngle === 'rear') {
        targetRotationRef.current = { x: 0, y: Math.PI };
      } else if (activeAngle === 'side') {
        targetRotationRef.current = { x: 0, y: -Math.PI / 2 };
      }
    }
  }, [activeAngle]);

  // Handle Preset Angle Clicks
  const handlePreset = (preset: PhoneAngle) => {
    setInternalAngle(preset);
    if (onAngleChange) {
      onAngleChange(preset);
    }
    if (preset === 'orbit') {
      setIsRotating(true);
      return;
    }
    setIsRotating(false);
    if (preset === 'studio') {
      targetRotationRef.current = { x: 0.15, y: -0.45 };
    } else if (preset === 'front') {
      targetRotationRef.current = { x: 0, y: 0 };
    } else if (preset === 'rear') {
      targetRotationRef.current = { x: 0, y: Math.PI };
    } else if (preset === 'side') {
      targetRotationRef.current = { x: 0, y: -Math.PI / 2 };
    }
  };

  return (
    <div className={`relative w-full ${heightMap[size]} rounded-2xl bg-gradient-to-b from-[#141A17] via-[#0E1511] to-[#080D0B] border border-[#1B2921] overflow-hidden group select-none ${className}`}>
      
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Top 3D Indicator Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#10251B]/90 border border-[#36D17C]/30 text-[10px] font-mono font-bold text-[#36D17C] backdrop-blur-sm">
          <Rotate3d className="w-3 h-3" />
          <span>{isRotating ? '3D ORBIT' : '3D INTERACTIVE'}</span>
        </span>
        <span className="text-[10px] text-[#A4B0A8] font-mono hidden sm:inline">
          {product.brand}
        </span>
      </div>

      {/* Interactive Controls Overlay for Detailed Views */}
      {showControls && (
        <div className="absolute bottom-3 inset-x-3 z-10 flex flex-wrap items-center justify-between gap-2 bg-[#0C120E]/90 border border-[#1E3528] p-1.5 rounded-xl backdrop-blur-md">
          {/* Preset Angle Buttons */}
          <div className="flex items-center gap-1 text-[11px] font-mono">
            <button
              onClick={() => handlePreset('studio')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                internalAngle === 'studio' ? 'bg-[#36D17C] text-[#080D0B] font-bold' : 'text-[#A4B0A8] hover:text-[#F5F7F5]'
              }`}
            >
              3D Iso
            </button>
            <button
              onClick={() => handlePreset('front')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                internalAngle === 'front' ? 'bg-[#36D17C] text-[#080D0B] font-bold' : 'text-[#A4B0A8] hover:text-[#F5F7F5]'
              }`}
            >
              Front
            </button>
            <button
              onClick={() => handlePreset('rear')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                internalAngle === 'rear' ? 'bg-[#36D17C] text-[#080D0B] font-bold' : 'text-[#A4B0A8] hover:text-[#F5F7F5]'
              }`}
            >
              Rear
            </button>
            <button
              onClick={() => handlePreset('side')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                internalAngle === 'side' ? 'bg-[#36D17C] text-[#080D0B] font-bold' : 'text-[#A4B0A8] hover:text-[#F5F7F5]'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => handlePreset('orbit')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                internalAngle === 'orbit' || isRotating ? 'bg-[#36D17C] text-[#080D0B] font-bold' : 'text-[#A4B0A8] hover:text-[#F5F7F5]'
              }`}
            >
              Orbit
            </button>
          </div>

          {/* Auto-rotation toggle */}
          <button
            onClick={() => {
              const next = !isRotating;
              setIsRotating(next);
              if (next && onAngleChange) {
                onAngleChange('orbit');
              }
            }}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1 transition-colors ${
              isRotating
                ? 'bg-[#10251B] border border-[#36D17C]/40 text-[#36D17C]'
                : 'text-[#A4B0A8] hover:text-[#F5F7F5] bg-[#141A17]'
            }`}
          >
            <span>{isRotating ? 'Auto Orbiting' : 'Orbit Paused'}</span>
          </button>
        </div>
      )}

      {/* Subtle Drag Hint */}
      <div className="absolute bottom-2 right-3 z-10 pointer-events-none text-[9px] font-mono text-[#55645B] opacity-75 group-hover:opacity-100 transition-opacity">
        Drag to rotate in 3D
      </div>

    </div>
  );
};
