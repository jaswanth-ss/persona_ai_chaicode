# 🚀 Deployment Guide for Vercel

## 📋 Prerequisites
- OpenAI API Key
- Vercel account

## 🔑 Setting up API Key in Vercel

### Method 1: Vercel Dashboard (Recommended)
1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add a new environment variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your actual OpenAI API key
   - **Environment**: Production (and Preview if needed)

### Method 2: Vercel CLI
```bash
vercel env add OPENAI_API_KEY
# Enter your API key when prompted
```

## 🏗️ How It Works

1. **Build Process**: The `replace-env.js` script runs before the Angular build
2. **Environment Injection**: The script replaces `process.env['OPENAI_API_KEY']` with the actual API key
3. **Secure Build**: The API key is injected at build time, not runtime

## 🚀 Deployment Steps

1. **Set environment variable in Vercel** (see above)
2. **Deploy using one of these methods:**

### Option A: Git Integration
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```
Then connect your repository in Vercel dashboard.

### Option B: Vercel CLI
```bash
vercel
```

### Option C: Manual Upload
```bash
npm run build:local  # Build without environment replacement
# Upload dist/chat-app/browser folder to Vercel
```

## ⚠️ Security Notes

- The API key will be visible in the client-side code
- For production apps, consider implementing a backend API proxy
- Monitor your OpenAI usage and set up billing alerts
- Regenerate API keys regularly

## 🔧 Local Development

For local development, add your API key directly to `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  openaiApiKey: 'your-actual-api-key-here'
};
```

The environment files are gitignored, so your API key won't be committed to version control.
