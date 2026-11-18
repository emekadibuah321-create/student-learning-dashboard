import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
}

export function StatCard({ title, value, description, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardDescription className="text-sm font-medium">{title}</CardDescription>
        <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon className="size-5" />
        </span>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-3xl">{value}</CardTitle>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
