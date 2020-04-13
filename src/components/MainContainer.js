import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AddTask from '../containers/AddTask'
import EditTask from '../containers/EditTask'
import TasksWithFilter from '../containers/TasksWithFilter';

const MainContainer = () => (
  <div className="app__body">
    <Switch>
      <Route exact path="/" component={TasksWithFilter} />
      <Route path="/tasks" component={TasksWithFilter} />
      <Route path="/task/:id" render={props => <EditTask {...props} />} />
      <Route path="/add-task" component={AddTask} />
    </Switch>
  </div>
)

export default MainContainer
