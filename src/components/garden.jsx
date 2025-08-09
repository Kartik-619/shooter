import { useEffect, useRef, useState } from "react";
import { useControls } from "leva";

export default function Garden() {
    const canvasRef = useRef(null);
    const [shootTrigger, setShootState] = useState(0);
    const [result, setResult] = useState('');
    const [showRes, setshowRes] = useState('');
    const animationIdRef = useRef(null);
    const animateRef = useRef(null);

    function roundToTwo(num) {
        return Math.round(num * 100) / 100;
    }

    const { speed, angle, gravity } = useControls({
        speed: { value: 50, min: 0, max: 500, step: 50 },
        angle: { value: 45, min: 25, max: 90, step: 1 },
        gravity: {
            options: {
                earth: 9.8,
                zero: 0,
                moon: 1.62,
                neptune: 11.172,
                jupiter: 24.8,
            },
            value: 9.8,
        },
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const img = new Image();
        img.src = "/canon.svg";

        const cannon_width = 100;
        const cannon_height = 100;
        const canon_x = 100;
        const canon_y = canvas.height - cannon_height - 45;

        const radius = 20;
        const groundY = canvas.height - 100;

        let t = 0;
        let px = 0;
        let py = 0;
        let vx = 0;
        let vy = 0;
        let g = gravity;
        let isMoving = false;

        let start_x = 0;   // ✅
        let max_px = 0;    // ✅ Track max x

        function drawCannon() {
            if (img.complete) {
                ctx.drawImage(img, canon_x, canon_y, cannon_width, cannon_height);
                ctx.save();
            }
        }

        function drawBall() {
            ctx.beginPath();
            ctx.arc(px, py, radius, 0, Math.PI * 2);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();
        }

        function drawGarden() {
            ctx.fillStyle = "#80FF00";
            ctx.fillRect(0, groundY, canvas.width, 100);
        }

        const animate = () => {
            if (!isMoving) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t += 0.1;

            px += vx * 0.1;
            py += vy * 0.1 + g * 0.1 * 0.1;
            vy += g * 0.1;

            max_px = Math.max(max_px, px);  // ✅ Track maximum x reached

            // Ground collision
            if (py + radius >= groundY) {
                py = groundY - radius;
                vy = -vy * 0.7;
                vx = vx * 0.7;

                // Stop when energy is low
                if (Math.abs(vy) < 2 && Math.abs(vx) < 2) {
                    isMoving = false;
                    cancelAnimationFrame(animationIdRef.current);
                    
                    const dist_x = Math.max(0, max_px - start_x); // ✅ true total x range
                    const max_height = ((speed * Math.sin(angle * Math.PI / 180)) ** 2) / (2 * gravity);
                    const time_taken = 2 * speed * Math.sin(angle * Math.PI / 180) / gravity;

                    setResult({ dist_x, max_height, time_taken });
                    setshowRes(true);
                    return;
                }
            }

            // Optional wall/ceiling collision
            if (radius + py > canvas.height || py - radius < 0) {
                vy = -vy * 0.9;
            }
            if (radius + px > canvas.width || px - radius < 0) {
                vx = -vx * 0.9;
            }

            drawGarden();
            drawCannon();
            drawBall();

            animationIdRef.current = requestAnimationFrame(animate);
        };

        animateRef.current = () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }

            t = 0;
            isMoving = true;

            const angleRad = (Math.PI * angle) / 180;
            vx = speed * Math.cos(angleRad);
            vy = -speed * Math.sin(angleRad);
            g = gravity;

            start_x = canon_x + cannon_width; // ✅ fixed
            px = start_x;
            py = canon_y + cannon_height / 2 - radius;
            max_px = px; // ✅ Reset max_px

            animationIdRef.current = requestAnimationFrame(animate);
        };

        return () => {
            cancelAnimationFrame(animationIdRef.current);
        };
    }, [angle, speed, gravity]);

    const handleShoot = () => {
        setShootState(prev => prev + 1);
        if (animateRef.current) {
            animateRef.current();
        }

        const audio = new Audio('/fireSound.mp3');
        audio.play();
    };

    return (
        <div style={{ position: "relative" }}>
            <canvas ref={canvasRef} style={{ display: "block" }} />

            <button
                onClick={handleShoot}
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    zIndex: 10,
                }}
            >
                Shoot!
            </button>

            {showRes && result && (
                <div style={{
                    position: "absolute",
                    top: "80px",
                    left: "20px",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "white",
                    padding: "10px",
                    borderRadius: "8px",
                    zIndex: 10,
                    maxWidth: "300px"
                }}>
                    <h3>Result</h3>
                    <p><strong>Distance:</strong> {roundToTwo(result.dist_x)} meter</p>
                    <p><strong>Max Height:</strong> {roundToTwo(result.max_height)} meter</p>
                    <p><strong>Time Taken:</strong> {roundToTwo(result.time_taken)} s</p>
                </div>
            )}
        </div>
    );
}
