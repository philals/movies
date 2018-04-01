import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MovieTile from "../components/MovieTile/MovieTitle"

import './index.scss';
import "font-awesome/scss/font-awesome.scss";
import './global.scss';

import Header from '../components/Header'

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
