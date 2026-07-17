// Interview Questions Database
const interviewQuestions = {
  // Software Development/Computer Science
  computerScience: {
    technical: [
      {
        id: 1,
        question:
          "Explain the difference between an array and a linked list. When would you use each?",
        difficulty: "medium",
        expectedAnswer:
          "Arrays provide constant time access but fixed size, while linked lists offer dynamic size but linear access time.",
        hints: [
          "Think about memory allocation",
          "Consider access patterns",
          "Memory usage differences",
        ],
        category: "Data Structures",
      },
      {
        id: 2,
        question: "What is the time complexity of binary search and why?",
        difficulty: "easy",
        expectedAnswer:
          "O(log n) because we eliminate half the search space with each iteration.",
        hints: [
          "How many elements are eliminated each step?",
          "Think about the search space reduction",
        ],
        category: "Algorithms",
      },
      {
        id: 3,
        question:
          "Explain the concept of Object-Oriented Programming and its four pillars.",
        difficulty: "medium",
        expectedAnswer:
          "OOP is based on Encapsulation, Inheritance, Polymorphism, and Abstraction principles.",
        hints: [
          "Four main concepts",
          "Think about code organization",
          "Consider reusability",
        ],
        category: "Programming Concepts",
      },
      {
        id: 4,
        question: "What is the difference between HTTP and HTTPS?",
        difficulty: "easy",
        expectedAnswer:
          "HTTPS is HTTP with SSL/TLS encryption for secure data transmission.",
        hints: [
          "Think about security",
          "Consider data encryption",
          "SSL/TLS protocol",
        ],
        category: "Web Development",
      },
      {
        id: 5,
        question:
          "Explain how garbage collection works in programming languages.",
        difficulty: "hard",
        expectedAnswer:
          "Automatic memory management that reclaims memory occupied by objects no longer in use.",
        hints: [
          "Memory management",
          "Automatic vs manual",
          "Reference counting",
        ],
        category: "Memory Management",
      },
      {
        id: 6,
        question: "What is the difference between SQL and NoSQL databases?",
        difficulty: "medium",
        expectedAnswer:
          "SQL databases are relational with fixed schema, NoSQL are non-relational with flexible schema.",
        hints: ["Schema flexibility", "Scalability", "ACID properties"],
        category: "Databases",
      },
      {
        id: 7,
        question: "Explain the MVC architecture pattern.",
        difficulty: "medium",
        expectedAnswer:
          "Model-View-Controller separates application logic into three interconnected components.",
        hints: ["Three components", "Separation of concerns", "Data flow"],
        category: "Architecture",
      },
      {
        id: 8,
        question: "What is recursion and when would you use it?",
        difficulty: "medium",
        expectedAnswer:
          "A function calling itself to solve smaller instances of the same problem.",
        hints: ["Self-calling function", "Base case", "Problem decomposition"],
        category: "Algorithms",
      },
      {
        id: 9,
        question:
          "Explain the difference between stack and queue data structures.",
        difficulty: "easy",
        expectedAnswer:
          "Stack is LIFO (Last In, First Out), Queue is FIFO (First In, First Out).",
        hints: ["Order of operations", "Real-world analogies", "Use cases"],
        category: "Data Structures",
      },
      {
        id: 10,
        question: "What is Big O notation and why is it important?",
        difficulty: "medium",
        expectedAnswer:
          "Mathematical notation describing algorithm efficiency in terms of time and space complexity.",
        hints: ["Algorithm efficiency", "Worst-case analysis", "Scalability"],
        category: "Algorithms",
      },
    ],
    behavioral: [
      {
        id: 11,
        question: "Tell me about a challenging programming problem you solved.",
        difficulty: "medium",
        expectedAnswer:
          "Describe the problem, your approach, challenges faced, and the solution.",
        hints: [
          "Use STAR method",
          "Focus on problem-solving process",
          "Mention technical details",
        ],
        category: "Problem Solving",
      },
      {
        id: 12,
        question:
          "How do you stay updated with new technologies and programming trends?",
        difficulty: "easy",
        expectedAnswer:
          "Regular learning through online resources, communities, projects, and experimentation.",
        hints: [
          "Continuous learning",
          "Multiple sources",
          "Practical application",
        ],
        category: "Professional Development",
      },
      {
        id: 13,
        question:
          "Describe a time when you had to work with difficult code written by someone else.",
        difficulty: "medium",
        expectedAnswer:
          "Focus on understanding, documentation, communication, and improvement strategies.",
        hints: ["Code review process", "Collaboration", "Documentation"],
        category: "Teamwork",
      },
      {
        id: 14,
        question: "How do you approach debugging a complex issue?",
        difficulty: "medium",
        expectedAnswer:
          "Systematic approach: reproduce, isolate, analyze logs, use debugging tools, test fixes.",
        hints: ["Systematic process", "Tools and techniques", "Documentation"],
        category: "Problem Solving",
      },
    ],
  },

  // Artificial Intelligence/Machine Learning
  ai: {
    technical: [
      {
        id: 15,
        question:
          "Explain the difference between supervised and unsupervised learning.",
        difficulty: "easy",
        expectedAnswer:
          "Supervised learning uses labeled data, unsupervised learning finds patterns in unlabeled data.",
        hints: [
          "Labeled vs unlabeled data",
          "Training approach",
          "Examples of each",
        ],
        category: "Machine Learning Basics",
      },
      {
        id: 16,
        question: "What is overfitting and how can you prevent it?",
        difficulty: "medium",
        expectedAnswer:
          "Model learns training data too well, fails on new data. Prevent with regularization, cross-validation, more data.",
        hints: [
          "Model performance",
          "Generalization",
          "Regularization techniques",
        ],
        category: "Model Training",
      },
      {
        id: 17,
        question: "Explain the concept of neural networks and how they work.",
        difficulty: "medium",
        expectedAnswer:
          "Networks of interconnected nodes that process information through weighted connections and activation functions.",
        hints: [
          "Neurons and layers",
          "Weights and biases",
          "Forward propagation",
        ],
        category: "Deep Learning",
      },
      {
        id: 18,
        question:
          "What is the difference between classification and regression?",
        difficulty: "easy",
        expectedAnswer:
          "Classification predicts categories, regression predicts continuous numerical values.",
        hints: ["Output type", "Examples of each", "Evaluation metrics"],
        category: "Machine Learning Types",
      },
      {
        id: 19,
        question: "Explain gradient descent and its role in machine learning.",
        difficulty: "hard",
        expectedAnswer:
          "Optimization algorithm that minimizes cost function by iteratively adjusting parameters.",
        hints: ["Optimization", "Cost function", "Parameter updates"],
        category: "Optimization",
      },
      {
        id: 20,
        question: "What is cross-validation and why is it important?",
        difficulty: "medium",
        expectedAnswer:
          "Technique to evaluate model performance by training/testing on different data subsets.",
        hints: ["Model evaluation", "Data splitting", "Performance validation"],
        category: "Model Evaluation",
      },
    ],
    behavioral: [
      {
        id: 21,
        question:
          "Describe an AI project you worked on and the challenges you faced.",
        difficulty: "medium",
        expectedAnswer:
          "Detail the project scope, technical challenges, data issues, and solutions implemented.",
        hints: [
          "Project scope",
          "Technical challenges",
          "Data quality",
          "Solutions",
        ],
        category: "Project Experience",
      },
      {
        id: 22,
        question:
          "How do you handle working with messy or incomplete datasets?",
        difficulty: "medium",
        expectedAnswer:
          "Data cleaning, preprocessing, imputation techniques, and validation strategies.",
        hints: [
          "Data preprocessing",
          "Quality assessment",
          "Cleaning techniques",
        ],
        category: "Data Management",
      },
    ],
  },

  // Data Science
  dataScience: {
    technical: [
      {
        id: 23,
        question:
          "Explain the data science pipeline from raw data to insights.",
        difficulty: "medium",
        expectedAnswer:
          "Data collection, cleaning, exploration, modeling, validation, and interpretation.",
        hints: [
          "End-to-end process",
          "Each phase importance",
          "Iterative nature",
        ],
        category: "Data Science Process",
      },
      {
        id: 24,
        question: "What is the difference between correlation and causation?",
        difficulty: "easy",
        expectedAnswer:
          "Correlation shows relationship between variables, causation implies one causes the other.",
        hints: [
          "Statistical relationship",
          "Cause and effect",
          "Common misconceptions",
        ],
        category: "Statistics",
      },
      {
        id: 25,
        question: "How do you handle missing data in a dataset?",
        difficulty: "medium",
        expectedAnswer:
          "Various techniques: deletion, imputation (mean, median, mode), or advanced methods like KNN imputation.",
        hints: [
          "Different approaches",
          "When to use each",
          "Impact on analysis",
        ],
        category: "Data Preprocessing",
      },
      {
        id: 26,
        question: "Explain A/B testing and its importance in data science.",
        difficulty: "medium",
        expectedAnswer:
          "Controlled experiment comparing two versions to determine which performs better.",
        hints: [
          "Experimental design",
          "Statistical significance",
          "Business applications",
        ],
        category: "Experimentation",
      },
      {
        id: 27,
        question: "What are the assumptions of linear regression?",
        difficulty: "hard",
        expectedAnswer:
          "Linearity, independence, homoscedasticity, normality of residuals, and no multicollinearity.",
        hints: ["Multiple assumptions", "Model validity", "Diagnostic checks"],
        category: "Statistical Modeling",
      },
    ],
    behavioral: [
      {
        id: 28,
        question:
          "How do you communicate complex data insights to non-technical stakeholders?",
        difficulty: "medium",
        expectedAnswer:
          "Use visualizations, avoid jargon, focus on business impact, and provide actionable recommendations.",
        hints: ["Visualization", "Simple language", "Business relevance"],
        category: "Communication",
      },
      {
        id: 29,
        question:
          "Describe a time when your analysis led to an unexpected finding.",
        difficulty: "medium",
        expectedAnswer:
          "Describe discovery process, investigation methods, validation, and business implications.",
        hints: ["Discovery process", "Validation", "Impact"],
        category: "Analytical Thinking",
      },
    ],
  },

  // Cybersecurity
  cyberSecurity: {
    technical: [
      {
        id: 30,
        question: "Explain the CIA triad in cybersecurity.",
        difficulty: "easy",
        expectedAnswer:
          "Confidentiality, Integrity, and Availability - the three pillars of information security.",
        hints: [
          "Three core principles",
          "Data protection",
          "System availability",
        ],
        category: "Security Fundamentals",
      },
      {
        id: 31,
        question:
          "What is the difference between vulnerability, threat, and risk?",
        difficulty: "medium",
        expectedAnswer:
          "Vulnerability is a weakness, threat is potential danger, risk is probability of threat exploiting vulnerability.",
        hints: [
          "Definitions",
          "Relationship between concepts",
          "Risk assessment",
        ],
        category: "Risk Management",
      },
      {
        id: 32,
        question: "Describe common types of malware and their characteristics.",
        difficulty: "medium",
        expectedAnswer:
          "Viruses, worms, trojans, ransomware, spyware - each with different propagation and damage methods.",
        hints: ["Different types", "Propagation methods", "Damage potential"],
        category: "Malware",
      },
      {
        id: 33,
        question: "Explain how encryption works and why it's important.",
        difficulty: "medium",
        expectedAnswer:
          "Process of encoding data to prevent unauthorized access, using algorithms and keys.",
        hints: ["Data protection", "Algorithms", "Key management"],
        category: "Cryptography",
      },
      {
        id: 34,
        question: "What is penetration testing and why is it conducted?",
        difficulty: "medium",
        expectedAnswer:
          "Authorized simulated cyberattack to evaluate security posture and find vulnerabilities.",
        hints: [
          "Security testing",
          "Authorized testing",
          "Vulnerability discovery",
        ],
        category: "Security Testing",
      },
    ],
    behavioral: [
      {
        id: 35,
        question:
          "How do you stay updated with the latest cybersecurity threats?",
        difficulty: "easy",
        expectedAnswer:
          "Follow security blogs, attend conferences, participate in communities, and continuous learning.",
        hints: [
          "Information sources",
          "Continuous learning",
          "Community engagement",
        ],
        category: "Professional Development",
      },
      {
        id: 36,
        question: "Describe how you would handle a security incident.",
        difficulty: "hard",
        expectedAnswer:
          "Incident response plan: contain, investigate, remediate, document, and improve processes.",
        hints: ["Systematic approach", "Documentation", "Process improvement"],
        category: "Incident Response",
      },
    ],
  },

  // General Technical Questions
  general: {
    technical: [
      {
        id: 37,
        question:
          "How do you approach learning a new technology or programming language?",
        difficulty: "easy",
        expectedAnswer:
          "Start with fundamentals, practice with projects, use documentation, and seek community help.",
        hints: [
          "Learning strategy",
          "Practical application",
          "Resource utilization",
        ],
        category: "Learning",
      },
      {
        id: 38,
        question: "Explain the software development lifecycle (SDLC).",
        difficulty: "medium",
        expectedAnswer:
          "Structured process including planning, analysis, design, implementation, testing, deployment, and maintenance.",
        hints: [
          "Development phases",
          "Structured approach",
          "Quality assurance",
        ],
        category: "Software Engineering",
      },
      {
        id: 39,
        question: "What is version control and why is it important?",
        difficulty: "easy",
        expectedAnswer:
          "System to track changes in files over time, enabling collaboration and change management.",
        hints: ["Change tracking", "Collaboration", "Backup and recovery"],
        category: "Development Tools",
      },
      {
        id: 40,
        question:
          "Describe the difference between functional and non-functional requirements.",
        difficulty: "medium",
        expectedAnswer:
          "Functional define what system does, non-functional define how it performs (quality attributes).",
        hints: [
          "System behavior vs quality",
          "Examples of each",
          "Requirements gathering",
        ],
        category: "Requirements Engineering",
      },
    ],
    behavioral: [
      {
        id: 41,
        question: "Tell me about a time you had to meet a tight deadline.",
        difficulty: "medium",
        expectedAnswer:
          "Describe situation, prioritization strategy, time management, and successful outcome.",
        hints: ["STAR method", "Prioritization", "Time management"],
        category: "Time Management",
      },
      {
        id: 42,
        question: "How do you handle constructive criticism or feedback?",
        difficulty: "easy",
        expectedAnswer:
          "Listen actively, ask questions for clarity, reflect on feedback, and implement improvements.",
        hints: ["Active listening", "Growth mindset", "Implementation"],
        category: "Professional Growth",
      },
      {
        id: 43,
        question:
          "Describe a situation where you had to work with a difficult team member.",
        difficulty: "hard",
        expectedAnswer:
          "Professional approach, communication strategies, finding common ground, and resolution.",
        hints: [
          "Professional communication",
          "Conflict resolution",
          "Team dynamics",
        ],
        category: "Teamwork",
      },
      {
        id: 44,
        question: "Why are you interested in this role and our company?",
        difficulty: "easy",
        expectedAnswer:
          "Research-based answer showing knowledge of company and alignment with career goals.",
        hints: ["Company research", "Role alignment", "Career goals"],
        category: "Motivation",
      },
      {
        id: 45,
        question: "Where do you see yourself in 5 years?",
        difficulty: "medium",
        expectedAnswer:
          "Realistic career progression showing ambition, skill development, and contribution to organization.",
        hints: ["Career progression", "Skill development", "Long-term goals"],
        category: "Career Planning",
      },
      {
        id: 46,
        question: "What motivates you in your work?",
        difficulty: "easy",
        expectedAnswer:
          "Authentic response about personal drivers, learning opportunities, and making impact.",
        hints: ["Personal motivation", "Professional growth", "Impact"],
        category: "Motivation",
      },
      {
        id: 47,
        question: "How do you prioritize tasks when everything seems urgent?",
        difficulty: "medium",
        expectedAnswer:
          "Assessment criteria, stakeholder communication, impact analysis, and systematic approach.",
        hints: [
          "Prioritization framework",
          "Impact assessment",
          "Communication",
        ],
        category: "Task Management",
      },
      {
        id: 48,
        question: "Tell me about a mistake you made and how you handled it.",
        difficulty: "hard",
        expectedAnswer:
          "Honest admission, immediate action taken, lessons learned, and prevention strategies.",
        hints: ["Honesty", "Accountability", "Learning from mistakes"],
        category: "Accountability",
      },
      {
        id: 49,
        question: "How do you handle stress and pressure?",
        difficulty: "medium",
        expectedAnswer:
          "Stress management techniques, maintaining productivity, and seeking support when needed.",
        hints: [
          "Coping strategies",
          "Maintaining performance",
          "Self-awareness",
        ],
        category: "Stress Management",
      },
      {
        id: 50,
        question: "Do you have any questions for us?",
        difficulty: "easy",
        expectedAnswer:
          "Thoughtful questions about role, team, company culture, growth opportunities, and challenges.",
        hints: [
          "Show interest",
          "Research-based questions",
          "Career development",
        ],
        category: "Engagement",
      },
    ],
  },
};

module.exports = { interviewQuestions };
