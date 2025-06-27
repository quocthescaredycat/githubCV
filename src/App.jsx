import "./App.css";
import avatarImage from "/avatar1.jpg";

function App() {
  return (
    <div className="cv-container">
      {/* Header Section */}
      <header className="cv-header">
        <div className="header-content">
          <div className="header-left">
            <div className="avatar-container">
              <img
                src={avatarImage}
                alt="Nguyễn Hoàng Quốc"
                className="avatar"
              />
            </div>
          </div>
          <div className="header-right">
            <h1 className="name">Nguyễn Hoàng Quốc</h1>
            <p className="title">Computer Science Student</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="cv-main">
        {/* Education Section */}
        <section className="cv-section">
          <h2>🎓 Education</h2>
          <div className="education-item">
            <h3>Bachelor of Computer Science</h3>
            <p className="institution">
              Ho Chi Minh City University of Technology (HCMUT)
            </p>
            <p className="duration">2023 - 2027 (Expected)</p>
            <p className="gpa">
              Current GPA: 3.1/4.0 (The nearest semester is 3.5)
            </p>
            <p className="status">
              Currently completed 2nd year, entering 3rd year (Semester 4/8)
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="cv-section">
          <h2>📞 Contact Information</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  quoc.nguyenhoang2305@hcmut.edu.vn
                </span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+84 975 540 517</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">
                  github.com/quocthescaredycat
                </span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🏠</span>
              <div className="contact-details">
                <span className="contact-label">Address</span>
                <span className="contact-value">Ho Chi Minh City</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interests & Goals */}
        <section className="cv-section">
          <h2>🎯 Career Interests</h2>
          <div className="interests">
            <p>
              Passionate about applying statistical analysis and machine
              learning to solve real-world problems. Strong foundation in
              systems programming and low-level optimization from operating
              systems and assembly language experience, combined with excellent
              English communication skills (IELTS 8.0) for effective
              collaboration in an international environment.
              <br />
              Eager to contribute to company's innovative technologies while
              gaining hands-on experience in industrial AI applications and
              statistical modeling for data analysis. Seeking a working position
              in a dynamic environment where I can leverage my skills in
              statistical analysis, machine learning, and systems programming to
              contribute to impactful projects and further develop my expertise
              in a company.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="cv-section">
          <h2>💻 Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <ul>
                <li>C/C++ (Intermediate)</li>
                <li>R (Intermediate)</li>
                <li>Assembly (basic)</li>
                <li>Python (Basic)</li>
                <li>JavaScript, ReactJS (Basic)</li>
                <li>HTML, CSS (Basic)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Statistical Analysis & ML</h4>
              <ul>
                <li>R Programming & RStudio</li>
                <li>Statistical Modeling</li>
                <li>Data Preprocessing</li>
                <li>Pandas, NumPy (Learning)</li>
                <li>Scikit-learn (Learning)</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Linux Ubuntu</li>
                <li>Git/GitHub</li>
                <li>MARS MIPS Simulator</li>
                <li>VS Code</li>
                <li>RStudio</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Relevant Coursework */}
        <section className="cv-section">
          <h2>📚 Relevant Coursework</h2>
          <div className="coursework-grid">
            <div className="course-category">
              <h4>Core CS Subjects</h4>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Advanced Programming (C/C++ OOP)</li>
                <li>Computer Architecture</li>
                <li>Operating Systems</li>
              </ul>
            </div>
            <div className="course-category">
              <h4>Mathematics & Statistics</h4>
              <ul>
                <li>Probability & Statistics</li>
                <li>Discrete Structures for Computing</li>
                <li>Linear Algebra</li>
                <li>Mathematical Modeling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Projects */}
        <section className="cv-section">
          <h2>🚀 Projects</h2>
          <div className="project-item">
            <h3>Ad Click Prediction - Statistical Analysis Project</h3>
            <p className="project-tech">
              Technologies: R, RStudio, ggplot2, dplyr, corrplot
            </p>
            <ul>
              <li>
                Analyzed 10,000-record Kaggle dataset to predict ad click
                behavior using statistical methods
              </li>
              <li>
                Performed comprehensive EDA with correlation analysis,
                hypothesis testing, and data visualization
              </li>
              <li>
                Implemented both Logistic Regression and Random Forest models
                with performance evaluation
              </li>
              <li>
                Achieved model comparison through ROC curves, AUC analysis, and
                confusion matrices
              </li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Simple Operating System Simulator</h3>
            <p className="project-tech">
              Technologies: C, Pthreads, GCC, Makefile
            </p>
            <ul>
              <li>
                Implemented paging-based virtual memory management with page
                replacement algorithms
              </li>
              <li>
                Developed multilevel queue (MLQ) scheduler with process
                synchronization mechanisms
              </li>
              <li>
                Created system call interface including memory management and
                process control operations
              </li>
              <li>
                Built memory allocation/deallocation with swap space management
                and deadlock prevention
              </li>
            </ul>
          </div>

          <div className="project-item">
            <h3>2D Convolution Matrix in MIPS Assembly</h3>
            <p className="project-tech">
              Technologies: Assembly, MARS Simulator
            </p>
            <ul>
              <li>
                Implemented complete 2D convolution operation with configurable
                padding and stride
              </li>
              <li>
                Developed floating-point arithmetic operations in assembly for
                matrix computations
              </li>
              <li>
                Created file I/O system for reading matrix data and writing
                results with error handling
              </li>
              <li>
                Optimized memory management and register usage for efficient
                matrix operations
              </li>
            </ul>
          </div>
        </section>

        {/* Languages */}
        <section className="cv-section">
          <h2>🌐 Languages</h2>
          <div className="languages">
            <div className="language-item">
              <span className="language">Vietnamese</span>
              <span className="level">Native</span>
            </div>
            <div className="language-item">
              <span className="language">English</span>
              <span className="level">Proficient (IELTS 8.0 Overall)</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="cv-footer">
        <p>Available for internship • Ready to start immediately</p>
      </footer>
    </div>
  );
}

export default App;
