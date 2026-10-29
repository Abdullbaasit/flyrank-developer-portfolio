# FE-03 — AI-Assisted Workflow Drill

**Project:** FlyRank Developer Portfolio  
**Feature:** Responsive Contact Form  
**Technology Stack:** Next.js, React, TypeScript, Tailwind CSS  
**Branches:** `fe03-vague` and `fe03-engineered`

## 1. Objective

The objective of this exercise was to compare two AI-assisted development approaches: a vague prompt and a structured engineering prompt. I selected a responsive contact form for my developer portfolio to evaluate how prompt quality affects code correctness, accessibility, edge-case handling, and the effort required to review AI-generated code.

## 2. Round 1 — Vague Prompt

My initial instruction to Cursor was: "Build a contact form for my developer portfolio."

Without sufficient project context, Cursor proposed a standalone HTML and JavaScript implementation rather than integrating the feature into my existing Next.js application.

During code review, I identified an actual issue: the JavaScript attempted to display field-specific validation errors using error elements that were missing from the generated HTML. Consequently, the proposed validation feedback was incomplete.

Cursor also encountered storage-related problems and could not successfully write the implementation into my project. Therefore, Round 1 did not produce a verified working feature.

## 3. Round 2 — Engineered Prompt

For the second approach, I specified the existing Next.js App Router architecture, TypeScript, Tailwind CSS, reusable components, responsive design, and accessibility requirements.

I defined four required fields: name, email, subject, and message. I also required email-format validation, a minimum 10-character message, field-specific errors, keyboard accessibility, and clear demo behavior without falsely claiming email delivery.

I instructed the AI to inspect existing files, explain its implementation plan, and verify the result.

However, I reached my Cursor usage limit before completing the implementation. I continued using ChatGPT for engineering guidance and VS Code for manual editing.

## 4. Testing and Verification

During development, I encountered damaged dependencies, insufficient disk space, missing Tailwind configuration, and a native Next.js compiler problem.

After troubleshooting, ESLint and TypeScript checks passed, and the application built successfully using Webpack.

Initial browser testing revealed failures in empty-form submission and invalid-email validation. After further investigation and changes, I repeated the tests.

All six manual browser tests passed:

- Empty-form submission
- Invalid-email validation
- Short-message validation
- Valid demo submission
- Keyboard navigation
- Mobile responsiveness

## 5. Comparison and Reflection

Round 1 required more architectural review because the vague prompt left implementation details unspecified. Round 2 established clearer expectations for correctness, accessibility, edge cases, and verification.

The main lesson was that AI-generated code requires human judgment, testing, and project-specific constraints. A successful build alone does not guarantee correct functionality.

This exercise strengthened my debugging, prompt engineering, code-review, and verification skills while demonstrating the importance of accurately documenting AI assistance and development limitations.