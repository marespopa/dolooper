export const SECOND = 1000
export const MINUTE = 60
export const HOUR = MINUTE * 60
export const DAY = HOUR * 24
export const MIN_TIME_FOR_EXTENSION = MINUTE * 15

// values in config represent minutes
export const TIMER_CONFIG = {
  min: 1,
  max: 60,
  step: 1,
  default: 40,
}

export const STATUSES = {
  none: 'Waiting',
  break: 'Break',
  work: 'Work',
}

export const HELPER_TAGS = [
  {
    name: 'h1',
    value: '# ',
    description: 'Title',
  },
  {
    name: 'h2',
    value: '## ',
    description: 'Heading',
  },
  {
    name: 'h3',
    value: '### ',
    description: 'Sub Heading',
  },
  {
    name: 'p',
    value: '',
    description: 'Paragraph',
  },
  {
    name: 'li',
    value: '- ',
    description: 'List',
  },
] as const

export type HelperTags = (typeof HELPER_TAGS)[number]['name']
