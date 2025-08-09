# 🎯 Projectile Motion Simulator

A real-time, interactive physics simulation that visualizes the trajectory of a cannonball under gravity. Explore how speed, angle, and gravitational fields affect motion — all in your browser!

🔗 **Live Demo**: [https://projectile-simulator.vercel.app](https://projectile-simulator.vercel.app)  
🎥 **Watch it in action** — see physics come alive!

---

## 🌟 Features

- 🔫 **Shoot on demand** with a click of a button
- 📏 **Adjustable parameters**:
  - Initial speed
  - Launch angle
  - Gravity (Earth, Moon, Neptune, Zero-G, etc.)
- 🌍 **Visual canvas animation** showing realistic projectile motion
- 🔄 **Bouncing physics** — ball bounces off walls and ground with damping
- 📊 **Real-time trajectory** using kinematic equations
- 🎨 **Interactive cannon visualization** using SVG
- 🧮 **Physics-based motion**:
  - `x = vx * t`
  - `y = vy * t + 0.5 * g * t²`

---

## 🛠️ How It Works

The simulation uses **HTML5 Canvas** and **React** to render a dynamic environment where:

1. The user sets:
   - Speed (0–500 m/s)
   - Angle (0°–90°)
   - Gravity (Earth: 9.8, Moon: 1.62, etc.)

2. On clicking **"Shoot!"**, the cannon fires a ball with:
   - Horizontal velocity: `vx = v * cos(θ)`
   - Vertical velocity: `vy = -v * sin(θ)` (negative for upward in canvas)

3. The ball follows a parabolic path governed by:
