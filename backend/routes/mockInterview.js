const express = require("express");
const router = express.Router();
const MockInterviewService = require("../services/mockInterviewService");

const mockInterviewService = new MockInterviewService();

// Start new mock interview session
router.post("/start", async (req, res) => {
  try {
    const {
      userId,
      field,
      difficulty = "mixed",
      questionCount = 10,
    } = req.body;

    if (!userId || !field) {
      return res.status(400).json({
        success: false,
        error: "User ID and field are required",
      });
    }

    const session = mockInterviewService.createSession(
      userId,
      field,
      difficulty,
      questionCount
    );

    res.json({
      success: true,
      data: session,
    });
  } catch (error) {
    console.error("Error starting mock interview:", error);
    res.status(500).json({
      success: false,
      error: "Failed to start mock interview",
    });
  }
});

// Get current question
router.get("/session/:sessionId/question", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const question = mockInterviewService.getCurrentQuestion(sessionId);

    if (!question) {
      return res.json({
        success: true,
        completed: true,
        message: "Interview completed",
      });
    }

    res.json({
      success: true,
      data: {
        question: {
          id: question.id,
          question: question.question,
          difficulty: question.difficulty,
          category: question.category,
          hints: question.hints,
        },
      },
    });
  } catch (error) {
    console.error("Error getting question:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Submit answer
router.post("/session/:sessionId/answer", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { answer, timeSpent } = req.body;

    if (!answer || !timeSpent) {
      return res.status(400).json({
        success: false,
        error: "Answer and time spent are required",
      });
    }

    const result = mockInterviewService.submitAnswer(
      sessionId,
      answer,
      timeSpent
    );

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error submitting answer:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get interview results
router.get("/session/:sessionId/results", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const results = mockInterviewService.getSessionResults(sessionId);

    res.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("Error getting results:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get available fields and question counts
router.get("/fields", async (req, res) => {
  try {
    const fields = [
      { id: "computerScience", name: "Computer Science", questionCount: 14 },
      { id: "ai", name: "Artificial Intelligence", questionCount: 8 },
      { id: "dataScience", name: "Data Science", questionCount: 7 },
      { id: "cyberSecurity", name: "Cybersecurity", questionCount: 7 },
      { id: "general", name: "General Technical", questionCount: 14 },
    ];

    res.json({
      success: true,
      data: fields,
    });
  } catch (error) {
    console.error("Error getting fields:", error);
    res.status(500).json({
      success: false,
      error: "Failed to get available fields",
    });
  }
});

module.exports = router;
