import "font-awesome/scss/font-awesome.scss";
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import './global.scss';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Phil's Movie List"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
