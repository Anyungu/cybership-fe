import Sidenav from "./SideNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100dvh)]">
      <Sidenav />
      <div className="flex-1 bg-gray-200 h-[calc(100dvh)] overflow-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {children}
      </div>
    </div>
  );
}
