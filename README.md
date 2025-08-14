# Next.js User Data Display 🚀

This project is a simple Next.js application that demonstrates fetching and displaying user data from a serverless API endpoint. It showcases a basic setup for a Next.js application with a focus on data fetching and presentation. It provides a foundational structure for building more complex applications with data integration.

## 🚀 Key Features

- **Data Fetching:** Fetches user data from a local API endpoint using `axios`.
- **Serverless API:** Implements a serverless API route using Next.js API routes to serve user data.
- **Dynamic Rendering:** Dynamically renders user information (name and email) on the homepage.
- **Font Integration:** Uses Geist Sans and Geist Mono fonts for a modern and readable UI.
- **Clean UI:** Presents the data in a simple, centered, and bordered container for easy readability.
- **SEO-Friendly:** Includes metadata for improved search engine optimization.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - Next.js
    - Axios
- **Backend:**
    - Next.js API Routes (Serverless Functions)
- **Styling:**
    - Global CSS
- **Fonts:**
    - Geist Sans (Google Fonts)
    - Geist Mono (Google Fonts)
- **Build Tools:**
    - Node.js
    - npm or yarn

## 📦 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/GeekNoob04/nextjs-backend-cohort
    cd <project_directory>
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev  # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 💻 Usage

The application will automatically fetch user data from the `/api/user` endpoint and display it on the homepage.  You can modify the data returned by the API in `app/api/user/route.ts` to see the changes reflected in the UI.

## 📂 Project Structure

```
├── app
│   ├── api
│   │   └── user
│   │       └── route.ts       # API route for user data
│   ├── layout.tsx            # Root layout for the application
│   └── page.tsx              # Main page (homepage)
├── next.config.ts            # Next.js configuration file
├── public
│   └── favicon.ico           # Favicon
├── styles
│   └── globals.css           # Global CSS styles
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── tsconfig.json             # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [harshitbudhraja0@gmail.com](mailto:harshitbudhraja0@gmail.com).

## 💖 Thanks Message

Thank you for checking out this project! I hope it's helpful as a starting point for your Next.js development journey.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/)
