# ClipboardCopy

A simple React component to copy text to the clipboard.

## Overview

This component provides a user interface with an input field and a copy button. When the user clicks the copy button, the text in the input field is copied to the system clipboard. A success or failure message is displayed using an alert.

## Features

-   Allows users to input and edit text.
-   Provides a button to copy the current text to the clipboard.
-   Displays a visual confirmation (alert) upon successful or failed copy attempts.
-   Utilizes the `navigator.clipboard.writeText()` API for clipboard interaction.
-   Styled with Tailwind CSS for a clean and modern look.
-   Includes a `ClipboardIcon` from Heroicons for a visual cue.

## Installation

1.  Make sure you have Node.js and npm (or yarn) installed on your system.
2.  Create a new React project (if you haven't already) using your preferred method, for example:

    ```bash
    npx create-react-app clipboard-app
    cd clipboard-app
    ```

3.  Install the necessary dependencies:

    ```bash
    npm install react @heroicons/react tailwindcss postcss autoprefixer
    # or with yarn
    yarn add react @heroicons/react tailwindcss postcss autoprefixer
    ```

4.  Configure Tailwind CSS in your project. Follow the instructions on the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation). This typically involves modifying your `tailwind.config.js` and `postcss.config.js` files, and adding the Tailwind directives to your main CSS file (e.g., `index.css` or `App.css`).

5.  Create a `components` folder in your `src` directory (if it doesn't exist).
6.  Create a file named `ClipboardCopy.js` inside the `components` folder and paste the provided React code into it.

## Usage

1.  Import the `ClipboardCopy` component into the component or page where you want to use it:

    ```jsx
    import ClipboardCopy from './components/ClipboardCopy';
    ```

2.  Render the `ClipboardCopy` component in your JSX:

    ```jsx
    function App() {
      return (
        <div className="App">
          <ClipboardCopy />
        </div>
      );
    }

    export default App;
    ```

3.  Run your React application:

    ```bash
    npm start
    # or with yarn
    yarn start
    ```

    You should now see the Clipboard Copy component in your application. You can type text into the input field and click the clipboard icon to copy it.

## Code Explanation

-   `useState("npm create vite@latest")`: Initializes a state variable `text` with the default value "npm create vite@latest". This is the text that will be displayed in the input field initially.
-   `copyToClipboard`: An asynchronous function that uses the `navigator.clipboard.writeText(text)` method to write the current value of the `text` state to the clipboard.
    -   It uses a `try...catch` block to handle potential errors during the clipboard writing process.
    -   If the copy is successful, it displays an alert with a success message ("✅ Text Copied!").
    -   If an error occurs, it displays an alert with a failure message ("❌ Copy Failed!").
-   The `return` statement renders the UI:
    -   A `div` with Tailwind CSS classes for styling (flex layout, centering, padding, background color, minimum height, text color).
    -   An `h2` for the title "Clipboard Copy".
    -   Another `div` containing the input field and the copy button, styled with Tailwind CSS for layout and appearance.
    -   An `input` element:
        -   `type="text"`: Specifies it's a text input field.
        -   `value={text}`: Binds the input field's value to the `text` state.
        -   `onChange={(e) => setText(e.target.value)}`: Updates the `text` state whenever the user types in the input field.
        -   Styled with Tailwind CSS for background, text color, padding, rounded corners, and width.
        -   `outline-none`: Removes the default browser outline on focus.
    -   A `button` element:
        -   `onClick={copyToClipboard}`: Calls the `copyToClipboard` function when the button is clicked.
        -   Styled with Tailwind CSS for padding, background color, hover effect, and rounded corners.
        -   Contains a `ClipboardIcon` component from `@heroicons/react/24/solid` for a visual representation of the copy action, styled with Tailwind CSS for size and color.

## Contributing

Feel free to contribute to this simple component by submitting pull requests with improvements or bug fixes.

