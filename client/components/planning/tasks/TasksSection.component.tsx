import SectionHeading from '../common/SectionHeading.component'
import TasksList from './TasksList'

const TasksSection = () => {
  return (
    <section className="my-8 sm:my-16 md:my-20">
      <SectionHeading
        title="Subtasks"
        description={`Usually, a task can be split into multiple smaller ones, so it gets
            completed easier.`}
        subHeading={'* You can always add subtasks later'}
      />
      <div className={`relative z-0 min-h-full w-full md:w-1/2`}>
        <TasksList area="planning" />
      </div>
    </section>
  )
}

export default TasksSection
