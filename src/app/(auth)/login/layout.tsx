export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center p-6">
      {children}
    </div>
  );
}
