import { PageHeader } from "@/components/page-header";
import { topics } from "@/data";
import { TopicsView } from "./topics-view";

export const metadata = { title: "Topics | Lumen" };

export default function TopicsPage() {
  return (
    <>
      <PageHeader title="Learning topics" description="Everything on your syllabus, with category, progress and status." />
      <TopicsView topics={topics} />
    </>
  );
}
