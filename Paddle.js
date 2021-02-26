var paddleObj1, paddleMesh1;


//paddle
paddleObj1 = new Paddle1();
paddleMesh1 = paddleObj1.getMesh();
scene.add(paddleMesh1);
paddleMesh1.position.x = -1200;
//controlls 
document.addEventListener('keydown', paddleObj1.start_moving);
document.addEventListener('keyup', paddleObj1.stop_moving);


function Paddle1() {
    this.width = 150;
    this.height = 30;
    this.depth = 40;
    this.geometry = new THREE.BoxGeometry(this.width, this.height, this.depth, 40, 40, 40);
    this.material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // paddle geometries 
    this.pressed1 = false;

    this.speed = 0;
    var self = this;
    // controll logic 
    this.getMesh = function () {
        return self.mesh;
    };
    this.start_moving = function (event) {

        if (self.pressed1) return;
        self.pressed1 = true;

        if (event.key === 'a') {
            self.speed = -15;
        }

        else if (event.key === 'd') {
            self.speed = 15;

        }
    };

    this.stop_moving = function () {
        self.speed = 0;
        self.pressed1 = false;
    };

    this.move = function () {
        self.mesh.position.x += self.speed;
        self.collision();
    };

    this.collision = function () {
        if (self.mesh.position.y >= 500) {
            self.speed = 0;
            self.mesh.position.y = 500;
        }
        else if (self.mesh.position.y <= -500) {
            self.speed = 0;
            self.mesh.position.y = -500;
        }
    };

    this.update = function () {
        self.move();
    }
}
