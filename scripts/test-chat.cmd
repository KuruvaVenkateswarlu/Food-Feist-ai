@echo off
curl -s -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d "{\"text\":\"find paneer\"}" 
curl -s -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d "{\"text\":\"price of butter chicken\"}" 
curl -s -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d "{\"text\":\"recommend popular items\"}" 
pause
