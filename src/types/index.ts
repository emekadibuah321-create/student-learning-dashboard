export type TopicStatus = "not-started" | "in-progress" | "completed";

export interface Topic {
  id: number;
  title: string;
  description: string;
  category: "React" | "Next.js" | "TypeScript" | "Styling" | "Tooling";
  status: TopicStatus;
  progress: number; // 0-100
  addedOn: string; // ISO date
}

export interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: string; // ISO date
  completed: boolean;
}

export interface Student {
  name: string;
  email: string;
  cohort: string;
  initials: string;
}
