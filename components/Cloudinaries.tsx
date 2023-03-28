import React from 'react'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {Cloudinary} from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';

export const Cloudinaries = () => {
    const cld = new Cloudinary({
      cloud: {
          cloudName: 'hq7g6wuwh'
      }
      });
    const myImage = cld.image('p_crwtbg'); 

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(150).height(150));

    // Render the image in a React component.
    return (
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    )
}
