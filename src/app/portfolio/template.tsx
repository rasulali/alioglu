import BackNav from "@/components/backNav";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BackNav />
      {children}
    </div>)
}
