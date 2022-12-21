import Input from '../../forms/input/Input.component'
import SectionHeading from '../common/SectionHeading.component'
import TasksList from './TasksList'

const TasksSection = () => {
  return (
    <section className="mt-10">
      <SectionHeading
        title="Tasks"
        description="What are the tasks that need to be done, so we can call this a success?"
      />
      <div className="w-full md:w-1/2">
        <TasksList area="journey" />
      </div>
    </section>
  )
}

export default TasksSection
