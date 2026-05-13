const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body?.code;

    if (!code || !code.trim()) {
        return res.status(400).json({ message: "Code is required" });
    }

    try {
        const response = await aiService(code);

        res.send(response);
    } catch (error) {
        console.error("Failed to generate review:", error);
        res.status(500).json({ message: "Failed to generate review" });
    }

}
