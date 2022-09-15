import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet-async';
import React, { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

// const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <>
    {/* <Helmet>
      <title>{`${title} | Minimal-UI`}</title>
      {meta}
    </Helmet> */}
    <div>
      <title>{`${title} | Minimal-UI`}</title>
    </div>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.displayName = "Page";

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
