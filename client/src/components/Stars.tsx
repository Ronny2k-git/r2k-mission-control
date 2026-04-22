import { useEffect } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
};

export function Stars() {
  useEffect(() => {
    const canvas = document.getElementById("starCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    let stars: Star[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initStars() {
      stars = [];

      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2,
        });
      }
    }

    function drawStars() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(180,220,255)`;
        ctx!.fill();
      });
    }

    resize();
    initStars();
    drawStars();

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });
  }, []);

  return (
    <div id="stars">
      <canvas id="starCanvas"></canvas>
    </div>
  );
}
