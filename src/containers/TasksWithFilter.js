import { connect } from 'react-redux'
import { pinTask } from '../actions'
import { removeTask } from '../actions'
import TasksWithFilter from '../components/TasksWithFilter'

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = dispatch => ({
  pinTask: id => dispatch(pinTask(id)),
  removeTask: id => dispatch(removeTask(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksWithFilter)
