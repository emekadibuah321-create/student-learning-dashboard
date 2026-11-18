import type { Assignment, Student, Topic } from "@/types";

export const student: Student = {
  name: "Nnaemeka Adibuah",
  email: "nnaemeka@example.com",
  cohort: "Frontend Engineering, Cohort 4",
  initials: "NA",
};

export const topics: Topic[] = [
  { id: 1, title: "Components and props", description: "Build reusable UI pieces and pass data down with typed props.", category: "React", status: "completed", progress: 100, addedOn: "2026-10-12" },
  { id: 2, title: "State with useState", description: "Keep interactive values in state and update them from event handlers.", category: "React", status: "completed", progress: 100, addedOn: "2026-10-15" },
  { id: 3, title: "App Router and layouts", description: "File-based routing, nested layouts and shared navigation.", category: "Next.js", status: "in-progress", progress: 70, addedOn: "2026-10-27" },
  { id: 4, title: "Server and Client Components", description: "Decide where code runs and when to add the use client directive.", category: "Next.js", status: "in-progress", progress: 45, addedOn: "2026-11-02" },
  { id: 5, title: "Typing props with interfaces", description: "Describe component contracts with TypeScript interfaces and unions.", category: "TypeScript", status: "in-progress", progress: 60, addedOn: "2026-11-05" },
  { id: 6, title: "Tailwind utility styling", description: "Compose responsive layouts and themes with utility classes.", category: "Styling", status: "completed", progress: 100, addedOn: "2026-11-08" },
  { id: 7, title: "Git and GitHub workflow", description: "Commit in small steps, push to a remote and read the history.", category: "Tooling", status: "not-started", progress: 0, addedOn: "2026-11-14" },
];

export const assignments: Assignment[] = [
  { id: 1, title: "Build a reusable stat card", description: "Create a card that takes title, value, description and icon as props.", dueDate: "2026-11-12", completed: true },
  { id: 2, title: "Topic list with filters", description: "Render a list of topics with map() and filter them by category.", dueDate: "2026-11-16", completed: true },
  { id: 3, title: "Shared navigation layout", description: "Add a layout with a sidebar and Link-based navigation across pages.", dueDate: "2026-11-20", completed: false },
  { id: 4, title: "Server vs client write-up", description: "Explain which of your components are client components and why.", dueDate: "2026-11-25", completed: false },
  { id: 5, title: "Push the dashboard to GitHub", description: "Create the repository, commit progressively and push the project.", dueDate: "2026-11-30", completed: false },
  { id: 6, title: "Responsive polish pass", description: "Check every page at phone, tablet and desktop widths.", dueDate: "2026-11-14", completed: false },
];
