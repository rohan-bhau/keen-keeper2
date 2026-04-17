import React from 'react'

const FriendDetailPage = async({ params }) => {
    const {id} = await params
    console.log(id, "id")
  return (
    <div>
      this is detail page
    </div>
  )
}

export default FriendDetailPage
