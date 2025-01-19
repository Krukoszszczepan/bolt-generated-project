// Dodaj nowe endpointy do istniejącego server.js
app.get('/api/cases/:id', async (req, res) => {
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM cases WHERE id = ?',
      args: [req.params.id]
    });
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sprawa nie znaleziona' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/cases/:id/documents', async (req, res) => {
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM documents WHERE case_id = ? ORDER BY uploaded_at DESC',
      args: [req.params.id]
    });
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
