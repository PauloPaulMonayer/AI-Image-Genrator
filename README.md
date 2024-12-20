#AI Image Generator

This project is a web application that allows users to generate images using the OpenAI API. Users can describe the desired image, choose its size, and the application will fetch and display the generated image.

## Features

- Input a text prompt to describe the desired image.
- Choose the size of the image (Small, Medium, Large).
- Display generated images directly on the webpage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/download/) installed on your machine.
- An OpenAI API key. You can get it by signing up on the [OpenAI website](https://beta.openai.com/signup/).
- `npm` or `yarn` package manager.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add your OpenAI API key:

   ```env
   PORT=5000
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the server:**

   For production:

   ```bash
   npm start
   ```

   For development with live reloading:

   ```bash
   npm run dev
   ```

5. **Open the application:**

   Navigate to `http://localhost:5000` in your browser.

## Project Structure

```plaintext
.
├── .env                # Environment variables
├── index.js            # Entry point of the server
├── routes
│   └── openaiRoutes.js # Routes for OpenAI API requests
├── controllers
│   └── openaiController.js # Controller logic for OpenAI API
├── public
│   ├── css
│   │   ├── style.css   # Styling
│   │   └── spinner.css # Spinner styles
│   ├── js
│   │   └── main.js     # Frontend logic
│   └── index.html      # HTML template
└── package.json        # Dependencies and scripts
```

## Usage

1. Enter a description in the input field (e.g., "A futuristic city at sunset").
2. Select the desired image size from the dropdown.
3. Click the **Generate** button.
4. The generated image will be displayed below the input form.

## Built With

- Node.js
- Express
- OpenAI API
- HTML, CSS, JavaScript

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon) (for development)

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Acknowledgments

- [Traversy Media](https://www.youtube.com/@TraversyMedia) for the tutorial video.
- [OpenAI](https://beta.openai.com/) for the API.

Feel free to contribute or suggest improvements!
