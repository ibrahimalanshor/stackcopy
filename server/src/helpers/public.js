module.exports = (folder, file) => {
  return `${process.env.APP_URL}/public/${folder}/${file}`
}