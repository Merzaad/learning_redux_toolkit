/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import './calculator.css'
import { Button, ButtonGroup } from '@mui/material'
import { setColor, selectColor } from '../calculator/calculatorSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

function CalculatorSetting() {
  const dispatch = useAppDispatch()
  const buttons = [
    <Button key="one" onClick={() => dispatch(setColor('rgb(0, 255, 255)'))}>
      blue
    </Button>,
    <Button key="two" onClick={() => dispatch(setColor('rgb(255, 255, 255)'))}>
      white
    </Button>,
    <Button key="three" onClick={() => dispatch(setColor('mediumspringgreen'))}>
      green
    </Button>,
  ]
  return (
    <div className="calculatorSetting">
      <div>
        <ButtonGroup
          variant="outlined"
          color="inherit"
          sx={{ color: useAppSelector(selectColor) }}
          size="large"
          aria-label="small button group"
        >
          {buttons}
        </ButtonGroup>
      </div>
    </div>
  )
}

export default CalculatorSetting
