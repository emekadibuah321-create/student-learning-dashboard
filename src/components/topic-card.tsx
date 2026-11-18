import { CalendarPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TopicStatusBadge } from "@/components/status-badge";
import { formatDate } from "@/lib/format";
import type { Topic } from "@/types";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between gap-2">
          <Badge variant="secondary">{topic.category}</Badge>
          <TopicStatusBadge status={topic.status} />
        </div>
        <CardTitle className="font-serif text-xl">{topic.title}</CardTitle>
        <CardDescription>{topic.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-1 flex justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span>{topic.progress}%</span>
        </div>
        <Progress value={topic.progress} />
      </CardContent>
      <CardFooter className="mt-auto text-xs text-muted-foreground">
        <CalendarPlus className="mr-1.5 size-3.5" />
        Added {formatDate(topic.addedOn)}
      </CardFooter>
    </Card>
  );
}
