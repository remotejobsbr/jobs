import styled from 'react-emotion'

export const Container = styled('div')`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const ChildrenContainer = styled('div')`
  overflow-y: auto;
  max-height: calc(100vh - 56px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const BottomContainer = styled('div')`
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
`
