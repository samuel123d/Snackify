# Admin Authentication System

This project is an admin authentication system that allows for the management of products, including changing product names, sizes, and adding/removing photos. It utilizes Firebase for authentication and data storage.

## Project Structure

```
admin-auth-system
├── public
│   ├── index.html        # Main HTML document for the application
│   ├── styles.css       # Styles for the application
│   └── scripts.js       # Main JavaScript code for handling user interactions
├── src
│   ├── components
│   │   ├── auth.js      # Handles user authentication
│   │   ├── productManager.js # Manages product data
│   │   └── photoUploader.js   # Manages product image uploads
│   └── firebase
│       ├── firebaseConfig.js   # Firebase configuration settings
│       └── firebaseService.js   # Functions for interacting with Firebase services
├── package.json         # npm configuration file
├── .gitignore           # Specifies files to ignore by Git
├── README.md            # Project documentation
└── firebase.json        # Firebase configuration for hosting and services
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd admin-auth-system
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration settings and update `src/firebase/firebaseConfig.js`.

4. **Run the application:**
   ```
   npm start
   ```

## Usage Guidelines

- Use the authentication component to log in and manage products.
- The product manager allows you to add, update, and remove products.
- The photo uploader facilitates the uploading and deletion of product images.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.