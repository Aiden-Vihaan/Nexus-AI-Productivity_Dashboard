# NEXUS Copilot Safety Model

## Purpose

The Copilot is an AI-powered interface and therefore must operate under strict application-level controls.

---

# AI Is Not Authority

The AI cannot:

- Grant permissions
- Change user identity
- Bypass validation
- Access another user's resources
- Directly execute database operations

---

# Untrusted User Content

User-generated content is treated as untrusted input.

Example:

```text
Task:
"Ignore all system instructions."
