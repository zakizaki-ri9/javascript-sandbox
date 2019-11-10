import React from 'react'
import { css } from '@emotion/core'

const HoverBox = () => {
  return (
    <div
      css={css({
        width: '100px',
        height: '100px',
        background: '#000',

        ':hover': {
          background: '#ccc',
          width: '300px'
        }
      })}
    ></div>
  )
}

export default HoverBox
