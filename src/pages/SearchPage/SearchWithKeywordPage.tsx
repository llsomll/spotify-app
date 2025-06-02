import React from 'react'
import { useParams } from 'react-router-dom'

const SearchWithKeywordPage = () => {
    const { keyword } = useParams<{ keyword: string }>()

  return (
    <div>
      SearchWithKeywordPage: {keyword}
    </div>
  )
}

export default SearchWithKeywordPage
