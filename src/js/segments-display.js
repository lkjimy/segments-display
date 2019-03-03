class SevenSegments {
  constructor (string) {

    this.dictionary = {
      '0': [1,1,1,1,1,1,0,0],
      '1': [0,1,1,0,0,0,0,0],
      '2': [1,1,0,1,1,0,1,0],
      '3': [1,1,1,1,0,0,1,0],
      '4': [0,1,1,0,0,1,1,0],
      '5': [1,0,1,1,0,1,1,0],
      '6': [1,0,1,1,1,1,1,0],
      '7': [1,1,1,0,0,0,0,0],
      '8': [1,1,1,1,1,1,1,0],
      '9': [1,1,1,1,0,1,1,0],
      'a': [1,1,1,0,1,1,1,0],
      'b': [0,0,1,1,1,1,1,0],
      'c': [1,0,0,1,1,1,0,0],
      'd': [0,1,1,1,1,0,1,0],
      'e': [1,0,0,1,1,1,1,0],
      'f': [1,0,0,0,1,1,1,0],
      'h': [0,1,1,0,1,1,1,0],
      'i': [0,0,0,0,1,1,0,0],
      'j': [0,1,1,1,0,0,0,0],
      'l': [0,0,0,1,1,1,0,0],
      'n': [0,0,1,0,1,0,1,0],
      'o': [0,0,1,1,1,0,1,0],
      'p': [1,1,0,0,1,1,1,0],
      'r': [0,0,0,0,1,0,1,0],
      's': [1,0,1,1,0,1,1,0],
      'u': [0,1,1,1,1,1,0,0],
      'y': [0,1,1,1,0,1,1,0],
      'z': [1,1,0,1,1,0,1,0]
    }

    this.string = string

    this.bits = !this.string ? [0,0,0,0,0,0,0,0] : this.set(this.string)
  }

  set ( arg ) {
    if ( typeof( arg ) === 'string' && arg.length === 1 && this.dictionary.hasOwnProperty( arg.toLowerCase() ) ) {
      
      this.bits = this.dictionary[ arg.toLowerCase() ]

      this.string = arg.toLowerCase()
      
      return this.dictionary[ arg.toLowerCase() ]

    } else {

      throw 'Argument not valid. Please pass a valid, single character, string.'

    }
  }
}

function createDisplay(dataDisplay) {

  // Gets the element with the specified value (dataDisplay) for the 'data-display' attribute
  var elements = document.querySelectorAll('[data-display]')

  var element = null

  for (i = 0 ; i < elements.length ; i++) {
    if (elements[i].dataset.display === dataDisplay) {
      element = elements[i]
    }
  }

  // Creates the display div inside the especified element (dataDisplay) which will contain the display segments
  var elDisplay = document.createElement('div')

  elDisplay.classList.add('display')

  element.appendChild(elDisplay)

  // Creates the segments inside the display element
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (i = 0 ; i < 8 ; i++) {
    var elSegment = document.createElement('div')

    elSegment.classList.add('SEG-' + str[i])
    elSegment.setAttribute('data-seg', i)

    elDisplay.appendChild(elSegment)
  }

}

function setDisplay(dataDisplay, char) {
  
}