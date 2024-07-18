# Json Analyzer with LLama3

## Preparing Environment for Application

- Go to the official LLama3 website [here](https://ollama.com/).
- Download the version based on your operating system.
- Clone this repo and type the following commands in the terminal:

```bash
# Clone the repository
git clone https://github.com/JoaoGabsSR/llama3-json-analyzer.git

# Navigate to the project directory
cd json-analyzer-with-llama3

# Install dependencies
yarn

# Start the application
yarn start:dev
```

## About the Application

This is a simple application where you can send only JSON files with this format:

```JSON
{
  "prompt": "",
  "data": ""
}
```

If you prefer, you can use the file in the json folder. The response usually takes a while because the AI's response time depends on your desktop's processor capacity and RAM memory.

## Routes

This application currently has only one route:

```bash
  /json/upload
```

To send the JSON, you can use a client of your choice. Use multipart form with the file, and its variable name must be "file".
Response:

```JSON
  { "response": "string" }
```

Remember, if you are running this application on your desktop, the base route is:

```bash
  http://localhost:3000
```

You can change the application's port by adding a .env file based on .env.example in the root of this project.
