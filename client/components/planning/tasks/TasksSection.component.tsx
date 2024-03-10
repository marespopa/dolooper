import SectionHeading from '../common/SectionHeading.component'
import TasksList from './TasksList'

const TasksSection = () => {
  const description = ` List smaller, actionable items that need to be completed to achieve the main task.`
  const subHeading =
    '* This helps in making progress on larger tasks more manageable and trackable.'

  return (
    <section>
      <SectionHeading
        title="Subtasks"
        description={description}
        subHeading={subHeading}
      />
      <div className={`sm:relative sm:z-0 min-h-full w-full md:w-1/2`}>
        <TasksList />
      </div>
    </section>
  )
}

export default TasksSection
