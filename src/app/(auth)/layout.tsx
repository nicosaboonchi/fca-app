export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-svh items-center justify-center p-6 md:p-10 bg-gray-200">
      {children}
    </div>
  );
}
