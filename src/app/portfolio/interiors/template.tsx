import BackNav from "@/components/backNav";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <BackNav href="/portfolio" />
      {children}
    </main>)
}
