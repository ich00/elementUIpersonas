import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

function getPostsApi (cb) {
  api.get('/posts')
  .then((response) => {
    cb(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}

export default {
  getPosts: (cb) => getPostsApi(cb)
}
