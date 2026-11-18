import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/90 px-4 backdrop-blur md:hidden">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />
      <span className="font-serif text-lg font-semibold">Lumen</span>
    </header>
  );
}
