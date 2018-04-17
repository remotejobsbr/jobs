import emotionNormalize from 'emotion-normalize'
import { injectGlobal } from 'emotion'

injectGlobal`
  ${emotionNormalize}
`

injectGlobal`
  a {
    color: rgb(0, 188, 212);
  }

  * {
    font-family: 'Roboto', sans-serif;
    color: #444;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
`
