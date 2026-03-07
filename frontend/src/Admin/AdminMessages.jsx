import React, { useState, useEffect, useCallback } from "react";

const AdminMessages = () => {

  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchMessages = useCallback(async () => {
    try {

      const res = await fetch(
        `http://localhost:8000/messages?key=${password}`
      );

      const data = await res.json();
      setMessages(data);

    } catch (error) {
      console.error(error);
    }
  }, [password]);

  const login = () => {
    setLoggedIn(true);
    fetchMessages();
  };

  // auto refresh every 5 seconds
  useEffect(() => {

    if (!loggedIn) return;

    const interval = setInterval(() => {
      fetchMessages();
    }, 5000);

    return () => clearInterval(interval);

  }, [loggedIn, fetchMessages]);

  const deleteMessage = async (id) => {

    await fetch(`http://localhost:8000/delete-message/${id}`, {
      method: "DELETE",
    });

    fetchMessages();
  };

  const markRead = async (id) => {

    await fetch(`http://localhost:8000/mark-read/${id}`, {
      method: "PUT",
    });

    fetchMessages();
  };

  return (

    <div className="min-h-screen bg-pink-50 p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          Admin Message Dashboard
        </h1>

        {!loggedIn && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-10 flex gap-4">

            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-pink-200 p-3 rounded-lg flex-1 outline-none focus:ring-2 focus:ring-pink-300"
            />

            <button
              onClick={login}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
            >
              Login
            </button>

          </div>
        )}

        <div className="space-y-6">

          {messages.map((msg) => (

            <div
              key={msg._id}
              className="bg-white p-6 rounded-xl shadow-md border border-pink-100"
            >

              <div className="flex justify-between items-start mb-3">

                <h2 className="text-lg font-semibold text-gray-800">
                  {msg.name}
                </h2>

                <div className="flex gap-2">

                  {!msg.read && (
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}

                  <button
                    onClick={() => markRead(msg._id)}
                    className="text-xs bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Mark Read
                  </button>

                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="text-xs bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-700">

                <p>
                  <span className="font-semibold text-pink-600">Email:</span>{" "}
                  {msg.email}
                </p>

                <p>
                  <span className="font-semibold text-pink-600">Phone:</span>{" "}
                  {msg.phone}
                </p>

                <p>
                  <span className="font-semibold text-pink-600">Company:</span>{" "}
                  {msg.company}
                </p>

                <p className="text-sm text-gray-400">
                  {msg.timestamp
                    ? new Date(msg.timestamp).toLocaleString()
                    : ""}
                </p>

              </div>

              <div className="mt-4">

                <p className="font-semibold text-pink-600 mb-1">
                  Message
                </p>

                <p className="text-gray-700 bg-pink-50 p-3 rounded-lg">
                  {msg.message}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
};

export default AdminMessages;