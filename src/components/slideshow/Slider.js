import React, { useState, useEffect, useRef, useCallback } from 'react'
import { css, jsx } from '@emotion/react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

/**
 * @function Slider
 */
const Slider = () => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })

  const { translate, transition } = state

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {/* */}
      </SliderContent>
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider;
