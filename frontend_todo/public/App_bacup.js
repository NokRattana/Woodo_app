import React, {Component} from "react";
import './App.css';

const TaskItem = [
  {
    "id": 1,
        "title": "My portfolio django.",
        "subject": "Portfolio",
        "detail": "My portfolio django.",
        "done": false
  },
  {
    "id": 3,
        "title": "Re-build webdesign",
        "subject": "Webstore app",
        "detail": "re-build nokstore.",
        "done": false
  },
  {
    "id": 4,
        "title": "New TODO",
        "subject": "Woodo",
        "detail": "do Woodo stuff here!",
        "done": false
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDone: false,
      taskList: TaskItem,
    };
  }


displayDone = (status) => {
  if (status) {
    return this.setState({viewDone: true});
  }

  return this.setState({viewDone: false});
};

renderTabList = () => {
  return (
    <div className="nav nav-tabs">
      <span
      className={this.state.viewDone ? "nav-link active" : "nav - link"} 
      onClick={() => this.displayDone(true)}
      >
      Task Done!
      </span>
      <span
      className={this.state.viewDone ? "nav-link" : "nav - link active"} 
      onClick={() => this.displayDone(false)}
      >
      Not Done!
      </span>

    </div>
  );
};

renderItem = () => {
  const { viewDone} = this.state;
  const newItem = this.state.taskList.filter(
    (item) => item.done == viewDone
  );
  return newItem.map((item) => (
    <li
    key={item.id}
    className="list-group-item d-item justify-content-between align-item-center"
    >
    <span
      className="" 
      title=""
      
      >
      {item.title}
       </span>
       <span>
         <button
         className="btn btn-secondary mr-2"
         >
           Edit

         </button>
         <button
         className="btn btn-danger"
         >
           Edit
        </button>
      </span>
  </li>
));      
};

render() {
  return (
    <main className="container">
      <h1 className ="text-hite text-uppercase text-center my-4">TODO TASK APP</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                className="btn-btn-primary"
                >
                  ADD TASK
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItem()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
  

export default App;
