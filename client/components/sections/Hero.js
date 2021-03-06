import React, { useState } from 'react'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'
import ButtonGroup from '../elements/ButtonGroup'
import Button from '../elements/Button'
import Image from '../elements/Image'
import Modal from '../elements/Modal'

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setVideomodalactive(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setVideomodalactive(false)
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16">
              Analysts for your{' '}
              <span className="text-color-primary">Social Media</span>
            </h1>
            <div className="container-xs">
              <p className="mb-50" align="left">
                Does content creation sound like something you might be interested in?
                It doesn't have to be a difficult process. We are here to help you navigate
                your personal profile at no cost. Learn about your engagement. Grow your 
                platform. Sociol –– bridging social media and content creation.
              </p>
              <div>
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/login">
                    Get Started
                  </Button>
                  {/* <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    View on Github
                  </Button> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
