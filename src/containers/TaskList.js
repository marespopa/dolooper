import { connect } from 'react-redux'
import { pinTask } from '../actions'
import { removeTask } from '../actions'
import TaskList from '../components/TaskList'

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
)(TaskList)
