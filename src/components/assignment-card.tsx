import { CalendarClock, CheckCircle2, Undo2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { daysUntil, formatDate } from "@/lib/format";
import type { Assignment } from "@/types";

interface AssignmentCardProps {
  assignment: Assignment;
  onToggle: (id: number) => void;
}

function StatusBadge({ assignment }: { assignment: Assignment }) {
  if (assignment.completed) return <Badge className="bg-primary text-primary-foreground">Completed</Badge>;
  const days = daysUntil(assignment.dueDate);
  if (days < 0) return <Badge variant="destructive">Overdue</Badge>;
  if (days <= 3) return <Badge className="bg-accent text-accent-foreground">Due soon</Badge>;
  return <Badge variant="outline">Pending</Badge>;
}

export function AssignmentCard({ assignment, onToggle }: AssignmentCardProps) {
  return (
    <Card className={assignment.completed ? "bg-muted/50" : undefined}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className={assignment.completed ? "text-muted-foreground line-through" : undefined}>
            {assignment.title}
          </CardTitle>
          <StatusBadge assignment={assignment} />
        </div>
        <CardDescription>{assignment.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center text-sm text-muted-foreground">
          <CalendarClock className="mr-1.5 size-4" />
          Due {formatDate(assignment.dueDate)}
        </span>
        <Button
          size="sm"
          variant={assignment.completed ? "outline" : "default"}
          onClick={() => onToggle(assignment.id)}
        >
          {assignment.completed ? <Undo2 /> : <CheckCircle2 />}
          {assignment.completed ? "Mark as pending" : "Mark as completed"}
        </Button>
      </CardContent>
    </Card>
  );
}
