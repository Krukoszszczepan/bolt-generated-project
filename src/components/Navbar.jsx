export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">System Zarządzania Aktami</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-200">Lista Spraw</a>
          <a href="/cases/new" className="hover:text-gray-200">Nowa Sprawa</a>
        </div>
      </div>
    </nav>
  );
}
