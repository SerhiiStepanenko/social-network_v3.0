import React from "react";
import s from './Users.module.css'
import UserItem from "./userItem/UserItem";

const Users = (props) => {
    if(props.usersPage.users.length === 0){
        props.setUsers([
                {
                    id: '01',
                    name: 'Brad Pit',
                    ava: 'https://cdn.britannica.com/w:400,h:300,c:crop/61/137461-050-BB6C5D80/Brad-Pitt-2008.jpg',
                    status: 'I am Brad Pit',
                    following: false,
                    location: {country: 'USA', city: 'New York'}
                },
                {
                    id: '02',
                    name: 'Dwayne Johnson',
                    ava: 'https://i.imgur.com/EBKeOQb.jpg',
                    status: 'I am Dwayne Johnson',
                    following: true,
                    location: {country: 'USA', city: 'New York'}
                },
                {
                    id: '03',
                    name: 'Anna Paquin',
                    ava: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F08%2Fx-men-rogue_0_0_0.jpg&q=85',
                    status: 'I am Anna Paquin',
                    following: false,
                    location: {country: 'USA', city: 'New York'}
                },
                {
                    id: '04',
                    name: 'Kate Hudson',
                    ava: 'https://www.kino-teatr.ru/acter/photo/1/0/59301/44655.jpg',
                    status: 'I am Kate Hudson',
                    following: false,
                    location: {country: 'USA', city: 'New York'}
                },
            ],
        )
    }
debugger
    return (
        <div className={s.container}>
            {props.usersPage.users.map(u => (
                <UserItem id={u.id}
                          key={u.id}
                          ava={u.ava}
                          name={u.name}
                          status={u.status}
                          following={u.following}
                          unfollow={props.unfollow}
                          follow={props.follow}/>
            ))}
        </div>
    )
}

export default Users