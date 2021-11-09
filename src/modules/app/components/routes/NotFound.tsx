import * as React from 'react'
import styled from 'styled-components'

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
      {/* <img src={require('assets/image/page-not-found.svg')} alt="" /> */}
      <Title>Page Not Found</Title>
      <Text>The page you are looking for was moved, removed, renamed or might never existed</Text>
    </StyledNotFound>
  )
}
