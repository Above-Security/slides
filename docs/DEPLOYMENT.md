# Vercel Deployment Guide

## Prerequisites

1. Ensure you have the Vercel token stored in `.env.local`:
   ```
   VERCEL_TOKEN=your_vercel_token_here
   ```

2. Make sure all changes are committed and pushed to the remote repository.

## Deployment Steps

### 1. Push Changes to Remote
```bash
git push origin v2
```

### 2. Deploy to Vercel Production

Using the Vercel CLI with the token from `.env.local`:

```bash
npx vercel --token $(grep VERCEL_TOKEN .env.local | cut -d '=' -f2) --prod
```

Alternatively, you can set the token as an environment variable:

```bash
export VERCEL_TOKEN=$(grep VERCEL_TOKEN .env.local | cut -d '=' -f2)
npx vercel --prod
```

### 3. Branch-Specific Deployment

To deploy a specific branch (like `v2`):

1. Ensure you're on the correct branch:
   ```bash
   git checkout v2
   ```

2. Push the branch to remote:
   ```bash
   git push origin v2
   ```

3. Deploy to Vercel:
   ```bash
   npx vercel --token $(grep VERCEL_TOKEN .env.local | cut -d '=' -f2) --prod
   ```

## Deployment Output

A successful deployment will provide:
- **Inspect URL**: Link to view deployment details in Vercel dashboard
- **Production URL**: The live production URL for your application

Example output:
```
Vercel CLI 44.7.3
Retrieving project…
Deploying aviv-nahums-projects/above.github.io
Inspect: https://vercel.com/aviv-nahums-projects/above.github.io/[deployment-id]
Production: https://abovegithub-[hash]-aviv-nahums-projects.vercel.app
```

## Important Notes

- The `--prod` flag deploys directly to production
- Omit `--prod` for preview deployments
- Vercel automatically detects Next.js projects and applies appropriate build settings
- Build logs are available in the Vercel dashboard via the Inspect URL

## Environment Variables

Ensure all necessary environment variables are configured in your Vercel project settings:
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `ATTIO_TOKEN` (if needed for server-side operations)