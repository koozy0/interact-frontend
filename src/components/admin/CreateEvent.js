import React, { Component } from 'react';

class CreateEvent extends Component {
  state = {
    createdBy: null,
    name: null,
    code: null,
    start: null,
    end: null,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className='container'>
        <h1 style={styles.header}>Create Event</h1>

        <form style={styles.form} onSubmit={this.onSubmit}>
          <div className='input-grp'>
            <label htmlFor='name'>Event Name</label>
            <input id='name' name='name' type='text' onChange={this.onChange} />
          </div>

          <div className='input-grp'>
            <label htmlFor='code'>Event Code</label>
            <input id='code' name='code' type='text' onChange={this.onChange} />
          </div>

          <div className='input-grp'>
            <label htmlFor='start'>Event Start</label>
            <input
              id='start'
              name='start'
              type='datetime-local'
              onChange={this.onChange}
            />
          </div>

          <div className='input-grp'>
            <label htmlFor='end'>Event End</label>
            <input
              id='end'
              name='end'
              type='datetime-local'
              onChange={this.onChange}
            />
          </div>

          <button type='submit' className='btn btn-primary w-100 mt-3'>
            Create Event
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEvent;

const styles = {
  header: {
    padding: '0 16px',
    textAlign: 'center',
  },
  form: {
    width: '30em',
    margin: '0 auto',
  },
};
