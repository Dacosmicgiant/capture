# 🎣 Phishing Demo — Local Educational Proof of Concept

> ⚠️ **Educational Purposes Only** — This project is a **local demo** designed to illustrate how phishing attacks work. It captures form submissions on your own machine. Do **not** deploy this publicly or use it against real users. Misuse may be illegal.

---

## 📁 Project Structure
```
capture/
├── State Bank of India - Personal Banking.html   # Cloned phishing frontend
├── State Bank of India - Personal Banking_files/ # Frontend assets (CSS, JS, images)
└── backend/
    ├── server.js        # Express server that logs captured credentials
    ├── package.json
    └── ...
```

---

## 🧰 Prerequisites

Make sure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v18+ | [nodejs.org](https://nodejs.org) |
| npm | v9+ | Comes with Node.js |
| VS Code + Live Server extension | Latest | [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) |

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Dacosmicgiant/capture.git
cd capture
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

---

## ▶️ Running the Demo

You need **two things running simultaneously** — the frontend (via Live Server) and the backend (Express).

### Step 1 — Start the Backend Server
```bash
cd backend
npm run dev
```

You should see:
```
Backend listening →  http://localhost:3000
```

### Step 2 — Launch the Frontend

1. Open the project folder in **VS Code**
2. Right-click `State Bank of India - Personal Banking.html`
3. Select **"Open with Live Server"**

> This serves the HTML on something like `http://127.0.0.1:5500`

### Step 3 — Submit Credentials

1. Fill in any test credentials in the login form (e.g. username: `testuser`, password: `testpass`)
2. Click **Submit / Login**

### Step 4 — View Captured Data in the Backend Log

Switch to your terminal running the backend. You'll see the intercepted form data printed:
```
──────────────────────────────
Form data received:
{ username: 'testuser', password: 'testpass', loginCaptchaValue: '...' }
──────────────────────────────
```

---

## ⚙️ How It Works
```
[ User fills form ]
        │
        ▼
[ HTML form POSTs to http://localhost:3000/login ]
        │
        ▼
[ Express server logs req.body → credentials visible in terminal ]
        │
        ▼
[ Server responds: "Login attempt recorded." ]
```

The frontend HTML has been modified so its `<form action="">` points to `http://localhost:3000/login` instead of the real bank's server. The Express backend simply parses and logs whatever the form sends.

---

## 🛡️ Key Takeaways / What This Demonstrates

- Phishing pages are often **pixel-perfect clones** of legitimate sites
- Credential harvesting requires **very little backend code**
- Users have **no visual indication** that their data is being sent elsewhere
- Always verify the **URL in your browser's address bar** before logging in
- Look for **HTTPS and the correct domain** (e.g. `onlinesbi.sbi`, not a lookalike)

---

## 🔒 Disclaimer

This project is strictly for **cybersecurity education and awareness**.

- ✅ Allowed: Running locally to understand phishing mechanics
- ✅ Allowed: Use in controlled classroom / lab environments
- ❌ Not allowed: Hosting publicly or targeting real users
- ❌ Not allowed: Using against any individual or organization without explicit written consent

The author assumes **no liability** for misuse of this project.

---

## 📄 License

MIT — see `LICENSE` for details.