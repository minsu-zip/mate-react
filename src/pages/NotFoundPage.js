import { Result, Button } from 'antd'
const NotFoundPage = () => {
  return (
    <div>
      {' '}
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <a href="/">Back Home</a>
          </Button>
        }
      />
      ,
    </div>
  )
}

export default NotFoundPage
