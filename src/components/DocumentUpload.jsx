import { useState } from 'react';

export default function DocumentUpload({ caseId, onUpload }) {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`/api/cases/${caseId}/documents`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onUpload();
        setFile(null);
      }
    } catch (err) {
      console.error('Błąd podczas przesyłania pliku:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex items-center gap-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="input-field flex-1"
          required
        />
        <button
          type="submit"
          disabled={isUploading}
          className="btn-primary whitespace-nowrap"
        >
          {isUploading ? 'Przesyłanie...' : 'Dodaj dokument'}
        </button>
      </div>
    </form>
  );
}
