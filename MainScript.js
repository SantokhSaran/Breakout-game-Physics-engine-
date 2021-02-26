//variables
var container, camera, scene, renderer;

var Ball;

initialize();
animate();
function initialize() {
    container = document.createElement('div');
    document.body.appendChild(container);

    //adding camera and it's position
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1000;
    //light
    scene = new THREE.Scene();
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);



    //back board
    var plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(1100, 1500), new THREE.MeshLambertMaterial({ color: 0xf44242 }));
    plane.position.y = 200;
    plane.position.z = -20;
    plane.receiveShadow = true;
    scene.add(plane);

    // brick repeated in a for loop
    for (var i = 0; i < 15; i++) {
        var geometry = new THREE.BoxGeometry(50, 100, 100);
        var material = new THREE.MeshBasicMaterial({ color: 0xf80808 });
        var cube = new THREE.Mesh(geometry, material);
        cube.position.x = 100 * i;
        cube.position.y = 500;
        cube.position.z = 0;
        scene.add(cube);
        //renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xfff6e6);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);


    }
   
}
