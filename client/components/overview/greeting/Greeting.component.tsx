import React from 'react'

const Greeting = () => {
  function getGreetingMessage() {
    const data = [
        [22, 'Working late'],
        [18, 'Good evening'],
        [12, 'Good afternoon'],
        [7, 'Good morning'],
        [4, 'Whoa, early bird'],
      ],
      hour = new Date().getHours()

    for (var i = 0; i < data.length; i++) {
      if (hour >= data[i][0]) {
        return data[i][1]
      }
    }
  }

  const greetingMessage = getGreetingMessage()

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mt-3 mb-3">{greetingMessage}</h2>
    </div>
  )
}

export default Greeting
