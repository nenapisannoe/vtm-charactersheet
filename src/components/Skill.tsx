import React from 'react'

function Skill(props: {
  classes?: string
  checked?: boolean
  onChange: (arg0: string | boolean) => void
}) {
  let classes = 'd-and-d-skill'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes}>
      <div
        className={
          props.checked ? 'vtm-skill-circle active' : 'vtm-skill-circle'
        }
        onClick={() => props.onChange(!props.checked)}
      />
    </div>
  )
}

export default Skill