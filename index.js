// Code your solution here
function findMatching(array, string){
    let matches = array.filter(name => {
      return name.toLowerCase() === string.toLowerCase()
    })
    return matches
  }


  function fuzzyMatch(array, string){
    let matches = array.filter(name => {
      return name.toLowerCase().startsWith(string.toLowerCase())
    })
    return matches
  }

  function matchName(array, string){
    let matches = array.filter(name => {
      return name.name.toLowerCase().startsWith(string.toLowerCase())
    })
    return matches
  }