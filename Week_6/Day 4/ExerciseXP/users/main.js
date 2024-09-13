// main.js
import { getUsers } from './info.js';

async function displayUsers() {
    try {
        const users = await getUsers();
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

displayUsers();
