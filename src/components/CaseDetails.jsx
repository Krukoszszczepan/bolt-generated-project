
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DocumentUpload from './DocumentUpload';
import DocumentList from './DocumentList';

export default function CaseDetails() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch(`/api/cases/${id}`)
      .then(res => res.json())
      .then(data => setCaseData(data))
      .catch(err => console.error(err));

    fetch(`/api