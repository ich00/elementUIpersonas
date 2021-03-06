import axios from 'axios'

console.log('entra')

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

console.log(api)

function getBlogsApi (cb) {
  api.get('/posts')
  .then((response) => {
    console.log(response.data)
    cb(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}

function saveDataApi (data, cb) {
  api.post('blogs', data)
  .then(function (response) {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

function updateData (idblog, data, cb) {
  api.put('blogs/' + idblog, data)
  .then((response) => {
    cb({ status: 201 })
  })
  .catch((error) => {
    console.log(error)
  })
}

function deleteData (idblog, cb) {
  api.delete('blogs/' + idblog)
  .then((response) => {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

export default {
  getBlogs: (cb) => getBlogsApi(cb),
  saveBlog: (data, cb) => saveDataApi(data, cb),
  updateBlog: (idblog, data, cb) => updateData(idblog, data, cb),
  deleteBlog: (idblog, cb) => deleteData(idblog, cb)
}
