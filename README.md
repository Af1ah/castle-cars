# CASTLE CARS

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/af1ahs-projects/v0-castle-cars)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/ADoYPTV9PxJ)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/af1ahs-projects/v0-castle-cars](https://vercel.com/af1ahs-projects/v0-castle-cars)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/ADoYPTV9PxJ](https://v0.dev/chat/projects/ADoYPTV9PxJ)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Vercel KV Setup

This project uses Vercel KV for data storage. To get started, you'll need to create a KV store and link it to your project.

1.  **Create a KV Store:**
    - Go to your Vercel dashboard and navigate to the "Storage" tab.
    - Click "Create" and select "KV (Redis)".
    - Give your store a name and select a region.
    - Connect the store to your project.

2.  **Set Environment Variables:**
    - After creating the store, Vercel will provide you with the following environment variables:
      - `KV_URL`
      - `KV_REST_API_URL`
      - `KV_REST_API_TOKEN`
      - `KV_REST_API_READ_ONLY_TOKEN`
    - Add these environment variables to your project's settings on Vercel.

## Vercel Blob Setup

This project uses Vercel Blob for image storage. To get started, you'll need to create a Blob store and link it to your project.

1.  **Create a Blob Store:**
    - Go to your Vercel dashboard and navigate to the "Storage" tab.
    - Click "Create" and select "Blob".
    - Give your store a name and connect it to your project.

2.  **Set Environment Variable:**
    - After creating the store, Vercel will provide you with the `BLOB_READ_WRITE_TOKEN` environment variable.
    - Add this environment variable to your project's settings on Vercel.
