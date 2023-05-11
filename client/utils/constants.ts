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

export const helperTags = [
  {
    name: 'h1',
    label: 'Title',
    value: '# ',
  },
  {
    name: 'h2',
    label: 'Heading',
    value: '## ',
  },
  {
    name: 'h3',
    label: 'Sub-Heading',
    value: '### ',
  },
  {
    name: 'p',
    label: 'Paragraph',
    value: '',
  },
  {
    name: 'li',
    label: 'List',
    value: '- ',
  },
] as const

export type HelperTags = (typeof helperTags)[number]['name']
