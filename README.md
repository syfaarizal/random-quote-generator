# Random Quote Generator 🌟

A beautiful, responsive web application that displays random inspirational quotes with smooth animations and theme switching capabilities.

## ✨ Features

- **🎲 Random Quotes**: Fetches quotes from ZenQuotes API with fallback quotes
- **🌙 Dark/Light Mode**: Smooth theme transitions with gradient backgrounds
- **⚡ Auto Mode**: Automatically cycles through quotes every 5 seconds
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **🐦 Social Sharing**: Share quotes directly to Twitter
- **⌨️ Keyboard Shortcuts**: Quick access via keyboard commands
- **🎨 Glassmorphism UI**: Modern glass-like design with backdrop filters
- **✨ Smooth Animations**: Elegant fade transitions between quotes

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/quote-generator.git
cd quote-generator

# Serve with Python
python3 -m http.server 8000

# Or serve with PHP
php -S localhost:8000

# Or using Node.js http-server
npx http-server

# Then open http://localhost:8000 in your browser
```
## 📁 Project Structure

```
quote-generator/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # All styles and animations
│   └── js/
│       └── index.js          # Main application logic
└── README.md                 # This file
```

## 🎯 Usage
**Basic Controls**
- **New Quote**: Click "New Quote" button or press <code>Space</code>/<code>Enter</code>
- **Auto Mode**: Toggle automatic quote cycling with "Auto: OFF/ON" button
- **Theme Toggle**: Switch between dark and light modes
- **Share**: Share current quote on Twitter

## Keyboard Shortcuts
- <code>Space</code> or <code>Enter</code> - Generate new quote
- <code>Ctrl + A</code> - Toggle auto mode
- <code>Ctrl + T</code> - Toggle theme

## 🛠️ Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: [ZenQuotes.io](https://zenquotes.io/) for random quotes
- **Styling**: CSS Variables for theming, Glassmorphism effects
- **Icons**: Unicode emojis for theme toggle

## 🎨 Customization
**Adding Your Own Quotes**
Edit the <code>fallbackQuotes</code> array in <code>assets/js/</code>:
 ```
const fallbackQuotes = [
    { text: 'Your custom quote here', author: 'Author Name' },
    // Add more quotes...
];
```

## Changing Colors

Modify CSS variables in <code>assets/css/style.css</code>:

```
:root {
    --bg-gradient: linear-gradient(135deg, #your-color 0%, #your-color2 100%);
    --text-color: #your-text-color;
    /* Add more variables... */
}
```

## 🌐 API Information
- **API**: ZenQuotes.io
- **Endpoint**: <code>https://zenquotes.io/api/random</code>
- **Rate Limit**: 10 requests per second per IP
- **Fallback**: Local quotes used if API is unavailable

## 📱 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Known Issues
- Older browsers may not support CSS <code>backdrop-filter</code>
- API rate limits may cause fallback to local quotes
- Mobile browsers may have slight performance differences

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (<code>git checkout -b feature/AmazingFeature</code>)
3. Commit your changes (<code>git commit -m 'Add some AmazingFeature'</code>)
4. Push to the branch (<code>git push origin feature/AmazingFeature</code>)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License.

## 🙏 Acknowledgments
- Quotes provided by ZenQuotes.io
- Glassmorphism design trends

**Enjoy your daily dose of inspiration!** ✨