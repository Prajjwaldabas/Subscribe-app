// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    // Define authentication providers here (e.g., GitHub, Google, or your custom provider)
  ],
  // Other configuration options
});
