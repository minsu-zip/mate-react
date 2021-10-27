import React from 'react'
import { Row, Col } from 'antd'
import LogoText from '../LogoText'
import HeaderSearchForm from '../HeaderSearchForm'
import HeaderAvatar from '../HeaderAvatar'
import HeaderDropBox from '../HeaderDropBox'
// import useHover from '../../hooks/useHover'
import HeaderLoginButton from '../HeaderLoginButton'
import HeaderChannelButton from '../HeaderChannelButton'
import './index.css'

const header = {
  border: '1px solid lightgray',
  textAlign: 'center',
  backgroundColor: '#FCFFA6',
}
const padding = { padding: '8px 0' }
const Avatar = {
  padding: '8px 0',
  display: 'flex',
  justifyContent: 'flex-end',
}
const logo = {
  padding: '8px 0',
  textAlign: 'center',
}
const channel = {
  border: '1px solid lightgray',
  whiteSpace: 'nowrap',
  overflowX: 'scroll',
  flexWrap: 'nowrap',
}

const Header = () => {
  // const [ref, isHover] = useHover()
  return (
    <>
      <Row className="header" gutter={[48, 0]} style={header}>
        <Col className="gutter-row" span={6}>
          <div style={logo}>
            <LogoText />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={padding}>
            <HeaderSearchForm />
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <div style={Avatar}>
            <HeaderAvatar />
            <HeaderDropBox />
          </div>
          {/* <HeaderLoginButton /> */}
        </Col>
      </Row>
      <Row className="headerChannelNav" gutter={[48, 0]} style={channel}>
        <HeaderChannelButton id="61790be26e7b13674f9dd39b" name="음식" />
        <HeaderChannelButton id="61729b42eaccb833ce222a52" name="스포츠" />
        <HeaderChannelButton id="61790c416e7b13674f9dd43d" name="문화" />
        <HeaderChannelButton id="616a200d22996f0bc94f6db5" name="론2팀" />
      </Row>
    </>
  )
}
export default Header
