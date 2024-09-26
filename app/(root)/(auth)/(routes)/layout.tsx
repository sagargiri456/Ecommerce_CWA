export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow flex items-center justify-center p-6">
                {children}
            </div>
        </div>
    )
}