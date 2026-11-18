import { Badge } from "@/components/ui/badge";
import type { TopicStatus } from "@/types";

const topicLabels: Record<TopicStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
};

export function TopicStatusBadge({ status }: { status: TopicStatus }) {
  if (status === "completed") return <Badge className="bg-primary text-primary-foreground">{topicLabels[status]}</Badge>;
  if (status === "in-progress") return <Badge className="bg-accent text-accent-foreground">{topicLabels[status]}</Badge>;
  return <Badge variant="outline">{topicLabels[status]}</Badge>;
}
