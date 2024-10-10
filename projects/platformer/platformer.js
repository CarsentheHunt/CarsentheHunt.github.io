$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    createCollectable("BabyOil", 200, 170, 6, 0.7);
    createCollectable("JustinBeiver", 500, 350);
    createCollectable("Freaky", 550, 100,);
    createPlatform(100, 601, 10, 15);
    createPlatform(300, 401, 10, 15);
    createPlatform(200, 501, 10, 15);
    createPlatform(400, 301, 60, 15);
    createPlatform(500, 90, 10, 200);
    createPlatform(499, 401, 50, 15);
    createPlatform(600, 401, 10, 15);
    createPlatform(700, 401, 10, 15);
    createPlatform(800, 401, 10, 15);
    createPlatform(900, 401, 10, 15);
    createPlatform(1000, 401, 10, 15);
    createPlatform(1100, 401, 10, 15);
    createPlatform(1150, 301, 10, 15);
    createPlatform(1200, 201, 10, 15);
    createPlatform(300, 200, 800, 15);
    createPlatform(0, 700, 100, 15);
    createCannon("right", 200, 2000, 15, 15);
    createCannon("right", 400, 2000, 15, 15);
    createCannon("top", 500, 5000, 15, 15);
    createCannon("top", 600, 2000, 15, 15);
    createCannon("top", 700, 2000, 15, 15);
    createCannon("top", 800, 2000, 15, 15);
    createCannon("top", 900, 2000, 15, 15);
    createCannon("top", 1000, 2000, 15, 15);
    createCannon("top", 1100, 2000, 15, 15);
    createCannon("top", 1200, 2000, 15, 15);
    createCannon("top", 1300, 2000, 15, 15);
    createCannon("right", 600, 3000, 15, 15);
    createCannon("right", 800, 100, 15, 15);
    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
