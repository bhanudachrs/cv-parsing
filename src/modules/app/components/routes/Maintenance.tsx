import * as React from 'react'
import styled from 'styled-components'
// import { colors } from 'shared/styles/theme'

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 180px;
`
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #2b3141;
`
const Text = styled.div`
  font-size: 14px;
  line-height: 26px;
  color: #676767;
`

export function NotFound() {
  return (
    <StyledNotFound>
      {/* <img src={require('assets/image/maintenance.svg')} alt="" /> */}
      <Title>We’ll back soon!</Title>
      <Text>
        Sorry for the inconvenience but we’re performing some maintenance at the moment, You can contact us on{' '}
        {/* <span style={{ color: colors.primary }}>info@carrergig.com</span>{' '} */}
      </Text>
    </StyledNotFound>
  )
}
