import rjson from 'relaxed-json'

import { COLORS } from './constants'

/**
 * Converts the text editor input to data usable by the chart.
 * @param {string} inputText Raw input string from the text editor component.
 * @returns Object ready to be consumed by the chart lib.
 */
export default function generateChartData (inputText) {
  // converts the input text and builds the JSON array
  const splittedText = inputText.split('\n')
  const jsonArray = []
  splittedText.forEach(line => {
    jsonArray.push(JSON.parse(rjson.transform(line)))
  })

  // setting necessary configuration objects
  const startObject = jsonArray[0]
  const spanObject = jsonArray[1]

  // setting time interval
  const beginTimestamp = spanObject.begin
  const endTimestamp = spanObject.end

  // setting selectors and groups defined in the start object
  const selectors = []
  const groups = []
  startObject.select.forEach(selector => {
    selectors.push(selector)
  })
  startObject.group.forEach(group => {
    groups.push(group)
  })

  // iterating over data types to generate labels and extract values
  const values = []
  const timestamps = []
  for (let i = 2; i < jsonArray.length - 1; i++) {
    const it = jsonArray[i]
    if (it.timestamp >= beginTimestamp && it.timestamp <= endTimestamp) {
      const keys = []
      groups.forEach(group => {
        keys.push(it[`${group}`])
      })
      /**
       * generates an object with the following format:
       *  - keys: array of group values
       *  - selector: string of the current selector
       *  - value: number representing the current value of the selector
       *  - timestamp: timestamp
       */
      selectors.forEach(selector => {
        values.push({
          keys: keys,
          selector: selector,
          value: it[`${selector}`],
          timestamp: it.timestamp
        })
        // stores the timestamp to be used on the data separation and X axis labels
        if (!timestamps.includes(it.timestamp)) {
          timestamps.push(it.timestamp)
        }
      })
    }
  }

  // building the X (timestamp) labels and separating values by timestamp
  const labelsX = []
  const timestampedValues = []
  timestamps.forEach(timestamp => {
    labelsX.push(convertTimestampToFormattedString(timestamp))
    timestampedValues.push(values.filter(val => val.timestamp === timestamp))
  })

  // building the Y axis, with labels properly formatted and properly setting values
  const valuesY = []
  timestampedValues.forEach(tsValue => {
    tsValue.forEach(value => {
      // runs over all keys, generating the proper text to be used as the dataset label
      let newLabel = ''
      value.keys.forEach(key => {
        newLabel += `${convertAndCapitalizeWord(key)} `
      })
      newLabel += `${convertAndCapitalizeWord(value.selector)}`
      /**
       * if the key isn't already processed, inserts a new object into
       * the value list with the following format:
       *  - key: properly typed label
       *  - value: list of values from that label
       * if it already is inserted, appends the value to its value list
       */
      if (valuesY.filter(val => val.key === newLabel).length === 0) {
        valuesY.push({
          key: newLabel,
          value: [value.value]
        })
      } else {
        const valueIndex = valuesY.findIndex(val => val.key === newLabel)
        valuesY[valueIndex].value.push(value.value)
      }
    })
  })

  // builds the return object with proper format
  const returnObject = {}
  returnObject.labels = labelsX
  returnObject.datasets = []
  const colorList = generateColor(valuesY.length)
  valuesY.forEach((value, index) => {
    const color = colorList[index]
    returnObject.datasets.push({
      label: value.key,
      borderColor: color,
      backgroundColor: color,
      data: value.value
    })
  })

  return returnObject
}

/**
 * Converts a word from the typed format (e.g. "this_is_a_word")
 * to a more readable format (e.g. "This Is A Word")
 * @param {string} word Word separated by underscores
 * @returns Same word without underscores and properly capitalized
 */
function convertAndCapitalizeWord (word) {
  return word
    .toLowerCase()
    .split('_')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/**
 * Converts a proper timestamp to a string on the format "hh:mm"
 * @param {timestamp} timestamp Timestamp
 * @returns String in the format hh:mm
 */
function convertTimestampToFormattedString (timestamp) {
  const date = new Date(timestamp)
  const hours = date.getHours().toString()
  const minutes = date.getMinutes().toString()
  return `${hours.length < 2 ? `0${hours}` : hours}:${minutes.length < 2 ? `0${minutes}` : minutes}`
}

/**
 * Picks a certain amount of colors randomly from the color list
 * @param {int} count Number of colors needed
 * @returns List of colors
 */
function generateColor (count) {
  const colorKeys = Object.keys(COLORS)
  const randomNumbers = []
  while (randomNumbers.length < count) {
    const r = Math.floor(Math.random() * colorKeys.length) + 1
    if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r)
  }
  const colors = []
  randomNumbers.forEach(number => {
    colors.push(COLORS[colorKeys[number]])
  })
  return colors
}
