import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './userSlice';

const UserData = () => {
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    const handleReload = () => {
        dispatch(fetchUserData());
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No user data available.</p>;

    return (
        <div>
            <h1>User Data</h1>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Username: {data.username}</p>
            <button onClick={handleReload}>Load Random User</button>
        </div>
    );
};

export default UserData;
