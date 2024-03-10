import { getCurrentDate } from 'utils/functions'

const currentDate = getCurrentDate() // MM/DD/YYYY

export const DEFAULT_TEMPLATES = {
  feature: {
    title: '✨ Feature: [Feature Name]',
    description: `## Overview

### 🎯 Goal
What does this feature aim to achieve?

### ✅ Key Requirements
- Requirement 1: Brief description
- Requirement 2: Brief description

### 🛠 Implementation Steps
1. **Step 1:** Short description
2. **Step 2:** Short description

### 🔍 Technical Considerations
Any significant technical considerations or decisions?

### 🚦 Dependencies
List any critical internal or external dependencies.

### ⏳ Estimated Effort
Rough time estimate for completion.

### 📊 Impact & Metrics
How will we measure success?

### 📅 Milestones
- **Start Date:** ${currentDate}
- **End Date:** ${currentDate}

### 🚀 Launch Plan
High-level overview of rollout strategy.

### 📝 Notes
Any additional notes or important concerns.`,
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
- **Deadline:** ${currentDate}

## 🔗 Links
- [Link 1](URL)
- [Link 2](URL)

## 📝 Additional Information
Provide any additional context, resources, or references relevant to the task.`,
  },
}
