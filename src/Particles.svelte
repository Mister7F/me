<script>
    import { onMount } from "svelte";

    const MAX_SPEED = 100;
    const MAX_SIZE = 3;
    const PARTICLE_COLOR = "rgb(90, 90, 90)";

    const FRAME_PER_SECOND = 60;
    const FRAME_DURATION_MS = 1000 / FRAME_PER_SECOND;
    const FRAME_DURATION_S = 1 / FRAME_PER_SECOND;

    const DISTANCE_TO_LINK = Math.pow(100, 2);

    class Particle {
        constructor(canvas) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * MAX_SIZE;

            let speed = Math.random() * MAX_SPEED;
            let direction = Math.random() * 2 * Math.PI;

            this.dx = speed * Math.cos(direction);
            this.dy = speed * Math.sin(direction);
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
        }

        draw() {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            this.ctx.fill();
        }

        update(tick_time) {
            //Update position
            //tick_time is in second, the time beetween two update
            this.x += this.dx * tick_time;
            this.y += this.dy * tick_time;

            if (this.x > this.canvas.width) this.x = 0;
            else if (this.x < 0) this.x = this.canvas.width;

            if (this.y > this.canvas.height) this.y = 0;
            else if (this.y < 0) this.y = this.canvas.height;
        }
    }

    let canvas;
    onMount(async () => {
        let ctx = canvas.getContext("2d");

        let particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(canvas));
        }

        function square_disance(a, b) {
            // Distance between two particles
            return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
        }

        window.setInterval(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.globalAlpha = 1;
            ctx.lineWidth = 1;
            ctx.fillStyle = PARTICLE_COLOR;
            ctx.strokeStyle = PARTICLE_COLOR;

            for (const i in particles) {
                particles[i].draw();
                particles[i].update(FRAME_DURATION_S);
            }

            // Now, draw line
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let sq_distance = square_disance(
                        particles[i],
                        particles[j]
                    );
                    if (sq_distance < DISTANCE_TO_LINK) {
                        ctx.beginPath();
                        ctx.globalAlpha = 1 - sq_distance / DISTANCE_TO_LINK;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }, FRAME_DURATION_MS);
    });
</script>

<canvas bind:this={canvas} width="1900" height="900" />

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -99;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color: #e9ebee;
        border: 0;
    }
</style>
