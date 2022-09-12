import React from "react";

const List = (birthday) => {
  const peoples = birthday.birthday;
  return peoples.map((people) => {
    return (
      <article className="person" key={people.id}>
        <img src={people.image} alt={people.name} />
        <div>
          <h4>{people.name}</h4>
          <p>{people.age}</p>
        </div>
      </article>
    );
  });
};

export default List;
