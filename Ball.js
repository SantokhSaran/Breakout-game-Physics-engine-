function Ball() {
    Ball.update();
    Ball = new ball(10, 10);

    scene.add(Ball.getMesh());
    this.setPosition(new THREE.Vector3(0, 500, 0));

    this.material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.speed = 0;

    var self = this;


    this.getMesh = function () {
        return self.mesh;
    };
}