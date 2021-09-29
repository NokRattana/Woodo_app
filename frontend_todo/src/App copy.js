import React, {Component} from "react";
import './App.css';
import Modal from "./components/Modal";
import axios from "axios";

const taskItems = [
]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDone: false,
      activeItem: {
        title: "",
        detail: "",
        done: "",

      },
      taskList: []
    
    
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get('http://localhost:8000/task/')
      .then((res) => this.setState({ taskList: res.data}))
      .catch((err) => console.log(err));
  };

  
  toggle = () => {
    this.setState({ modal: !this.state.modal});
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put('http://localhost:8000/task/${item.id}/', item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post('http://localhost:8000/task/', item)
      .then((res) => this.refreshList());


    
  };

  handleDelete = (item) => {
    axios
      .delete('/task/${item.id}/')
      .then((res) => this.refreshList());
  
  };

  createItem = () => {
    const item = { title: "", detail: "", done: false};
    this.setState ({ activeItem: item, modal: !this.state.modal});
  };


displayDone = (status) => {
  if (status) {
    return this.setState({viewDone: true});
  }

  return this.setState({viewDone: false});
};

renderTabList = () => {
  return (
    <div className="App-btn-gr">

      
      <button
      className={this.state.viewDone ? "button-link active" : "button btn-success - link"} 
      onClick={() => this.displayDone(true)}
      >
        
      Task Done!
      </button>
      
     
      
      <button
      className={this.state.viewDone ? "button-link" : "button btn-danger - link active"} 
      onClick={() => this.displayDone(false)}
      >
      Not Done!
      </button>
      
    

    </div>
  );
};

renderItems = () => {
  const { viewDone} = this.state;
  const newItems = this.state.taskList.filter(
    (item) => item.done === viewDone
  );
  return newItems.map((item) => (
    <li
    key={item.id}
    className="list-group-item d-flex justify-content-between align-item-center"
    >

    <span
      className= {'task-title mr-2 $ {this.state.viewDone ? "done -task" : ""}'}
      title={item.detail}
      
      >
      {item.title}
       </span>
   
       <span>
         <button
         className="App-btn-re"
         onClock={() => this.editItem(item)}
         
         >
           
           Edit

         </button>
         <button
         className="App-btn-re"
         onClick={() => this.handleDelete(item)}
         
         >
           Delete
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
                className="App-btn-re"
                onClick={this.createItem}
                >
                  Add New Task
                </button>

              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.state.handleSubmit} 
            />
        ) : null}
     </main>
    );
  }
}
  

export default App;
