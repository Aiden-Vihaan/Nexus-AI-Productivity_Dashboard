# NEXUS Planning Graph

The Planning Graph represents the relationship between intention and execution.

## Nodes

- Goal
- Project
- Task

## Relationships

- Goal SUPPORTS Project
- Project CONTAINS Task
- Task SUBTASK_OF Task

## Example

```text
Goal
 ↓
Project
 ↓
Task
 ↓
Subtask
