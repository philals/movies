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
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {/* <div
      style={{
        // margin: '0 auto',
        // // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        // paddingTop: 0,
      }}
    > */}
      {children()}
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
