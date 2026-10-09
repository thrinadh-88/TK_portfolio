// ============================================================
// CENTRALIZED PORTFOLIO DATA — Edit this file to update content
// ============================================================

window.PORTFOLIO_DATA = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  personal: {
    name: "Thrinadh Kadimi",
    headline: "B.Tech Data Science Student | Aspiring Data Analyst | Python, SQL & Data Visualization",
    intro: "I am a Computer Science student specializing in Data Science, interested in transforming raw data into meaningful insights through data analysis, visualization, and machine learning. I enjoy building practical projects that solve real-world problems and continuously improving my technical skills.",
    aboutMe: "I am a B.Tech student specializing in Computer Science and Data Science. My interests include data analytics, SQL, Python, business intelligence, and machine learning. I focus on strengthening my problem-solving abilities through hands-on projects and practical learning. My goal is to develop reliable, data-driven solutions and contribute to real-world projects.",
    email: "tkadimi8@gmail.com",
    phone: "+91 7670843702",
    linkedin: "https://www.linkedin.com/in/thrinadh-kadimi-771571323/",
    github: "https://github.com/thrinadh-88",
    photo: "assets/profile.jpg",          // Replace with your actual photo file
    resumePDF: "assets/resume.pdf",       // Replace with your actual resume PDF
    availableForInternship: true,
  },

  // ── EDUCATION ──────────────────────────────────────────────
  education: [
    {
      id: 1,
      institution: "Vikas College of Engineering & Technology",
      degree: "B.Tech in Computer Science and Engineering (Data Science)",
      period: "2024 – 2028",
      graduationYear: "[2028]",
      location: "Vijayawada, Andhra Pradesh, India",
      cgpa: 7.58,   // Set to string like "8.5 / 10" only when you have the value
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Machine Learning",
        "Statistical Analysis",
        "Python Programming",
        "Data Visualization",
        "Business Intelligence",
      ],
      achievements: [],  // Add verified achievements only
    },
  ],

  // ── SKILLS ─────────────────────────────────────────────────
  skills: {
    Programming: [
      { name: "Python",  icon: "🐍", note: "Data analysis, scripting, ML libraries" },
      { name: "SQL",     icon: "🗄️", note: "Querying, joins, aggregations, subqueries" },
    ],
    "Data Analysis": [
      { name: "Data Cleaning",              icon: "🧹", note: "Handling nulls, duplicates, outliers" },
      { name: "Exploratory Data Analysis",  icon: "🔍", note: "Statistical summaries and pattern discovery" },
      { name: "Data Manipulation",          icon: "🔧", note: "Pandas, NumPy operations" },
      { name: "Statistical Analysis",       icon: "📊", note: "Descriptive stats, probability, distributions" },
      { name: "Data-Driven Problem Solving",icon: "💡", note: "Translating business questions into analytical tasks" },
    ],
    "Data Visualization": [
      { name: "Tableau",               icon: "📈", note: "Interactive dashboards and story points" },
      { name: "Dashboard Development", icon: "🖥️", note: "KPI dashboards, filters, drill-downs" },
    ],
    "Machine Learning": [
      { name: "Supervised Learning",   icon: "🤖", note: "Regression and classification pipelines" },
      { name: "Classification",        icon: "🏷️", note: "Decision trees, logistic regression, k-NN" },
      { name: "Model Evaluation",      icon: "📉", note: "Accuracy, precision, recall, F1, ROC-AUC" },
      { name: "Feature Engineering",   icon: "⚙️", note: "Encoding, scaling, selection" },
    ],
    "Tools & Technologies": [
      { name: "Jupyter Notebook", icon: "📓", note: "Interactive notebooks for analysis" },
      { name: "MySQL",            icon: "🗃️", note: "Relational databases, schema design" },
      { name: "Git & GitHub",     icon: "🐙", note: "Version control and collaboration" },
    ],
    "Currently Learning": [
      { name: "Power BI",       icon: "📊", note: "Microsoft BI platform and DAX formulas" },
      { name: "Scikit-learn",   icon: "🔬", note: "Advanced ML pipelines and model tuning" },
      { name: "Pandas Advanced",icon: "🐼", note: "Multi-index, pivot tables, window functions" },
    ],
  },

  // ── CERTIFICATIONS ─────────────────────────────────────────
  certifications: [
    {
      id: 1,
      name: "CCNA: Introduction to Networks",
      org: "Cisco Networking Academy",
      orgLogo: null,
      date: "Jun 23, 2026",
      credentialId: "43ce9852-bee2-4b2a-b2b9-23c59ef4bcd1",
      link: "assets/certifications/ccna-itn.pdf",
      badge: "assets/badges/ccna-itn.png",
      category: "Networking",
    },
    {
      id: 2,
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      org: "Cisco Networking Academy",
      orgLogo: null,
      date: "Jul 02, 2026",
      credentialId: "20f832e0-9419-4c8a-a313-65b6e2888f7c",
      link: "assets/certifications/ccna-srwe.pdf",
      badge: "assets/badges/ccna-srwe.png",
      category: "Networking",
    },
    {
      id: 3,
      name: "CCNA: Enterprise Networking, Security, and Automation",
      org: "Cisco Networking Academy",
      orgLogo: null,
      date: "Jul 15, 2026",
      credentialId: null,
      link: "assets/certifications/ccna-ensa.pdf",
      badge: "assets/badges/ccna-ensa.png",
      category: "Networking",
    },
    {
      id: 4,
      name: "Python Essentials 1",
      org: "Cisco Networking Academy",
      orgLogo: null,
      date: "Jun 23, 2026",
      credentialId: null,
      link: "assets/certifications/ccna-itn.pdf",
      badge: "assets/badges/python-essentials-1.png",
      category: "Programming",
    },
    {
      id: 5,
      name: "Introduction to IoT",
      org: "Cisco Networking Academy",
      orgLogo: null,
      date: null,
      credentialId: null,
      link: null,
      badge: "assets/badges/cisco-iot.png",
      category: "Technology",
    },
    {
      id: 6,
      name: "Getting Started with Artificial Intelligence",
      org: "IBM SkillsBuild",
      orgLogo: null,
      date: "Oct 07, 2026",
      credentialId: "a69d09c7-c7a9-4bec-a819-ed89a03da5f9",
      link: "https://www.credly.com/badges/a69d09c7-c7a9-4bec-a819-ed89a03da5f9",
      badge: "assets/badges/ibm-ai.png",
      category: "AI & ML",
      verifyExternal: true,
    },
    {
      id: 7,
      name: "Maximize Productivity With AI Tools",
      org: "Google (via Coursera)",
      orgLogo: null,
      date: "Jun 08, 2026",
      credentialId: "0CVXY5A47CTY",
      link: "https://coursera.org/verify/0CVXY5A47CTY",
      badge: null,
      category: "AI & ML",
      verifyExternal: true,
    },
    // Add more certifications here following the same structure
  ],

  // ── INTERNSHIPS ────────────────────────────────────────────
  internships: [
    {
      id: 1,
      org: "Deloitte Australia (via Forage)",
      role: "Data Analytics Job Simulation",
      start: "February 2026",
      end: "February 2026",
      type: "Virtual / Online",
      responsibilities: [
        "Completed practical data analysis tasks simulating real Deloitte workflows",
        "Applied forensic technology skills to analyze and interpret data sets",
        "Worked through structured data analytics exercises covering real-world business scenarios",
      ],
      tools: ["Data Analysis", "Forensic Technology"],
      projects: ["Data Analytics Job Simulation"],
      outcomes: [
        "Earned Certificate of Completion issued by Forage on behalf of Deloitte",
        "Demonstrated practical skills in data analysis and forensic technology",
      ],
      certificateLink: "assets/certifications/deloitte-internship.pdf",
      enrolmentCode: "LACbRBB6hmCi4jLLL",
      userCode: "6982062b2c0fb5a98b8ef98f",
    },
    {
      id: 2,
      org: "Future Interns",
      role: "[INSERT OFFICIAL INTERNSHIP TITLE]",
      start: "[INSERT START DATE]",
      end: "[INSERT END DATE]",
      type: "Remote",
      responsibilities: [
        "[INSERT RESPONSIBILITY 1]",
        "[INSERT RESPONSIBILITY 2]",
      ],
      tools: ["[INSERT TOOL 1]", "[INSERT TOOL 2]"],
      projects: ["[INSERT PROJECT COMPLETED]"],
      outcomes: ["[INSERT VERIFIED OUTCOME]"],
      certificateLink: null,
    },
  ],

  // ── PROJECTS ───────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "Business Sales Performance Dashboard",
      tagline: "Interactive analytics dashboard revealing actionable sales insights",
      description: "An interactive dashboard that analyzes business sales performance and presents useful insights through visualizations. Enables stakeholders to track KPIs, identify trends, and make data-driven decisions.",
      category: ["Data Analytics"],
      tags: ["Tableau", "Python", "SQL", "Data Visualization"],
      problem: "Organizations struggle to monitor multi-dimensional sales KPIs in real time, leading to delayed decision-making.",
      dataset: "[INSERT DATASET NAME AND SOURCE]",
      cleaning: [
        "Handled missing values and outliers",
        "Standardized date formats and category labels",
        "Merged multiple data sources",
      ],
      tools: ["Tableau", "Python (Pandas)", "SQL", "[INSERT ADDITIONAL TOOLS]"],
      insights: [
        "[INSERT KEY INSIGHT 1]",
        "[INSERT KEY INSIGHT 2]",
      ],
      screenshots: [], // Add image paths: "assets/projects/p1-screenshot1.png"
      github: "[INSERT GITHUB REPOSITORY URL]",
      live: null,
      featured: true,
    },
    {
      id: 2,
      title: "Student Performance Prediction System",
      tagline: "ML-powered web application predicting academic performance",
      description: "A web-based machine learning application designed to predict student performance using the input features supported by the actual model.",
      category: ["Machine Learning", "Python"],
      tags: ["Python", "Scikit-learn", "Machine Learning", "Flask", "Data Analysis"],
      problem: "Early identification of at-risk students allows educators to intervene before performance deteriorates.",
      dataset: "[INSERT DATASET NAME AND SOURCE]",
      cleaning: [
        "Encoded categorical variables",
        "Handled missing values",
        "Feature scaling and normalization",
      ],
      algorithm: "[INSERT ACTUAL ALGORITHM USED]",
      metrics: {
        accuracy: "[INSERT VERIFIED ACCURACY]",
        precision: null,
        recall: null,
        f1: null,
      },
      tools: ["Python", "Scikit-learn", "Pandas", "Flask", "[INSERT ADDITIONAL TOOLS]"],
      screenshots: [],
      github: "[INSERT GITHUB REPOSITORY URL]",
      live: null,
      featured: true,
    },
    // Add more projects here following the same structure
  ],

  // ── CAREER INTERESTS ───────────────────────────────────────
  careerInterests: [
    "Data Analytics",
    "Business Intelligence",
    "Machine Learning Engineering",
    "Data Visualization",
    "SQL & Database Management",
  ],

  // ── LEARNING GOALS ─────────────────────────────────────────
  learningGoals: [
    "Master advanced SQL window functions and query optimization",
    "Build production-level Tableau and Power BI dashboards",
    "Complete hands-on ML projects with real-world datasets",
    "Contribute to open-source data analysis repositories",
  ],
};
