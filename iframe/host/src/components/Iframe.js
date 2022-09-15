import React from 'react';
import PropTypes from 'prop-types';

export default function Iframe({ src }) {
  const resizeIframe = () => {
    // obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
  return (
    <iframe src={src} frameBorder="0" height="100%" width="100%" onLoad={resizeIframe} />
  );
}

Iframe.propTypes = {
  src: PropTypes.string
};