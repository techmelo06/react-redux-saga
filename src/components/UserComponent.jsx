import React, { useEffect } from "react";

// COMPONENTS
import Card from "./CardComponent";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers([{
            id: 101,
            name: 'Usama Ikraam',
            company: {
                name: 'Smart Code Solutions',
                catchPhrase: 'Multi-layered, client-server neural-net'
            }
        }]))
    }, []);

    return (
        <>
            {users.length > 0 && users.map((user) => (
                <Card user={user} key={user.id} />
            ))}
            {users.length === 0 && <p>No users available!</p>}
        </>
    )
}

export default Users;