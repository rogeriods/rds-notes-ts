import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const FormAddNew = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post('/notes', { title, text });
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h3>Add New (Form)</h3>
      <p>Fields in (*) are required.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title *</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Text Description</label>
          <textarea
            className="form-control"
            rows={4}
            name="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAddNew;
