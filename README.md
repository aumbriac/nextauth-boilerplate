# NextAuth Boilerplate

[https://nextauth-boilerplate-kappa.vercel.app](https://nextauth-boilerplate-kappa.vercel.app)

A simple Next.js authentication boilerplate using NextAuth.js, TypeScript, and MongoDB that uses Google and GitHub as default auth providers.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v20 or later)
- npm or yarn
- MongoDB database

## Getting Started

1. Clone the repository:

   `git clone https://github.com/aumbriac/nextauth-boilerplate.git`

   ##### then

   `cd nextauth-boilerplate`

2. Install dependencies:

   `npm install`

   ##### or

   `yarn install`

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following variables:

   ```
   MONGODB_URI=your_mongodb_connection_string
   GOOGLE_ID=your_google_client_id
   GOOGLE_SECRET=your_google_client_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

   Replace the placeholder values with your actual credentials, which can be obtained from the following sources:

   - [MongoDB](https://www.mongodb.com/cloud/atlas)
   - [Google Developers Console](https://console.developers.google.com/)
   - [GitHub Developers Settings](https://github.com/settings/developers)

   To generate the NEXTAUTH_SECRET for NextAuth, you can use the following command in your terminal:

   `openssl rand -base64 32`

4. Run the development server:

   `npm run dev`

   ##### or

   `yarn dev`

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Support

If you have any questions or need help, please open an issue in the GitHub repository.
