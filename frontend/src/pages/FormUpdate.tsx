import { useState, useEffect, FormEvent } from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import api from '../services/api';

type Props = {
  id: string;
};

const FormUpdate = ({ match }: RouteComponentProps<Props>) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const history = useHistory();

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await api.get(`/notes/${match.params.id}`);
      setTitle(data.title);
      setText(data.text);
    };
    fetchNote();
  }, [match]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await api.put(`/notes/${match.params.id}`, { title, text });
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
            value={title}
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
            value={text}
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

export default FormUpdate;
