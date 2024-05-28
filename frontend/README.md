# PT Spanish

PT Spanish is a language learning app designed specifically for physical therapy clinicians who want to communicate effectively with Spanish-speaking patients. The app offers a specialized curriculum of vocabulary words and phrases commonly used during treatment sessions. Additionally, users can add their own words to the app and practice them, and they can also compile a list of words for review to get more focused practice.

## Features

- **Specialized Curriculum**: Predefined vocabulary focused on physical therapy.
- **Custom Words**: Add personal vocabulary words that you want to learn.
- **Review Section**: Add words to a review list for more focused practice.
- **Authentication**: Secure login using Google OAuth.
- **Advanced AI Integration**: Utilizes OpenAI API for intelligent features.
- **User-friendly Interface**: Styled with Tailwind CSS for a clean and responsive design.
- **Built with Modern Technologies**: Developed using React and Vite for fast and efficient performance.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **OpenAI API**: Provides advanced AI capabilities.
- **Google OAuth**: Secure authentication.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.
- OpenAI API key.
- Google OAuth credentials.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/pt-spanish.git
   cd pt-spanish


2. **Install dependencies**:

    ```bash
    npm install

3. **Set up environment variables**:
Create a .env file in the root directory and add your OpenAI API key and Google OAuth credentials.

    ```bash

    VITE_OPENAI_API_KEY=your_openai_api_key
    VITE_GOOGLE_CLIENT_ID=your_google_client_id

### Running the App
1. **Start the development server**:
    
        npm run dev

2. **Open your browser and visit**:

    ```arduino

    http://localhost:5173

## Usage
    - Login: Use Google Auth to sign in securely.
    - Browse Curriculum: Explore predefined vocabulary words and phrases.
    - Add Custom Words: Add new words that you want to learn.
    - Review Words: Add words to the review section for focused practice.

    

## Acknowledgements
OpenAI for providing the AI API.
Google for the OAuth service.
Tailwind CSS for the styling framework.
React and Vite for the development tools.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Getting Started
To integrate the OpenAI API into your own application, you'll need to sign up for an API key on the OpenAI website (https://openai.com/api). Once you have your API key, you can follow the documentation provided by OpenAI to start making API calls and accessing the various features available.