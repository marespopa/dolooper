export const DEFAULT_TEMPLATES = {
  feature: {
    title: '✨ Feature Development: [Feature Name]',
    description: `## 📈 Quick Summary

### 🎯 Objective
- Detail what this feature aims to achieve and its expected impact.

### 📖 User Stories
- As a [type of user], I want [some goal] so that [some reason].

### 🔧 Technical Specifications
- Include technical requirements and constraints.

### 🛠 Implementation Steps
1. Define the feature's UI/UX.
2. Develop the backend logic.
3. Integrate the frontend with the backend.

### 🔗 Dependencies
- External APIs or services required.
- Internal modules or components.

### ⏳ Time Estimate
- [X] hours/days

### 🏷 Priority
- High/Medium/Low

### 📝 Notes
- Any known issues or challenges.
`,
  },
  bug: {
    title: '🐞 Bug Fix: [Bug Title] ',
    description: `## 🚨 Problem Statement

### 🎯 Objective
- Clearly define the bug and the expected correct behavior.

### 🕵️‍♂️ Reproduction Steps
1. Step one to reproduce the bug.
2. Step two to reproduce the bug.

### 🛠 Affected Areas
- List the parts of the application affected by this bug.

### 💡 Proposed Fix
- Outline the approach to fix the bug.

### 🔗 Dependencies
- Note if the fix is dependent on any other tasks or updates.

### ⏳ Time Estimate
- [X] hours

### 🏷 Priority
- High/Medium/Low

### 📝 Notes
- Any temporary workarounds or additional context.`,
  },
  code_review: {
    title: '🔍 Code Review: [Feature/Bugfix Name]',
    description: `## 📚 Overview

### 🎯 Objective
- Summarize the purpose of the code changes and the problem it solves.

### 🛠 Changes Made
- List the major changes made in the codebase.

### 📖 Instructions for Reviewers
1. Key areas to focus on during the review.
2. Specific concerns or areas where feedback is sought.

### 🚀 Testing
- Outline the testing approach and any specific tests that were added.

### 🔗 Dependencies
- Mention any dependencies on other code changes or external systems.

### ⏳ Time Estimate for Review
- [X] hours

### 🏷 Priority
- High/Medium/Low

### 📝 Notes
- Additional information for reviewers, such as context or reference materials.`,
  },
  generic: {
    title: '📌 Task Title',
    description: `## 🚀 Objective & Requirements
Briefly describe the main goal of this task and list specific requirements or functionalities needed.

## ⏰ Timeline
- **Deadline:** [Insert deadline]

## 🔗 Links
- [Link 1](URL)
- [Link 2](URL)

## 📝 Additional Information
Provide any additional context, resources, or references relevant to the task.`,
  },
}
