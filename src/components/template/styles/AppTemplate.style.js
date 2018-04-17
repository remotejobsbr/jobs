import styled from 'react-emotion'

export const Container = styled('div')`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`

export const ChildrenContainer = styled('div')`
  overflow-y: auto;
  max-height: calc(100vh - 56px);
  box-sizing: border-box;
`

export const BottomContainer = styled('div')`
  position: fixed;
  width: 100%;
  bottom: 0;
`
