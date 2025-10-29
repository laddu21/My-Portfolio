// Test script for the intelligent chatbot
const http = require('http');

const testMessages = [
    "hello",
    "what are your skills",
    "tell me about your projects",
    "what is your experience",
    "how can I contact you",
    "what technologies do you know",
    "where are you located",
    "what is your age"
];

function testChatbot(message) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({ message });

        const options = {
            hostname: 'localhost',
            port: 5000,
            path: '/api/chat',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    resolve({ message, response: response.response });
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(postData);
        req.end();
    });
}

async function runTests() {
    console.log('Testing Intelligent Chatbot...\n');

    for (const message of testMessages) {
        try {
            const result = await testChatbot(message);
            console.log(`Q: ${result.message}`);
            console.log(`A: ${result.response}\n`);
        } catch (error) {
            console.error(`Error testing "${message}":`, error.message);
        }
    }
}

runTests();