import React from 'react'
import { css } from '@emotion/core'

const style = css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 5%;
  background: #000;
  opacity: 0.1;
  transition: all 300ms 0s ease;

  li {
    display: none;
  }

  button {
    width: 100%;
    font-size: 1.5rem;
  }

  &:hover {
    width: 20%;
    opacity: 0.2;

    li {
      display: block;
    }
  }
`

const HoverMenu = () => {
  return (
    <ul css={style}>
      <li>
        <button>Top</button>
      </li>
      <li>
        <button>Else</button>
      </li>
    </ul>
  )
}

export default HoverMenu
