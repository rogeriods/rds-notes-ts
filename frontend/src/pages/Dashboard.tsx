import React, { useEffect, useState } from 'react';
import api from '../services/api';
import NoteCard, { Note } from '../components/NoteCard';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  async function fetchNotes() {
    const { data } = await api.get('/notes');
    setNotes(data);
  }

  async function handleDelete(id: string) {
    try {
      await api.delete(`/notes/${id}`);
      await fetchNotes();
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {notes.map((note: Note) => (
        <NoteCard key={note._id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Dashboard;
