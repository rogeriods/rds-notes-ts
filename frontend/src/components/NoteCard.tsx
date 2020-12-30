import React from 'react';
import { Link } from 'react-router-dom';

export interface Note {
  _id: string;
  title: string;
  text?: string;
}

interface NoteItemProps {
  note: Note;
  handleDelete: any;
}

const NoteCard: React.FC<NoteItemProps> = ({ note, handleDelete }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-header text-end">
          <button className="btn btn-sm btn-close" onClick={() => handleDelete(note._id)} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.text}</p>
          <div className="btn-group btn-group-sm" role="group">
            <Link to={`/update/${note._id}`} className="card-link">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
