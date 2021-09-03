import React from 'react'
import ImageLoader from '../ImageLoader'

export default function Skill({item}) {
    const {title, imgFilePath} = item
    return (
      <div>
        <ImageLoader filePath={imgFilePath} />
        <caption>{title}</caption>
      </div>
    );
}
