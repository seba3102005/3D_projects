import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "purple"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35, // fov AKA field of view the narroer it becomes the less experience that i can see the wider it gets the more experience that i can see
  window.innerWidth / window.innerHeight,  // can access that value using aspect
  0.1, // anything that is smaller than that  i am not going to see it si i need to be the smallest possible
  75) // anything larger than that i am not going to see it

camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias:true, // to remove the zigzag edges
})

// create controls to control the scene it takes the canvas!!!
const controls = new OrbitControls(camera,canvas);

// this function is called only when the window is resized mesh 3amal 3ala batal
window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()  // must be called after any change happens in the camera
})

renderer.setSize(window.innerWidth, window.innerHeight)
// const maxPixelRatio = Math.min(2,window.devicePixelRatio) //to avoid reloding the unnecessary pixels rendering
// renderer.setPixelRatio(maxPixelRatio)

const renderloop = () =>{
    renderer.render(scene, camera)
    window.requestAnimationFrame(renderloop)
}

renderloop()



