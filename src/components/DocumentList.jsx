export default function DocumentList({ documents }) {
  if (documents.length === 0) {
    return <p className="text-gray-500">Brak dokumentów dla tej sprawy.</p>;
  }

  return (
    <div className="space-y-2">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <p className="font-medium">{doc.file_name}</p>
            <p className="text-sm text-gray-500">
              Dodano: {new Date(doc.uploaded_at).toLocaleString()}
            </p>
          </div>
          <a
            href={`/uploads/${doc.file_path}`}
            download
            className="btn-primary text-sm"
          >
            Pobierz
          </a>
        </div>
      ))}
    </div>
  );
}
