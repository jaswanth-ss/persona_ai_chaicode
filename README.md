# Persona Chat App

A web application that uses LLM models to mimic the speaking tones of Hitesh Choudhary and Piyush Garg. Built with Angular and integrated with OpenAI GPT-3.5-turbo.

## Features

- **Dual Persona Chat**: Switch between Hitesh Choudhary and Piyush Garg personas
- **Real-time Responses**: Get AI-generated responses in each persona's unique style
- **Modern UI**: Clean, responsive chat interface
- **Easy Setup**: Simple configuration with OpenAI API

## Personas

### Hitesh Choudhary
- **Tone**: Friendly, encouraging coding instructor
- **Style**: Uses simple language with Hindi phrases
- **Focus**: Beginner-friendly explanations, practical examples
- **Catchphrases**: "Aur programming seekh rahe hain", "Chaliye shuru karte hain"

### Piyush Garg
- **Tone**: Technical, analytical software engineer
- **Style**: Direct, detailed technical insights
- **Focus**: Modern web technologies, system design, best practices
- **Approach**: Industry-focused, scalability-oriented

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure OpenAI API Key**
   
   **IMPORTANT**: You need to add your OpenAI API key to make the app functional.
   
   **Simple Setup:**
   1. Open `src/environments/environment.ts`
   2. Replace `your_openai_api_key_here` with your actual OpenAI API key
   
   ```typescript
   export const environment = {
     production: false,
     openaiApiKey: 'sk-your-actual-openai-api-key-here'  // Replace this
   };
   ```
   
   **Where to get OpenAI API Key:**
   - Go to [OpenAI Platform](https://platform.openai.com/)
   - Sign up or log in
   - Navigate to API Keys section
   - Create a new API key
   - Copy and paste it in the environment file

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:4200/`

## Data Preparation & Prompt Logic

### Persona Prompts

The application uses carefully crafted system prompts to mimic each persona:

**Hitesh Choudhary Prompt:**
- Emphasizes friendly teaching style
- Includes characteristic Hindi phrases
- Focuses on beginner-friendly explanations
- Encourages practical learning approach

**Piyush Garg Prompt:**
- Highlights technical expertise
- Emphasizes analytical thinking
- Focuses on modern technologies and best practices
- Provides detailed technical insights

### Sample Conversations

**With Hitesh Persona:**
```
User: How do I learn React?
Hitesh: Aur React seekhna hai! Bilkul right choice hai. Chaliye step by step karte hain - pehle JavaScript ke basics strong karo, phir React ke concepts like components, state, props ko samjho. Main suggest karunga ki chote projects banao, practical learning sabse achha hai!
```

**With Piyush Persona:**
```
User: How do I learn React?
Piyush: For learning React effectively, I'd recommend starting with modern JavaScript ES6+ features, understanding the virtual DOM concept, and then diving into React hooks and functional components. Focus on building real projects, implement state management with Context API or Redux, and learn about performance optimization techniques like memoization and code splitting.
```

## Architecture

- **Frontend**: Angular 19 with TypeScript
- **Styling**: Custom CSS with responsive design
- **HTTP Client**: Angular HttpClient for OpenAI API calls
- **State Management**: Component-based state management
- **AI Integration**: OpenAI GPT-3.5-turbo model

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

### Customizing UI

- Modify `app.component.css` for styling changes
- Update `app.component.html` for layout modifications
- Global styles can be changed in `src/styles.css`

## API Integration

The app uses OpenAI's Chat Completions API:
- **Model**: gpt-3.5-turbo
- **Max Tokens**: 500
- **Temperature**: 0.7 (for creative responses)

## Security Features

✅ **Git-Safe**: API keys are stored in environment files that are excluded from Git  
✅ **Template Files**: Example files show the structure without exposing secrets  
✅ **Production Ready**: Separate environment files for development and production  

**Security Notes:**
- Environment files with actual API keys are automatically ignored by Git
- Only template files (`.example.ts`) are committed to the repository
- Never commit your actual OpenAI API key to version control
- For production, use secure environment variable injection

## Original Angular CLI Information

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## License

This project is for educational purposes demonstrating persona-based AI chat implementation.