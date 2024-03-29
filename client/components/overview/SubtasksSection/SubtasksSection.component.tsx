import SectionHeading from '@/components/planning/common/SectionHeading.component'
import SubtasksList from './SubtasksList'

const SubtasksSection = () => {
  const description = ` List smaller, actionable items that need to be completed to achieve the main task.`
  const subHeading =
    '* This helps in making progress on larger tasks more manageable and trackable.'

  return (
    <section className="mt-8">
      <SectionHeading
        title="Subtasks"
        description={description}
        subHeading={subHeading}
      />
      <div className={`sm:relative sm:z-0 min-h-full w-full md:w-1/2`}>
        <SubtasksList />
      </div>
    </section>
  )
}

export default SubtasksSection
