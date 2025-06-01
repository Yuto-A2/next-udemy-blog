
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-screen flex items-center justify-center p-4">
            {children}
        </div>
    )
}
