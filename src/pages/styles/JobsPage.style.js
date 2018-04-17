import { css } from 'emotion'

export const container = css`
  background: rgba(65, 98, 103, 0.2);
  min-height: 100vh;
`

export const jobTitle = css`
  text-align: center;
  margin-top: -0.5em;
`
export const jobNotice = css`
  margin: 2em;
  text-align: center;
`

export const contentContainer = css`
  padding: 1.5em;

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    padding: .5em 0;
    border-bottom: 1px solid #CCC;
  }

  h1 {
    font-size: 1.6em;
  }
  
  h2 {
    font-size: 1.2em;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 100%;
  }

  li {
    padding-left: 1.5em;
    margin-bottom: .7em;
    text-indent: -.7em;
    word-wrap: break-word;
  }

  li::before {
    content: "• ";
    color: rgb(0, 188, 212);
`
