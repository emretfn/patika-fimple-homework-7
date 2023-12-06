import React from 'react'

import { Button } from 'emretufan-publishing-homework'
import 'emretufan-publishing-homework/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <Button type='default' text='Click Me!' />
      <Button type='primary' text='Click Me!' />
      <Button type='dashed' text='Click Me!' />
      <Button type='text' text='Click Me!' />
      <Button type='link' text='Click Me!' />
    </div>
  )
}

export default App
