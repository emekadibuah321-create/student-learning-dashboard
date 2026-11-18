import Link from "next/link";
import { BookOpen, CheckCheck, ClipboardList, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatCard } from "@/components/stat-card";
import { TopicStatusBadge } from "@/components/status-badge";
import { assignments, student, topics } from "@/data";
import { formatDate } from "@/lib/format";

export default function DashboardPage() {
  const firstName = student.name.split(" ")[0];
  const averageProgress = Math.round(topics.reduce((sum, t) => sum + t.progress, 0) / topics.length);
  const completedAssignments = assignments.filter((a) => a.completed).length;
  const recentTopics = [...topics].sort((a, b) => b.addedOn.localeCompare(a.addedOn)).slice(0, 3);
  const upcoming = assignments
    .filter((a) => !a.completed)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 4);
  const categories = [...new Set(topics.map((t) => t.category))];

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-6 rounded-xl bg-sidebar p-6 text-sidebar-foreground md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <h1 className="text-3xl font-semibold md:text-4xl">Welcome back, {firstName}</h1>
          <p className="mt-2 max-w-md text-sidebar-foreground/80">
            You are {averageProgress}% through your topics. Pick up where you left off.
          </p>
          <Button asChild className="mt-4 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
            <Link href="/assignments">Go to assignments</Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-sidebar-accent p-4">
          <Avatar className="size-14">
            <AvatarFallback className="bg-sidebar-primary text-lg font-semibold text-sidebar-primary-foreground">
              {student.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{student.name}</p>
            <p className="text-sm text-sidebar-foreground/70">{student.email}</p>
            <Badge className="mt-1.5 bg-sidebar-primary text-sidebar-primary-foreground">{student.cohort}</Badge>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Learning topics" value={topics.length} description="Across 5 categories" icon={BookOpen} />
        <StatCard title="Assignments" value={assignments.length} description="Set this term" icon={ClipboardList} />
        <StatCard
          title="Assignments done"
          value={`${completedAssignments}/${assignments.length}`}
          description="Marked as completed"
          icon={CheckCheck}
        />
        <StatCard title="Average progress" value={`${averageProgress}%`} description="Across all topics" icon={TrendingUp} />
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Recently added topics</CardTitle>
            <CardDescription>The newest material on your syllabus.</CardDescription>
          </CardHeader>
          <CardContent>
            {recentTopics.map((topic, index) => (
              <div key={topic.id}>
                {index > 0 && <Separator className="my-4" />}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{topic.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {topic.category} · added {formatDate(topic.addedOn)}
                    </p>
                  </div>
                  <TopicStatusBadge status={topic.status} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Learning progress</CardTitle>
            <CardDescription>Average completion by category.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {categories.map((category) => {
              const group = topics.filter((t) => t.category === category);
              const value = Math.round(group.reduce((s, t) => s + t.progress, 0) / group.length);
              return (
                <div key={category}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{category}</span>
                    <span className="text-muted-foreground">{value}%</span>
                  </div>
                  <Progress value={value} />
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Upcoming deadlines</CardTitle>
          <CardDescription>Your next pending assignments, soonest first.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assignment</TableHead>
                <TableHead className="text-right">Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcoming.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.title}</TableCell>
                  <TableCell className="text-right">{formatDate(a.dueDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
