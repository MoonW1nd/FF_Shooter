class Player extends BaseEntity {
  constructor() {
    super(
      BaseEntity.sprite.player,
      64,
      gameState.size / 2,
      gameState.size / 2
    );
  }

  update() {
    if (this.energy <= 0)
      return;
    this.vx  = gameState.keysDown.ArrowRight || gameState.keysDown.Right || gameState.keysDown.d || 0;
    this.vx -= gameState.keysDown.ArrowLeft || gameState.keysDown.Left || gameState.keysDown.a || 0;
    this.vy  = gameState.keysDown.ArrowDown || gameState.keysDown.Down || gameState.keysDown.s || 0;
    this.vy -= gameState.keysDown.ArrowUp || gameState.keysDown.Up || gameState.keysDown.w || 0;

    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
    if (this.x > gameState.size) {
      this.x = gameState.size;
    }
    if (this.y > gameState.size) {
      this.y = gameState.size;
    }
    // const max = gameState.size;
    // if (this.x < 0) this.x = 0;
    // if (this.y < 0) this.y = 0;
    // if (this.x > max) this.x = max;
    // if (this.y > max) this.y = max;




    /*
      SESSION #1 in the Player update method

      TODO: 1. Set this.vx and this.vy using gameState.keysDown to move the player with the Arrow keys, or any other keys you prefer
      HINT: gameState.keysDown.j is undefined if 'j' is not pressed, and 1 if it is pressed.
      SOLUTION: solution1.js

      TODO: 2. Set this.x and this.y to keep the player in the arena, or wrap around it.
      HINT: The size of the arena is gameState.size
      SOLUTION: solution2.js

      TODO: 3. Check gameState.keysDown to spawn a new Bullet and set its this.vx and this.vy
      HINT: gameState.keysDown.s is undefined if 's' is not pressed, and 1 if it is pressed.
      SOLUTION: solution3.js
    */

    // move & render
    super.update();
    this.render();
  }
}
