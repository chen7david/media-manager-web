import { Route, Routes } from 'react-router-dom'
import { Home } from '.././home/Home'
import { Profile } from '../profile/Profile'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
