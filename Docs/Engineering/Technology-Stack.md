# NEXUS — Technology Stack

**Version:** 0.1

---

## 1. Frontend

### Next.js

Used for:

- application routing,
- rendering,
- frontend/backend integration,
- deployment.

---

### React

Used as the primary UI framework.

---

### TypeScript

TypeScript is mandatory throughout the application.

The goal is to minimize runtime errors through strong domain typing.

---

## 2. Styling

### Tailwind CSS

Used for:

- layout,
- spacing,
- responsive behavior,
- design tokens.

---

### Component System

Reusable UI primitives should be created around the NEXUS design system.

---

## 3. Backend

The initial backend will use the application's server-side architecture.

Business logic must remain separated from UI components.

---

## 4. Database

PostgreSQL is the primary relational database.

---

## 5. ORM

Prisma provides:

- schema management,
- migrations,
- type-safe database access.

---

## 6. Validation

Zod validates:

- API input,
- tool parameters,
- user-generated data,
- AI-generated structured output.

---

## 7. State Management

Zustand is used for client-side UI state where required.

Server state should remain separate.

---

## 8. Testing

Unit tests:

Vitest

End-to-end tests:

Playwright

---

## 9. AI

The AI layer must use a provider abstraction.

The application should not couple core business logic directly to one AI provider.

---

## 10. Principle

Technology should support the architecture rather than become the architecture.
