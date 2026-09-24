import profilePhoto from './assets/me_grey.png';
import './index.css';

const experiences = [
  {
    period: 'Feb 2022 – Present',
    role: 'Assistant Professor',
    org: 'Petra University — Business Intelligence & Data Analytics',
    desc: 'Teaching Big Data, Data Mining, NLP & LLMs, Python/R for Business, Power BI, and AWS. Curriculum development and academic committee participation.',
  },
  {
    period: 'Oct 2021 – Feb 2022',
    role: 'Adjunct Professor',
    org: 'Al Ahliya Amman University',
    desc: 'Teaching AI for Business (Masters level), Computer Programming, and Programming Languages for Business.',
  },
  {
    period: '2015 – 2020',
    role: 'IT Director & Projects Manager',
    org: "Anti-Money Laundering Unit (AMLU) — Jordan's Financial Intelligence Unit",
    desc: "Established the IT Directorate, built a Tier-3 Data Center, modernized the AML/CTF framework in coordination with UNODC. Certified Anti-Money Laundering Specialist (CAMS).",
  },
  {
    period: '2008 – 2015',
    role: 'ICT Expert & Projects Manager',
    org: "Jordan's Command and Control Center (JC3)",
    desc: "Led a multi-phase initiative renovating the Command-and-Control framework for Jordan's Public Security Directorate, Civil Defense, and Gendarmerie Forces.",
  },
  {
    period: '1996 – 2008',
    role: 'Software Engineer → Systems Architect',
    org: 'Public Security Directorate — IT Department',
    desc: 'Progressed from junior developer to systems architect. Contributed to major enterprise and law enforcement systems across a wide range of IT domains.',
  },
];

const education = [
  {
    year: '2013 – 2018',
    degree: 'PhD in Computer Science',
    school: 'The University of Jordan',
    detail: 'Subfield: AI / NLP. Thesis: "Information Extraction from Arabic Controlled Text Domains Assisted by Ontologies"',
  },
  {
    year: '2001 – 2002',
    degree: 'MSc in Telecommunications & Distributed Systems',
    school: 'University of Ulster, UK',
    detail: 'British Chevening Scholarship — Graduated with Distinction. Thesis: "A Mobile Agent Approach for Establishing GSM Roaming Agreements"',
  },
  {
    year: '1992 – 1996',
    degree: 'BSc in Computer Science',
    school: 'Mutah University',
    detail: '',
  },
];

const publications = [
  { year: 2026, text: 'AI-Driven Framework for Adaptive Water Network Management with Proof-of-Concept Implementation: Addressing Non-Revenue Water in Jordan (Accepted, not yet published; ICCIAA 2026).' },
  { year: 2026, text: 'System 1, System 2: Fusing Asynchronous Vision-Language Guidance with Fast Continuous Embodied Agent Control (Accepted, not yet published; ICCIAA 2026).' },
  { year: 2025, text: 'Parameter Efficient Fine-Tuning Llama 3.1 for Answering Arabic Legal Questions: A Case Study on Jordanian Laws (ICCIAA).' },
  { year: 2024, text: 'Mitigating the OWASP Top 10 For Large Language Model Applications using Intelligent Agents (ICCR).' },
  { year: 2024, text: 'Securing Digital Finance: Applying Machine Learning for Fraud Analysis (ICCR).' },
  { year: 2024, text: 'PDF Malware Detection: A Hybrid Approach Using Random Forest and K-Nearest Neighbors (ICCR).' },
  { year: 2020, text: 'Recognizing Arabic Text using a Hybrid Deep Learning Model. International Journal of Advanced Computer Science and Applications.' },
  { year: 2018, text: 'A Proposed Model for Extracting Information from Arabic-Based Controlled Text Domains. International Journal of Applied and Natural Sciences.' },
  { year: 2017, text: 'A Proposed Adaptive Scheme for Arabic Part-of-Speech Tagging. International Journal of Advanced Computer Science and Applications.' },
];

const NAV = ['About', 'Experience', 'Education', 'Research'];

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-inner">
          <span className="nav-brand">M. Fasha</span>
          <div className="nav-links">
            {NAV.map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="about">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Mohammad S. Fasha</h1>
            <p className="hero-title">University Professor · Data Scientist · Software Engineer</p>
            <p className="hero-bio">
              A seasoned ICT practitioner and university professor with 28 years of experience
              in Telecommunications and Information Technology. Passionate about AI, NLP, big data,
              and the rewarding experience of university teaching. CTO at Raseen Labs.
            </p>
            <div className="hero-contact">
              <span className="contact-item">Amman, Jordan</span>
              <div className="contact-emails">
                <a href="mailto:mohd.fasha@gmail.com" className="contact-item">mohd.fasha@gmail.com</a>
                <a href="mailto:mohammed.fasha@uop.edu.jo" className="contact-item">mohammed.fasha@uop.edu.jo</a>
                <a href="mailto:m.fasha@raseenlabs.com" className="contact-item">m.fasha@raseenlabs.com</a>
              </div>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/fasha" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
              <a href="https://github.com/msfasha" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
              <a href="https://x.com/MohammadFasha" target="_blank" rel="noopener noreferrer" className="social-btn">X</a>
              <a href="https://scholar.google.com/citations?user=Am1pBAQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-btn">Google Scholar</a>
              <a href="https://fafs.uop.edu.jo/En/Pages/AcademicStaffInfo.aspx?uid=6D006F00680061006D006D00650064002E0066006100730068006100400075006F0070002E006500640075002E006A006F00" target="_blank" rel="noopener noreferrer" className="social-btn">University</a>
              <a href="https://bayanat.dev" target="_blank" rel="noopener noreferrer" className="social-btn">Bayanat</a>
              <a href="https://raseenlabs.com" target="_blank" rel="noopener noreferrer" className="social-btn">Raseen Labs</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img src={profilePhoto} alt="Mohammad S. Fasha" className="hero-photo" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section bg-alt" id="skills">
        <div className="container">
          <h2 className="section-heading">Skills & Expertise</h2>
          <div className="skills-groups">
            <div className="skill-group">
              <h3 className="skill-label">Current Stack</h3>
              <div className="tags">
                {['Python', 'R', 'Java', 'C', 'C++', 'JavaScript', 'React/Native', 'Flutter', 'NodeJS', 'Django', 'Git', 'Docker', 'Kubernetes'].map(t => (
                  <span key={t} className="tag tag-dark">{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <h3 className="skill-label">AI & Data Science</h3>
              <div className="tags">
                {['PyTorch', 'TensorFlow', 'Keras', 'NLP', 'LLMs', 'LangChain', 'NLTK', 'scikit-learn', 'Power BI'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <h3 className="skill-label">Cloud & Databases</h3>
              <div className="tags">
                {['AWS', 'GCP', 'Azure', 'Databricks', 'Snowflake', 'SQL', 'NoSQL', 'Vector DB', 'Graph DB', 'Big Data / Hadoop'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <div className="container">
          <h2 className="section-heading">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <div key={i} className="tl-item">
                <div className="tl-date">{exp.period}</div>
                <div className="tl-line"><div className="tl-dot" /></div>
                <div className="tl-body">
                  <h3 className="tl-role">{exp.role}</h3>
                  <p className="tl-org">{exp.org}</p>
                  <p className="tl-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section bg-alt" id="education">
        <div className="container">
          <h2 className="section-heading">Education</h2>
          <div className="edu-list">
            {education.map((e, i) => (
              <div key={i} className="edu-item">
                <span className="edu-year">{e.year}</span>
                <div>
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-school">{e.school}</p>
                  {e.detail && <p className="edu-detail">{e.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section" id="research">
        <div className="container">
          <h2 className="section-heading">Publications</h2>
          <ol className="pub-list">
            {publications.map((p, i) => (
              <li key={i} className="pub-item">
                <span className="pub-year">{p.year}</span>
                <span className="pub-text">{p.text}</span>
              </li>
            ))}
          </ol>
          <a
            href="https://scholar.google.com/citations?user=Am1pBAQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            View all on Google Scholar →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mohammad S. Fasha &mdash; Amman, Jordan</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
