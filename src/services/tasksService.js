const tasksService = {
  getBlankTask: () => ({
    title: '',
    link: '',
    description: '',
    plan: '',
    tags: '',
    isPinned: false
  }),
}

export default tasksService
