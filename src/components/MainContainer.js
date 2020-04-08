import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TaskList from '../containers/TaskList'
import AddTask from '../containers/AddTask'
import EditTask from '../containers/EditTask'

const MainContainer = () => (
  <div className="app__body">
    <Switch>
      <Route exact path="/" component={AddTask} />
      <Route path="/tasks" component={TaskList} />
      <Route path="/task/:id" render={props => <EditTask {...props} />} />
      <Route path="/add-task" component={AddTask} />
    </Switch>
  </div>
)

export default MainContainer
