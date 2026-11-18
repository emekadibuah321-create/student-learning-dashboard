import { PageHeader } from "@/components/page-header";
import { assignments } from "@/data";
import { AssignmentsView } from "./assignments-view";

export const metadata = { title: "Assignments | Lumen" };

export default function AssignmentsPage() {
  return (
    <>
      <PageHeader title="Assignments" description="Track deadlines and mark work as completed when you submit it." />
      <AssignmentsView initialAssignments={assignments} />
    </>
  );
}
