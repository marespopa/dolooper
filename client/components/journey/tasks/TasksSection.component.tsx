import { boxStyles } from '../../common/common'
import SectionHeading from '../common/SectionHeading.component'
import TasksList from './TasksList'

const TasksSection = () => {
  return (
    <section>
      <SectionHeading
        title="Subtasks"
        description={`Usually, a task can be split into multiple smaller ones, so it gets
            completed easier.`}
        subHeading={'* You can always add subtasks later'}
      />
      <div
        className={`${boxStyles} relative z-0 p-4 min-h-full w-full md:w-1/2`}
      >
        <TasksList area="journey" />
      </div>
    </section>
  )
}

export default TasksSection
