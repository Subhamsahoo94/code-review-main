const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
    systemInstruction: `
        You are a senior code reviewer with 7+ years of development experience.

        Review the submitted code for:
        - Correctness and potential bugs
        - Security risks
        - Performance issues
        - Readability and maintainability
        - Best practices and simpler alternatives
        - Missing edge cases or tests

        Keep feedback clear, constructive, and concise. When useful, include a
        corrected code snippet and explain why it is better.
    `
});

async function generateContent(prompt) {
    if (!process.env.GOOGLE_GEMINI_KEY) {
        throw new Error("GOOGLE_GEMINI_KEY is not configured");
    }

    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent
