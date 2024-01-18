import SectionHeading from '../common/SectionHeading.component'
import TasksList from './TasksList'

const TasksSection = () => {
  const description = `Breaking it into smaller chunks, gives a clear way to progress.`
  const subHeading =
    '* Each sub-task should be small enough to be completed in a short period of time'

  return (
    <section className="my-8 sm:my-16 md:my-20">
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
