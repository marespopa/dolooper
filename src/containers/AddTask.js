import { connect } from 'react-redux'
import { addTask } from '../actions'
import AddTask from '../components/task/AddTask'

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
})

export default connect(
  null,
  mapDispatchToProps
)(AddTask)
