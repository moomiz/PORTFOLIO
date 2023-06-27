import React, { useRef, useEffect } from 'react';
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function ThreeObject() {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 씬(Scene) 생성
        const scene = new THREE.Scene();


        // 배경 색상 설정
        // scene.background = new THREE.Color('ffff'); // 원하는 색상으로 변경하세요
        const light = new THREE.DirectionalLight(0xffffff, 1); // 흰색 조명, 밝기 설정
        light.position.set(1, 1, 3); // 조명 위치 설정

        // 씬에 조명 추가
        scene.add(light);

        // 카메라(Camera) 생성
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // WebGL 렌더러(Renderer) 생성
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);


        // DOM에 렌더러를 추가
        if (sceneRef.current) {
            sceneRef.current.appendChild(renderer.domElement);
        }

        // glTF 로더 생성
        const loader = new GLTFLoader();

        // glTF 파일 로드
        loader.load(
            '/models/mycharater.gltf',
            (gltf) => {
                // 로드된 glTF 모델을 씬에 추가
                scene.add(gltf.scene);

                // 애니메이션 등 추가 로직 작성

                // 렌더링 함수 정의
                const animate = () => {
                    requestAnimationFrame(animate);
                    // 애니메이션 로직 작성

                    // 씬을 렌더링
                    renderer.render(scene, camera);
                };

                // 애니메이션 시작
                animate();
            },
            undefined,
            (error) => {
                console.error('Error loading glTF file:', error);
            }
        );

        return () => {
            // 컴포넌트가 언마운트될 때 정리 작업 수행
            // 예를 들어, 이벤트 리스너 제거 등
        };
    }, []);

    return <div ref={sceneRef} />;
};


export default ThreeObject