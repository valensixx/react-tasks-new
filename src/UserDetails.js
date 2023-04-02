import { useState } from "react";
import React from "react";
import UserDetailsProps from "./UserDetailsProps";

/*
 Create component UserDetails with one user.
 The user has name, age, and list with interests(arr['string'])
 In tag h2 is shown name and age. In ul is shown list with interests
*/

export default function UserDetails() {
    const [users, setUsers] = useState([
        { name: 'Gosho', age: 20, interests: ['js', 'react', 'php'] },
        { name: 'Stefcho', age: 22, interests: ['chess', 'movies', 'mj'] },
    ]);
    return (
        <div>
            {users.map(user =>
                <UserDetailsProps
                    name = {user.name}
                    age = {user.age}
                    interests = {user.interests}
                />
            )}
        </div>
    );
};