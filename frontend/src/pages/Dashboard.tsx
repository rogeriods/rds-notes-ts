import React, { useEffect, useState } from 'react';
import api from '../services/api';
import NoteCard, { Note } from '../components/NoteCard';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await api.get('/notes');
      setNotes(data);
    };
    fetchNotes();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {notes.map((note: Note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Dashboard;
