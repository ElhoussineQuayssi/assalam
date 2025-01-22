export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Add admin navigation here */}
      {children}
    </div>
  );
}