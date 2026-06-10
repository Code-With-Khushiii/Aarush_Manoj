import { useEffect, useState } from 'react';
import { Award, ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Duke MQM Business Analytics & Finance candidate and CFA Level II candidate with experience in risk analytics, credit underwriting, and financial modeling across investment banking, audit, and alternative credit environments. Monitored $470M+ in initial margin exposure and a $96.8M+ buffer book, contributed to underwriting analysis on $13M in venture debt deals, and reviewed 200+ contracts to identify financial, operational, and compliance risks. Proficient in Python, SQL, R, VBA, Tableau, Power BI, Alteryx, Bloomberg Terminal, LSEG Workspace, cash-flow modeling, covenant analysis, credit risk modeling, and risk reporting.";

  const experience = [
    {
      company: "Societe Generale Securities India Private Limited - Corporate and Investment Banking",
      role: "Risk and Operations Analyst",
      location: "Mumbai, India",
      dates: "Dec 2024 - May 2025",
      highlights: [
        "Monitored daily margin, counterparty exposure, and collateral utilization across a $470M+ initial margin book and $96.8M+ buffer book for APAC equity derivatives clients.",
        "Tracked exposure movements, collateral utilization, and breach indicators across APAC equity derivatives portfolios, helping keep margin usage within internal risk thresholds and supporting timely escalation for downstream risk reporting.",
        "Automated daily reconciliation and exception-checking workflows using Python, reducing processing time by 20% and improving data-quality visibility across thousands of trade records.",
        "Investigated margin breaks, trade exceptions, and exposure variances across equity derivatives portfolios, improving exception visibility and supporting accurate daily risk reporting for CIB stakeholders."
      ]
    },
    {
      company: "V.R. Sanghavi Corporation - Audit and Assurance",
      role: "Accounts Analyst",
      location: "Mumbai, India",
      dates: "Jul 2024 - Nov 2024",
      highlights: [
        "Reviewed 200+ commercial contracts to identify payment terms, financial risks, and compliance gaps, supporting audit readiness and management review.",
        "Reconciled cross-ledger financial data across accounts, invoices, and transaction records, improving audit accuracy by 15% and strengthening financial reporting reliability.",
        "Developed aging analysis for overdue receivables, identifying collection gaps and reducing outstanding dues by 25% across customer accounts, including micro and small enterprise clients."
      ]
    },
    {
      company: "BlackSoil Capital - Alternative Credit and Structured Debt Platform",
      role: "Summer Analyst, Venture Debt",
      location: "Mumbai, India",
      dates: "Jun 2023 - Jul 2023",
      highlights: [
        "Contributed to underwriting 11 venture debt deals totaling $13M across fintech, SaaS, and IoT sectors by evaluating borrower fundamentals, repayment capacity, cashflow visibility, and downside risk.",
        "Built cash-flow projections, default-scenario models, and covenant stress tests to support credit risk assessment, financing structure evaluation, and debt service coverage analysis for early-stage companies.",
        "Conducted risk-adjusted deal analysis that informed portfolio exposure decisions, supporting a 10% expansion while maintaining internal loss thresholds and underwriting discipline.",
        "Assisted in applying ESG assessment criteria to credit review workflows, with 60%+ of reviewed deals aligned with sustainable investment standards and internal investment requirements."
      ]
    }
  ];

  const projects = [
    {
      title: "Cross-Asset Crypto Strategy",
      subtitle: "Python, Portfolio Analytics, Backtesting, Risk Analysis",
      category: "Investment Strategy",
      introduction: "Developed and validated a regime-conditional contrarian trading strategy across 6 crypto assets for institutional investment analysis.",
      problem: "Crypto asset allocation requires systematic evaluation of regime behavior, downside risk, timing, and cross-asset reallocation opportunities.",
      objective: "Test a contrarian portfolio strategy and deliver investment findings for an institutional client.",
      methodology: [
        "Built a Python-based backtesting workflow across 6 crypto assets.",
        "Evaluated Sharpe ratio, downside risk, sensitivity, and portfolio reallocation timing.",
        "Tested strategy behavior under regime-conditional market assumptions."
      ],
      results: [
        "Validated strategy performance across multiple crypto assets.",
        "Generated risk and sensitivity insights for institutional decision-making.",
        "Delivered portfolio analytics findings to support investment strategy evaluation."
      ],
      conclusion: "The project connected backtesting, risk analysis, and portfolio analytics to actionable cross-asset strategy recommendations."
    },
    {
      title: "Portfolio Performance Dashboard",
      subtitle: "Tableau, Cohort Analysis, Revenue Analytics",
      category: "Dashboard Analytics",
      introduction: "Built interactive Tableau dashboards tracking revenue, customer segmentation, seasonal demand, and buyer-seller cohort behavior.",
      problem: "Auction-house leadership needed clearer visibility into performance drivers, customer behavior, and revenue patterns.",
      objective: "Create a dashboard suite that supports pricing, retention strategy, and leadership decision-making.",
      methodology: [
        "Built Tableau dashboards for revenue, segmentation, demand, and cohort behavior.",
        "Analyzed buyer-seller behavior and seasonal demand patterns.",
        "Identified performance drivers relevant to pricing and retention strategy."
      ],
      results: [
        "Improved visibility into revenue and customer segmentation trends.",
        "Surfaced pricing and retention strategy opportunities.",
        "Created executive-ready dashboards for auction-house leadership."
      ],
      conclusion: "The dashboard translated portfolio and cohort data into operational insight for commercial strategy."
    },
    {
      title: "Mortgage Default Prediction",
      subtitle: "R, Survival Analysis, Credit Risk Modeling",
      category: "Credit Risk Modeling",
      introduction: "Modeled mortgage default risk using Cox proportional hazards models on Freddie Mac and Fannie Mae loan-level data.",
      problem: "Mortgage lenders and analysts need robust survival models to quantify default drivers and loan-level risk behavior.",
      objective: "Estimate mortgage default risk and identify drivers including LTV, FICO, DTI, loan age, and macroeconomic variables.",
      methodology: [
        "Engineered loan-age and macroeconomic variables from loan-level data.",
        "Built Cox proportional hazards models in R.",
        "Analyzed borrower and loan characteristics as default risk drivers."
      ],
      results: [
        "Quantified default drivers including LTV, FICO, and DTI.",
        "Built a survival analysis framework for mortgage credit risk.",
        "Connected loan-level risk features to default timing analysis."
      ],
      conclusion: "The project demonstrated applied credit risk modeling with survival analysis and mortgage loan-level data."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming & Databases',
      skills: ['SQL', 'Python', 'R', 'VBA']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Visualization',
      skills: ['Tableau', 'Power BI', 'Alteryx', 'Advanced Excel', 'Pivot Tables', 'Power Query', 'Data Visualization', 'Dashboard Development']
    },
    {
      icon: Users,
      title: 'Finance & Risk Analytics',
      skills: ['Financial Modeling', 'Credit Risk Modeling', 'Portfolio Analytics', 'Risk Reporting', 'Reconciliation', 'Covenant Stress Testing', 'Cash Flow Forecasting']
    },
    {
      icon: Lightbulb,
      title: 'Python/R Libraries',
      skills: ['pandas', 'NumPy', 'SciPy', 'survival', 'PerformanceAnalytics']
    },
    {
      icon: Rocket,
      title: 'Financial Platforms',
      skills: ['Bloomberg Terminal', 'LSEG Workspace']
    },
  ];

  const education = [
    {
      school: "Duke University, The Fuqua School of Business",
      degree: "Master of Science in Quantitative Management, Business Analytics and Finance",
      location: "Durham, NC",
      dates: "May 2026",
      details: "GPA: 3.50; Merit Scholarship. Relevant Coursework: Financial Risk Management, Derivatives, Fixed Income Securities, Financial Modeling, Data Science for Business"
    },
    {
      school: "University of Delhi, Ramjas College",
      degree: "Bachelor of Commerce, Accounting and Finance",
      location: "New Delhi, India",
      dates: "Jun 2024",
      details: "Commerce, accounting, and finance foundation with leadership experience in financial literacy and global student programming."
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  const certifications = [
    {
      title: "CFA Level II Candidate",
      platform: "CFA Institute",
      description: "Candidate focused on investment analysis, portfolio management, financial reporting, equity, fixed income, derivatives, and ethics."
    }
  ];

  const leadership = [
    {
      title: "HPAIR Delegate & Financial Literacy Volunteer",
      platform: "University of Delhi, Ramjas College",
      description: "Selected as 1 of 526 global HPAIR Delegates; led financial literacy initiatives for 300+ underserved students through Vittshala, translating financial concepts into practical education and community impact."
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'leadership', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">

            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Aarush Manoj Ambasht"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              AARUSH MANOJ AMBASHT
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              FINANCIAL ANALYST | RISK & CREDIT ANALYTICS | INVESTMENT RESEARCH
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              DURHAM, NC | OPEN TO RELOCATION
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'INITIAL MARGIN BOOK', value: '$470M+', detail: 'APAC Equity Derivatives' },
              { label: 'VENTURE DEBT DEALS', value: '$13M', detail: 'Underwriting Analysis' },
              { label: 'CONTRACTS REVIEWED', value: '200+', detail: 'Risk & Compliance Review' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Risk and credit analytics professional combining investment research, underwriting, risk reporting, and financial modeling across CIB, audit, and alternative credit environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Risk Analytics',
                detail: 'Monitor exposure, collateral utilization, margin breaks, and breach indicators across equity derivatives portfolios and daily risk workflows.'
              },
              {
                icon: Rocket,
                title: 'Credit Underwriting',
                detail: 'Build cash-flow projections, covenant stress tests, default scenarios, and risk-adjusted deal analyses for venture debt and structured credit.'
              },
              {
                icon: Lightbulb,
                title: 'Financial Modeling',
                detail: 'Use Python, SQL, R, VBA, Tableau, Power BI, Alteryx, Bloomberg, and LSEG Workspace to translate financial data into decision-ready insight.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Risk operations, audit analytics, credit underwriting, and venture debt analysis across banking, assurance, and alternative credit platforms.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} | {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Cross-asset strategy, portfolio dashboarding, and mortgage default modeling projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Programming, analytics, visualization, finance, risk analytics, and financial platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">LEADERSHIP</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-brown mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{item.title}</h3>
                    <p className="text-brown font-medium">{item.platform}</p>
                    <p className="text-brown leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} | {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {papers.length > 0 && (
        <section id="papers" className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
              <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
              <p className="text-lg text-brown max-w-2xl mx-auto font-light">
                Research and publications in finance, risk analytics, and investment strategy.
              </p>
            </div>
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                  <p className="text-brown font-medium mb-2">{paper.publication} | {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-brown mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                    <p className="text-brown font-medium">{cert.platform}</p>
                    <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss risk analytics, credit underwriting, investment research, financial modeling, or portfolio analytics opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+19192828860"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (919) 282-8860
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/aarushambasht/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:aarush.ambasht.duke@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                aarush.ambasht.duke@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Aarush Manoj Ambasht | Risk, Credit Analytics & Investment Research.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
