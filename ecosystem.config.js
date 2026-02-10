module.exports = {
  apps: [
    {
      name: "dhruvaldhameliya-com",
      script: ".next/standalone/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
        // Firebase Analytics
        NEXT_PUBLIC_ENV: "production",
        NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyBEIBSjLgyqLdcjAcv63RlKzCLfVOYSmVQ",
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "dhruvaldhameliya-web.firebaseapp.com",
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: "dhruvaldhameliya-web",
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "dhruvaldhameliya-web.firebasestorage.app",
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "498234887717",
        NEXT_PUBLIC_FIREBASE_APP_ID: "1:498234887717:web:b73404f3eb614c9739f9cc",
        NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-QEKGKE4W3Y",
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
    },
  ],
};
