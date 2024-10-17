import React from 'react'
import { TopNav } from './components/TopNav'
import { SecondNav } from './components/SecondNav'
import { Header } from './components/header'
import { Category } from './components/category'
import { Course } from './components/course'
import { Footer } from './components/footer'

export default function App() {
  return (
    <div>
      <TopNav/>
      <SecondNav/>
      <div className='mt-[109px]'></div>
      <Header/>
      <Category/>
      <Course/>
      <Footer/>
    </div>
  )
}
