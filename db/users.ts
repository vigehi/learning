import { defineSchema, ConvexModel } from 'convex/schema';

export default defineSchema({
  username: {
    type: 'string', 
    unique: true,
    required: true 
  },
  email: {
    type: 'string',
    unique: true,
    required: true
  }, 
  phone: {
    type: 'string', 
    unique: true,
    required: true 
  },

  location: {
    type: 'string',
    required: true 
  },
  fullname: {
    type: 'string',
    required: true
  },
  bio: {
    type: 'string',
    optional: true, 
  },
  profileImage: {
    type: 'string',
    optional: true,
  },

 
  authId: {
    type: 'string',
  },
});
