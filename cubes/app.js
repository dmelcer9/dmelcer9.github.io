// I was just playing around with three.js to learn the library. Ended up with this.

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight , 0.1, 1000);
camera.position.set(0, -70, 00);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth-5, window.innerHeight-5);
document.body.appendChild(renderer.domElement);

var light = new THREE.PointLight(0xFFFFDD);
light.position.set(10, -100, 40);
scene.add(light);

var geometry = new THREE.BoxGeometry(5, 5, 5);
var boxes = [];

function generateBox(ypos){
  var material = new THREE.MeshLambertMaterial();
  var cube = new THREE.Mesh(geometry, material);
  cube.material.color.setHSL(Math.random()*.5+.2, 1, .5)

  cube.position.x = (Math.random()*150)-75;
  cube.position.y = ypos;
  cube.position.z = (Math.random()*100)-50;
  cube.rotation.x = Math.random() * 6.28;
  cube.rotation.y = Math.random() * 6.28;
  cube.rotation.z = Math.random() * 6.28;

  scene.add(cube);

  boxes.push(cube);

  return cube;
}

function isVisibleFromCamera(cube){
  return cube.position.y > -55;
}

for(var i = 0; i<100; i++){
  generateBox((Math.random()*500)-100);
}

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
mouse.x = NaN;
mouse.y = NaN;

var currentSelected = null;
var currentColor = null;

function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


}

var score = 0;
var done = false;
var countdown = 5;

function render() {

  boxes.filter(i=>!isVisibleFromCamera(i)).forEach(i=>{
    scene.remove(i);
    generateBox((Math.random(100))+300);
    if(Math.random() < .15) generateBox((Math.random(100))+300);
  });

  boxes = boxes.filter(isVisibleFromCamera);
  score++;

  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( scene.children );


  if(intersects.length > 0 && countdown <= 0 && !done){

    console.log("Game over, score: " + score);

    currentColor = intersects[0].object.material.color.clone();
    currentSelected = intersects[0].object;
    intersects[0].object.material.color.lerp(new THREE.Color(0xFF0000), 1);
    done = true;

  }

  if(!done && countdown <= 0){
    boxes.forEach(box=>{
      box.rotation.x += 0.01;
      box.rotation.y += 0.03;
      box.position.y += -.75;
    })
  }

  countdown--;

  requestAnimationFrame( render );


	renderer.render( scene, camera );

}

window.addEventListener( 'mousemove', onMouseMove, false )

render()
