componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/task/")
      .then((res) => this.setState({ taskList: res.data }))
      .catch((err) => console.log(err));
  };
}