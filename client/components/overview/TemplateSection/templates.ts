import { TemplateVariant } from './TemplateSection.component'

export const DEFAULT_TEMPLATES = {
  feature: {
    description: `# ✨ Feature: [Feature Name]

## 📖 Overview
A concise description of what this feature is and its expected impact. Mention the key user benefit or problem it solves.

### 🎯 Goals
- Main goal of the feature.
- Secondary goals or benefits, if any.

### Priority 🔝
🔴 High
🟡 Medium
🟢 Low

### Due Date ⌛
dd.mm.yyyy

## 📋 Requirements
Briefly list the core requirements or conditions this feature must meet. Detailed requirements can be managed as subtasks.

## 🔗 Links
- **Project Tracking:** [Link_to_project_management_tool_or_ticket](#)
- **Related Documents:** [Link_to_related_documents_or_resources](#)
- **Design Resources:** [Link_to_design_resources_or_assets](#)
- **API Documentation:** [Link_to_API_documentation](#)
- **Other Relevant Links:** [Miscellaneous_links](#)

## 🛠 Development Steps
Outline the major steps or phases in development. Use subtasks to manage detailed tasks and changes.

1. General step 1
2. General step 2
3. Add more as needed

## 🧪 Testing Strategy
### 🔍 Unit Tests
Key areas to cover.

### ⚙️ Integration Tests
Important interactions with other features or services.

### 👥 User Acceptance Testing (UAT)
Criteria for UAT and key user scenarios.

## 🔗 Dependencies
List any internal or external dependencies that could affect this feature's development timeline.

## ⏳ Time Estimate
Provide a rough estimate for scheduling purposes. Update as the feature progresses.

## 📝 Notes
Include any additional notes, open questions, or considerations here. This section can be updated as the feature development evolves.`,
  },
  bug: {
    description: `# 🐞 Bug Fix: [Bug Title]

## 🚨 Overview
Briefly describe the issue.

### Priority 🔝
🔴 High
🟡 Medium
🟢 Low

### Due Date ⌛
dd.mm.yyyy

### 📍 Occurrence
Specify the part(s) of the app affected.

### 🕵️ Steps to Reproduce
1. First step
2. Second step
- **Frequency:** Always? Sometimes?

### 🎯 Expected vs. Actual
- **Expected:** What should happen?
- **Actual:** What actually happens?

### 📸 Attachments
- **Screenshots/Videos:** [Link or attach]
- **Logs:** [Link or attach]

### 🛠 Suggested Fix (If any)
Brief idea on fixing it (optional).

## 🔗 Useful Links
- [Related_Docs](#)
- [Similar_Issues](#)`,
  },
  code_review: {
    description: `# 🔍 Code Review: [Feature/Bugfix Name]

## 🛠 Functionality
- [ ] Does the code accomplish the task’s objective?

## 📏 Best Practices
- [ ] Is the code clean and following best practices?

## 🚀 Performance
- [ ] Any potential performance impacts?

## 🧪 Testing
- [ ] Is the task adequately tested?`,
  },
  generic: {
    description: `# 📝 Task Title

## Goal 🎯
One-sentence summary of what you want to achieve.

## Priority 🔝
🔴 High
🟡 Medium
🟢 Low

## Due Date ⌛
dd.mm.yyyy

## Steps 🗒️
- Step 1
- Step 2`,
  },
  todo: {
    description: `# To-Do List ✏️
- ⬜ Task 1
- ⬜ Task 2
- ⬜ Task 3
- ⬜ Task 4
- ⬜ Task 5
- ⬜ Task 6

## Priority Tasks 🎯
- ⬜ High Priority Task
- ⬜ Another High Priority Task

## Completed Tasks 💯
- ✅ Completed Task 1
- ✅ Completed Task 2`,
  },
  blank: {
    description: ``,
  },
  tutorial: {
    description: `# Tutorial 💻

Software engineering demands intense focus. Dolooper helps you cut through distractions and achieve flow state for complex problem-solving and coding tasks.

**Power-up Your Workflow with Dolooper**

1.  **Choose a Template (or Go Blank!)** 🎨

      * Dolooper provides pre-made templates to give your coding sessions structure:
          * **Generic:** Start with a general task outline.
          * **Feature:** Plan the development of a new feature.
          * **Bug:**  Outline steps to reproduce and fix a bug. 
          * **Code Review:** Create a checklist for thorough code analysis.
          * **Blank:** Need maximum flexibility? Start with a blank slate.

2.  **Define Your Task** 🎯

    * **Plan & Write Section:**
        * Briefly outline the task at hand. What specific problem are you solving or feature are you building?
        * Use Markdown to add basic formatting if needed (headings, code blocks, etc.).

3. **Break It Down** 🔨

    * **Subtasks Section:**
        * Divide the task into smaller, manageable steps.
        * Prioritize subtasks if the order of completion matters.
        * If you have an existing list of steps in the textarea, select it and you can then use the "Convert to Subtasks" option to quickly move it into subtasks.
        * If you select a markdown list, in the editor, you get the option to automatically create a subtask.
4. **Minimize Distractions** 🤫

    * **Timer:**  Set Dolooper's built-in timer for focused work blocks. Experiment with different durations to find what works for you!
    * **Close the Rest:** Before starting your timer, temporarily minimize anything that could pull your attention.

5. **Click on "Choose a template" to get started** ✨ `,
  },
}

export const TEMPLATES_WITH_DATES: Array<TemplateVariant> = [
  'generic',
  'feature',
  'bug',
]
