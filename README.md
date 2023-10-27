<!DOCTYPE html>
<html>
<head>
    <title>Randomly Changing 24x24 Color Array</title>
</head>
<body>
    <h1>Randomly Changing 24x24 Color Array</h1>
    <canvas id="colorCanvas" width="240" height="240"></canvas>

    <script>
        // Get the canvas element
        const canvas = document.getElementById('colorCanvas');
        const ctx = canvas.getContext('2d');
        const cellSize = 10;
        const colors = ['#66ff00', 'white', 'black'];

        // Function to generate a random color
        function getRandomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // Function to draw the grid with random colors
        function drawGrid() {
            for (let y = 0; y < 24; y++) {
                for (let x = 0; x < 24; x++) {
                    const color = getRandomColor();
                    ctx.fillStyle = color;
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }

        // Function to continuously update the canvas with random colors
        function updateCanvasContinuously() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the grid with random colors
            drawGrid();

            // Request the next animation frame to continue updating
            requestAnimationFrame(updateCanvasContinuously);
        }

        // Initial display
        drawGrid();

        // Start the continuous update
        requestAnimationFrame(updateCanvasContinuously);
    </script>
</body>
</html>
