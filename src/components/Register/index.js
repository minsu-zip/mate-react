import { Form, Input, InputNumber, Button } from 'antd'
import axios from 'axios'
import './index.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
/* eslint-disable no-template-curly-in-string */

const API_END_POINT = 'http://13.209.30.200'
async function Register_Information({ email, fullname, password }) {
  try {
    const response = await axios.post(`${API_END_POINT}/login`, {
      email,
      fullname,
      password,
    })
    alert('회원 가입이 완료되었습니다')
  } catch (error) {
    alert('회원 가입 중 문제가 발생하였습니다')
  }
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
/* eslint-enable no-template-curly-in-string */

const Register = () => {
  const onFinish = ({ user }) => {
    const { email, fullname, password } = user
    Register_Information({ email, fullname, password })
  }

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      className="registerForm"
    >
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'fullname']} label="fullname">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'password']} label="password">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Register
