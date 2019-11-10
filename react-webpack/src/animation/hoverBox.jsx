import React from 'react'
import { css } from '@emotion/core'

const HoverBox = () => {
  return (
    <div
      css={css({
        width: '2%',
        height: '100vh',
        background: '#000',
        opacity: 0.1,
        transition: 'all 300ms 0s ease',

        ':hover': {
          width: '15%',
          opacity: 1
        }
      })}
    ></div>
  )
}

export default HoverBox
