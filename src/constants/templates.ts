export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
                  <h1>Software Development Proposal</h1>

<h2>Introduction</h2>
<p>This proposal outlines a plan for developing a software solution to address a specific problem or need.</p>

<h2>Problem Statement</h2>
<p>The software aims to solve [describe the problem or need] by providing [describe the solution].</p>

<h2>Proposed Solution</h2>
<p>We propose to develop a software application that includes the following key features and benefits:</p>
<ul>
    <li>Feature 1: [Describe feature]</li>
    <li>Feature 2: [Describe feature]</li>
    <li>Feature 3: [Describe feature]</li>
</ul>

<h2>Project Plan</h2>
<p>The project will follow a timeline with major milestones including:</p>
<ul>
    <li>Phase 1: [Describe milestone]</li>
    <li>Phase 2: [Describe milestone]</li>
    <li>Phase 3: [Describe milestone]</li>
</ul>

<h2>Budget</h2>
<p>The estimated budget for the project includes costs for hardware, software, and personnel:</p>
<ul>
    <li>Cost 1: [Describe cost]</li>
    <li>Cost 2: [Describe cost]</li>
    <li>Cost 3: [Describe cost]</li>
</ul>

<h2>Conclusion</h2>
<p>This proposal presents a comprehensive plan for developing a software solution to address the identified problem or
    need. The proposed solution will provide significant benefits and address key challenges effectively.</p>
              `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
                  <h1>Project Proposal</h1>
<h2>Introduction</h2>
<p>This proposal outlines a plan for the [Project Name] to address a specific problem or need.</p>
<h2>Project Objectives</h2>
<p>The objectives of this project are as follows:</p>
<ul>
    <li>Objective 1: [Describe objective]</li>
    <li>Objective 2: [Describe objective]</li>
    <li>Objective 3: [Describe objective]</li>
</ul>
<h2>Proposed Solution</h2>
<p>We propose the following solution to achieve the project objectives:</p>
<ul>
    <li>Solution 1: [Describe solution]</li>
    <li>Solution 2: [Describe solution]</li>
    <li>Solution 3: [Describe solution]</li>
</ul>
<h2>Project Plan</h2>
<p>The project will follow a timeline with major milestones including:</p>
<ul>
    <li>Phase 1: [Describe milestone]</li>
    <li>Phase 2: [Describe milestone]</li>
    <li>Phase 3: [Describe milestone]</li>
</ul>
<h2>Budget</h2>
<p>The estimated budget for the project includes costs for resources and personnel:</p>
<ul>
    <li>Cost 1: [Describe cost]</li>
    <li>Cost 2: [Describe cost]</li>
    <li>Cost 3: [Describe cost]</li>
</ul>
<h2>Conclusion</h2>
<p>This proposal presents a comprehensive plan for the [Project Name] to address the identified problem or need. The
    proposed solution will provide significant benefits and achieve the project objectives effectively.
    `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
                <h1>Business Letter</h1>
<p>[Your Name]</p>
<p>[Your Title]</p>
<p>[Your Company]</p>
<p>[Company Address]</p>
<p>[Date]</p>
<p>[Recipient's Name]</p>
<p>[Recipient's Title]</p>
<p>[Recipient's Company]</p>
<p>[Recipient's Address]</p>
<div>
    <p>Dear [Recipient's Name],</p>
    <p>I am writing to [explain the purpose of your letter].</p>
    <p>[Provide additional details or information as necessary to support your purpose]</p>
    <p>Thank you for your attention to this matter. I look forward to your response.</p>
    <p>Sincerely,</p>
    <p>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1>[Your Name]</h1>
<p>[Your Address]</p>
<p>[Your Email]</p>
<p>[Your Phone Number]</p>
<section>
    <h2>Professional Summary</h2>
    <p>[Brief summary of your professional background and skills]</p>
</section>
<section>
    <h2>Experience</h2>
    <p><strong>[Job Title]</strong> - [Company Name]</p>
    <p>[Location] | [Dates of Employment]</p>
    <ul>
        <li>[Job Responsibility or Achievement]</li>
        <li>[Job Responsibility or Achievement]</li>
        <li>[Job Responsibility or Achievement]</li>
    </ul>
    <p><strong>[Job Title]</strong> - [Company Name]</p>
    <p>[Location] | [Dates of Employment]</p>
    <ul>
        <li>[Job Responsibility or Achievement]</li>
        <li>[Job Responsibility or Achievement]</li>
        <li>[Job Responsibility or Achievement]</li>
    </ul>
</section>
<section>
    <h2>Education</h2>
    <p><strong>[Degree]</strong> - [Institution Name]</p>
    <p>[Location] | [Graduation Date]</p>
</section>
<section>
    <h2>Skills</h2>
    <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
    </ul>
</section>`,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <h1>Cover Letter</h1>
<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[Your City, State, ZIP Code]</p>
<p>[Your Email]</p>
<p>[Your Phone Number]</p>
<p>[Date]</p>
<p>[Recipient's Name]</p>
<p>[Recipient's Title]</p>
<p>[Company's Name]</p>
<p>[Company's Address]</p>
<p>Dear [Recipient's Name],</p>
<p>I am writing to express my interest in the [Job Title] position at [Company's Name] as advertised on [where you found
    the job posting]. With [number] years of experience in [your field or industry], I am confident in my ability to
    contribute effectively to your team.</p>
<p>In my previous role at [Previous Company], I [describe your key achievements and responsibilities]. I have developed
    strong skills in [mention any relevant skills] that I believe will be valuable to your organization.</p>
<p>I am particularly excited about this opportunity at [Company's Name] because [explain why you are interested in the
    job and the company]. I am enthusiastic about the prospect of contributing to your team and am confident that my
    skills and experiences align well with the goals of your organization.</p>
<p>Thank you for considering my application. I look forward to the possibility of discussing this exciting opportunity
    with you further. Please find my resume attached for your review.</p>
<p>Sincerely,</p>
<p>[Your Name]
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <h1>Letter</h1>
<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[Your City, State, ZIP Code]</p>
<p>[Your Email]</p>
<p>[Your Phone Number]</p>
<p>[Date]</p>
<p>[Recipient's Name]</p>
<p>[Recipient's Title]</p>
<p>[Recipient's Company or Organization]</p>
<p>[Recipient's Address]</p>
<p>Dear [Recipient's Name],</p>
<p>I hope this letter finds you well. I am writing to [explain the purpose of your letter].</p>
<p>[Provide any additional details or information necessary to support your purpose]</p>
<p>Thank you for your time and consideration. I look forward to your response.</p>
<p>Sincerely,</p>
<p>[Your Name]</p>
    `,
  },
];
