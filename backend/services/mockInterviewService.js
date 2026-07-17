const { interviewQuestions } = require("../utils/interviewQuestions");

class MockInterviewService {
  constructor() {
    this.sessions = new Map(); // In production, use database
  }

  // Create new interview session
  createSession(userId, field, difficulty = "mixed", questionCount = 10) {
    const sessionId = this.generateSessionId();
    const questions = this.selectQuestions(field, difficulty, questionCount);

    const session = {
      sessionId,
      userId,
      field,
      difficulty,
      questions,
      currentQuestionIndex: 0,
      responses: [],
      startTime: new Date(),
      status: "active",
      score: null,
    };

    this.sessions.set(sessionId, session);
    return { sessionId, firstQuestion: questions[0] };
  }

  // Get current question
  getCurrentQuestion(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) throw new Error("Session not found");

    const currentIndex = session.currentQuestionIndex;
    if (currentIndex >= session.questions.length) {
      return null; // Interview completed
    }

    return session.questions[currentIndex];
  }

  // Submit answer and get next question
  submitAnswer(sessionId, answer, timeSpent) {
    const session = this.sessions.get(sessionId);
    if (!session) throw new Error("Session not found");

    const currentQuestion = session.questions[session.currentQuestionIndex];

    // Store response
    session.responses.push({
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      userAnswer: answer,
      timeSpent,
      timestamp: new Date(),
    });

    // Move to next question
    session.currentQuestionIndex++;

    // Check if interview is complete
    if (session.currentQuestionIndex >= session.questions.length) {
      session.status = "completed";
      session.endTime = new Date();
      session.score = this.calculateScore(session);

      return {
        completed: true,
        score: session.score,
        summary: this.generateSummary(session),
      };
    }

    // Return next question
    return {
      completed: false,
      nextQuestion: session.questions[session.currentQuestionIndex],
      progress: {
        current: session.currentQuestionIndex + 1,
        total: session.questions.length,
      },
    };
  }

  // Select questions based on field and difficulty
  selectQuestions(field, difficulty, count) {
    const fieldQuestions =
      interviewQuestions[field] || interviewQuestions.general;
    let availableQuestions = [];

    // Combine technical and behavioral questions
    if (fieldQuestions.technical) {
      availableQuestions = availableQuestions.concat(fieldQuestions.technical);
    }
    if (fieldQuestions.behavioral) {
      availableQuestions = availableQuestions.concat(fieldQuestions.behavioral);
    }

    // Filter by difficulty if not mixed
    if (difficulty !== "mixed") {
      availableQuestions = availableQuestions.filter(
        (q) => q.difficulty === difficulty
      );
    }

    // Shuffle and select required count
    const shuffled = this.shuffleArray([...availableQuestions]);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // Calculate interview score
  calculateScore(session) {
    const totalQuestions = session.questions.length;
    const averageTime =
      session.responses.reduce((sum, r) => sum + r.timeSpent, 0) /
      totalQuestions;

    // Simple scoring based on completion and time management
    let score = {
      completion: (session.responses.length / totalQuestions) * 100,
      timeManagement: this.calculateTimeScore(averageTime),
      overall: 0,
    };

    score.overall = (score.completion + score.timeManagement) / 2;

    return score;
  }

  // Calculate time management score
  calculateTimeScore(averageTime) {
    // Ideal time: 2-4 minutes per question
    const idealMin = 2 * 60; // 2 minutes in seconds
    const idealMax = 4 * 60; // 4 minutes in seconds

    if (averageTime >= idealMin && averageTime <= idealMax) {
      return 100;
    } else if (averageTime < idealMin) {
      return Math.max(60, 100 - ((idealMin - averageTime) / idealMin) * 40);
    } else {
      return Math.max(60, 100 - ((averageTime - idealMax) / idealMax) * 40);
    }
  }

  // Generate interview summary
  generateSummary(session) {
    const field = session.field;
    const fieldName = this.getFieldDisplayName(field);

    return {
      fieldTested: fieldName,
      questionsAnswered: session.responses.length,
      totalQuestions: session.questions.length,
      duration: Math.round((session.endTime - session.startTime) / 1000 / 60), // minutes
      averageTimePerQuestion: Math.round(
        session.responses.reduce((sum, r) => sum + r.timeSpent, 0) /
          session.responses.length
      ),
      strengths: this.identifyStrengths(session),
      improvements: this.identifyImprovements(session),
      recommendedActions: this.getRecommendedActions(field),
    };
  }

  // Identify strengths
  identifyStrengths(session) {
    const strengths = [];
    const avgTime =
      session.responses.reduce((sum, r) => sum + r.timeSpent, 0) /
      session.responses.length;

    if (session.responses.length === session.questions.length) {
      strengths.push("Completed all questions");
    }

    if (avgTime >= 120 && avgTime <= 240) {
      strengths.push("Good time management");
    }

    const categories = [...new Set(session.questions.map((q) => q.category))];
    if (categories.length > 3) {
      strengths.push("Handled diverse question types");
    }

    return strengths;
  }

  // Identify areas for improvement
  identifyImprovements(session) {
    const improvements = [];
    const avgTime =
      session.responses.reduce((sum, r) => sum + r.timeSpent, 0) /
      session.responses.length;

    if (avgTime < 60) {
      improvements.push("Consider taking more time to elaborate on answers");
    }

    if (avgTime > 300) {
      improvements.push("Practice being more concise in responses");
    }

    if (session.responses.length < session.questions.length) {
      improvements.push("Work on completing all questions within time limit");
    }

    return improvements;
  }

  // Get recommended actions
  getRecommendedActions(field) {
    const recommendations = {
      general: [
        "Practice the STAR method for behavioral questions",
        "Research the company and role thoroughly",
        "Prepare specific examples from your experience",
      ],
      computerScience: [
        "Review fundamental data structures and algorithms",
        "Practice coding problems on platforms like LeetCode",
        "Study system design concepts",
      ],
      ai: [
        "Review machine learning fundamentals",
        "Practice explaining complex AI concepts simply",
        "Stay updated with latest AI trends and research",
      ],
      dataScience: [
        "Practice statistical concepts and their applications",
        "Review data visualization and storytelling techniques",
        "Prepare to discuss past projects with data insights",
      ],
      cyberSecurity: [
        "Review security frameworks and best practices",
        "Stay updated with latest threats and vulnerabilities",
        "Practice incident response scenarios",
      ],
    };

    return recommendations[field] || recommendations.general;
  }

  // Get interview session results
  getSessionResults(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) throw new Error("Session not found");

    return {
      session,
      detailedFeedback: this.generateDetailedFeedback(session),
    };
  }

  // Generate detailed feedback
  generateDetailedFeedback(session) {
    return session.questions.map((question, index) => {
      const response = session.responses[index];
      return {
        question: question.question,
        category: question.category,
        difficulty: question.difficulty,
        userAnswer: response ? response.userAnswer : "Not answered",
        timeSpent: response ? response.timeSpent : 0,
        expectedAnswer: question.expectedAnswer,
        hints: question.hints,
        feedback: this.generateQuestionFeedback(question, response),
      };
    });
  }

  // Generate feedback for individual question
  generateQuestionFeedback(question, response) {
    if (!response) {
      return "Question not completed. Consider time management strategies.";
    }

    // Simple keyword matching for feedback
    const keywords = question.expectedAnswer.toLowerCase().split(" ");
    const userWords = response.userAnswer.toLowerCase().split(" ");
    const matchCount = keywords.filter((word) =>
      userWords.includes(word)
    ).length;
    const matchPercentage = (matchCount / keywords.length) * 100;

    if (matchPercentage > 60) {
      return "Good coverage of key concepts. Consider adding more specific examples.";
    } else if (matchPercentage > 30) {
      return "Partial understanding shown. Review the key concepts and practice elaboration.";
    } else {
      return "Consider reviewing this topic area. Focus on the key concepts mentioned in hints.";
    }
  }

  // Utility methods
  generateSessionId() {
    return "mock_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getFieldDisplayName(field) {
    const displayNames = {
      computerScience: "Computer Science",
      ai: "Artificial Intelligence",
      dataScience: "Data Science",
      cyberSecurity: "Cybersecurity",
      general: "General Technical",
    };
    return displayNames[field] || field;
  }
}

module.exports = MockInterviewService;
