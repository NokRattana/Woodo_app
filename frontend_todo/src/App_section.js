import React, {Component} from "react";
import './App.css';
import Modal from "./components/Modal";
import axios from "axios";

const taskItems = [
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
{
    "id": 5,
    "title": "cleaning",
    "subject": "homewprk",
    "detail": "cleaning the kitchen.",
    "done": false
},
];

 //**The properties of state objects viewDone is false and activeItem passses false. Empty array for fetch data from API */
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
      taskList:[]
    };
  }
//**fetch() wraps to handle any network errors, and call fetch() with await keyword. ComponentDidMount() is a function to perform each fetch. */
//**setState() for update a change to previous state.  */  



async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/task/');
      const taskList = await res.json();
      this.setState({
        taskList
      });
    } catch(e) {
      console.log(e);
    }
  }
  //**add Toggle to change Modal state */
  toggle = () => {
    this.setState({ modal: !this.state.modal});
  };
  //** For saving the task to the API by using axios request data.*/
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
      .put('http://localhost:8000/task/${item.id}/', item)
      return;
    }
    axios
      .post("http://localhost:8000/task/", item)
  };
  //**Add task and defined in the render */

  createItem = () => {
    const item = {title: "", detail: "", done: false};
    this.setState({ activeItem: item, modal: !this.state.modal});
  };

  displayDone = status => {
    if (status) {
      return this.setState({ viewDone: true});
    }
    return this.setState({viewDone: false});
    };

    renderTabList = () => {
      return (
        <div className="my-5 tab-list">
          <button
          onClick={() => this.displayDone(true)}
          className={this.state.viewDone ? "active" : ""}
          >
            Done
          </button>
          <button
          onClick={() => this.displayDone(false)}
          className={this.state.viewDone ? "": "active"}
          >
            Not Done
            
          </button>

        </div>
      );
    };


  //**Before here */
  renderItem = () => {
    const {viewDone} = this.state;
    const newItems = this.state.taskList.filter(
      item => item.done === viewDone
    );
    return newItems.map(item =>(
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span
        className={'task-title mr-2 ${this.state.viewDone ? "done-task" : ""}'}
        
          title={item.detail}
          >
            {item.title}
        </span>
      </li>
    ));
  };


  
   render() {
     return(
       <main className="content">
         <div className="row">
           <div className="col-md-6 col-sm-10 mx-auto p-0">
             <div className="card-p-3">
               <ul className="list-group list-group-flush">
                 {this.renderItem()}
               </ul>
              </div>
             </div>
            </div>
          </main>
     )
   }

}




export default App;


