# Course Master - Frontend

A comprehensive course management platform built with Next.js, featuring admin dashboard, student learning interface, and payment integration.

## Features

-   **Admin Dashboard**: Manage courses, instructors, assignments, and view analytics
-   **Student Portal**: Interactive learning with video lessons, quizzes, and assignments
-   **Authentication**: NextAuth.js integration with Google OAuth and credentials
-   **Payment Integration**: Secure enrollment and payment processing
-   **Real-time Updates**: Redux Toolkit Query for efficient data management
-   **Responsive Design**: Tailwind CSS with shadcn/ui components

## Tech Stack

-   **Framework**: Next.js 15 with App Router
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **State Management**: Redux Toolkit with RTK Query
-   **Authentication**: NextAuth.js
-   **Forms**: React Hook Form with Zod validation
-   **UI Components**: shadcn/ui (Radix UI)
-   **Charts**: React Google Charts
-   **Icons**: Lucide React

## Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd course-master-client
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:

    ```env
    # Database
    MONGODB_URI=mongodb://localhost:27017/course-master

    # NextAuth
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-nextauth-secret

    # Google OAuth
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret

    # API Base URL
    NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

    # Payment Integration
    STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
    STRIPE_SECRET_KEY=your-stripe-secret-key

    # Cloudinary (for file uploads)
    CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret

    # YouTube API (for video integration)
    YOUTUBE_API_KEY=your-youtube-api-key
    ```

4. **Run the development server**

    ```bash
    pnpm dev
    ```

5. **Build for production**
    ```bash
    pnpm build
    pnpm start
    ```

## Available Scripts

-   `pnpm dev` - Start development server with Turbopack
-   `pnpm build` - Build for production
-   `pnpm start` - Start production server
-   `pnpm lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (adminDashboard)/   # Admin routes
│   ├── (commonLayout)/     # Student routes
│   └── api/                # API routes
├── components/             # Reusable UI components
│   ├── AdminDashboard/     # Admin-specific components
│   ├── form/              # Form components
│   └── shared/            # Shared components
├── constants/             # Application constants
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── redux/                 # Redux store and API slices
├── schemas/               # Zod validation schemas
├── services/              # External service integrations
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## Environment Variables

| Variable                   | Description                | Required |
| -------------------------- | -------------------------- | -------- |
| `MONGODB_URI`              | MongoDB connection string  | Yes      |
| `NEXTAUTH_URL`             | Base URL for NextAuth      | Yes      |
| `NEXTAUTH_SECRET`          | Secret for JWT tokens      | Yes      |
| `GOOGLE_CLIENT_ID`         | Google OAuth client ID     | Yes      |
| `GOOGLE_CLIENT_SECRET`     | Google OAuth client secret | Yes      |
| `NEXT_PUBLIC_API_BASE_URL` | API base URL               | Yes      |
| `STRIPE_PUBLISHABLE_KEY`   | Stripe publishable key     | Yes      |
| `STRIPE_SECRET_KEY`        | Stripe secret key          | Yes      |
| `CLOUDINARY_CLOUD_NAME`    | Cloudinary cloud name      | Yes      |
| `CLOUDINARY_API_KEY`       | Cloudinary API key         | Yes      |
| `CLOUDINARY_API_SECRET`    | Cloudinary API secret      | Yes      |
| `YOUTUBE_API_KEY`          | YouTube Data API key       | No       |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm lint`
5. Commit your changes
6. Push to the branch
7. Create a Pull Request
