# NEXUS Copilot Session Architecture

## Overview

A Copilot session represents a bounded conversational interaction between the user and NEXUS.

---

# Session Structure

Conceptually:

```json
{
  "sessionId": "session_123",
  "userId": "user_123",
  "messages": [],
  "activeContext": {},
  "lastIntent": {},
  "createdAt": "...",
  "updatedAt": "..."
}
