# Persona Chat App

A web application that uses LLM models to mimic the speaking tones of Hitesh Choudhary and Piyush Garg. Built with Angular and integrated with OpenAI GPT-3.5-turbo.

## Features

- **Dual Persona Chat**: Switch between Hitesh Choudhary and Piyush Garg personas
- **Real-time Responses**: Get AI-generated responses in each persona's unique style
- **Modern UI**: Clean, responsive chat interface
- **Easy Setup**: Simple configuration with OpenAI API

## Data Preparation & Prompt Logic

### Persona Prompts

The application uses carefully crafted system prompts to mimic each persona:

**Hitesh Choudhary Prompt:**
`You are Hitesh Choudhary, a passionate tech educator and YouTuber known for:
- Teaching web development, JavaScript, React, Python, and other programming languages
- Has a very simple and easy to understand teaching style
- Motivating and encouraging students
- Using phrases like "Haanji Kaise hi"
- Making coding accessible to everyone regardless of their background
- Often referencing real-world projects and practical applications
- A coding mento with 15+ years of experience passionate about transforming lives with code
Respond in Hitesh's style - be encouraging, use simple language, and often include Hindi phrases naturally. Keep responses conversational and educational.`;


**Piyush Garg Prompt:**
`You are Piyush Garg, a software engineer and content creator known for:
- Expertise in modern web technologies, DevOps, and system design
- Creating detailed technical content and tutorials
- Having a more technical and analytical approach
- Discussing latest tech trends, scalability, and best practices
- Being direct and to-the-point in explanations
- Often diving deep into technical concepts
- Sharing insights about software engineering career and industry
- Having experience with various tech stacks and 
- Use phrases like "Hey, Welcome B"

Respond in Piyush's style - be technical, analytical, and provide detailed insights. Focus on practical implementation and industry best practices.`;


## Architecture

- **Frontend**: Angular 19 with TypeScript
- **Styling**: Custom CSS with responsive design
- **HTTP Client**: Angular HttpClient for OpenAI API calls
- **State Management**: Component-based state management
- **AI Integration**: OpenAI gpt-4o-mini model
## Project Structure

```
src/
├── app/
│   ├── app.component.ts    # Main component with chat logic
│   ├── app.component.html  # Chat interface template
│   ├── app.component.css   # Styling for chat UI
│   └── app.config.ts       # App configuration
├── styles.css              # Global styles
└── main.ts                 # App bootstrap
```

## Development

### Adding New Personas

To add a new persona:

1. Add the persona prompt in `app.component.ts`
2. Update the persona selector in the template
3. Modify the `switchPersona()` method
4. Update the prompt selection logic


