import React from 'react'
import { ShimmerPostList } from 'react-shimmer-effects'

const Shimmer = () => {
  return (
    <div>
        <ShimmerPostList postStyle="STYLE_TWO" col={3} row={2} gap={20} />
    </div>
  )
}

export default Shimmer