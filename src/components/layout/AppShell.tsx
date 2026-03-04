"use client";

interface AppShellProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      <aside className="w-64 h-full bg-white border-r border-gray-200 overflow-y-auto shrink-0">
        {sidebar}
      </aside>
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}
