import React from 'react'

const SearchList = ({ searchList }) => {
  console.log(searchList);

  return (
    <ul>
      {searchList.map((item) => (
        <li key={item._id}>
           <p>{item.username}</p>
        </li>
      ))}
    </ul>
  )
}

export default SearchList