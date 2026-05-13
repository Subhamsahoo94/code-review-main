# AI Code Reviewer 🚀

An AI-powered Code Review application that analyzes your code and provides intelligent feedback on bugs, performance, security, readability, and best practices using the Gemini API.

---

## ✨ Features

* 🤖 AI-powered code review
* 🌙 Dark / Light mode
* 🎨 Modern responsive UI
* 🧠 Syntax highlighting
* 📝 Markdown AI responses
* 📋 Copy review button
* ⚡ Fast React + Vite frontend
* 🔥 Express.js backend
* ☁️ Deploy-ready for Vercel & Render

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* PrismJS
* React Markdown
* Axios
* CSS3

## Backend

* Node.js
* Express.js
* Gemini API
* CORS
* dotenv

---

# 📁 Project Structure

```bash
code-review-main/
│
├── BackEnd/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `BackEnd` folder.

```env
GOOGLE_GEMINI_KEY=YOUR_GEMINI_API_KEY
```

---

# 🔑 Get Gemini API Key

Generate your API key from:

[Google AI Studio](https://aistudio.google.com/app/apikey?utm_source=chatgpt.com)

---

# 🚀 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/code-review-main.git
```

---

# 📦 Install Dependencies

## Backend

```bash
cd BackEnd
npm install
```

## Frontend

```bash
cd Frontend
npm install
```

---

# ▶️ Run Locally

## Start Backend

```bash
cd BackEnd
npm run dev
```

Backend runs on:

```txt
http://localhost:3000
```

---

## Start Frontend

```bash
cd Frontend
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# 🌐 API Endpoint

## Review Code

```http
POST /ai/get-review
```

### Request Body

```json
{
  "code": "function sum(a,b){ return a+b }"
}
```

---

# 🧠 AI Review Includes

* Bug detection
* Security analysis
* Performance optimization
* Readability improvements
* Best practices
* Error handling
* Edge cases
* Code quality suggestions

---

# ☁️ Deployment

## Frontend Deployment

Recommended:

* [Vercel](https://vercel.com?utm_source=chatgpt.com)

## Backend Deployment

Recommended:

* [Render](https://render.com?utm_source=chatgpt.com)

---

# 🔒 CORS Setup

```js
app.use(
  cors({
    origin: "YOUR_FRONTEND_URL"
  })
)
```

---

# 📸 Screenshots

[homepage](https://github.com/Subhamsahoo94/code-review-main/blob/main/Screenshot%202026-05-13%20235419.png)

---

# 🧑‍💻 Author

Subham sahoo

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.
