/* eslint-disable */
class Robot extends BaseEntity {
  constructor() {
    const robotType = Math.floor((Math.random() ** 3) * 4);
    const max = gameState.size;
    const x = Math.random() * max;
    const y = Math.random() * max;
    super(
      BaseEntity.sprite.robot + robotType,
      4 ** (robotType + 1),
      x,
      y
    );
    this.scoreReward = 2 ** robotType;

    const safeDistance = gameState.size / 4;
    while (this.getDistance(gameState.player, safeDistance).isClose) {
      this.x = Math.random() * max;
      this.y = Math.random() * max;
    }
    /*
      SESSION #2 in the Robot constructor

      TODO: 6 spawn Robot at a safe distance from the player
      HINT: this.getDistance(...) to figure if a random position is too close
            Set your "safe distance" based on gameState.size
            Remember the player starts in the center i.e. gameState.size / 2
      SOLUTION: solution6.js
    */
  }

  update() {

    if (this.x < gameState.player.x) this.vx = 0.5;
    if (this.x > gameState.player.x) this.vx = -0.5;
    if (this.y < gameState.player.y) this.vy = 0.5;
    if (this.y > gameState.player.y) this.vy = -0.5;

    /*
      SESSION #1 in the Robot update method

      TODO: 5 Use a low probability to set this.vx and this.vy to move towards the player
      HINT: The player is in gameState.player
            Try using one probability to set this.vx and this.vy, then try using one for each
            this.getDistance(anEntity, someDistance) and Math.sign() are you friends ;)
            Increase the probability with the currentTime or the score to increase the speed of the robots, and the difficulty of the game
      SOLUTION: solution5.js
    */
    const probability = .2;
    const distanceToPlayer = this.getDistance(gameState.player, 8);
    this.vx = (Math.random() < probability) ? Math.sign(distanceToPlayer.x) : 0;
    this.vy = (Math.random() < probability) ? Math.sign(distanceToPlayer.y) : 0;

    /*
      SESSION #2 in the Robot update method

      TODO: 7. Decrease the energy of the Player if it is too close to the robot.
      HINT: The "body" of the sprites are 8x8
      SOLUTION: solution7.js
    */
    if (this.getDistance(gameState.player, 8).isClose) {
      gameState.player.energy--
    }
    // move & render
    super.update();
    this.render();
  }
}
