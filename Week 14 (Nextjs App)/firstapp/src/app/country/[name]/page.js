import React from 'react'

const SearchedPage = ({ params }) => {

  console.log(params);
  return (
    <div>{params.name}</div>
  )
}

export default SearchedPage