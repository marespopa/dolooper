import SectionHeading from '../common/SectionHeading.component'
import TasksList from './TasksList'

const TasksSection = () => {
  return (
    <section className="my-8 sm:my-16 md:my-20">
      <SectionHeading
        title="Subtasks"
        description={`Breaking it into smaller chunks, gives a clear way to progress.`}
        subHeading={'* You can always do this later'}
      />
      <div className={`sm:relative sm:z-0 min-h-full w-full md:w-1/2`}>
        <TasksList area="planning" />
      </div>
    </section>
  )
}

export default TasksSection
