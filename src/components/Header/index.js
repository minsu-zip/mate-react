import React from 'react'
import { Row, Col } from 'antd'
import LogoText from '../LogoText'
import HeaderSearchForm from '../HeaderSearchForm'
import HeaderAvatar from '../HeaderAvatar'
import HeaderDropBox from '../HeaderDropBox'
import useHover from '../../hooks/useHover'
import HeaderLoginButton from '../HeaderLoginButton'
import HeaderChannelButton from '../HeaderChannelButton'
import './index.css'

const header = {
  border: '1px solid lightgray',
  textAlign: 'center',
  backgroundColor: '#FCFFA6',
}
const padding = { padding: '8px 0' }
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
  const [ref, isHover] = useHover()
  const session = true
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
          {session ? (
            <div style={padding} ref={ref}>
              <HeaderAvatar />
            </div>
          ) : (
            <HeaderLoginButton />
          )}
          {isHover ? <HeaderDropBox /> : ''}
        </Col>
      </Row>
      <Row className="headerChannelNav" style={channel}>
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
        <HeaderChannelButton name="운동" />
      </Row>
    </>
  )
}
export default Header
