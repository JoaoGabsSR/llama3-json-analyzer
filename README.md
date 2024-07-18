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

This a simple application where you can send only json file with this formatting:

```json
{
  "prompt": "",
  "data": ""
}
```

If it's your preference you can use the file in folder json.&nbsp;&nbsp;
The response it usually takes a while, because the response from the AI is calculated and based in the your desktop processor capacity and ram memory.

## Routes

This application in the moments has a only route:

```bash
  /json/upload
```

To send the json you can use a client of your preference, to send this, you can use multipart form with file and its variable name must be "file".
Response:

```json
  { response: string }
```

Remenber if you running this application in your desktop the base route is:

```bash
  http://localhost:3000
```

You can alter the port of the application adding a .env file based on .env.example in root in this project.
