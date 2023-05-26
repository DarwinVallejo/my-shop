import Navbar from "../navbar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 w-screen">{children}</main>
    </>
  );
}
