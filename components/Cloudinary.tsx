import React from 'react'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

export const Cloudinary = () => {
    const myImage = new CloudinaryImage('sample', {cloudName: 'hq7g6wuwh'}).resize(fill().width(100).height(150));
  return (
    <>
      {myImage}
    </>
  )
}
