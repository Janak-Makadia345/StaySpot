# 🏨 StaySpot: Hotel & Travel Reservation System ✈️🛏️  
Full-Stack Booking App built with **MERN**, **Redux**, and **Docker**

🔗 [Check out the repo!](https://github.com/Janak-Makadia345/StaySpot.git)

---

## 🌍 About StaySpot

**StaySpot** is a modern hotel and travel reservation system designed as a full-stack SPA (Single Page Application) for both users and admins. It allows seamless listing, searching, and booking of stays and travel options with robust role-based access and JWT-secured authentication.

Ideal for travel startups or as a portfolio-grade full-stack project! 🧳✨

---

## ✨ Features

- 🧑‍💻 **Single Page App (SPA)** with React + Redux
- 🏘️ **500+ hotel & travel listings**
- 📆 **10,000+ bookings** processed via MongoDB
- 🔐 **JWT-based Auth** with **RBAC** for 2 user roles: `User` & `Admin`
- 🐳 **Dockerized app** — ready for container-based deployment
- 📊 **Redux State Management** — for scalable frontend logic
- 🌐 **RESTful APIs** built with Express.js

---

## 🛠️ Tech Stack

### 🧩 Frontend
- ⚛️ **React** — dynamic UI rendering
- 📦 **Redux Toolkit** — centralized state management
- 🎨 **Tailwind CSS** — responsive UI (or plain CSS/Bootstrap if applied)

### 🔧 Backend
- 🟩 **Node.js** — server-side runtime
- 🚂 **Express.js** — RESTful API framework
- 🍃 **MongoDB + Mongoose** — NoSQL database

### 🔐 Security & Auth
- 🔑 **JWT** — secure authentication
- 🛡️ **RBAC** — Role-Based Access Control (Admin/User)

### ☁️ Deployment
- 🐳 **Docker** — containerized frontend + backend
- 🐙 **GitHub** — source control and collaboration
- 🚀 **VPS / GCP / AWS Ready** — for deployment

---

## 🧠 Highlights

- 🛠️ **Crafted** a responsive and scalable hotel & travel SPA serving **1000+ users**
- 🏗️ **Developed** full RESTful APIs managing **500+ listings** and **10K+ bookings**
- 🔐 **Secured** routes and user access with **JWT + RBAC**
- 🐳 **Containerized** with Docker for seamless CI/CD and deployment

---

## 📦 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Janak-Makadia345/StaySpot.git
cd StaySpot
```

### 2️⃣ Environment Variables
Create a `.env` file in both `client/` and `server/` folders and configure as needed.  
Here’s a starting template for the backend `.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3️⃣ Install Dependencies

#### Install Backend
```bash
cd server
npm install
```

#### Install Frontend
```bash
cd ../client
npm install
```

### 4️⃣ Run Locally (Non-Docker)
#### Start Backend
```bash
cd server
npm run dev
```

#### Start Frontend
```bash
cd ../client
npm start
```

---

## 🐳 Dockerized Setup

### 📦 Build and Run the App Using Docker
```bash
docker-compose up --build
```

It will launch both the frontend and backend containers. Ensure your `.env` is properly configured inside the `server/` directory.

---

## 🔮 Future Enhancements

- 📲 Mobile-optimized PWA
- 💳 Payment Gateway Integration (Stripe/Razorpay)
- 📍 Geo-location-based listing filters
- ✉️ Booking confirmation emails with SendGrid/Mailgun
- 🧠 AI-based recommendation engine

---

## 🤝 Contributions

Contributions are welcome! 🌍  
If you find a bug 🐛 or have a new idea 💡 — fork, build, and pull request 🚀

1. 🍴 Fork the repo  
2. 🔧 Create a branch: `git checkout -b feature/YourFeature`  
3. 💾 Commit your changes: `git commit -m 'Add feature'`  
4. 📤 Push to your fork: `git push origin feature/YourFeature`  
5. 📬 Open a Pull Request  

---

## 📬 Connect with Me

Made with 💡 by [Janak Makadia](https://github.com/Janak-Makadia345)  
Let’s connect and chat about full-stack, travel tech, or DevOps! ☁️🧭

[![GitHub](https://img.shields.io/badge/GitHub-JanakMakadia-black?logo=github)](https://github.com/Janak-Makadia345)
