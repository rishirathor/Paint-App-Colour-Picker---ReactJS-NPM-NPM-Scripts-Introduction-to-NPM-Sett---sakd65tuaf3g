import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})}>
      {lable}
    </button>
  )
}
export default ColourSelector;
