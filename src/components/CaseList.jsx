import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CaseList() {
  const [cases, setCases] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => setCases(data))
      .catch(err => console.error(err));
  }, []);

  const filteredCases = cases.filter(caseItem => 
    caseItem.case_number.toLowerCase().includes(search.toLowerCase()) ||
    caseItem.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Lista Spraw</h2>
        <input
          type="text"
          placeholder="Wyszukaj sprawę..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field max-w-md"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCases.map(caseItem => (
          <Link
            key={caseItem.id}
            to={`/cases/${caseItem.id}`}
            className="card hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{caseItem.case_number}</h3>
            <p className="text-gray-600">{caseItem.title}</p>
            <p className="text-sm text-gray-500 mt-2">
              Utworzono: {new Date(caseItem.created_at).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
