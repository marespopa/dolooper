export const DEFAULT_TEMPLATES = {
  feature: {
    title: '✨ Feature: [Feature Name]',
    description: `## 📖 Overview
A concise description of what this feature is and its expected impact. Mention the key user benefit or problem it solves.

### 🎯 Goals
- Main goal of the feature.
- Secondary goals or benefits, if any.

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

1. [General step 1]
2. [General step 2]
3. [Add more as needed]

## 🧪 Testing Strategy
- **🔍 Unit Tests:** Key areas to cover.
- **⚙️ Integration Tests:** Important interactions with other features or services.
- **👥 User Acceptance Testing (UAT):** Criteria for UAT and key user scenarios.

## 🔗 Dependencies
List any internal or external dependencies that could affect this feature's development timeline.

## ⏳ Time Estimate
Provide a rough estimate for scheduling purposes. Update as the feature progresses.

## 📝 Notes
Include any additional notes, open questions, or considerations here. This section can be updated as the feature development evolves.`,
  },
  bug: {
    title: '🐞 Bug Fix: [Bug Title] ',
    description: `## 🚨 Overview
Briefly describe the issue.

## 📍 Occurrence
  Specify the part(s) of the app affected.

## 🕵️ Steps to Reproduce
1. First step
2. Second step
- **Frequency:** Always? Sometimes?

## 🎯 Expected vs. Actual
- **Expected:** What should happen?
- **Actual:** What actually happens?

## 📸 Attachments
- **Screenshots/Videos:** [Link or attach]
- **Logs:** [Link or attach]

## 🛠 Suggested Fix (If any)
- **Your thoughts:** Brief idea on fixing it (optional).

## 🔗 Useful Links
- [Related_Docs](#)
- [Similar_Issues](#)`,
  },
  daily: {
    title: '🌅 Daily Stand-up Update',
    description: `## ✅ Yesterday's Achievements
- Completed task 1
- Reviewed PR from colleague

## 🎯 Today's Goals
- Start working on feature X
- Fix bug reported by QA

## ❌ Blockers
- Awaiting design assets for feature Y
- Need clarification on API endpoint

## 🔗 Links
- [Yesterday's_PR](#)
- [Bug_Report](#)`,
  },
  code_review: {
    title: '🔍 Code Review: [Feature/Bugfix Name]',
    description: `## 🛠 Functionality
- [ ] Does the code accomplish the task’s objective?

## 📏 Best Practices
- [ ] Is the code clean and following best practices?

## 🚀 Performance
- [ ] Any potential performance impacts?

## 🧪 Testing
- [ ] Is the task adequately tested?`,
  },
  generic: {
    title: '📌 Task Title',
    description: `## 📖 Overview
A brief description of what this task entails and its purpose.

## 🎯 Objective
Clearly state what success looks like for this task.

## ⏱ Estimated Time
Rough estimate to complete.

## 📌 Steps to Completion
List the key steps in order, if applicable.

## 🔗 Resources
- [Documentation](#)
- [Design_Mockups](#)
- [Relevant_Tickets](#)`,
  },
}
