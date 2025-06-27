import React from "react";
import "./App.css";

function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "header",
      { className: "header" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "header-content" },
          React.createElement("h1", { className: "name" }, "Your Name"),
          React.createElement(
            "p",
            { className: "title" },
            "Computer Science Student | AI & Machine Learning Enthusiast"
          ),
          React.createElement(
            "div",
            { className: "contact-info" },
            React.createElement(
              "div",
              { className: "contact-item" },
              React.createElement("span", null, "📧 your.email@university.edu")
            ),
            React.createElement(
              "div",
              { className: "contact-item" },
              React.createElement("span", null, "📱 +84 XXX XXX XXX")
            ),
            React.createElement(
              "div",
              { className: "contact-item" },
              React.createElement("span", null, "🌐 github.com/yourusername")
            ),
            React.createElement(
              "div",
              { className: "contact-item" },
              React.createElement("span", null, "📍 Ho Chi Minh City, Vietnam")
            )
          )
        )
      )
    ),

    React.createElement(
      "main",
      { className: "main" },
      React.createElement(
        "div",
        { className: "container" },

        // Education Section
        React.createElement(
          "section",
          { className: "section" },
          React.createElement(
            "h2",
            { className: "section-title" },
            "Education"
          ),
          React.createElement(
            "div",
            { className: "education-item" },
            React.createElement("h3", null, "Bachelor of Computer Science"),
            React.createElement(
              "p",
              { className: "institution" },
              "Your University Name"
            ),
            React.createElement(
              "p",
              { className: "date" },
              "2022 - 2026 (Expected)"
            ),
            React.createElement("p", { className: "gpa" }, "GPA: X.XX/4.0"),
            React.createElement(
              "p",
              { className: "status" },
              "Currently in 3rd year (Completed 2nd year)"
            )
          )
        ),

        // Skills Section
        React.createElement(
          "section",
          { className: "section" },
          React.createElement(
            "h2",
            { className: "section-title" },
            "Technical Skills"
          ),
          React.createElement(
            "div",
            { className: "skills-grid" },
            React.createElement(
              "div",
              { className: "skill-category" },
              React.createElement("h4", null, "Programming Languages"),
              React.createElement(
                "div",
                { className: "skills-list" },
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "Python"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "C/C++"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "JavaScript"
                ),
                React.createElement("span", { className: "skill-tag" }, "Java")
              )
            ),
            React.createElement(
              "div",
              { className: "skill-category" },
              React.createElement("h4", null, "Machine Learning & AI"),
              React.createElement(
                "div",
                { className: "skills-list" },
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "PyTorch"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "TensorFlow"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "scikit-learn"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "Pandas"
                ),
                React.createElement("span", { className: "skill-tag" }, "NumPy")
              )
            ),
            React.createElement(
              "div",
              { className: "skill-category" },
              React.createElement("h4", null, "Tools & Technologies"),
              React.createElement(
                "div",
                { className: "skills-list" },
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "Linux"
                ),
                React.createElement("span", { className: "skill-tag" }, "Git"),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "Docker"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "VS Code"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "skill-category" },
              React.createElement("h4", null, "Automotive & IoT"),
              React.createElement(
                "div",
                { className: "skills-list" },
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "Embedded Systems"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "Cybersecurity"
                ),
                React.createElement(
                  "span",
                  { className: "skill-tag" },
                  "Data Analysis"
                )
              )
            )
          )
        ),

        // Relevant Coursework Section
        React.createElement(
          "section",
          { className: "section" },
          React.createElement(
            "h2",
            { className: "section-title" },
            "Relevant Coursework"
          ),
          React.createElement(
            "div",
            { className: "coursework-grid" },
            React.createElement(
              "div",
              { className: "coursework-item" },
              React.createElement("h4", null, "Machine Learning Fundamentals"),
              React.createElement(
                "p",
                null,
                "Supervised and unsupervised learning algorithms, model evaluation"
              )
            ),
            React.createElement(
              "div",
              { className: "coursework-item" },
              React.createElement("h4", null, "Data Structures & Algorithms"),
              React.createElement(
                "p",
                null,
                "Advanced algorithms, complexity analysis, optimization"
              )
            ),
            React.createElement(
              "div",
              { className: "coursework-item" },
              React.createElement("h4", null, "Computer Networks"),
              React.createElement(
                "p",
                null,
                "Network protocols, security, distributed systems"
              )
            ),
            React.createElement(
              "div",
              { className: "coursework-item" },
              React.createElement("h4", null, "Database Systems"),
              React.createElement(
                "p",
                null,
                "SQL, NoSQL, database design, data modeling"
              )
            ),
            React.createElement(
              "div",
              { className: "coursework-item" },
              React.createElement("h4", null, "Operating Systems"),
              React.createElement(
                "p",
                null,
                "Linux systems, process management, memory management"
              )
            ),
            React.createElement(
              "div",
              { className: "coursework-item" },
              React.createElement("h4", null, "Software Engineering"),
              React.createElement(
                "p",
                null,
                "SDLC, testing, version control, project management"
              )
            )
          )
        ),

        // Academic Projects Section
        React.createElement(
          "section",
          { className: "section" },
          React.createElement(
            "h2",
            { className: "section-title" },
            "Academic Projects"
          ),
          React.createElement(
            "div",
            { className: "project-item" },
            React.createElement("h3", null, "Basic Machine Learning Analysis"),
            React.createElement(
              "p",
              { className: "project-tech" },
              "Python, Pandas, scikit-learn, Matplotlib"
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Implemented basic classification algorithms for data analysis"
              ),
              React.createElement(
                "li",
                null,
                "Performed data preprocessing and visualization"
              ),
              React.createElement(
                "li",
                null,
                "Achieved model accuracy improvements through feature engineering"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "project-item" },
            React.createElement("h3", null, "University Management System"),
            React.createElement(
              "p",
              { className: "project-tech" },
              "Java, MySQL, JDBC"
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Developed a console-based student information system"
              ),
              React.createElement(
                "li",
                null,
                "Implemented CRUD operations with database integration"
              ),
              React.createElement(
                "li",
                null,
                "Applied object-oriented programming principles"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "project-item" },
            React.createElement("h3", null, "Basic Web Application"),
            React.createElement(
              "p",
              { className: "project-tech" },
              "HTML, CSS, JavaScript, PHP"
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Created a responsive web interface for course registration"
              ),
              React.createElement(
                "li",
                null,
                "Implemented form validation and user authentication"
              ),
              React.createElement(
                "li",
                null,
                "Integrated with MySQL database for data persistence"
              )
            )
          )
        ),

        // Languages Section
        React.createElement(
          "section",
          { className: "section" },
          React.createElement(
            "h2",
            { className: "section-title" },
            "Languages"
          ),
          React.createElement(
            "div",
            { className: "languages-grid" },
            React.createElement(
              "div",
              { className: "language-item" },
              React.createElement(
                "span",
                { className: "language-name" },
                "Vietnamese"
              ),
              React.createElement(
                "span",
                { className: "language-level" },
                "Native"
              )
            ),
            React.createElement(
              "div",
              { className: "language-item" },
              React.createElement(
                "span",
                { className: "language-name" },
                "English"
              ),
              React.createElement(
                "span",
                { className: "language-level" },
                "Fluent (IELTS 6.5+)"
              )
            )
          )
        ),

        // Interests Section
        React.createElement(
          "section",
          { className: "section" },
          React.createElement(
            "h2",
            { className: "section-title" },
            "Areas of Interest"
          ),
          React.createElement(
            "div",
            { className: "interests-list" },
            React.createElement(
              "span",
              { className: "interest-tag" },
              "Artificial Intelligence"
            ),
            React.createElement(
              "span",
              { className: "interest-tag" },
              "Automotive Technology"
            ),
            React.createElement(
              "span",
              { className: "interest-tag" },
              "Cybersecurity"
            ),
            React.createElement(
              "span",
              { className: "interest-tag" },
              "IoT Systems"
            ),
            React.createElement(
              "span",
              { className: "interest-tag" },
              "Deep Learning"
            ),
            React.createElement(
              "span",
              { className: "interest-tag" },
              "Computer Vision"
            )
          )
        )
      )
    ),

    React.createElement(
      "footer",
      { className: "footer" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "p",
          null,
          "© 2025 Your Name. Built with React and Vite for GitHub Pages."
        )
      )
    )
  );
}

export default App;
