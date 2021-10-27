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

const header = { border: '1px solid black' }
const padding = { padding: '8px 0', border: '1px solid pink' }
const channel = {
  border: '5px solid black',
  whiteSpace: 'nowrap',
  overflowX: 'scroll',
  flexWrap: 'nowrap',
}

const Header = () => {
  const [ref, isHover] = useHover()
  const session = false
  return (
    <>
      <Row className="header" gutter={[48, 0]} style={header}>
        <Col className="gutter-row" span={6} style={header}>
          <div style={padding}>
            <LogoText />
          </div>
        </Col>
        <Col className="gutter-row" span={12} style={header}>
          <div style={padding}>
            <HeaderSearchForm />
          </div>
        </Col>

        <Col className="gutter-row" span={6} style={header}>
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
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
        <HeaderChannelButton text="운동" />
      </Row>
    </>
  )
}
export default Header
