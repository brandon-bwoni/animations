
import React from 'react'

const Icon = () => {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="200" height="120" fill="white" />
  <path 
    d=" M70 20 L70 80 Q70 100 50 100 Q30 100 30 80"
    fill="none"
    stroke="black"
    stroke-width="8"
    stroke-linecap="round"
  />
  <path
    d="
      M85 20
      L85 100
      M85 20
      L115 20
      Q145 40 105 55
      L70 55
      M90 55
      L110 55
      Q145 85 115 100
      L85 100
    "
    fill="none"
    stroke="black"
    stroke-width="8"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
  )
}

export default Icon