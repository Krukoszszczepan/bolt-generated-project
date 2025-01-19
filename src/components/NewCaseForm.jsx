import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewCaseForm() {
  const [formData, setFormData] = useState({
    case_number: '',
    title: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/cases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        navigate(`/cases/${data.id}`);
      }
    } catch (err) {
      console.error('Error creating case:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Nowa Sprawa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Numer Sprawy</label>
          <input
            type="text"
            value={formData.case_number}
            onChange={(e) => setFormData({...formData, case_number: e.target.value})}
            className="input-field"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1">Tytuł</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="input-field"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1">Opis</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="input-field min-h-[150px]"
            required
          />
        </div>
        
        <button type="submit" className="btn-primary">
          Utwórz Sprawę
        </button>
      </form>
    </div>
  );
}
