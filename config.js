const server = process.env.NODE_ENV !== 'production'

export default server
  ? 'http://localhost:5000'
  : 'https://morrin-therapy.herokuapp.com'
