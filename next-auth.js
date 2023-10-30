// next-auth.js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: {  label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Add your custom authentication logic here, such as checking the credentials against your database.
        // If authentication is successful, return the user object; if not, return null.
        const user = {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
        };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
});
