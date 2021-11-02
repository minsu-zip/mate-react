import { useRef } from 'react'
import Input from './Input'
import Button from './Button'
import styled from '@emotion/styled'

const Form = styled.form`
  height: 65px;
  padding-top: 3px;
  box-shadow: 0 0 4px rgba(0, 0);
`

const HeaderSearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit && onSubmit()
  }
  // const inputRef = useRef()

  return (
    <Form onSubmit={handleSubmit}>
      <Input />
      <Button>Focus</Button>
    </Form>
  )
}
export default HeaderSearchForm
