import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName:"Sanket", lastName: "S"};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
          {children}
    </main>
  );
}
