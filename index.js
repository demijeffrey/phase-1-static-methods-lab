class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z-']+/g, "")
  }
  static titleize(string) {
    let splitString = string.toLowerCase().split(' ')
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const newArray = []
    for(let i = 0; i < splitString.length; i++) {
      if(splitString[i].includes(exceptions) === true) {
        newArray.push(splitString[i])
      } else {
      newArray.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
      }
    }
    return newArray.join(' ')
  }
}