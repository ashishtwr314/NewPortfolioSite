const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const loader = new THREE.GLTFLoader();
// camera.position.x = auto;

// camera.position.set(-10, -10, 5);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxDistance = 500;

controls.enableRotate = false;
controls.enablePan = false;
controls.enableDamping = true;
camera.position.z = 100;
camera.position.y = 0;
camera.position.x = 0;

var light1 = new THREE.AmbientLight(0xff0000, 1);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff);
light2.position.set(0, 0, 10);
scene.add(light2);

var geometry = new THREE.BoxGeometry(20, 20, 5, 10, 10, 10);
var material = new THREE.MeshLambertMaterial({ color: 0xffcdd2 });
var cube = new THREE.Mesh(geometry, material);
cube.position.set(-80, 20, 9);
scene.add(cube);

var geometry2 = new THREE.BoxGeometry(20, 20, 5, 10, 10, 10);
var material2 = new THREE.MeshLambertMaterial({ color: 0xffcdd2 });
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(-20, 0, 30);
scene.add(cube2);

var geometry3 = new THREE.BoxGeometry(30, 30, 5, 10, 10, 10);
var material3 = new THREE.MeshLambertMaterial({ color: 0xffcdd2 });
var cube3 = new THREE.Mesh(geometry3, material3);
cube3.position.set(30, 0, 0);
scene.add(cube3);

var geometry4 = new THREE.BoxGeometry(20, 20, 5, 10, 10, 10);
var material4 = new THREE.MeshLambertMaterial({ color: 0xffcdd2 });
var cube4 = new THREE.Mesh(geometry4, material3);
cube4.position.set(57, 0, 50);
scene.add(cube4);

// window.addEventListener("keydown", function (e) {
//   if (e.code == "ArrowUp") {
//     camera.position.x += 1;
//     console.log("INCRESING");
//   } else if (e.code == "ArrowRight") {
//     camera.position.x += 1;
//   }
// });

const onMouseMove = function (e) {
  e.preventDefault();
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);
  console.log(intersects);
  for (let i in intersects) {
    intersects[i].object.rotation.y += 90;
  }
};

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("click", onMouseMove);
