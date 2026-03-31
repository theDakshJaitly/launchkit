import { DocsNavbar } from "@/components/sections/mex/docs/DocsNavbar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="min-h-screen pb-20 flex flex-col pt-0"
      style={{
        background: "var(--mex-bg-1)",
        color: "var(--mex-text)",
      }}
    >
      <DocsNavbar />
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}
