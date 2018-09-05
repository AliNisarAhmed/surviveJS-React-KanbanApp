import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes : [
        {
          id: uuid(),
          task: "Learn React"
        },
        {
          id: uuid(),
          task: 'Do Laundry'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes 
          notes={this.state.notes} 
          onDelete={this.onDelete}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
        />
      </div>  
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid(),
        task: 'New Task'
      }])
    });
  }


  onDelete = (id, e) => {
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })
  }

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }
        return note;
      })
    });
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    });
  } 

}

