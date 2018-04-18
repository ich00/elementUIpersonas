import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import BlogIndex from '@/components/blog/BlogIndex'
import BlogNew from '@/components/blog/BlogNew'
import BlogEdit from '@/components/blog/BlogEdit'

import PostIndex from '@/components/post/PostIndex'

import PersonaIndex from '@/components/persona/PersonaIndex'
import PersonaNew from '@/components/persona/PersonaNew'
import PersonaEdit from '@/components/persona/PersonaEdit'

import TrabajoIndex from '@/components/trabajo/TrabajoIndex'

import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blogs',
      name: 'BlogIndex',
      component: BlogIndex
    },
    {
      path: '/blogs/new',
      name: 'BlogNew',
      component: BlogNew
    },
    {
      path: '/blogs/edit/:id',
      name: 'BlogEdit',
      component: BlogEdit
    },
    {
      path: '/posts',
      name: 'PostIndex',
      component: PostIndex
    },
    {
      path: '/personas',
      name: 'PersonaIndex',
      component: PersonaIndex
    },
    {
      path: '/personas/new',
      name: 'PersonaNew',
      component: PersonaNew
    },
    {
      path: '/personas/edit/:id',
      name: 'PersonaEdit',
      component: PersonaEdit
    },
    {
      path: '/trabajos',
      name: 'TrabajoIndex',
      component: TrabajoIndex
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
