# Assignment of Course Module 16

This project is a dynamic frontend for an agency website built using Next.js 13.

## <a href="https://assignment-module-16.vercel.app" target="_blank" rel="noopener noreferrer">SEE DEMO</a>

## Dynamic Sections

1. **Site Metadata for All Pages**
   - Generated metadata for consistent information across all pages.

2. **Home Page**
   - The home page is composed of various dynamic sections:
     - **Hero List**
     - **Brand List**
     - **Featured Work List**
     - **Statistics**
     - **Featured Projects**

3. **Team Page**
   - Information about the team members, social link and their bio.

4. **Services Page**
   - List of the services provided by the agency.

5. **Projects Page**
   - Showcase of the agency's projects.

6. **Testimonials Page**
   - Collection of client testimonials.

## Project Structure

The project structure is organized to maintain a clean and understandable codebase:

- `src/components/`: Contains React components used across the application.
- `src/app/`: Utilizing Next.js 13's app router, this directory organizes the application's pages. Each directory containing `page.jsx` corresponds to a route, and the folder structure within this directory helps define nested routes.
- `public/`: Houses static assets such as images, fonts, etc.
- `src/utilities/`: Holds utility files for the application. In this directory, `api.js` file contains helper functions for api fetch.

## How to Run

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Copy `.env.example` file to `.env` and configure required environment variables.
4. Run the development server: `npm run dev`.