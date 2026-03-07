from fastapi import FastAPI
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Query, HTTPException
from datetime import datetime
from bson import ObjectId

ADMIN_KEY = "superadmin123"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return{"message": "Backend is running"}

client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client["contact_db"]

class ContactMessage(BaseModel):
    name: str
    email: str
    phone: str
    company: str
    message: str

@app.post("/contact")
async def receive_message(data: ContactMessage):

    message = data.dict()

    message["timestamp"] = datetime.utcnow()
    message["read"] = False

    await db.messages.insert_one(message)

    return {"status": "Message saved"}

@app.get("/messages")
async def get_messages(key: str = Query(...)):
    
    if key != ADMIN_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")

    messages = []

    async for msg in db.messages.find():
        msg["_id"] = str(msg["_id"])
        messages.append(msg)

    return messages

from bson import ObjectId

@app.delete("/delete-message/{id}")
async def delete_message(id: str):

    await db.messages.delete_one({"_id": ObjectId(id)})

    return {"status": "deleted"}

@app.put("/mark-read/{id}")
async def mark_read(id: str):

    await db.messages.update_one(
        {"_id": ObjectId(id)},
        {"$set": {"read": True}}
    )

    return {"status": "updated"}