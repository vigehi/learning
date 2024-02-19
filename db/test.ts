import { query } from './../convex/_generated/server';

async function testQuery() {
    // Some example Convex query...
    const allUsers = await query('users').collect();
    console.log(allUsers);
}

testQuery(); // Call the test function
