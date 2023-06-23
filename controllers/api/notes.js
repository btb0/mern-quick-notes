const User = require('../../models/user');
const Note = require('../../models/note');

module.exports = {
  create,
  index
};

async function create(req, res) {
  try {
    const newNote = {
      text: req.body.newNote,
      user: req.user._id
    };
    const note = await Note.create(newNote);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (err) {
    res.status(400).json(err);
  }
}
