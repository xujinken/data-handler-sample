// JSON → CSV conversion utility
// Reads JSON from `data/input.json` and writes CSV to `data/output.csv`
// Run: `node convert.js`
const fs = require('fs')
const path = require('path')
const { Parser } = require('json2csv')

// Input JSON file path
const inputPath = path.join(__dirname, 'data', 'input.json')
// Output CSV file path
const outputPath = path.join(__dirname, 'data', 'output.csv')

/**
 * Read JSON file from disk.
 * @param {string} filePath Absolute or relative path to JSON file
 * @returns {Object|Array} Parsed JSON content
 */
function readJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw)
}

/**
 * Write CSV string to disk, ensuring directory exists.
 * @param {string} filePath Destination CSV path
 * @param {string} data CSV content
 */
function writeCsv(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, data, 'utf8')
}

/**
 * Convert JSON input to CSV and save to disk.
 */
function convert() {
  // Load JSON data
  const json = readJson(inputPath)

  // Infer CSV fields from first record when input is an array
  const fields = Array.isArray(json) && json.length > 0 ? Object.keys(json[0]) : []

  // Convert JSON to CSV
  const parser = new Parser({ fields })
  const csv = parser.parse(json)

  // Write CSV output
  writeCsv(outputPath, csv)

  // Log summary
  console.log(`Converted ${Array.isArray(json) ? json.length : 1} records to ${outputPath}`)
}

convert()