import React from 'react'

function FilterBar(props) {
  const { tags, setTags } = props

  return (
    <>
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <button
        className="btn btn-success"
        onClick={() => {
          setTags([])
        }}
      >
        重設
      </button>
      <hr />

      <h4>依標籤</h4>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            checked={tags.includes('大螢幕')}
            onChange={() => {
              if (tags.includes('大螢幕')) {
                const newTags = tags.filter((tag) => tag !== '大螢幕')
                setTags(newTags)
              } else {
                const newTags = [...tags, '大螢幕']
                setTags(newTags)
              }
            }}
          />{' '}
          大螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            checked={tags.includes('小螢幕')}
            onChange={() => {
              if (tags.includes('小螢幕')) {
                const newTags = tags.filter((tag) => tag !== '小螢幕')
                setTags(newTags)
              } else {
                const newTags = [...tags, '小螢幕']
                setTags(newTags)
              }
            }}
          />{' '}
          小螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            checked={tags.includes('蘋果')}
            onChange={() => {
              if (tags.includes('蘋果')) {
                const newTags = tags.filter((tag) => tag !== '蘋果')
                setTags(newTags)
              } else {
                const newTags = [...tags, '蘋果']
                setTags(newTags)
              }
            }}
          />{' '}
          蘋果
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            checked={tags.includes('安卓')}
            onChange={() => {
              if (tags.includes('安卓')) {
                const newTags = tags.filter((tag) => tag !== '安卓')
                setTags(newTags)
              } else {
                const newTags = [...tags, '安卓']
                setTags(newTags)
              }
            }}
          />{' '}
          安卓
        </label>
      </div>
      <div className="padding"></div>
    </>
  )
}

export default FilterBar
