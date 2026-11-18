"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TopicCard } from "@/components/topic-card";
import type { Topic, TopicStatus } from "@/types";

type Filter = "all" | TopicStatus;

interface TopicsViewProps {
  topics: Topic[];
}

export function TopicsView({ topics }: TopicsViewProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? topics : topics.filter((t) => t.status === filter);

  return (
    <div className="space-y-6">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
        <TabsList>
          <TabsTrigger value="all">All ({topics.length})</TabsTrigger>
          <TabsTrigger value="in-progress">In progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="not-started">Not started</TabsTrigger>
        </TabsList>
      </Tabs>

      {visible.length === 0 ? (
        <Alert>
          <AlertTitle>No topics here yet</AlertTitle>
          <AlertDescription>Choose another filter to see the rest of your syllabus.</AlertDescription>
        </Alert>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
}
