import "aframe"
import React, { Component } from "react"

class Aframe extends Component {
  render () {
    return (
      <a-scene>
        <a-sky src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/anime_undersea.jpg?v=1689080361043" color="#ECECEC"></a-sky>
        
        <a-entity animation="property: position; from: 5 8 -10; to: -5 8 -10; dur: 20000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/goldfish.glb?v=1689155112555" 
              position="-0.440 -1.51 -2.071" 
              scale="2 2 2" 
              rotation="1 280 1">
            </a-gltf-model>
        </a-entity>
        
        <a-entity animation="property: position; from: 5 8 -10; to: -5 8 -10; dur: 30000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/goldfish.glb?v=1689155112555" 
              position="-0.440 -1.51 -2.071" 
              scale="1.5 1.5 1.5" 
              rotation="1 280 1">
            </a-gltf-model>
        </a-entity>
        
        <a-entity animation="property: position; from: 5 8 -10; to: -5 8 -10; dur: 40000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/goldfish.glb?v=1689155112555" 
              position="-0.440 -1.51 -2.071" 
              scale="3 3 3" 
              rotation="1 280 1">
            </a-gltf-model>
        </a-entity>
        
        <a-entity animation="property: position; from: 5 8 -10; to: -5 8 -10; dur: 20000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/goldfish.glb?v=1689155112555" 
              position="-4.84 -1.51 -0.065" 
              scale="2 2 2" 
              rotation="1 280 1">
            </a-gltf-model>
        </a-entity>
        
        <a-entity animation="property: position; from: 5 8 -10; to: -5 8 -10; dur: 30000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/goldfish.glb?v=1689155112555" 
              position="-0.440 -1.51 0.289" 
              scale="1.5 1.5 1.5" 
              rotation="1 280 1">
            </a-gltf-model>
        </a-entity>
        
        <a-entity animation="property: position; from: 5 8 -10; to: -5 8 -10; dur: 40000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/goldfish.glb?v=1689155112555" 
              position="-0.440 -1.51 1.752" 
              scale="3 3 3" 
              rotation="1 280 1">
            </a-gltf-model>
        </a-entity>


        <a-entity animation="property: rotation; to: 0 0 360; loop: true; dur: 20000;">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/Manta%20ray.glb?v=1689155109092" 
              position="0.482 2.318 -11.24" 
              scale="1 1 1" 
              rotation="1 150 1">
            </a-gltf-model>
        </a-entity>

        <a-entity animation="property: position; from: -5 8 -10; to: 5 8 -10; dur: 20000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/fish3.glb?v=1689154633179" 
              position="-36.1 -10 -12.57" 
              scale="3 3 3" 
              rotation="1 220 1">
            </a-gltf-model>
        </a-entity>

        <a-entity animation="property: position; from: -5 8 -10; to: 5 8 -10; dur: 20000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/fish3.glb?v=1689154633179" 
              position="-33.1 -10 -15.76" 
              scale="2 2 2" 
              rotation="1 220 1">
            </a-gltf-model>
        </a-entity>

        <a-entity animation="property: position; from: -5 8 -10; to: 5 8 -10; dur: 20000; easing: linear; loop: true">
            <a-gltf-model src="https://cdn.glitch.global/4c33f870-1437-4641-91a7-6d8b54c62926/fish3.glb?v=1689154633179" 
              position="-36.1 -10 -25.09" 
              scale="4 4 4" 
              rotation="1 220 1">
            </a-gltf-model>
        </a-entity>
        
      </a-scene>
    );
  }
}


export default Aframe;