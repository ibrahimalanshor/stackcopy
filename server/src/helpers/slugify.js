module.exports = str => {
  return str.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s/g, '-')
}