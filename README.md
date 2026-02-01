# 🤖 AI-Powered Telegram Bot

A robust and responsive Telegram bot built with Node.js that leverages the **Groq API** to provide intelligent, conversational AI responses. This project integrates the `Telegraf` framework with an Express server, creating a seamless interface for users to interact with advanced LLMs directly through Telegram.

## 🚀 Features

- **Intelligent Conversations**: Uses Groq's high-speed inference API to generate helpful and context-aware responses.
- **Real-time Interaction**: Simulates typing actions (`ctx.telegram.sendChatAction`) for a natural user experience.
- **Express Server integration**: Includes a built-in Express server for health checks and potential future webhook expansions.
- **Secure Configuration**: Uses environment variables for sensitive keys and tokens.
- **CORS Enabled**: Configured with CORS support for development flexibility.

## 🛠️ Tech Stack

- **[Node.js](https://nodejs.org/)**: Runtime environment.
- **[Telegraf](https://telegraf.js.org/)**: Modern Telegram Bot Framework for Node.js.
- **[Express](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[Axios](https://axios-http.com/)**: Promise based HTTP client for the browser and node.js.
- **[Groq API](https://groq.com/)**: Ultra-fast AI inference.

## 📋 Prerequisites

Before you begin, ensure you have the following:

- **Node.js** (v14 or higher recommended)
- **npm** (Node Package Manager)
- A **Telegram Bot Token** (Get one from [@BotFather](https://t.me/BotFather))
- A **Groq API Key** (Get one from the [Groq Console](https://console.groq.com/))

## ⚙️ Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd telegraf-ai-bot
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory of the project. You can copy the structure below:

    ```env
    # Telegram Bot Token obtained from BotFather
    token=YOUR_TELEGRAM_BOT_TOKEN_HERE

    # Groq API Key for AI autocompletion
    GROQ_API_KEY=YOUR_GROQ_API_KEY_HERE

    # Port for the Express server
    port=3000
    ```

## ▶️ Usage

### Development Mode
To start the bot in development mode with `nodemon` (auto-restarts on file changes):

```bash
npm run dev
```

You should see the output:
```
running on port 3000
bot started
```

### Production
(If a start script is added later, typically `node src/server.js`)

## 🤖 Interaction

1.  Open your bot in Telegram.
2.  Click **Start** or send `/start`. The bot will greet you:
    > "hi [Name], how can i help you?"
3.  Send any text message. The bot will show a "typing..." status while fetching the response from Groq, and then reply with the AI-generated answer.

## 📂 Project Structure

```
├── node_modules/       # Dependencies
├── src/
│   └── server.js       # Main entry point: Bot logic & Express server
├── .env                # Environment variables (not committed)
├── .gitignore          # Files to ignore in git
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the **ISC License**.
