
import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
const NotFoundPage = () => {

  return (
    <div className="errorPage">
      <div>
        <div className="errorPage__content">
          <RoughNotationGroup show={true}>
            <RoughNotation
              color='darkorchid'
              type="underline"
            >
              <h2 className="errorPage__text1">Sorry !.</h2>
            </RoughNotation>
            <RoughNotation
              type='bracket'
              color='darkorchid'
              padding={[2, 10]}
              brackets={['left', 'right']}
              strokeWidth={3}
            >
              <p className="errorPage__text2">Error </p>
            </RoughNotation>
            <RoughNotation
              type='highlight'
              color='darkcyan'
              iterations={1}
              multiline={true}
            >
              <p className="errorPage__text3">404</p>
            </RoughNotation>
            <RoughNotation
              type='strike-through'
              color='blueviolet'
              padding={10}
            >
              <h4 className="errorPage__text4">Page not found</h4>
            </RoughNotation>
          </RoughNotationGroup>
        </div>
      </div>
    </div>
  )

};

export default NotFoundPage
