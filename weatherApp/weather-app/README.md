# Weather App

This is a simple weather application that fetches and displays weather information based on user input. The app is built using HTML, JavaScript, and styled with Tailwind CSS for a responsive design.

## Project Structure

```
weather-app
├── src
│   ├── index.html       # Main HTML file with Tailwind CSS
│   └── script.js        # JavaScript file for fetching weather data
├── package.json         # npm configuration file
├── tailwind.config.js   # Tailwind CSS configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies:**
   If you are using npm, run:
   ```bash
   npm install
   ```

3. **Build Tailwind CSS:**
   If you are using Tailwind CSS via npm, make sure to build your CSS using:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

4. **Open the application:**
   Open `src/index.html` in your web browser to view the application.

## Usage

- Enter a city name in the input field and click the "Get Weather" button to fetch the current weather data.
- The weather information will be displayed dynamically on the page.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.