// import { query } from 'convex/server';
import {query} from './_generated/server';

async function createUserRecord(username,email,phone ,location,fullname,bio, profileImage,  authId = {}) {
  await query('users').insert({
    username,
    email,
    phone ,
     location,
    fullname,
    bio,
    profileImage, 
    authId
  });
}


