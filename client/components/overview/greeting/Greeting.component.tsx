import React from 'react'

type HourlyMessage = {
  startingHour: number
  message: string
}

const Greeting = () => {
  function getGreetingMessage() {
    const data: HourlyMessage[] = [
        {
          startingHour: 22,
          message: 'Working late 🌙',
        },
        {
          startingHour: 18,
          message: 'Good evening 🌇',
        },
        {
          startingHour: 11,
          message: 'Great day! ☀️',
        },
        {
          startingHour: 8,
          message: 'Good morning 🌞',
        },
        {
          startingHour: 4,
          message: 'Whoa, early bird 🌅',
        },
      ],
      hour = new Date().getHours()

    for (const entry of data) {
      if (hour >= entry.startingHour) {
        return entry.message
      }
    }
  }

  const greetingMessage = getGreetingMessage()

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 mx-auto">
      <h2 className="text-lg text-gray-700 font-bold mt-3 mb-3 text-center ">
        {greetingMessage}
      </h2>
    </div>
  )
}

export default Greeting
