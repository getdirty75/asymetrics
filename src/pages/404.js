
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
              <h2 className="errorPage__text1">Revolutionary is our baseline.</h2>
            </RoughNotation>
            <RoughNotation
              type='bracket'
              color='darkorchid'
              padding={[2, 10]}
              brackets={['left', 'right']}
              strokeWidth={3}
            >
              <p className="errorPage__text2">Different is our first step.</p>
            </RoughNotation>
            <RoughNotation
              type='highlight'
              color='darkcyan'
              iterations={1}
              multiline={true}
            >
              <p className="errorPage__text3">And radical means we’re just getting started.</p>
            </RoughNotation>
            <RoughNotation
              type='strike-through'
              color='blueviolet'
              padding={10}
            >
              <h4 className="errorPage__text4">We are asymetrics.</h4>
            </RoughNotation>
          </RoughNotationGroup>
        </div>
      </div>
    </div>
  )

};

export default NotFoundPage
