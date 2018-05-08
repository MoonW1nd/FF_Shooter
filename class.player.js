/* eslint-disable */
class Player extends BaseEntity {
  constructor() {
    super(
      BaseEntity.sprite.player,
      64,
      gameState.size / 2,
      gameState.size / 2,
    );
  }

  update() {
    if (this.energy <= 0) return;
    //  Set this.vx and this.vy using gameState.keysDown to move the player with the Arrow keys, or any other keys you prefer
    this.vx = gameState.keysDown.ArrowRight || gameState.keysDown.Right || 0;
    this.vx -= gameState.keysDown.ArrowLeft || gameState.keysDown.Left || 0;
    this.vy = gameState.keysDown.ArrowDown || gameState.keysDown.Down || 0;
    this.vy -= gameState.keysDown.ArrowUp || gameState.keysDown.Up || 0;

    // Set this.x and this.y to keep the player in the arena, or wrap around it.
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
    if (this.x > gameState.size) {
      this.x = gameState.size;
    }
    if (this.y > gameState.size) {
      this.y = gameState.size;
    }

    // Check gameState.keysDown to spawn a new Bullet and set its this.vx and this.vy
    let bulletVx,
      bulletVy;
    bulletVx = gameState.keysDown.d || gameState.keysDown.D || 0;
    bulletVx -= gameState.keysDown.a || gameState.keysDown.A || 0;
    bulletVy = gameState.keysDown.s || gameState.keysDown.S || 0;
    bulletVy -= gameState.keysDown.w || gameState.keysDown.W || 0;

    if (bulletVx || bulletVy) {
      const speed = 4;
      gameState.entities.push(new Bullet(this.x, this.y, bulletVx * speed, bulletVy * speed));
    }

    // test fuction for create new Robot
    // if (gameState.entities.filter((entity) => entity.sprite === 2).length < 16 ) {
    //   gameState.entities.push(
    //     new Robot()
    //   )
    // }
    // move & render
    super.update();
    this.render();
  }
}
