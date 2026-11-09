# RoadRescue

RoadRescue is a responsive, multi-page towing and roadside assistance website built with HTML5, CSS3, and vanilla JavaScript. There is no build step or package manager required.

---

## 🚀 Running in Visual Studio Code (F5 / Start Debugging)

This project is pre-configured with VS Code debugging and automated server tasks:

1. Open the project folder in **Visual Studio Code**.
2. Press **`F5`** or go to the menu: **`Run -> Start Debugging`**.
3. VS Code will **automatically start the local development server** in the background and immediately open Google Chrome at `http://localhost:8080/`.

> **Tip for Microsoft Edge users:** If you prefer Edge, click the Run & Debug drop-down in the left sidebar and select **`Launch Edge against localhost`**.

---

## 🌐 Running Across Browsers & Devices

### 💻 Laptop & Desktop

| Browser | How to Run |
|---|---|
| **Google Chrome** | Press `F5` in VS Code, or run `npm run browser:chrome` |
| **Microsoft Edge** | Select `Launch Edge against localhost` in VS Code, or run `npm run browser:edge` |
| **Mozilla Firefox** | Run `npm run browser:firefox` or run task **Terminal -> Run Task -> Open in Firefox** |
| **Apple Safari** (macOS) | Run `npm run browser:safari` or run task **Terminal -> Run Task -> Open in Safari (macOS)** |
| **Default System Browser** | Run `npm run open` or `node server.js --open` |

---

### 📱 Mobile & Tablet (iPhone, iPad, Android Phone, Android Tablet)

The development server listens on `0.0.0.0`, allowing any device on the same local network to view the site live:

1. Connect your **Mobile phone** or **Tablet** to the **same Wi-Fi network** as your Laptop/Desktop.
2. Start the server (either by clicking **Run -> Start Debugging** in VS Code, or running `npm start` in the terminal).
3. The terminal displays your network address, for example:
   ```
   Mobile & Tablet: http://172.20.10.2:8080/
   ```
4. Open **Safari** (iOS/iPadOS) or **Chrome/Firefox** (Android) on your mobile device and navigate to that address.
5. The full website will load with touch-optimized mobile navigation drawer, responsive card grids, and safe-area inset support!

#### 🛠️ Mobile & Tablet Simulation in Desktop Browsers
You can also simulate any mobile or tablet device directly inside your desktop browser:
- **Chrome & Edge:** Press `Ctrl + Shift + M` (Mac: `Cmd + Option + M`) to toggle the Device Toolbar (emulating iPhone 14/15/16, iPad Air, iPad Pro, Samsung Galaxy, etc.).
- **Firefox:** Press `Ctrl + Shift + M` for Responsive Design Mode.
- **Safari:** Enable the Develop menu, then press `Cmd + Ctrl + R` for Responsive Design Mode.

---

## ⚙️ Alternative Ways to Run

### Option 1: Direct File (Zero Server Required)
If you don't want to run a local server:
- Simply double-click **`index.html`** to open it in your browser.
- Or in VS Code, select **`Launch Chrome (Direct File - No Server Required)`** from the Run & Debug menu.

### Option 2: Command Line (Node.js)
```bash
# Start server
npm start
# or
node server.js

# Start server and auto-open browser
npm run open
```

### Option 3: Python Built-in Server
```bash
python -m http.server 8080 --bind 0.0.0.0
```
Then visit `http://localhost:8080/`.

---

## 📱 Responsive & Cross-Browser Design Features

- **Mobile First & Fluid Breakpoints:** Fully responsive across Extra Small Mobile (<480px), Mobile (<600px), Tablet Portrait (<992px), Tablet Landscape / Laptop (<1200px), and Large Desktop (1200px+).
- **Apple Safari Support:** Full `-webkit-backdrop-filter` support for frosted glass cards and sticky navigation, `-webkit-user-select`, and `100vh`/`100dvh` viewport height fallbacks.
- **Notch & Home Bar Support:** `env(safe-area-inset-bottom)` and `viewport-fit=cover` for modern borderless iPhones and iPads.
- **Fast Touch Response:** `touch-action: manipulation` eliminating 300ms mobile tap delays.
- **No Horizontal Scroll Glitches:** `overflow-x: clip` preserving sticky navigation while preventing accidental horizontal overflows on small screens.

---

## 📄 Pages Included

The site includes 30+ static pages:
- **Public:** `index.html` (Home 1), `home-2.html` (Home 2), `about.html`, `services.html`, `service-details.html`, `coverage.html`, `pricing.html`, `blog.html`, `blog-details.html`, `contact.html`.
- **Assistance Requests:** `request-assistance.html`, `request-details.html`, `request-history.html`, `track-request.html`.
- **Customer Portal:** `login.html`, `register.html`, `forgot-password.html`, `customer-dashboard.html`, `customer-profile.html`.
- **Admin Dashboard:** `admin-dashboard.html`, `admin-analytics.html`, `admin-messages.html`, `admin-requests.html`, `admin-settings.html`, `admin-users.html`.
- **Utility & Legal:** `coming-soon.html`, `maintenance.html`, `privacy.html`, `terms.html`, `security.html`.

---

## 🚢 Deploy to Vercel

1. Push this project to GitHub/GitLab/Bitbucket.
2. In Vercel, import the repository.
3. Framework preset: **Other**. No build command needed.
4. Deploy! Entry point is `index.html`.
