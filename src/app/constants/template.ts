export const template = [
    { 
        id: "blank", 
        label: "Blank Documents", 
        imageUrl: "/blank-document.svg"
     },
     {
        id: "software-proposal", 
        label: "Software development", 
        imageUrl: "/software-proposal.svg",
        initialContent:` <header>
        <h1>Software Proposal</h1>
        <p><em>Helping you achieve your business goals with innovative solutions</em></p>
    </header>

    <section>
        <h2>1. Introduction</h2>
        <p>Provide a brief overview of your company, team, and expertise in the software industry. Mention the purpose of the proposal and its relevance to the client's requirements.</p>
    </section>

    <section>
        <h2>2. Client Requirements</h2>
        <p>Outline the client's key requirements, challenges, and goals. Clearly identify the scope of work to be addressed in the software solution.</p>
    </section>

    <section>
        <h2>3. Proposed Solution</h2>
        <p>Describe the software solution you propose, including key features, technologies, and architecture. Highlight how it will solve the client's problems and meet their goals.</p>
    </section>

    <section>
        <h2>4. Project Timeline</h2>
        <p>Provide a detailed timeline with milestones for the project phases, including analysis, design, development, testing, and deployment.</p>
    </section>

    <section>
        <h2>5. Cost Estimation</h2>
        <p>Present a breakdown of costs for the project, including software development, testing, and post-launch support.</p>
    </section>

    <section>
        <h2>6. Terms and Conditions</h2>
        <p>Include terms related to payment schedules, intellectual property rights, confidentiality, and any other legal agreements.</p>
    </section>

    <section>
        <h2>7. Call to Action</h2>
        <p>Encourage the client to take the next step, whether it's scheduling a meeting, signing the agreement, or contacting you for further discussion.</p>
        <a href="mailto:contact@company.com" class="button">Contact Us</a>
    </section>

    <footer>
        <p>© [Year] [Your Company Name]. All rights reserved.</p>
    </footer>`
     },
     {
        id: "project-proposal", 
        label: "Project development proposal", 
        imageUrl: "/project-proposal.svg",
        initialContent:`   <header>
        <h1>Project Proposal</h1>
        <p><em>Your roadmap to success</em></p>
    </header>

    <section>
        <h2>1. Executive Summary</h2>
        <p>This project proposal outlines a comprehensive plan to [describe project goal or purpose]. The proposal highlights the objectives, scope, timeline, and cost to ensure the successful delivery of the project.</p>
    </section>

    <section>
        <h2>2. Project Objectives</h2>
        <ul>
            <li>Objective 1: [Define specific, measurable goals]</li>
            <li>Objective 2: [Ensure alignment with client needs]</li>
            <li>Objective 3: [Add any additional key objectives]</li>
        </ul>
    </section>

    <section>
        <h2>3. Project Scope</h2>
        <p>The scope of this project includes:</p>
        <ul>
            <li>Delivering [specific features or services]</li>
            <li>Providing [tools or resources needed]</li>
            <li>Ensuring [performance, security, or quality criteria]</li>
        </ul>
        <p><strong>Out of Scope:</strong> [Clearly mention tasks or elements not included in the project].</p>
    </section>

    <section>
        <h2>4. Project Plan and Timeline</h2>
        <p>The project will be completed in the following phases:</p>
        <ul>
            <li><strong>Phase 1:</strong> [Analysis and requirements gathering] - [Timeline]</li>
            <li><strong>Phase 2:</strong> [Design and planning] - [Timeline]</li>
            <li><strong>Phase 3:</strong> [Development and implementation] - [Timeline]</li>
            <li><strong>Phase 4:</strong> [Testing and deployment] - [Timeline]</li>
        </ul>
    </section>

    <section>
        <h2>5. Budget Estimate</h2>
        <p>The estimated cost for this project is [total budget]. Below is a breakdown:</p>
        <ul>
            <li>Development: [Cost]</li>
            <li>Testing: [Cost]</li>
            <li>Deployment: [Cost]</li>
            <li>Maintenance (optional): [Cost]</li>
        </ul>
    </section>

    <section>
        <h2>6. Risks and Mitigation</h2>
        <p>Potential risks and mitigation strategies:</p>
        <ul>
            <li><strong>Risk:</strong> [Describe a risk]. <strong>Mitigation:</strong> [Describe the mitigation strategy].</li>
            <li><strong>Risk:</strong> [Describe a risk]. <strong>Mitigation:</strong> [Describe the mitigation strategy].</li>
        </ul>
    </section>

    <section>
        <h2>7. Conclusion</h2>
        <p>This project proposal outlines a clear and actionable plan to achieve the objectives effectively. We are confident in our ability to deliver value and exceed expectations.</p>
        <p>If you have any questions or need further clarifications, please feel free to contact us.</p>
    </section>

    <footer>
        <p>© [Year] [Your Company Name]. All rights reserved.</p>
    </footer>`
     },
    { 
        id: "bussiness-letter", 
        label: "Business letter", 
        imageUrl: "/business-letter.svg",
         initialContent:` <div>
        <div >
            <p><strong>Sender Name</strong></p>
            <p>Sender Position</p>
            <p>Sender Company Name</p>
            <p>Sender Address</p>
            <p>Email: sender@example.com | Phone: +123-456-7890</p>
        </div>
        <div >
            <p><strong>Date:</strong> [Insert Date]</p>
        </div>
        <div>
            <p><strong>Recipient Name</strong></p>
            <p>Recipient Position</p>
            <p>Recipient Company Name</p>
            <p>Recipient Address</p>
        </div>
        <div >
            <h2><strong>Subject:</strong> [Insert Subject Line]</h2>
            <p>Dear [Recipient Name],</p>
            <p>
                I am writing to [introduce the purpose of the letter]. This letter serves to [briefly explain the context or reason for communication]. We highly value our relationship with [Recipient Company Name] and are eager to explore opportunities for collaboration.
            </p>
            <p>
                [Include detailed explanation, any proposals, or issues you would like to address. Use clear, concise language.]
            </p>
            <p>
                Please let us know if further details are required. We would be happy to provide any additional information or set up a meeting to discuss this matter further.
            </p>
            <p>
                Thank you for your time and attention to this matter. We look forward to your response.
            </p>
            <p>Best regards,</p>
            <div>
                <p><strong>[Sender Name]</strong></p>
                <p>[Sender Position]</p>
                <p>[Sender Company Name]</p>
            </div>
        </div>
        <div >
            <p><strong>Enclosures:</strong> [List of any enclosed documents, if applicable]</p>
        </div>
    </div>`
     },
     {
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg",
         initialContent:`   <div class="resume-container">
        <!-- Header Section -->
        <div class="header">
            <h1>[Your Name]</h1>
            <p><strong>Email:</strong> your.email@example.com | <strong>Phone:</strong> +123-456-7890</p>
            <p><strong>Website:</strong> www.yourwebsite.com | <strong>LinkedIn:</strong> linkedin.com/in/yourname</p>
        </div>

        <!-- Summary Section -->
        <div class="section">
            <h2>Summary</h2>
            <p>A highly motivated and results-driven [Your Job Title] with [X years] of experience in [specific field/industry]. Adept at [list key skills or accomplishments]. Passionate about delivering innovative solutions and driving impactful results.</p>
        </div>

        <!-- Experience Section -->
        <div class="section">
            <h2>Professional Experience</h2>
            <ul>
                <li>
                    <strong>Job Title</strong> – Company Name, Location <br>
                    <em>Start Date – End Date</em>
                    <ul>
                        <li>Key responsibility or achievement 1</li>
                        <li>Key responsibility or achievement 2</li>
                        <li>Key responsibility or achievement 3</li>
                    </ul>
                </li>
                <li>
                    <strong>Job Title</strong> – Company Name, Location <br>
                    <em>Start Date – End Date</em>
                    <ul>
                        <li>Key responsibility or achievement 1</li>
                        <li>Key responsibility or achievement 2</li>
                        <li>Key responsibility or achievement 3</li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- Education Section -->
        <div class="section">
            <h2>Education</h2>
            <ul>
                <li>
                    <strong>Degree</strong> – University/College Name <br>
                    <em>Year of Graduation</em>
                </li>
                <li>
                    <strong>Additional Certification (if any)</strong> – Institution Name <br>
                    <em>Year of Completion</em>
                </li>
            </ul>
        </div>

        <!-- Skills Section -->
        <div class="section">
            <h2>Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
            </ul>
        </div>

        <!-- Projects Section -->
        <div class="section">
            <h2>Projects</h2>
            <ul>
                <li>
                    <strong>Project Name</strong> – Brief description of the project and your role in it. Highlight specific achievements.
                </li>
                <li>
                    <strong>Project Name</strong> – Brief description of the project and your role in it. Highlight specific achievements.
                </li>
            </ul>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© [Year] [Your Name]. All rights reserved.</p>
        </div>
    </div>`
     },
     {
        id: "cover letter", 
        label: "Cover letter", 
        imageUrl: "/cover-letter.svg",
         initialContent:`  <div class="letter-container">
        <!-- Header Section -->
        <div class="header">
            <p><strong>Your Name</strong></p>
            <p>Your Address</p>
            <p>City, State, ZIP Code</p>
            <p>Email: your.email@example.com | Phone: +123-456-7890</p>
        </div>

        <!-- Date -->
        <div class="header">
            <p><strong>Date:</strong> [Insert Date]</p>
        </div>

        <!-- Recipient Information -->
        <div class="header">
            <p><strong>Recipient Name</strong></p>
            <p>Recipient Position</p>
            <p>Company Name</p>
            <p>Company Address</p>
            <p>City, State, ZIP Code</p>
        </div>

        <!-- Subject -->
        <div class="header">
            <p><strong>Subject:</strong> Application for [Job Title]</p>
        </div>

        <!-- Letter Body -->
        <div class="letter-body">
            <p>Dear [Recipient Name],</p>
            <p>
                I am excited to apply for the [Job Title] position at [Company Name]. With my strong background in [relevant skills or experience], I am eager to bring my expertise to your team and contribute to the continued success of your organization.
            </p>
            <p>
                In my previous role as a [Your Position] at [Previous Company Name], I [mention a key achievement or responsibility that aligns with the job]. Through this experience, I honed my skills in [specific skills], which I believe align with the requirements of this role.
            </p>
            <p>
                [Mention a specific quality of the company that resonates with you and how your skills or values align with the organization.]
            </p>
            <p>
                I am particularly drawn to this role because [highlight why you are interested in this position, such as career growth opportunities, alignment with values, etc.]. I am confident that my [mention key skills or experiences] will enable me to make a meaningful contribution to your team.
            </p>
            <p>
                I would welcome the opportunity to discuss how my skills and experiences align with your needs. Please feel free to contact me at [Your Phone Number] or [Your Email Address] to schedule a conversation. Thank you for considering my application. I look forward to the possibility of contributing to [Company Name]’s success.
            </p>
            <p>Sincerely,</p>
            <div class="signature">
                <p><strong>[Your Name]</strong></p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Enclosure: Resume</p>
        </div>
    </div>`
     },
     {
        id: " letter", 
        label: "Letter", 
        imageUrl: "/letter.svg",
         initialContent:`   <div class="letter-container">
        <!-- Header Section -->
        <div class="header">
            <p><strong>Your Name</strong></p>
            <p>Your Address</p>
            <p>City, State, ZIP Code</p>
            <p>Email: your.email@example.com | Phone: +123-456-7890</p>
        </div>

        <!-- Date -->
        <div class="header">
            <p><strong>Date:</strong> [Insert Date]</p>
        </div>

        <!-- Recipient Information -->
        <div class="header">
            <p><strong>Recipient Name</strong></p>
            <p>Recipient Title (if applicable)</p>
            <p>Recipient Company/Organization (if applicable)</p>
            <p>Recipient Address</p>
            <p>City, State, ZIP Code</p>
        </div>

        <!-- Subject -->
        <div class="header">
            <p><strong>Subject:</strong> [Insert Subject Line]</p>
        </div>

        <!-- Letter Body -->
        <div class="letter-body">
            <p>Dear [Recipient Name],</p>
            <p>
                I hope this message finds you well. I am writing to [state the purpose of the letter clearly, e.g., inquire about, request, express gratitude, etc.]. 
            </p>
            <p>
                [Provide additional details or context. Mention specific points or examples to support your message. Keep the paragraphs concise and focused.]
            </p>
            <p>
                [If applicable, make a specific request or state what action you would like the recipient to take.]
            </p>
            <p>
                Thank you for your time and consideration. I look forward to your response. Please feel free to contact me at [Your Phone Number] or [Your Email Address] if you have any questions or need further information.
            </p>
            <p>Sincerely,</p>
            <div class="signature">
                <p><strong>[Your Name]</strong></p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Enclosure (if applicable): [List of enclosed documents]</p>
        </div>
    </div>`
     },
    ]