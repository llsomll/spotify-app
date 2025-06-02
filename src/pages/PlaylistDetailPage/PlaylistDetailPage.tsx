import React from 'react'
import { useParams } from 'react-router-dom'

const PlayListDetailPage = () => {
    const { id } = useParams<{ id: string }>()

  return (
    <div>
      PlayListDetailPage: {id}
    </div>
  )
}

export default PlayListDetailPage
