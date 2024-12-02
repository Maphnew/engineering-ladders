import { render, screen } from '@testing-library/react'
import App from './App'

describe ( '진실을 증명하는 문장' , () => { 
  it ( '2와 같아야 합니다' , () => { 
    expect ( 1 + 1 ). toEqual ( 2 ) 
  }) 
  it ( '3와 같아야 합니다' , () => { 
    expect ( 1 + 2 ). toEqual ( 3 ) 
  }) 
})

describe('App', () => {
    it('App 컴포넌트 렌더링', () => {
        render(<App/>)

        screen.debug()
    })
})