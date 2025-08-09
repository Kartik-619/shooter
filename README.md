

<h1> 🎯 Projectile Motion Simulator</h1>

A real-time, interactive physics simulation that visualizes the trajectory of a cannonball under gravity. Explore how speed, angle, and gravitational fields affect motion — all in your browser!

🔗 **Live Demo**: [https://projectile-simulator.vercel.app](https://projectile-simulator.vercel.app)  
🎥 **Watch it in action** — see physics come alive!

---

<h3> 🌟 Features</h3>

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

<h3> 🛠️ How It Works</h3>

The simulation uses **HTML5 Canvas** and **React** to render a dynamic environment where:

1. The user sets:
   - Speed (0–500 m/s)
   - Angle (0°–90°)
   - Gravity (Earth: 9.8, Moon: 1.62, etc.)

2. On clicking **"Shoot!"**, the cannon fires a ball with:
   - Horizontal velocity: `vx = v * cos(θ)`
   - Vertical velocity: `vy = -v * sin(θ)` (negative for upward in canvas)

3. The ball follows a parabolic path governed by: <br>
   px = x₀ + vx * t<br>
   py = y₀ + vy * t + 0.5 * g * t²
   <br><br>
4. 
4. When the ball hits the canvas edge:
- Velocity reverses (`vx = -vx`, `vy = -vy`) with damping
- Simulates **elastic bounce** with energy loss
- Resets origin to bounce point for realistic rebound

5. The simulation continues until the ball stops or re-enters the garden.

---

<h3> 🧰 Tech Stack</h3>

| Technology | Purpose |
|----------|--------|
| **React** | Frontend UI and state management |
| **Leva** | Interactive controls (like Dat GUI) |
| **HTML5 Canvas** | Real-time drawing and animation |
| **JavaScript (ES6+)** | Physics calculations and animation loop |
| **Vercel** | Free hosting and deployment |
| **GitHub** | Version control and collaboration |

---

<h3>🌐 Live Deployment</h3>
Deployed on Vercel for free!
👉https://projectileshooter.vercel.app/ <br>

<hr>
<br>


<h3>🎓 Educational Value</h3>
This simulator is perfect for:

Physics students learning projectile motion
Teachers demonstrating kinematics in class
Developers learning canvas animation in React
Anyone curious about how gravity shapes motion
It helps visualize:
<br>
1) Max height
2) Time of flight
3) Range
4) Effect of gravity on different planets
5) Elastic collisions

<hr><br>

<h3>☝️👋Contributing </h3>
Contributions are welcome! <br>
Want to add: <br>

Trajectory prediction line?<br>
Multiple balls?<br>
Sound effects?<br>
Mobile support?<br>
Fork the repo, make your changes, and open a PR!<br>
<hr><br>
<h3>🙌 Acknowledgments</h3>
Built with ❤️ using React and Leva. <br>
Inspired by real-world physics and the joy of learning through interaction.

<hr>
<br>
<h3>Screenshots</h3>
<img width="1912" height="867" alt="image" src="https://github.com/user-attachments/assets/508f09b9-5e7d-4c2a-bff4-5d10b7bff5a1" />
