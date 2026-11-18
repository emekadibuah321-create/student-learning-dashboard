"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AssignmentCard } from "@/components/assignment-card";
import { daysUntil } from "@/lib/format";
import type { Assignment } from "@/types";

interface AssignmentsViewProps {
  initialAssignments: Assignment[];
}

export function AssignmentsView({ initialAssignments }: AssignmentsViewProps) {
  const [items, setItems] = useState<Assignment[]>(initialAssignments);

  function toggleCompleted(id: number) {
    setItems((current) => current.map((a) => (a.id === id ? { ...a, completed: !a.completed } : a)));
  }

  const done = items.filter((a) => a.completed).length;
  const overdue = items.filter((a) => !a.completed && daysUntil(a.dueDate) < 0).length;

  const renderList = (list: Assignment[]) =>
    list.length === 0 ? (
      <p className="py-8 text-center text-muted-foreground">Nothing here. Nice and tidy.</p>
    ) : (
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((a) => (
          <AssignmentCard key={a.id} assignment={a} onToggle={toggleCompleted} />
        ))}
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-card p-4">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium">
            {done} of {items.length} completed
          </span>
          <span className="text-muted-foreground">{Math.round((done / items.length) * 100)}%</span>
        </div>
        <Progress value={(done / items.length) * 100} />
      </div>

      {overdue > 0 && (
        <Alert variant="destructive">
          <AlertTriangle />
          <AlertTitle>
            {overdue} overdue {overdue === 1 ? "assignment" : "assignments"}
          </AlertTitle>
          <AlertDescription>Finish these first, then mark them as completed.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all">{renderList(items)}</TabsContent>
        <TabsContent value="pending">{renderList(items.filter((a) => !a.completed))}</TabsContent>
        <TabsContent value="completed">{renderList(items.filter((a) => a.completed))}</TabsContent>
      </Tabs>
    </div>
  );
}
