import MyInformation from '../components/MyInformation'

const MyPage = () => {
  return (
    <div>
      {/* components에서 작업한 모듈들을 불러오면 된다. */}
      프로필 수정 페이지
      <MyInformation></MyInformation>
    </div>
  )
}

export default MyPage