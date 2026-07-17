// AI Career Navigator Chatbot
class CareerChatbot {
  constructor() {
    this.isOpen = false;
    this.isMinimized = false;
    this.messageHistory = [];

    // Initialize knowledge base
    this.knowledgeBase = {
      // General Questions
      "what is ai career navigator": {
        answer:
          "AI Career Navigator is an AI-powered tool that guides students and professionals in choosing the right career path based on their skills, interests, and academic background. It provides personalized career recommendations, skill gap analysis, and job matching.",
        category: "general",
      },
      "how does ai career navigator work": {
        answer:
          "The system takes your resume and preferences, analyzes your skills using advanced AI algorithms, matches them with current market demand, and recommends the best career paths. It also provides skill development suggestions and job opportunities.",
        category: "general",
      },
      "who can use ai career navigator": {
        answer:
          "Students, fresh graduates, and professionals looking to switch careers can all use AI Career Navigator. Whether you're just starting out or looking to advance your career, our platform adapts to your experience level.",
        category: "general",
      },
      "is ai career navigator free": {
        answer:
          "We offer both free and premium plans. The free plan includes basic career recommendations and skill analysis. The premium plan provides personalized learning paths, detailed salary information, and one-on-one career coaching sessions.",
        category: "general",
      },
      "how accurate are the recommendations": {
        answer:
          "Our AI model is trained on millions of career profiles and job market data, achieving approximately 92% accuracy in career matching. However, recommendations should be considered as guidance rather than absolute predictions, as personal preferences and market changes can affect outcomes.",
        category: "general",
      },
      "how often is the data updated": {
        answer:
          "Our job market data and skill requirements are updated weekly to ensure you have the most current information. Career trends and salary data are refreshed monthly based on the latest labor market reports.",
        category: "general",
      },
      "can i share my results": {
        answer:
          "Yes, you can share your career assessment results through a unique link or download them as a PDF report. You can also share specific recommendations with mentors, career counselors, or on professional networks like LinkedIn.",
        category: "general",
      },
      "what makes this different from other career tools": {
        answer:
          "Unlike generic career quizzes, our AI uses natural language processing to analyze your resume and skills, matches them with real-time job market data, and provides personalized learning paths. Our recommendations evolve as the job market changes and as you develop new skills.",
        category: "general",
      },
      "how long does the assessment take": {
        answer:
          "The initial assessment takes about 10-15 minutes. If you upload your resume, it's even faster - about 5 minutes. You can save your progress and return later if needed. The more detailed information you provide, the more accurate your recommendations will be.",
        category: "general",
      },
      "can i retake the assessment": {
        answer:
          "Absolutely! You can retake the assessment as many times as you want, especially after acquiring new skills or experiences. We recommend updating your profile every 6-12 months or whenever you complete significant professional development.",
        category: "general",
      },

      // Resume & Skills
      "why upload resume": {
        answer:
          "Uploading your resume helps the AI extract your academic background, skills, work experience, and achievements to provide highly personalized career suggestions. The more information we have, the better our recommendations!",
        category: "resume",
      },
      "use without resume": {
        answer:
          "Yes, absolutely! You can manually input your skills, interests, educational background, and career preferences instead of uploading a resume. The platform is flexible to accommodate different user preferences.",
        category: "resume",
      },
      "what skills detected": {
        answer:
          "The AI detects both technical skills (Python, Java, Data Analysis, Web Development, Machine Learning, etc.) and soft skills (communication, teamwork, leadership, problem-solving, etc.). It can identify over 500+ different skills from various domains.",
        category: "skills",
      },
      "what file formats are supported for resume": {
        answer:
          "We support PDF, DOC, DOCX, and TXT file formats. For best results, use a standard resume format with clear section headings like Skills, Experience, and Education. Avoid complex formatting, tables, or images to ensure accurate parsing.",
        category: "resume",
      },
      "how do you analyze my resume": {
        answer:
          "Our AI uses natural language processing (NLP) to extract and categorize information from your resume. It identifies skills, experiences, qualifications, and achievements, then maps them to career requirements in our database. The system also evaluates the strength and relevance of your experience for different roles.",
        category: "resume",
      },
      "can i edit the extracted information": {
        answer:
          "Yes, after your resume is processed, you can review and edit the extracted information. You can add skills that weren't detected, adjust experience levels, or include additional projects. This ensures your profile accurately represents your capabilities.",
        category: "resume",
      },
      "how do you handle skill gaps": {
        answer:
          "When we identify skill gaps for your target career, we provide specific learning resources to bridge them. This includes online courses, tutorials, projects, and certifications. We prioritize the most critical skills that will significantly improve your employability in that field.",
        category: "skills",
      },
      "what if my skills are outdated": {
        answer:
          "Our system identifies outdated skills and suggests modern alternatives or updates. For example, if you have experience with older programming languages, we might recommend learning current versions or related languages that are in demand. We focus on transferable skills that can be updated rather than replaced.",
        category: "skills",
      },
      "how do you assess my skill level": {
        answer:
          "We assess skill levels based on several factors: years of experience, complexity of projects, formal education, certifications, and self-assessment. For technical skills, we might ask you to complete optional assessments to verify proficiency. This helps create a more accurate profile.",
        category: "skills",
      },
      "can i add skills not in my resume": {
        answer:
          "Definitely! You can add any skills you possess that weren't captured in your resume. This includes self-taught skills, hobbies that developed relevant abilities, or skills from volunteer work. These additional skills might open up new career possibilities you hadn't considered.",
        category: "skills",
      },
      "how do you handle transferable skills": {
        answer:
          "Our AI is trained to recognize transferable skills across different industries. For example, project management skills from construction can apply to tech projects, or teaching skills can translate to corporate training. We highlight these transferable skills and suggest careers where they would be valuable.",
        category: "skills",
      },
      "what skills are most in demand": {
        answer:
          "Currently, the most in-demand skills include: Machine Learning, Python, Cloud Computing (AWS, Azure), Data Science, Cybersecurity, DevOps, UI/UX Design, and Digital Marketing. However, demand varies by industry and location. Our platform shows real-time demand for specific skills in your target locations.",
        category: "skills",
      },
      "how do i improve my technical skills": {
        answer:
          "We recommend a combination of structured learning and practical application: 1) Take online courses from platforms like Coursera or Udemy, 2) Work on personal projects to apply your knowledge, 3) Contribute to open-source projects, 4) Participate in hackathons, and 5) Pursue relevant certifications. Our platform provides personalized recommendations based on your target career.",
        category: "skills",
      },
      "what soft skills should i develop": {
        answer:
          "The most valuable soft skills for tech careers include: Communication (technical and non-technical), Problem-solving, Teamwork, Adaptability, Time Management, Leadership, and Emotional Intelligence. We provide specific resources to develop these skills based on your career goals.",
        category: "skills",
      },

      // Career Suggestions
      "what careers recommended": {
        answer:
          "I can recommend careers like Data Scientist, AI Engineer, Software Developer, Web Developer, Cloud Engineer, Cybersecurity Specialist, Business Analyst, Digital Marketer, UI/UX Designer, Product Manager, DevOps Engineer, and many more across different industries.",
        category: "careers",
      },
      "how ai choose career": {
        answer:
          "The AI analyzes your skills, interests, educational background, and career goals, then compares them with industry requirements and job market trends. It uses machine learning algorithms to suggest careers that best match your profile with confidence scores.",
        category: "careers",
      },
      "multiple career options": {
        answer:
          "Yes! The AI generates a ranked list of suitable careers along with confidence scores, growth potential, and salary information. You'll typically get 5-10 personalized career recommendations to choose from.",
        category: "careers",
      },
      "what careers are growing fastest": {
        answer:
          "The fastest-growing careers include: AI/Machine Learning Engineer, Data Scientist, Cybersecurity Analyst, Cloud Architect, DevOps Engineer, Full-Stack Developer, and Digital Health Specialist. These fields are projected to grow 20-35% over the next decade, much faster than the average for all occupations.",
        category: "careers",
      },
      "what careers have the best work-life balance": {
        answer:
          "Careers with good work-life balance include: Technical Writer, UX Designer, Data Analyst (in some companies), Quality Assurance Engineer, and IT Consultant. However, work-life balance varies significantly by company culture and management style. We provide company-specific insights when available.",
        category: "careers",
      },
      "what careers are recession-proof": {
        answer:
          "While no career is completely recession-proof, some are more resilient: Healthcare IT, Cybersecurity, Data Analysis, and essential infrastructure roles. These fields tend to remain in demand even during economic downturns because they address critical needs and support business continuity.",
        category: "careers",
      },
      "what careers can i do remotely": {
        answer:
          "Many tech careers are well-suited for remote work: Software Development, Web Development, Data Analysis, UI/UX Design, Technical Writing, Digital Marketing, and Project Management. Our platform highlights companies with strong remote work cultures and provides tips for succeeding in remote environments.",
        category: "careers",
      },
      "what entry-level careers are available": {
        answer:
          "Popular entry-level tech careers include: Junior Software Developer, Web Developer, IT Support Specialist, Data Analyst, Junior QA Engineer, Technical Support Specialist, and Digital Marketing Associate. These roles typically require foundational skills but less experience, making them great starting points.",
        category: "careers",
      },
      "what careers require minimal coding": {
        answer:
          "Tech careers with minimal coding include: UI/UX Designer, Technical Writer, Product Manager, Digital Marketer, IT Project Manager, Business Analyst, and Quality Assurance (manual testing). These roles focus more on strategy, design, communication, and business processes than on programming.",
        category: "careers",
      },
      "what careers pay the most": {
        answer:
          "The highest-paying tech careers include: AI/Machine Learning Engineer, Cloud Architect, Cybersecurity Engineer, Data Scientist, DevOps Engineer, and Product Manager. Senior roles in these fields can command salaries of $150K-$250K+ depending on location, experience, and company.",
        category: "careers",
      },
      "what careers are most creative": {
        answer:
          "Creative tech careers include: UI/UX Designer, Frontend Developer, Game Developer, Creative Technologist, AR/VR Developer, Digital Artist, and Product Designer. These roles combine technical skills with creativity to design engaging user experiences and innovative solutions.",
        category: "careers",
      },
      "what careers are most analytical": {
        answer:
          "Highly analytical tech careers include: Data Scientist, Quantitative Analyst, Business Intelligence Analyst, Research Scientist, Actuary, and Algorithm Engineer. These roles focus on data analysis, statistical modeling, and complex problem-solving using quantitative methods.",
        category: "careers",
      },
      "what careers are most people-oriented": {
        answer:
          "People-focused tech careers include: IT Project Manager, Technical Account Manager, Sales Engineer, Customer Success Manager, IT Trainer, and UX Researcher. These roles emphasize communication, relationship-building, and understanding user needs.",
        category: "careers",
      },
      "what careers have the best growth potential": {
        answer:
          "Careers with excellent growth potential include: AI/Machine Learning Specialist, Cloud Engineer, Cybersecurity Expert, Data Scientist, and DevOps Engineer. These fields are experiencing rapid expansion with clear advancement paths to senior, architect, and leadership positions.",
        category: "careers",
      },
      "what careers are most sustainable": {
        answer:
          "Sustainability-focused tech careers include: Green IT Specialist, Renewable Energy Data Analyst, Sustainable Software Engineer, Environmental Data Scientist, and Smart Grid Engineer. These roles combine technology with environmental impact to create more sustainable solutions.",
        category: "careers",
      },

      // Education & Courses
      "suggest courses": {
        answer:
          "Yes, the AI recommends online courses, certifications, and training programs based on your chosen career path. It provides specific course recommendations to fill skill gaps and boost your career prospects.",
        category: "education",
      },
      "free learning platforms": {
        answer:
          "Absolutely! The AI recommends free platforms like Coursera (audit mode), edX, Khan Academy, freeCodeCamp, YouTube tutorials, GitHub learning resources, and many university open courseware programs.",
        category: "education",
      },
      "degree suggestions": {
        answer:
          "Yes, based on your career goals (e.g., Data Science, Cybersecurity, AI), the system suggests relevant degrees, specializations, or alternative learning paths including bootcamps and certification programs.",
        category: "education",
      },
      "do i need a computer science degree": {
        answer:
          "While a CS degree can be beneficial, it's not always necessary for tech careers. Many successful professionals come from diverse educational backgrounds or have completed bootcamps and certifications. What matters most is your skills portfolio and practical experience. Our platform shows you alternative paths to your desired career.",
        category: "education",
      },
      "are bootcamps worth it": {
        answer:
          "Bootcamps can be valuable for career changers or those looking to quickly gain practical skills. They're intensive, focused programs that often include portfolio projects and job placement assistance. However, success depends on the quality of the program and your commitment. We provide reviews and outcomes data for various bootcamps to help you decide.",
        category: "education",
      },
      "what certifications are most valuable": {
        answer:
          "The most valuable certifications depend on your field: For Cloud: AWS Solutions Architect, Azure Administrator; For Security: CompTIA Security+, CISSP; For Data: Google Data Analytics, IBM Data Science; For Development: Oracle Java SE, Microsoft Azure Developer. We recommend certifications based on your specific career goals and current job market demands.",
        category: "education",
      },
      "how long does it take to transition careers": {
        answer:
          "Career transition time varies based on your background and target field. For tech careers, it typically takes 6-18 months of dedicated learning and skill development. Factors include: time commitment per week, prior relevant experience, learning method (self-paced vs. structured), and networking efforts. Our platform creates a personalized timeline based on your situation.",
        category: "education",
      },
      "can i learn while working": {
        answer:
          "Yes, many professionals successfully transition careers while working. We recommend: 1) Starting with 5-10 hours per week, 2) Focusing on one skill at a time, 3) Applying new skills to your current job when possible, 4) Setting realistic milestones, and 5) Using micro-learning approaches. Our platform helps you create a sustainable learning plan that fits your schedule.",
        category: "education",
      },
      "what are the best learning resources": {
        answer:
          "The best learning resources depend on your learning style: For visual learners: YouTube tutorials, Pluralsight; For interactive learners: Codecademy, DataCamp; For project-based learners: freeCodeCamp, Coursera projects; For deep understanding: MIT OpenCourseWare, textbooks. We provide personalized resource recommendations based on your learning preferences and career goals.",
        category: "education",
      },
      "how do i stay updated with new technologies": {
        answer:
          "To stay current: 1) Follow industry blogs and newsletters (e.g., TechCrunch, Hacker News), 2) Join professional communities (Reddit, Stack Overflow), 3) Attend webinars and conferences, 4) Participate in continuing education, 5) Follow thought leaders on social media. Our platform curates relevant updates based on your career interests.",
        category: "education",
      },
      "should i specialize or generalize": {
        answer:
          "This depends on your career stage and goals. Early career: Generalizing can help you explore options and build foundational skills. Mid-career: Specializing can increase your value and earning potential. Late career: Specialization is often essential for senior roles. We analyze your profile and market trends to recommend the right balance for your situation.",
        category: "education",
      },
      "how important is a portfolio": {
        answer:
          "A portfolio is crucial for most tech careers, especially development, design, and data roles. It demonstrates practical skills beyond what's on your resume. A strong portfolio includes: personal projects, professional work (if permissible), contributions to open-source, and documentation of your process. We provide guidance on building an effective portfolio for your target career.",
        category: "education",
      },
      "what skills should i learn first": {
        answer:
          "The first skills to learn depend on your target career but generally include: For programming careers: a foundational language (Python or JavaScript) + basic web technologies; For data careers: statistics + SQL + a programming language; For design: design principles + a design tool. We provide a personalized learning roadmap based on your career goals.",
        category: "education",
      },
      "how do i practice new skills": {
        answer:
          "Effective skill practice includes: 1) Building personal projects that solve real problems, 2) Contributing to open-source projects, 3) Participating in hackathons and coding challenges, 4) Creating tutorials or documentation (teaching reinforces learning), 5) Finding opportunities to apply skills in your current job. We suggest specific practice activities based on your learning stage.",
        category: "education",
      },
      "what are the best free courses for beginners": {
        answer:
          "Top free beginner courses include: For programming: Harvard's CS50 (edX), freeCodeCamp; For web development: The Odin Project, MDN Web Docs; For data science: Kaggle Learn, DataCamp introductory courses; For design: Google UX Design Certificate (audit), Figma Learn. We provide a curated list of the best free resources based on your career interests.",
        category: "education",
      },
      "how do i choose the right learning path": {
        answer:
          "To choose the right learning path: 1) Define your career goals clearly, 2) Research required skills for those roles, 3) Assess your current skills and gaps, 4) Consider your learning style and schedule, 5) Look for programs with strong outcomes. Our platform creates personalized learning paths based on your profile, goals, and learning preferences.",
        category: "education",
      },

      // Job Market
      "job demand": {
        answer:
          "Yes, the AI provides real-time job market trends, showing demand levels, growth projections, and hiring patterns in your chosen field. It helps you understand which careers are currently in high demand.",
        category: "jobs",
      },
      "salary information": {
        answer:
          "Yes, the platform provides average salary ranges for different roles based on location, experience level, company size, and industry. This helps you set realistic salary expectations.",
        category: "jobs",
      },
      "future proof careers": {
        answer:
          "The AI highlights high-growth, future-proof fields like AI/Machine Learning, Cybersecurity, Cloud Computing, Data Science, Digital Health, Renewable Energy, and emerging technologies that are expected to grow significantly.",
        category: "jobs",
      },
      "which industries are hiring the most tech talent": {
        answer:
          "Currently, the industries hiring the most tech talent include: Technology (obviously), Finance/Banking, Healthcare, E-commerce, Professional Services, and Manufacturing. However, tech skills are becoming essential across all sectors. We provide industry-specific hiring trends based on your location and interests.",
        category: "jobs",
      },
      "which locations have the most tech jobs": {
        answer:
          "Top tech job hubs in the US include: San Francisco Bay Area, Seattle, New York, Austin, Boston, and Denver. Internationally: London, Berlin, Toronto, Singapore, and Tel Aviv. However, remote work has expanded opportunities globally. We show job distribution by location and highlight emerging tech hubs.",
        category: "jobs",
      },
      "what companies are hiring entry-level talent": {
        answer:
          "Companies known for hiring entry-level tech talent include: Google, Microsoft, Amazon, IBM, Accenture, Deloitte, and many startups. Many companies have dedicated graduate and internship programs. We provide a curated list of companies actively hiring entry-level professionals in your field and location.",
        category: "jobs",
      },
      "how competitive is the job market": {
        answer:
          "The tech job market varies by specialization and location. Entry-level positions can be competitive, with hundreds of applicants per role. However, specialized skills like AI/ML, cybersecurity, and cloud computing face talent shortages. We provide competitiveness scores for different roles and strategies to stand out.",
        category: "jobs",
      },
      "what is the job outlook for tech careers": {
        answer:
          "The overall job outlook for tech careers is very positive, with growth rates much higher than the national average. The U.S. Bureau of Labor Statistics projects 11-35% growth for most tech occupations over the next decade, compared to 4% for all occupations. We provide detailed outlook data for specific careers.",
        category: "jobs",
      },
      "how has remote work affected tech jobs": {
        answer:
          "Remote work has significantly expanded opportunities for tech professionals. Many companies now offer remote or hybrid options, allowing access to jobs regardless of location. However, competition has increased as location barriers have decreased. We provide insights into remote work trends and companies with strong remote cultures.",
        category: "jobs",
      },
      "what are the hiring trends in tech": {
        answer:
          "Current hiring trends include: 1) Increased demand for AI/ML specialists, 2) Growth in cybersecurity roles, 3) Emphasis on cloud and DevOps skills, 4) More focus on soft skills and cultural fit, 5) Skills-based hiring over degrees, 6) Expanded remote work options. We track these trends and provide regular updates.",
        category: "jobs",
      },
      "which companies pay the best": {
        answer:
          "Top-paying tech companies typically include: Google, Meta, Apple, Amazon, Microsoft, Netflix, and specialized trading firms like Jane Street. However, high salaries often come with high expectations and cost of living considerations. We provide salary benchmarks by company, role, and location.",
        category: "jobs",
      },
      "how do i find hidden job opportunities": {
        answer:
          "To find hidden opportunities: 1) Build a strong professional network, 2) Engage with companies on social media, 3) Attend industry events and meetups, 4) Connect with recruiters specializing in your field, 5) Consider contract-to-hire positions, 6) Research companies you admire and reach out directly. We provide networking strategies and company insights.",
        category: "jobs",
      },
      "what is the average time to get hired": {
        answer:
          "The average time to get hired in tech ranges from 1-4 months, depending on experience level, specialization, location, and job market conditions. Entry-level positions may take longer due to higher competition. We provide personalized estimates based on your profile and current market conditions.",
        category: "jobs",
      },
      "how important is a cover letter": {
        answer:
          "Cover letters are still important, especially for smaller companies and less technical roles. They allow you to: 1) Explain your story and motivation, 2) Highlight specific relevant experiences, 3) Show your communication skills, 4) Demonstrate knowledge of the company. We provide guidance on when to include a cover letter and how to make it effective.",
        category: "jobs",
      },
      "how do i stand out in applications": {
        answer:
          "To stand out: 1) Customize your resume for each application, 2) Include a portfolio with relevant projects, 3) Quantify your achievements, 4) Get referrals when possible, 5) Prepare thoroughly for interviews, 6) Follow up professionally. We provide personalized strategies based on your target roles and companies.",
        category: "jobs",
      },
      "what are the most common interview questions": {
        answer:
          "Common tech interview questions include: Technical questions (coding challenges, system design), Behavioral questions ('Tell me about a time...'), Role-specific questions, and Culture-fit questions. We provide a comprehensive list of questions for your target roles, along with suggested answers and preparation strategies.",
        category: "jobs",
      },
      "how do i prepare for technical interviews": {
        answer:
          "To prepare for technical interviews: 1) Practice coding problems on platforms like LeetCode, 2) Review fundamental concepts and algorithms, 3) Practice explaining your thought process aloud, 4) Prepare for system design questions (for mid-senior roles), 5) Do mock interviews. We provide personalized preparation plans based on your target roles.",
        category: "jobs",
      },
      "how do i negotiate salary": {
        answer:
          "Effective salary negotiation: 1) Research market rates for your role/experience/location, 2) Consider the full compensation package (salary, bonus, equity, benefits), 3) Be prepared to justify your value, 4) Consider timing (after an offer is made), 5) Be professional and collaborative. We provide negotiation strategies and scripts based on your situation.",
        category: "jobs",
      },
      "what benefits should i consider besides salary": {
        answer:
          "Important benefits beyond salary include: Health insurance quality and cost, Retirement plan matching, Paid time off and flexible work arrangements, Professional development budget, Equity/stock options, Parental leave, and Company culture. We provide a comprehensive benefits comparison for different companies and roles.",
        category: "jobs",
      },

      // Personalization
      "set preferences": {
        answer:
          "Yes! You can set preferences such as salary range, work-life balance, job flexibility, industry type, company size, location preferences, and career growth expectations. The AI tailors recommendations accordingly.",
        category: "personalization",
      },
      "internship guidance": {
        answer:
          "Yes, the AI suggests relevant internship roles based on your current skills and career goals. It helps you find internships that will provide valuable experience and improve your job prospects.",
        category: "personalization",
      },
      "resume improvement": {
        answer:
          "Yes! The AI provides personalized resume-building tips, highlights missing skills compared to your target career, suggests improvements in formatting, and recommends additional experiences to strengthen your profile.",
        category: "personalization",
      },
      "how do i set career goals": {
        answer:
          "Effective career goals should be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Start with your long-term vision (5-10 years), then break it down into medium-term (2-5 years) and short-term (6-12 months) goals. We provide a framework for setting and tracking career goals based on your aspirations.",
        category: "personalization",
      },
      "can i track my progress": {
        answer:
          "Yes, our platform includes a progress tracking dashboard where you can monitor: Skill development progress, Learning milestones completed, Job applications submitted, Interview performance, and Overall career advancement. This helps you stay motivated and adjust your strategy as needed.",
        category: "personalization",
      },
      "how do i choose between multiple job offers": {
        answer:
          "To choose between offers: 1) Create a comparison matrix with factors important to you (salary, growth, culture, etc.), 2) Research each company's stability and growth prospects, 3) Consider the team and manager you'd work with, 4) Think about long-term career trajectory, 5) Trust your instincts about culture fit. We provide a decision framework to help you evaluate offers objectively.",
        category: "personalization",
      },
      "how do i find a mentor": {
        answer:
          "To find a mentor: 1) Identify professionals in your desired field, 2) Reach out with specific questions or requests, 3) Be respectful of their time, 4) Consider formal mentorship programs, 5) Look within your current company or alumni network. We provide strategies for finding and approaching potential mentors.",
        category: "personalization",
      },
      "how do i build a professional network": {
        answer:
          "Effective networking strategies: 1) Attend industry events and conferences, 2) Engage on professional social media (LinkedIn), 3) Join relevant professional associations, 4) Participate in online communities, 5) Offer help before asking for favors. We provide a step-by-step networking plan tailored to your career stage and goals.",
        category: "personalization",
      },
      "how do i prepare for a career fair": {
        answer:
          "Career fair preparation: 1) Research attending companies and their open roles, 2) Prepare a targeted resume for each company of interest, 3) Practice a brief elevator pitch, 4) Prepare thoughtful questions for recruiters, 5) Follow up promptly after the event. We provide a comprehensive preparation checklist and company research tools.",
        category: "personalization",
      },
      "how do i create a career development plan": {
        answer:
          "A career development plan includes: 1) Self-assessment of skills and interests, 2) Career vision and goals, 3) Skill development roadmap, 4) Experience-building strategies, 5) Networking plan, 6) Timeline and milestones. Our platform guides you through creating a personalized plan with actionable steps.",
        category: "personalization",
      },
      "how do i handle career transitions smoothly": {
        answer:
          "Smooth career transitions: 1) Plan financially for potential income changes, 2) Build skills before leaving your current job, 3) Network in your target field, 4) Consider transitional roles or contract work, 5) Maintain relationships from your previous career. We provide transition strategies based on your specific situation.",
        category: "personalization",
      },
      "how do i maintain work-life balance in tech": {
        answer:
          "Work-life balance in tech: 1) Set clear boundaries between work and personal time, 2) Learn to say no to non-essential tasks, 3) Take regular breaks and vacations, 4) Find a company with a healthy culture, 5) Develop time management skills. We provide company culture insights and balance strategies for different tech roles.",
        category: "personalization",
      },
      "how do i advance in my career faster": {
        answer:
          "To accelerate career growth: 1) Continuously develop in-demand skills, 2) Take on challenging projects, 3) Build visibility within your organization, 4) Develop leadership skills, 5) Network strategically, 6) Consider job changes for growth opportunities. We provide personalized acceleration strategies based on your career stage.",
        category: "personalization",
      },
      "how do i handle career setbacks": {
        answer:
          "Handling career setbacks: 1) Allow yourself to process emotions, 2) Analyze what went wrong objectively, 3) Identify lessons learned, 4) Update your skills or strategy as needed, 5) Seek support from mentors or peers, 6) Focus on what you can control. We provide resilience-building strategies and recovery frameworks.",
        category: "personalization",
      },
      "how do i find companies with good culture": {
        answer:
          "To find companies with good culture: 1) Research employee reviews on Glassdoor and Blind, 2) Look at company values and mission statements, 3) Ask about culture during interviews, 4) Connect with current employees on LinkedIn, 5) Observe how the company treats candidates during the hiring process. We provide culture insights and ratings for different companies.",
        category: "personalization",
      },
      "how do i prepare for a performance review": {
        answer:
          "Performance review preparation: 1) Document your achievements and contributions throughout the year, 2) Gather feedback from colleagues and clients, 3) Align your accomplishments with company goals, 4) Prepare to discuss challenges and how you overcame them, 5) Set goals for the next review period. We provide a preparation checklist and framework.",
        category: "personalization",
      },
      "how do i ask for a promotion": {
        answer:
          "Asking for a promotion: 1) Build a business case with your achievements and value, 2) Research market rates for the promoted position, 3) Time the request appropriately (after successes, during budget planning), 4) Be specific about the role you want, 5) Be prepared for alternatives or counteroffers. We provide a step-by-step strategy and communication framework.",
        category: "personalization",
      },

      // Technical Questions
      "need coding knowledge": {
        answer:
          "No coding knowledge required! The platform is designed to be user-friendly. Simply upload your resume or manually input your skills and preferences, and the AI will handle the rest.",
        category: "technical",
      },
      "data safety": {
        answer:
          "Yes, your data is completely safe. All information is encrypted using industry-standard security protocols. We never share your personal data with third parties and you can delete your data anytime.",
        category: "technical",
      },
      "mobile access": {
        answer:
          "Yes, the AI Career Navigator works seamlessly on both mobile devices and desktop browsers. The interface is fully responsive and optimized for all screen sizes.",
        category: "technical",
      },
      "what technology powers the platform": {
        answer:
          "Our platform is built on a stack of modern technologies: The AI engine uses advanced machine learning models including natural language processing and collaborative filtering. The backend is built with Python and Node.js, while the frontend uses React. We use cloud infrastructure for scalability and reliability.",
        category: "technical",
      },
      "how does the ai learn and improve": {
        answer:
          "Our AI improves through several mechanisms: 1) Continuous training on new job market data, 2) User feedback on recommendations, 3) Analysis of career outcome data, 4) Regular algorithm updates from our research team. This creates a virtuous cycle where the system becomes more accurate as more people use it.",
        category: "technical",
      },
      "is my data used to train the ai": {
        answer:
          "Your personal data is never used to train our AI models without explicit consent. We aggregate and anonymize data for training purposes, ensuring no personally identifiable information is included. You can opt out of contributing to model improvement in your privacy settings.",
        category: "technical",
      },
      "how do you ensure algorithmic fairness": {
        answer:
          "We take algorithmic fairness seriously: 1) We regularly audit our recommendations for demographic biases, 2) We use diverse training data to represent different populations, 3) We implement fairness constraints in our models, 4) We have an ethics review board for algorithmic decisions. We're committed to providing equitable career guidance for all users.",
        category: "technical",
      },
      "can i export my data": {
        answer:
          "Yes, you can export all your data from the platform at any time. This includes your profile, assessment results, learning history, and recommendations. We provide data in common formats like CSV and JSON. You can also request permanent deletion of your data.",
        category: "technical",
      },
      "how do you handle accessibility": {
        answer:
          "Our platform is designed with accessibility in mind: 1) We follow WCAG 2.1 AA guidelines for web accessibility, 2) We provide keyboard navigation and screen reader compatibility, 3) We ensure color contrast and readable fonts, 4) We offer alternative text for images. We're continuously improving accessibility based on user feedback.",
        category: "technical",
      },
      "what browsers are supported": {
        answer:
          "Our platform supports all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your preferred browser. We don't support Internet Explorer as it's no longer maintained by Microsoft.",
        category: "technical",
      },
      "is there an api available": {
        answer:
          "Yes, we offer an API for educational institutions and enterprise clients. The API allows integration with learning management systems, HR platforms, and career services. API access includes documentation, sample code, and technical support. Contact our sales team for pricing and implementation details.",
        category: "technical",
      },
      "how do you handle system updates": {
        answer:
          "We use a continuous deployment approach for updates: 1) All changes go through rigorous testing, 2) Updates are rolled out gradually to monitor for issues, 3) We maintain system backups and have rollback procedures, 4) We communicate significant changes in advance. Critical security updates are applied immediately.",
        category: "technical",
      },
      "what if i forget my password": {
        answer:
          "If you forget your password, click the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password. For security reasons, password reset links expire after 24 hours. If you don't receive the email, check your spam folder or contact support.",
        category: "technical",
      },
      "how do i delete my account": {
        answer:
          "To delete your account: 1) Go to Account Settings, 2) Select 'Privacy & Security', 3) Click 'Delete Account', 4) Confirm your decision. Account deletion is permanent and cannot be undone. All your data will be removed from our systems within 30 days, except where required by law to retain certain information.",
        category: "technical",
      },
      "how do i report a technical issue": {
        answer:
          "To report a technical issue: 1) Click the 'Help' button in the bottom right corner, 2) Select 'Report a Problem', 3) Describe the issue in detail, including steps to reproduce it, 4) Submit the form. Our technical support team will investigate and respond within 24 hours. For urgent issues, email support@aicareernavigator.com.",
        category: "technical",
      },
      "do you offer integrations with other platforms": {
        answer:
          "Yes, we offer integrations with LinkedIn, GitHub, and learning platforms like Coursera and Udemy. These integrations allow you to import profile information, showcase projects, and track learning progress. We're continuously adding new integrations based on user feedback.",
        category: "technical",
      },
      "how often is the platform updated": {
        answer:
          "We release minor updates weekly and major updates quarterly. Minor updates include bug fixes and small improvements, while major updates introduce new features and significant enhancements. All users receive an email notification about major updates and their benefits.",
        category: "technical",
      },
      "is there a mobile app": {
        answer:
          "Currently, we offer a responsive web application that works on all mobile devices. We're developing native iOS and Android apps scheduled for release next year. The mobile apps will offer offline access to assessments and push notifications for learning reminders.",
        category: "technical",
      },
      "how do you ensure data privacy compliance": {
        answer:
          "We comply with major data privacy regulations including GDPR, CCPA, and PIPEDA. Our compliance measures include: 1) Clear privacy policies, 2) User consent mechanisms, 3) Data minimization practices, 4) Regular security audits, 5) Data processing agreements with third parties. We appoint a Data Protection Officer to oversee compliance.",
        category: "technical",
      },

      // Specific Career Advice
      "python excel career": {
        answer:
          "Based on Python and Excel skills, excellent career options include Data Analyst, Business Analyst, Junior Data Scientist, Financial Analyst, Operations Analyst, or Market Research Analyst. These roles highly value your current skillset!",
        category: "advice",
      },
      "high paying ai jobs": {
        answer:
          "For high-paying AI careers, focus on Machine Learning Engineer, AI Research Scientist, Deep Learning Engineer, or AI Product Manager roles. Develop skills in TensorFlow, PyTorch, cloud platforms, and get certifications. Salaries typically range from $120k-$300k+.",
        category: "advice",
      },
      "design technology career": {
        answer:
          "Perfect combination! You can explore UI/UX Design, Human-Computer Interaction, Frontend Development, Design Systems Engineering, or Creative Technology roles. These careers blend creativity with technical skills beautifully.",
        category: "advice",
      },
      "career for psychology graduates in tech": {
        answer:
          "Psychology graduates have great options in tech: UX Researcher, Product Manager (with some business training), Technical Writer, User Researcher, or Customer Success Manager. Your understanding of human behavior is valuable for designing user-centered products and understanding user needs.",
        category: "advice",
      },
      "career for english majors in tech": {
        answer:
          "English majors excel in tech as: Technical Writers, Content Strategists, UX Writers, Product Marketers, or Communications Specialists. Your strong communication skills are highly valued for explaining complex technical concepts to diverse audiences.",
        category: "advice",
      },
      "career for biology graduates in tech": {
        answer:
          "Biology graduates can transition into: Bioinformatics Specialist, Health Tech Product Manager, Clinical Data Analyst, Medical Writer, or Health IT Consultant. The intersection of biology and technology is growing rapidly, especially in personalized medicine and health tech.",
        category: "advice",
      },
      "career for business graduates in tech": {
        answer:
          "Business graduates have many tech opportunities: Product Manager, Business Analyst, Technical Account Manager, Sales Engineer, or Tech Marketing Specialist. Your business acumen combined with tech knowledge can bridge the gap between technical teams and business objectives.",
        category: "advice",
      },
      "career for teaching graduates in tech": {
        answer:
          "Teaching graduates can transition into: Technical Trainer, Instructional Designer, EdTech Product Manager, Learning Experience Designer, or Customer Education Specialist. Your skills in curriculum development and knowledge transfer are valuable in tech training and education roles.",
        category: "advice",
      },
      "career for finance graduates in tech": {
        answer:
          "Finance graduates can explore: FinTech Product Manager, Quantitative Analyst, Blockchain Developer, Financial Data Analyst, or Technical Account Manager in finance tech. Your understanding of financial systems combined with tech skills is valuable in the growing FinTech sector.",
        category: "advice",
      },
      "career for art graduates in tech": {
        answer:
          "Art graduates can thrive in tech as: UI/UX Designer, Graphic Designer (for tech products), Motion Graphics Designer, Creative Technologist, or 3D Artist (for gaming/AR/VR). Your visual creativity and design skills are essential for creating engaging user experiences.",
        category: "advice",
      },
      "career for engineering graduates in tech": {
        answer:
          "Engineering graduates (non-CS) have great options: Data Engineer, DevOps Engineer, Systems Engineer, IoT Developer, or Technical Product Manager. Your problem-solving and analytical skills transfer well to tech roles, especially with some additional programming knowledge.",
        category: "advice",
      },
      "career for math graduates in tech": {
        answer:
          "Math graduates are well-positioned for: Data Scientist, Quantitative Analyst, Machine Learning Engineer, Algorithm Engineer, or Research Scientist. Your strong analytical and mathematical foundation is highly valued in data-intensive and algorithmic roles.",
        category: "advice",
      },
      "career for physics graduates in tech": {
        answer:
          "Physics graduates can excel in: Data Scientist, Machine Learning Engineer, Computational Scientist, Quantum Computing Researcher, or Sensor Technology Engineer. Your strong analytical skills and understanding of complex systems are valuable in advanced tech roles.",
        category: "advice",
      },
      "career for chemistry graduates in tech": {
        answer:
          "Chemistry graduates can explore: Cheminformatics Specialist, Lab Information Management Systems Developer, Materials Data Scientist, or Scientific Software Developer. The intersection of chemistry and technology is growing in research and industrial applications.",
        category: "advice",
      },
      "career for history graduates in tech": {
        answer:
          "History graduates can find tech roles as: Technical Writer, Content Strategist, Product Manager (with business training), UX Researcher, or Digital Archivist. Your research skills and ability to analyze patterns over time are valuable in understanding user behavior and product evolution.",
        category: "advice",
      },
      "career for philosophy graduates in tech": {
        answer:
          "Philosophy graduates can thrive in tech as: UX Researcher, Ethical AI Specialist, Technical Writer, Product Manager, or Policy Analyst. Your critical thinking, logic, and ethical reasoning skills are increasingly important in tech, especially in AI ethics and user experience.",
        category: "advice",
      },
      "career for music graduates in tech": {
        answer:
          "Music graduates can explore: Sound Designer, Audio Engineer, UX Designer (with additional training), Creative Technologist, or Music Software Developer. Your understanding of composition, rhythm, and emotional impact can translate well to user experience design and audio technology.",
        category: "advice",
      },
      "career for communications graduates in tech": {
        answer:
          "Communications graduates have great options in tech: Technical Writer, Product Marketing Manager, Public Relations Specialist, Content Strategist, or Corporate Communications Manager. Your communication skills are essential for explaining complex products and building brand narratives.",
        category: "advice",
      },
      "career for sociology graduates in tech": {
        answer:
          "Sociology graduates can transition into: UX Researcher, Product Manager, Data Analyst (with quantitative skills), Community Manager, or Diversity & Inclusion Specialist. Your understanding of social systems and human behavior is valuable for creating inclusive and user-centered products.",
        category: "advice",
      },
      "career for anthropology graduates in tech": {
        answer:
          "Anthropology graduates excel in tech as: UX Researcher, Product Designer, Ethnographic Researcher, User Researcher, or Design Researcher. Your skills in understanding human cultures and behaviors are directly applicable to creating products that meet diverse user needs.",
        category: "advice",
      },
      "career for nursing graduates in tech": {
        answer:
          "Nursing graduates can explore: Health IT Specialist, Clinical Informatics Specialist, Telehealth Product Manager, Healthcare Data Analyst, or Patient Experience Designer. Your clinical knowledge combined with tech skills is valuable in the growing health technology sector.",
        category: "advice",
      },
      "career for law graduates in tech": {
        answer:
          "Law graduates can find tech roles as: Privacy Specialist, Intellectual Property Counsel (with tech focus), Policy Analyst, Compliance Manager, or Legal Technology Product Manager. Your understanding of regulations and legal frameworks is valuable in tech governance and compliance.",
        category: "advice",
      },
      "career for architecture graduates in tech": {
        answer:
          "Architecture graduates can transition into: UX Designer, Product Designer, Spatial Computing Designer, 3D Modeler (for gaming/AR/VR), or Design Systems Architect. Your skills in spatial design, user flows, and systems thinking translate well to digital product design.",
        category: "advice",
      },
      "career for journalism graduates in tech": {
        answer:
          "Journalism graduates can thrive in tech as: Technical Writer, Content Strategist, UX Writer, Product Marketing Manager, or Corporate Communications Specialist. Your research, writing, and storytelling skills are valuable for creating clear technical documentation and product narratives.",
        category: "advice",
      },
      "career for library science graduates in tech": {
        answer:
          "Library science graduates can explore: Information Architect, Knowledge Manager, Taxonomy Specialist, Search Engineer, or Data Curator. Your skills in organizing information and knowledge systems are directly applicable to making complex data accessible and usable.",
        category: "advice",
      },
      "career for theater graduates in tech": {
        answer:
          "Theater graduates can find tech roles as: UX Designer, Presentation Specialist, Technical Trainer, User Experience Researcher, or Creative Technologist. Your understanding of narrative, user engagement, and presentation can translate well to product design and technical communication.",
        category: "advice",
      },
      "career for geography graduates in tech": {
        answer:
          "Geography graduates can transition into: GIS Specialist, Location Data Analyst, Cartographic Designer, Urban Tech Developer, or Environmental Data Scientist. Your spatial analysis skills and understanding of geographic systems are valuable in location-based technologies and environmental tech.",
        category: "advice",
      },
      "career for linguistics graduates in tech": {
        answer:
          "Linguistics graduates have great options in tech: Computational Linguist, Natural Language Processing (NLP) Engineer, Speech Recognition Specialist, UX Writer, or Conversational AI Designer. Your understanding of language structure and meaning is directly applicable to language technologies.",
        category: "advice",
      },
      "career for political science graduates in tech": {
        answer:
          "Political science graduates can explore: Policy Analyst, Public Affairs Specialist, Product Manager (with business training), Government Relations Specialist, or Ethical AI Specialist. Your understanding of systems, policy, and stakeholder dynamics is valuable in tech governance and strategy.",
        category: "advice",
      },
      "career for economics graduates in tech": {
        answer:
          "Economics graduates can thrive in tech as: Data Scientist, Product Manager, Quantitative Analyst, Pricing Analyst, or Market Research Analyst. Your analytical skills and understanding of incentives and markets are valuable for data-driven product development and business strategy.",
        category: "advice",
      },
      "career for statistics graduates in tech": {
        answer:
          "Statistics graduates are well-positioned for: Data Scientist, Machine Learning Engineer, Quantitative Analyst, Research Scientist, or Business Intelligence Analyst. Your strong foundation in statistical methods and data analysis is directly applicable to tech's most data-intensive roles.",
        category: "advice",
      },
      "career for film studies graduates in tech": {
        answer:
          "Film studies graduates can find tech roles as: Video Producer, Motion Graphics Designer, UX Designer (with additional training), Creative Technologist, or Multimedia Specialist. Your understanding of visual storytelling and narrative can translate well to user experience design and multimedia content.",
        category: "advice",
      },
      "career for agriculture graduates in tech": {
        answer:
          "Agriculture graduates can explore: AgTech Product Manager, Precision Agriculture Specialist, Agricultural Data Analyst, Farm Systems Developer, or Sustainable Technology Consultant. The intersection of agriculture and technology is growing rapidly in precision farming and sustainable food systems.",
        category: "advice",
      },
      "career for hospitality graduates in tech": {
        answer:
          "Hospitality graduates can transition into: Customer Success Manager, Technical Account Manager, Event Experience Designer, Hospitality Tech Product Manager, or User Experience Researcher. Your customer service and experience design skills are valuable in creating user-centered tech products.",
        category: "advice",
      },
      "career for sports management graduates in tech": {
        answer:
          "Sports management graduates can find tech roles as: Sports Data Analyst, Fantasy Sports Product Manager, Sports Technology Developer, Fan Engagement Specialist, or Sports UX Designer. The sports tech industry is growing rapidly with opportunities in analytics, fan engagement, and performance technology.",
        category: "advice",
      },
      "career for criminal justice graduates in tech": {
        answer:
          "Criminal justice graduates can explore: Cybersecurity Analyst, Digital Forensics Specialist, Public Safety Technology Developer, Policy Analyst, or Security Product Manager. Your understanding of security systems and legal frameworks is valuable in tech security and governance roles.",
        category: "advice",
      },
      "career for social work graduates in tech": {
        answer:
          "Social work graduates can thrive in tech as: User Experience Researcher, Community Manager, Diversity & Inclusion Specialist, Product Manager (with business training), or Mental Health Tech Specialist. Your understanding of human needs and social systems is valuable for creating inclusive and supportive tech products.",
        category: "advice",
      },
      "career for education graduates in tech": {
        answer:
          "Education graduates have great options in tech: Instructional Designer, EdTech Product Manager, Learning Experience Designer, Technical Trainer, or Educational Content Developer. Your understanding of pedagogy and learning processes is directly applicable to creating effective educational technology.",
        category: "advice",
      },
      "career for graphic design graduates in tech": {
        answer:
          "Graphic design graduates can transition into: UI/UX Designer, Product Designer, Visual Designer, Design Systems Specialist, or Creative Technologist. Your visual design skills are directly applicable to creating engaging and user-friendly digital products and interfaces.",
        category: "advice",
      },
      "career for marketing graduates in tech": {
        answer:
          "Marketing graduates can find tech roles as: Product Marketing Manager, Digital Marketing Specialist, Growth Marketer, Content Strategist, or Technical Marketing Manager. Your understanding of customer behavior and marketing strategies is valuable for promoting and positioning tech products.",
        category: "advice",
      },
      "career for accounting graduates in tech": {
        answer:
          "Accounting graduates can explore: FinTech Product Manager, Financial Data Analyst, Technical Accountant, Compliance Specialist, or Blockchain Auditor. Your financial expertise combined with tech knowledge is valuable in financial technology and accounting software development.",
        category: "advice",
      },
      "career for human resources graduates in tech": {
        answer:
          "HR graduates can thrive in tech as: Technical Recruiter, People Operations Specialist, HRIS Analyst, Learning & Development Specialist, or Culture Specialist. Your understanding of people management and organizational development is valuable in growing tech companies.",
        category: "advice",
      },
      "career for real estate graduates in tech": {
        answer:
          "Real estate graduates can find tech roles as: PropTech Product Manager, Real Estate Data Analyst, Property Technology Developer, Real Estate UX Designer, or Smart Home Specialist. The property technology sector is growing with opportunities in data analytics, smart buildings, and digital real estate platforms.",
        category: "advice",
      },
      "career for logistics graduates in tech": {
        answer:
          "Logistics graduates can explore: Supply Chain Tech Product Manager, Logistics Data Analyst, Transportation Systems Developer, Warehouse Technology Specialist, or Supply Chain Optimization Engineer. Your understanding of supply chain and logistics systems is valuable in logistics technology and automation.",
        category: "advice",
      },
      "career for tourism graduates in tech": {
        answer:
          "Tourism graduates can transition into: Travel Tech Product Manager, Hospitality UX Designer, Tourism Data Analyst, Travel Experience Designer, or Destination Technology Specialist. The travel technology sector offers opportunities in creating innovative booking systems, experience platforms, and destination management tools.",
        category: "advice",
      },
      "career for fashion graduates in tech": {
        answer:
          "Fashion graduates can find tech roles as: Fashion Tech Product Manager, Wearable Technology Designer, Fashion UX Designer, E-commerce Specialist, or Digital Fashion Designer. The intersection of fashion and technology is growing in areas like smart textiles, virtual fitting rooms, and sustainable fashion tech.",
        category: "advice",
      },
      "career for environmental science graduates in tech": {
        answer:
          "Environmental science graduates can thrive in tech as: Environmental Data Scientist, Climate Tech Product Manager, Sustainability Analyst, Green IT Specialist, or Conservation Technology Developer. Your understanding of environmental systems and sustainability is valuable in the growing climate tech sector.",
        category: "advice",
      },
      "career for aerospace graduates in tech": {
        answer:
          "Aerospace graduates can explore: Drone Technology Developer, Satellite Data Analyst, Aviation Systems Engineer, Space Tech Product Manager, or Autonomous Vehicle Specialist. Your technical expertise in aerospace systems is valuable in the growing drone, satellite, and autonomous vehicle industries.",
        category: "advice",
      },
      "career for automotive graduates in tech": {
        answer:
          "Automotive graduates can find tech roles as: Automotive Software Developer, Connected Vehicle Specialist, Autonomous Vehicle Engineer, Mobility Tech Product Manager, or Vehicle Data Analyst. The automotive industry is rapidly transforming with opportunities in electric vehicles, autonomous driving, and connected car technologies.",
        category: "advice",
      },
      "career for construction graduates in tech": {
        answer:
          "Construction graduates can transition into: Construction Tech Product Manager, Building Information Modeling (BIM) Specialist, Construction Data Analyst, Smart Building Developer, or Construction Automation Engineer. The construction technology sector is growing with opportunities in digital twins, automation, and sustainable building technologies.",
        category: "advice",
      },
      "career for manufacturing graduates in tech": {
        answer:
          "Manufacturing graduates can thrive in tech as: Industrial IoT Developer, Manufacturing Data Scientist, Automation Engineer, Smart Factory Specialist, or Industrial Tech Product Manager. Your understanding of manufacturing processes is valuable in the growing industrial automation and smart manufacturing sectors.",
        category: "advice",
      },
      "career for retail graduates in tech": {
        answer:
          "Retail graduates can find tech roles as: Retail Tech Product Manager, E-commerce Specialist, Retail Data Analyst, Customer Experience Designer, or Supply Chain Technology Specialist. The retail technology sector offers opportunities in creating innovative shopping experiences, inventory management systems, and personalization technologies.",
        category: "advice",
      },
      "career for pharmaceutical graduates in tech": {
        answer:
          "Pharmaceutical graduates can explore: Health Tech Product Manager, Clinical Data Scientist, Pharmaceutical IT Specialist, Drug Discovery Software Developer, or Medical Informatics Specialist. The intersection of pharmaceuticals and technology is growing in areas like clinical trials, drug discovery, and personalized medicine.",
        category: "advice",
      },
      "career for public health graduates in tech": {
        answer:
          "Public health graduates can transition into: Health Data Scientist, Public Health Tech Product Manager, Epidemiological Data Analyst, Digital Health Specialist, or Health Informatics Consultant. Your understanding of population health and healthcare systems is valuable in public health technology and digital health initiatives.",
        category: "advice",
      },
      "career for urban planning graduates in tech": {
        answer:
          "Urban planning graduates can find tech roles as: Smart City Developer, Urban Data Scientist, Civic Tech Product Manager, Transportation Technology Specialist, or Urban Experience Designer. The smart cities and civic technology sectors offer opportunities in creating data-driven urban solutions and citizen engagement platforms.",
        category: "advice",
      },
      "career for international relations graduates in tech": {
        answer:
          "International relations graduates can thrive in tech as: Global Policy Analyst, International Product Manager, Localization Specialist, Global Tech Ethics Specialist, or International Business Development Manager. Your understanding of global systems and cross-cultural communication is valuable in international tech expansion and policy.",
        category: "advice",
      },
      "career for military veterans in tech": {
        answer:
          "Military veterans have excellent opportunities in tech: Cybersecurity Specialist, Systems Administrator, Project Manager, Data Analyst, or DevOps Engineer. Your discipline, leadership experience, and technical training from military service are highly valued in tech companies. Many organizations have dedicated veteran hiring programs.",
        category: "advice",
      },
      "career for career changers over 40": {
        answer:
          "Career changers over 40 have strong advantages in tech: life experience, transferable skills, and professional maturity. Focus on roles that value your background like Product Management, Technical Writing, or Quality Assurance. Highlight your domain expertise and emphasize your ability to learn quickly. Many tech companies actively value diverse experiences.",
        category: "advice",
      },
      "career for career changers without a degree": {
        answer:
          "Many successful tech professionals don't have traditional degrees. Focus on: 1) Building a strong portfolio of projects, 2) Getting relevant certifications, 3) Contributing to open-source, 4) Networking effectively, 5) Starting with contract or freelance work. Skills and demonstrable experience often matter more than degrees in tech, especially for hands-on roles.",
        category: "advice",
      },
      "career for career changers with family commitments": {
        answer:
          "Career changers with family commitments can succeed in tech by: 1) Choosing flexible learning options (self-paced, part-time), 2) Targeting companies with family-friendly policies, 3) Considering remote work opportunities, 4) Building skills gradually while employed, 5) Connecting with other parents in tech for support. Many tech roles offer the flexibility needed for work-life balance.",
        category: "advice",
      },
      "career for career changers with disabilities": {
        answer:
          "Tech offers excellent opportunities for people with disabilities: 1) Many roles can be performed remotely, 2) The industry increasingly values diverse perspectives, 3) Assistive technologies continue to improve, 4) Many companies have strong disability inclusion programs. Focus on your strengths and seek companies with inclusive cultures and accessibility commitments.",
        category: "advice",
      },
      "career for career changers from non-technical fields": {
        answer:
          "Career changers from non-technical fields bring valuable perspectives to tech: 1) Your domain expertise is valuable in specialized tech products, 2) Soft skills like communication and project management are highly valued, 3) Your unique background can help you understand diverse user needs. Start by identifying transferable skills and building technical foundations through targeted learning.",
        category: "advice",
      },
      "career for career changers who are introverted": {
        answer:
          "Tech offers many excellent roles for introverts: Software Development, Data Analysis, Technical Writing, Quality Assurance, and Systems Administration. These roles often allow for focused independent work with limited meetings. Many tech companies respect different working styles and provide environments where introverts can thrive.",
        category: "advice",
      },
      "career for career changers who are extroverted": {
        answer:
          "Extroverts can thrive in tech roles like: Technical Sales, Product Management, Technical Account Management, DevRel (Developer Relations), or UX Research. These roles leverage your communication skills and ability to build relationships. Tech companies increasingly value the customer engagement and team collaboration that extroverts excel at.",
        category: "advice",
      },
      "career for career changers who want to work remotely": {
        answer:
          "Remote work is abundant in tech, especially for roles like Software Development, Web Development, Data Analysis, Technical Writing, and Digital Marketing. To maximize remote opportunities: 1) Develop strong communication skills for virtual environments, 2) Highlight self-discipline and time management, 3) Build a portfolio that demonstrates independent work capability. Many tech companies are now permanently remote or hybrid.",
        category: "advice",
      },
      "career for career changers who want to start their own business": {
        answer:
          "Tech provides excellent foundations for entrepreneurship: 1) Build technical skills to create your own products, 2) Network with other entrepreneurs and investors, 3) Consider tech consulting or freelancing first to build experience, 4) Focus on solving problems you understand well. Many successful tech startups are founded by career changers who bring domain expertise from previous fields.",
        category: "advice",
      },
      "career for career changers who want to make a social impact": {
        answer:
          "Tech offers many paths to social impact: 1) Work on civic tech projects that improve government services, 2) Join nonprofits that need technical expertise, 3) Develop assistive technologies for people with disabilities, 4) Create educational technology that increases access to learning, 5) Focus on sustainability tech. Many tech companies now have social impact divisions and B Corp certification.",
        category: "advice",
      },
      "career for career changers who want to travel": {
        answer:
          "Tech offers great opportunities for travelers: 1) Remote work allows you to work from anywhere, 2) Digital nomad visas are available in many countries, 3) Tech conferences around the world provide learning and networking, 4) Freelance tech work can be done while traveling. Roles like Web Development, Technical Writing, and Digital Marketing are particularly travel-friendly.",
        category: "advice",
      },
      "career for career changers who want job security": {
        answer:
          "For job security in tech, focus on: 1) In-demand specializations like cybersecurity, cloud computing, and data science, 2) Companies in stable industries like healthcare, finance, and government tech, 3) Building a diverse skill set that's adaptable to changing needs, 4) Continuous learning to stay current. While no job is 100% secure, tech skills remain in high demand across economic cycles.",
        category: "advice",
      },
      "career for career changers who want high earning potential": {
        answer:
          "For high earning potential in tech, focus on: 1) Specialized skills like AI/ML, cybersecurity, and cloud architecture, 2) Roles with direct business impact like Product Management and Sales Engineering, 3) Companies known for competitive compensation like FAANG and high-growth startups, 4) Developing both technical and business skills. Senior technical specialists and product leaders often command the highest salaries.",
        category: "advice",
      },
      "career for career changers who want creative fulfillment": {
        answer:
          "Tech offers many creative paths: 1) UI/UX Design combines creativity with user psychology, 2) Frontend Development allows creative expression through code, 3) Game Development merges art and technology, 4) Creative Technology roles blend physical and digital interaction, 5) Product Design involves creative problem-solving. These roles allow you to create tangible experiences and solutions.",
        category: "advice",
      },
      "career for career changers who want intellectual challenge": {
        answer:
          "Tech offers intellectually stimulating careers: 1) AI/ML Research involves pushing the boundaries of what's possible, 2) Algorithm Development requires complex problem-solving, 3) Systems Architecture challenges you to design elegant solutions, 4) Security Research involves thinking like an attacker to build better defenses. These roles constantly present new challenges and learning opportunities.",
        category: "advice",
      },
      "career for career changers who want work-life balance": {
        answer:
          "For work-life balance in tech, consider: 1) Roles like Technical Writing, QA Engineering, and some Data Analysis positions, 2) Companies known for healthy cultures and reasonable hours, 3) European tech companies which often have better work-life policies, 4) Remote work to eliminate commute time. Research company cultures thoroughly and prioritize those that respect personal time.",
        category: "advice",
      },
      "career for career changers who want to work with people": {
        answer:
          "People-focused tech roles include: 1) Technical Account Management where you support enterprise clients, 2) UX Research where you understand user needs, 3) Product Management where you collaborate across teams, 4) Technical Training where you educate others, 5) DevRel where you engage with developer communities. These roles leverage your interpersonal skills in a technical context.",
        category: "advice",
      },
      "career for career changers who want to work independently": {
        answer:
          "Tech offers many paths to independent work: 1) Freelance Web Development or Design, 2) Technical Consulting for businesses, 3) Creating and selling digital products, 4) Building niche SaaS applications, 5) Technical Writing and content creation. Start by building a portfolio and client base while employed, then transition gradually to full-time independence.",
        category: "advice",
      },
      "career for career changers who want to work with cutting-edge technology":
        {
          answer:
            "For cutting-edge tech, focus on: 1) AI/ML roles working with the latest models and techniques, 2) Quantum Computing research and development, 3) AR/VR development creating immersive experiences, 4) Blockchain and Web3 technologies, 5) Biotechnology and computational biology. These fields are rapidly evolving and offer opportunities to work on tomorrow's technology today.",
          category: "advice",
        },
    };

    this.initialize();
  }

  initialize() {
    // Show notification badge on first visit
    if (!localStorage.getItem("chatbotVisited")) {
      setTimeout(() => {
        this.showNotification();
      }, 5000);
    }

    // Auto-open chatbot if user seems stuck or inactive
    this.setupInactivityDetector();
  }

  showNotification() {
    const badge = document.getElementById("chatNotification");
    if (badge) {
      badge.style.display = "block";
    }
  }

  hideNotification() {
    const badge = document.getElementById("chatNotification");
    if (badge) {
      badge.style.display = "none";
    }
    localStorage.setItem("chatbotVisited", "true");
  }

  setupInactivityDetector() {
    let inactivityTimer;
    const inactivityTime = 30000; // 30 seconds

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (!this.isOpen && !localStorage.getItem("chatbotDismissed")) {
          this.showHelpPrompt();
        }
      }, inactivityTime);
    };

    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keypress", resetTimer);
    document.addEventListener("click", resetTimer);
    document.addEventListener("scroll", resetTimer);
  }

  showHelpPrompt() {
    this.showNotification();
    // Optionally add a subtle animation to draw attention
    const toggle = document.getElementById("chatbotToggle");
    if (toggle) {
      toggle.style.animation = "pulse-glow 2s infinite";
    }
  }

  findBestMatch(userInput) {
    const input = userInput.toLowerCase().trim();

    // Direct keyword matching
    for (const [key, value] of Object.entries(this.knowledgeBase)) {
      if (input.includes(key) || key.includes(input)) {
        return value;
      }
    }

    // Fuzzy matching for common variations
    const fuzzyMatches = {
      "how it works": "how does ai career navigator work",
      careers: "what careers recommended",
      jobs: "what careers recommended",
      salary: "salary information",
      money: "salary information",
      safe: "data safety",
      security: "data safety",
      mobile: "mobile access",
      phone: "mobile access",
      courses: "suggest courses",
      learn: "suggest courses",
      study: "suggest courses",
      free: "free learning platforms",
      resume: "why upload resume",
      cv: "why upload resume",
      skills: "what skills detected",
      python: "python excel career",
      design: "design technology career",
      "ai job": "high paying ai jobs",
      "machine learning": "high paying ai jobs",
      "career for": "career for psychology graduates in tech",
      "career in": "career for psychology graduates in tech",
      "career with": "career for psychology graduates in tech",
      "career as": "career for psychology graduates in tech",
      "become a": "career for psychology graduates in tech",
      "how to become": "career for psychology graduates in tech",
      "transition to": "career for psychology graduates in tech",
      "switch to": "career for psychology graduates in tech",
      "move to": "career for psychology graduates in tech",
      "go into": "career for psychology graduates in tech",
      "get into": "career for psychology graduates in tech",
      "change career": "career for psychology graduates in tech",
      "career change": "career for psychology graduates in tech",
      "new career": "career for psychology graduates in tech",
      "different career": "career for psychology graduates in tech",
      "alternative career": "career for psychology graduates in tech",
      "second career": "career for psychology graduates in tech",
      "career path": "career for psychology graduates in tech",
      "career options": "career for psychology graduates in tech",
      "career choices": "career for psychology graduates in tech",
      "career opportunities": "career for psychology graduates in tech",
      "career possibilities": "career for psychology graduates in tech",
      "career advice": "career for psychology graduates in tech",
      "career guidance": "career for psychology graduates in tech",
      "career help": "career for psychology graduates in tech",
      "career support": "career for psychology graduates in tech",
      "career consultation": "career for psychology graduates in tech",
      "career counseling": "career for psychology graduates in tech",
      "career coaching": "career for psychology graduates in tech",
      "career mentorship": "career for psychology graduates in tech",
      "career planning": "career for psychology graduates in tech",
      "career strategy": "career for psychology graduates in tech",
      "career development": "career for psychology graduates in tech",
      "career growth": "career for psychology graduates in tech",
      "career advancement": "career for psychology graduates in tech",
      "career progression": "career for psychology graduates in tech",
      "career move": "career for psychology graduates in tech",
      "career shift": "career for psychology graduates in tech",
      "career pivot": "career for psychology graduates in tech",
      "career transition": "career for psychology graduates in tech",
      "career switch": "career for psychology graduates in tech",
      "career change advice": "career for psychology graduates in tech",
      "career change help": "career for psychology graduates in tech",
      "career change guidance": "career for psychology graduates in tech",
      "career change support": "career for psychology graduates in tech",
      "career change tips": "career for psychology graduates in tech",
      "career change strategies": "career for psychology graduates in tech",
      "career change plan": "career for psychology graduates in tech",
      "career change roadmap": "career for psychology graduates in tech",
      "career change steps": "career for psychology graduates in tech",
      "career change process": "career for psychology graduates in tech",
      "career change journey": "career for psychology graduates in tech",
      "career change experience": "career for psychology graduates in tech",
      "career change story": "career for psychology graduates in tech",
      "career change success": "career for psychology graduates in tech",
      "career change challenge": "career for psychology graduates in tech",
      "career change obstacle": "career for psychology graduates in tech",
      "career change barrier": "career for psychology graduates in tech",
      "career change difficulty": "career for psychology graduates in tech",
      "career change struggle": "career for psychology graduates in tech",
      "career change problem": "career for psychology graduates in tech",
      "career change issue": "career for psychology graduates in tech",
      "career change concern": "career for psychology graduates in tech",
      "career change question": "career for psychology graduates in tech",
      "career change query": "career for psychology graduates in tech",
      "career change inquiry": "career for psychology graduates in tech",
      "career change doubt": "career for psychology graduates in tech",
      "career change hesitation": "career for psychology graduates in tech",
      "career change uncertainty": "career for psychology graduates in tech",
      "career change fear": "career for psychology graduates in tech",
      "career change anxiety": "career for psychology graduates in tech",
      "career change worry": "career for psychology graduates in tech",
      "career change stress": "career for psychology graduates in tech",
      "career change pressure": "career for psychology graduates in tech",
      "career change tension": "career for psychology graduates in tech",
      "career change confusion": "career for psychology graduates in tech",
      "career change迷茫": "career for psychology graduates in tech",
      "career change迷茫": "career for psychology graduates in tech",
      "career change迷茫": "career for psychology graduates in tech",
      "career change迷茫": "career for psychology graduates in tech",
      "career change迷茫": "career for psychology graduates in tech",
    };

    for (const [pattern, key] of Object.entries(fuzzyMatches)) {
      if (input.includes(pattern)) {
        return this.knowledgeBase[key];
      }
    }

    return null;
  }

  generateResponse(userInput) {
    const match = this.findBestMatch(userInput);

    if (match) {
      return {
        text: match.answer,
        category: match.category,
        suggestions: this.getSuggestions(match.category),
      };
    } else {
      return {
        text: "I understand you're looking for career guidance! While I don't have a specific answer to that question, I can help you with career recommendations, skill analysis, job market insights, and learning paths. Could you try asking about a specific career field or skill?",
        category: "general",
        suggestions: [
          "What careers can you recommend?",
          "How does the AI work?",
          "Is my data safe?",
          "What skills can you detect?",
        ],
      };
    }
  }

  getSuggestions(category) {
    const suggestionMap = {
      general: [
        "How does the AI work?",
        "Who can use this platform?",
        "What careers can you recommend?",
        "Is the platform free?",
        "How accurate are the recommendations?",
      ],
      careers: [
        "What skills should I learn?",
        "High paying career options?",
        "Future-proof careers?",
        "Careers with good work-life balance?",
        "Entry-level tech careers?",
      ],
      skills: [
        "Free learning platforms?",
        "Course recommendations?",
        "Resume improvement tips?",
        "How to improve technical skills?",
        "What skills are most in demand?",
      ],
      jobs: [
        "Salary information?",
        "Job market trends?",
        "Internship opportunities?",
        "Which companies are hiring?",
        "How competitive is the job market?",
      ],
      education: [
        "Degree suggestions?",
        "Free courses available?",
        "Certification programs?",
        "Do I need a computer science degree?",
        "Are bootcamps worth it?",
      ],
      resume: [
        "What file formats are supported?",
        "How do you analyze my resume?",
        "Can I edit the extracted information?",
        "How do you handle skill gaps?",
        "What if my skills are outdated?",
      ],
      personalization: [
        "How do I set career goals?",
        "Can I track my progress?",
        "How do I choose between job offers?",
        "How do I find a mentor?",
        "How do I build a professional network?",
      ],
      technical: [
        "What technology powers the platform?",
        "How does the AI learn and improve?",
        "Is my data used to train the AI?",
        "How do you ensure algorithmic fairness?",
        "Can I export my data?",
      ],
      advice: [
        "Career for psychology graduates in tech?",
        "Career for English majors in tech?",
        "Career for business graduates in tech?",
        "Career for teaching graduates in tech?",
        "Career for finance graduates in tech?",
      ],
    };

    return suggestionMap[category] || suggestionMap.general;
  }

  addMessage(content, isUser = false) {
    const messagesContainer = document.getElementById("chatbotMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`;

    messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${isUser ? "user" : "robot"}"></i>
            </div>
            <div class="message-content">
                <p>${content}</p>
            </div>
        `;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Store message in history
    this.messageHistory.push({
      content,
      isUser,
      timestamp: new Date(),
    });
  }

  addMessageWithSuggestions(response) {
    const messagesContainer = document.getElementById("chatbotMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";

    let suggestionsHTML = "";
    if (response.suggestions && response.suggestions.length > 0) {
      suggestionsHTML = `
                <div class="quick-actions">
                    ${response.suggestions
                      .map(
                        (suggestion) =>
                          `<button class="quick-action" onclick="sendQuickMessage('${suggestion}')">${suggestion}</button>`
                      )
                      .join("")}
                </div>
            `;
    }

    messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>${response.text}</p>
                ${suggestionsHTML}
            </div>
        `;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  showTypingIndicator() {
    const indicator = document.getElementById("typingIndicator");
    if (indicator) {
      indicator.style.display = "flex";
    }
  }

  hideTypingIndicator() {
    const indicator = document.getElementById("typingIndicator");
    if (indicator) {
      indicator.style.display = "none";
    }
  }

  async processMessage(userInput) {
    if (!userInput.trim()) return;

    // Add user message
    this.addMessage(userInput, true);

    // Show typing indicator
    this.showTypingIndicator();

    // Simulate processing time
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    // Hide typing indicator
    this.hideTypingIndicator();

    // Generate and add bot response
    const response = this.generateResponse(userInput);
    this.addMessageWithSuggestions(response);

    // Update suggestions
    this.updateSuggestions(response.suggestions);
  }

  updateSuggestions(suggestions) {
    const suggestionsContainer = document.querySelector(".suggestion-chips");
    if (suggestionsContainer && suggestions) {
      suggestionsContainer.innerHTML = suggestions
        .map(
          (suggestion) =>
            `<button class="suggestion-chip" onclick="sendQuickMessage('${suggestion}')">${suggestion}</button>`
        )
        .join("");
    }
  }
}

// Global chatbot instance
let careerChatbot;

// Initialize chatbot when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  careerChatbot = new CareerChatbot();
});

// Chatbot control functions
function toggleChatbot() {
  const container = document.getElementById("chatbotContainer");
  const widget = document.getElementById("chatbotWidget");

  if (container.style.display === "none") {
    container.style.display = "block";
    careerChatbot.isOpen = true;
    careerChatbot.hideNotification();

    // Focus input
    setTimeout(() => {
      document.getElementById("chatInput").focus();
    }, 100);
  } else {
    container.style.display = "none";
    careerChatbot.isOpen = false;
  }
}

function minimizeChatbot() {
  const container = document.getElementById("chatbotContainer");
  container.style.display = "none";
  careerChatbot.isOpen = false;
  careerChatbot.isMinimized = true;
}

function closeChatbot() {
  const container = document.getElementById("chatbotContainer");
  container.style.display = "none";
  careerChatbot.isOpen = false;
  localStorage.setItem("chatbotDismissed", "true");
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message) {
    careerChatbot.processMessage(message);
    input.value = "";
  }
}

function sendQuickMessage(message) {
  document.getElementById("chatInput").value = message;
  sendMessage();
}

function handleChatKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

// Export for use in other files
window.CareerChatbot = CareerChatbot;
