#!/bin/bash
# Quick local testing script

echo "🚀 Starting local development server..."
echo "📍 Your site will be available at: http://localhost:8000"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

python3 -m http.server 8000
v