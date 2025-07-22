# 🌟 Droply - Secure Cloud Storage Platform

**Droply** is a modern, secure cloud storage platform built with Next.js, designed specifically for image storage and management. Store your images with energy - Unleash. Secure. Fast.

## 🚀 Features

- **🔐 Secure Authentication** - Powered by Clerk for robust user management
- **📸 Image Storage** - Seamless integration with ImageKit for optimized image handling
- **📁 File Management** - Create folders, organize files, and manage your storage
- **⭐ File Operations** - Star important files, move to trash, and restore
- **🎨 Modern UI** - Beautiful, responsive interface built with HeroUI and Tailwind CSS
- **🌙 Dark Theme** - Sleek dark theme with lime accent colors
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **UI Framework**: HeroUI (NextUI successor), Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL with Neon
- **ORM**: Drizzle ORM
- **Image Storage**: ImageKit
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom lime theme

## 📦 Project Structure

```
droply-main/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── sign-in/          # Authentication pages
│   └── sign-up/
├── components/            # Reusable React components
├── lib/                  # Utilities and database
├── schemas/              # Form validation schemas
├── styles/               # Global styles
├── types/                # TypeScript type definitions
└── drizzle/              # Database migrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon recommended)
- Clerk account for authentication
- ImageKit account for image storage

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PreetKot/Droply.git
   cd droply-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the environment variables from `.env.production.template` and create a `.env` file:
   
   ```bash
   cp .env.production.template .env
   ```

   Fill in your actual values:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # ImageKit
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint

   # Database
   DATABASE_URL=your_postgresql_connection_string

   # App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🔧 Configuration

### Clerk Setup

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Configure your sign-in and sign-up pages
3. Add your domain to the allowed origins
4. Copy your publishable key and secret key

### ImageKit Setup

1. Create an ImageKit account at [imagekit.io](https://imagekit.io)
2. Get your public key, private key, and URL endpoint
3. Configure upload settings and transformations as needed

### Database Setup

1. Create a PostgreSQL database (Neon recommended)
2. Copy the connection string
3. Run migrations with `npm run db:push`

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository to Vercel**

2. **Set environment variables in Vercel**
   - Go to your project settings in Vercel
   - Add all environment variables from your `.env` file
   - Update `NEXT_PUBLIC_APP_URL` to your Vercel domain

3. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push
   ```

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
IMAGEKIT_PRIVATE_KEY
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
DATABASE_URL
NEXT_PUBLIC_APP_URL
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for seamless authentication
- [HeroUI](https://heroui.com/) for beautiful UI components
- [ImageKit](https://imagekit.io/) for powerful image management
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- [Vercel](https://vercel.com/) for effortless deployment

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact the maintainer: [PreetKot](https://github.com/PreetKot)

---

**Built with ❤️ by [PreetKot](https://github.com/PreetKot)**