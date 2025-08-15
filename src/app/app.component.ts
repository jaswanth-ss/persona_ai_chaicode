import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


interface Message {
  text: string;
  isUser: boolean;
  persona?: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Persona Chat App';
  messages: Message[] = [];
  currentMessage = '';
  selectedPersona = 'hitesh';
  
  private hiteshMessages: Message[] = [];
  private piyushMessages: Message[] = [];
  
  private apiKey = environment.openaiApiKey;
  
  private hiteshPrompt = `You are Hitesh Choudhary, a passionate tech educator and YouTuber known for:
- Teaching web development, JavaScript, React, Python, and other programming languages
- Has a very simple and easy to understand teaching style
- Motivating and encouraging students
- Using phrases like "Haanji Kaise hi"
- Making coding accessible to everyone regardless of their background
- Often referencing real-world projects and practical applications
- A coding mento with 15+ years of experience passionate about transforming lives with code
Respond in Hitesh's style - be encouraging, use simple language, and often include Hindi phrases naturally. Keep responses conversational and educational.`;

  private piyushPrompt = `You are Piyush Garg, a software engineer and content creator known for:
- Expertise in modern web technologies, DevOps, and system design
- Creating detailed technical content and tutorials
- Having a more technical and analytical approach
- Discussing latest tech trends, scalability, and best practices
- Being direct and to-the-point in explanations
- Often diving deep into technical concepts
- Sharing insights about software engineering career and industry
- Having experience with various tech stacks and 
- Use phrases like "Hey, Welcome Back"

Respond in Piyush's style - be technical, analytical, and provide detailed insights. Focus on practical implementation and industry best practices.`;

  constructor(private http: HttpClient) {
    this.messages = this.hiteshMessages;
  }

  sendMessage() {
    if (!this.currentMessage.trim()) return;
    
    this.messages.push({
      text: this.currentMessage,
      isUser: true
    });
    
    const userMessage = this.currentMessage;
    this.currentMessage = '';
    
    this.getPersonaResponse(userMessage);
  }

  switchPersona(persona: string) {
    this.selectedPersona = persona;
    
    if (persona === 'hitesh') {
      this.messages = this.hiteshMessages;
    } else {
      this.messages = this.piyushMessages;
    }
  }

  getMessageCount(persona: string): number {
    if (persona === 'hitesh') {
      return this.hiteshMessages.length;
    } else {
      return this.piyushMessages.length;
    }
  }

  private getPersonaResponse(message: string) {
    if (!this.apiKey) {
      this.messages.push({
        text: 'API key is not configured. Please set your OpenAI API key in the environment configuration.',
        isUser: false,
        persona: this.selectedPersona
      });
      return;
    }

    const systemPrompt = this.selectedPersona === 'hitesh' ? this.hiteshPrompt : this.piyushPrompt;
    
    this.http.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 500,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (response: any) => {
        this.messages.push({
          text: response.choices[0].message.content,
          isUser: false,
          persona: this.selectedPersona
        });
      },
      error: (error) => {
        console.error('OpenAI API Error:', error);
        let errorMessage = 'Sorry, I encountered an error. ';
        
        if (error.status === 401) {
          errorMessage += 'Invalid API key. Please check your OpenAI API key configuration.';
        } else if (error.status === 429) {
          errorMessage += 'Rate limit exceeded. Please try again later.';
        } else if (error.status === 0) {
          errorMessage += 'Network error. Please check your internet connection.';
        } else {
          errorMessage += 'Please try again later.';
        }
        
        this.messages.push({
          text: errorMessage,
          isUser: false,
          persona: this.selectedPersona
        });
      }
    });
  }
}
