import { connect } from "react-redux";
import { updateTask } from "../actions";
import EditTask from "../components/EditTask";

const mapStateToProps = (state, ownProps) => {
  const paramTaskId = ownProps.match.params.id;
  const task = state.tasks.filter(task => (task.id === paramTaskId))[0] || {};
  return task;
};

const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask);
