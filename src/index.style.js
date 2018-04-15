import emotionNormalize from 'emotion-normalize'
import { injectGlobal } from 'emotion'

injectGlobal`
  ${emotionNormalize}
`

injectGlobal`
  * {
    font-family: 'Roboto', sans-serif;
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

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`
