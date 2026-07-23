import "./bitcore-demo.css";

export default function BitcoreDemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="bitcoreDemoRoot">{children}</div>;
}
