import React from 'react';

const List = ({persons}) => {
  return (
    <>
    {persons.map((person)=>{
  console.log(person, "person")
    })}
    </>
  );
};

export default List;
