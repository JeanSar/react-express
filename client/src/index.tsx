import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Titre } from './components/Header/index'
import { Image } from './components/Content/index'
const Index = (): JSX.Element => {
  return (
    <div className='container'>
      <Titre />
      <Image />
    </div>
  )
}
ReactDOM.render(<Index />, document.getElementById('root'))
