import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = { title: "About | Lumen" };

const features = [
  { title: "Topics", text: "A categorised syllabus with a status and progress bar for every topic." },
  { title: "Assignments", text: "Deadlines, status labels and a one-click way to mark work as completed." },
  { title: "Dashboard", text: "Totals, recent topics and category progress gathered on one screen." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Lumen"
        description="A small learning platform that helps students see what to study, what is due and how far they have come."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{f.title}</CardTitle>
              <CardDescription>{f.text}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Platform notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Built with Next.js App Router, React, TypeScript, Tailwind CSS and shadcn/ui.</p>
          <p>Data is kept in local files and in React state, so assignment changes reset when you reload the page.</p>
          <p>Created as a coursework project for the React and Next.js module.</p>
        </CardContent>
      </Card>
    </>
  );
}
