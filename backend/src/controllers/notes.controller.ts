import { Request, Response } from 'express';
import Note from '../models/note.model';

export default {
  // @route   GET api/notes
  // @desc    Get all notes
  // @access  Public
  async index(request: Request, response: Response) {
    const notes = await Note.find();
    return response.json(notes);
  },

  // @route   GET api/notes/:id
  // @desc    Get note by ID
  // @access  Public
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const note = await Note.findById(id);
    if (!note) {
      return response.status(404).json({ message: 'Note not found' });
    }

    return response.json(note);
  },

  // @route   POST api/notes
  // @desc    Create a new note
  // @access  Public
  async create(request: Request, response: Response) {
    const newNote = new Note({
      title: request.body.title,
      text: request.body.text,
    });

    const note = await newNote.save();
    return response.status(201).json(note);
  },

  // @route   PUT api/notes/:id
  // @desc    Update note by ID
  // @access  Public
  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const note = await Note.findById(id);
    if (!note) {
      return response.status(404).json({ message: 'Note not found' });
    }

    // Update fields
    note.title = request.body.title;
    note.text = request.body.text;

    await note.save();
    return response.json(note);
  },

  // @route   DELETE api/notes/:id
  // @desc    Delete note by ID
  // @access  Public
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const note = await Note.findById(id);
    if (!note) {
      return response.status(404).json({ message: 'Note not found' });
    }

    await note.remove();
    return response.json({ message: 'Note removed with success' });
  },
};
