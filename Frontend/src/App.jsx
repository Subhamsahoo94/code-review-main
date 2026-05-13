
import { useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {

  const [code, setCode] = useState(`function sum(a, b) {
  return a + b
}`)

  const [review, setReview] = useState(``)
  const [isReviewing, setIsReviewing] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  async function reviewCode() {

    if (!code.trim()) {
      setReview("Please enter some code.")
      return
    }

    if (isReviewing) return

    try {

      setIsReviewing(true)
      setReview("Reviewing your code...")

      const response = await axios.post(
        'https://code-review-main-2.onrender.com',
        { code }
      )

      setReview(response.data)

    } catch (error) {

      setReview(
        error.response?.data?.message ||
        'Failed to get review.'
      )

    } finally {
      setIsReviewing(false)
    }
  }

  async function copyReview() {

    if (!review) return

    await navigator.clipboard.writeText(review)

    alert("Review copied!")
  }

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <main>

        <div className="left">

          <div className="topbar">
            <h1>AI Code Reviewer</h1>

            <button
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          <div className="code">

            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={20}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                height: "100%",
                width: "100%",
                background: "transparent",
                color: darkMode ? "white" : "black"
              }}
            />

          </div>

          <div className="actions">

            <button
              onClick={reviewCode}
              disabled={isReviewing}
              className="review"
            >
              {isReviewing ? 'Reviewing...' : 'Review Code'}
            </button>

            <button
              onClick={copyReview}
              className="copy-btn"
            >
              Copy Review
            </button>

          </div>

        </div>

        <div className="right">

          <div className="review-header">
            <h2>AI Review</h2>
          </div>

          <Markdown
            rehypePlugins={[rehypeHighlight]}
          >
            {review}
          </Markdown>

        </div>

      </main>

    </div>
  )
}

export default App



