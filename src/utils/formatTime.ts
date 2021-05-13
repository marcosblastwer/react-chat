const formatTime = (date: string): string => {
  const newDate = new Date(date)
  
  const hour = newDate.getHours()
  const minutes = newDate.getMinutes()
  return `${hour}:${minutes}`
  // return ''
}

export default formatTime
