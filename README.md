# SD User Registration Form

A modern, square-shaped user registration form with comprehensive client-side validation, local storage functionality, and social media integration.

## 🌟 Features

### Form Fields
- **Full Name** - Required, minimum 2 characters, letters and spaces only
- **Email Address** - Required, valid email format validation
- **Password** - Required, strong password validation (8+ chars, uppercase, lowercase, number, special char)
- **Confirm Password** - Required, must match the original password
- **Date of Birth** - Required, age validation (18-100 years)

### Validation Features
- **Real-time validation** - Instant feedback as users type
- **Visual indicators** - Green borders for valid fields, red for invalid
- **Dynamic error messages** - Clear, specific error descriptions for each field
- **Password toggle visibility** - Show/hide password functionality with eye icon
- **Form submission protection** - Prevents invalid form submissions

### Data Management
- **localStorage Integration** - Securely stores form data locally (excludes passwords)
- **Show Stored Data** - View previously submitted registration information
- **Clear Data** - Option to remove all stored information with confirmation
- **Timestamp Tracking** - Records registration date and time

### UI/UX Design
- **Square Container** - 500x500px fixed container for desktop
- **Black Header/Footer** - Professional dark theme with white text
- **Social Media Integration** - Direct links to GitHub and LinkedIn profiles
- **Responsive Design** - Adapts to mobile devices (90vw x 90vh)

## 🚀 Technologies Used

- **HTML5** - Semantic markup structure with embedded styles and scripts
- **CSS3** - Modern styling with flexbox layout and media queries
- **Vanilla JavaScript** - Pure ES6+ with no external dependencies
- **localStorage API** - Client-side data persistence
- **SVG Icons** - Scalable vector graphics for social media icons

## 📱 Responsive Design

The form adapts to different screen sizes:
- **Desktop**: Fixed 500x500px square container
- **Mobile**: 90% viewport width and height with adjusted layout
- **Flexible social icons**: Reorder and stack on smaller screens

## 🎨 Design Specifications

### Color Scheme
- **Background**: Light gray (#f5f5f5)
- **Container**: White with subtle shadow
- **Header/Footer**: Black (#000000)
- **Accent Colors**: Blue (#3498db), Green (#27ae60), Red (#e74c3c)

### Typography
- **Font Family**: Arial, sans-serif
- **Responsive sizes**: 2rem desktop headers, 1.5rem mobile
- **Clear hierarchy**: Different sizes for titles, labels, and body text

### Layout
- **Square Form**: 500x500px container with overflow scroll
- **Centered Design**: Auto margins for horizontal centering
- **Flexible Footer**: Social icons and copyright information

## 🔗 Social Media Integration

- **GitHub**: Direct link to developer profile
- **LinkedIn**: Professional networking connection
- **Hover Effects**: Scale and opacity transitions on social icons

## 🔧 Setup and Installation

1. **Clone or download** this repository
2. **Open `index.html`** in any modern web browser
3. **No build process required** - runs directly in the browser

```bash
# Clone the repository
git clone https://github.com/SaurabhRajendra7584/sd-user-registration-form.git

# Navigate to project directory
cd sd-user-registration-form

# Open in browser (or use a local server)
npx serve .
# or
python -m http.server 8000
```

## 📝 Usage Instructions

### Registration Process
1. Fill in all required fields (marked with *)
2. Watch real-time validation feedback as you type
3. Ensure password meets all security requirements
4. Click "Register" to save data locally

### Data Management
1. **Show Stored Data** - Click to view previously saved registration information
2. **Clear Data** - Click to remove all stored information (requires confirmation)
3. **Form Reset** - Form automatically clears after successful submission

## 🔒 Password Requirements

The password must contain:
- ✓ At least 8 characters
- ✓ One uppercase letter (A-Z)
- ✓ One lowercase letter (a-z)
- ✓ One number (0-9)
- ✓ One special character (@$!%*?&)

## 🌐 Live Demo

Visit the live demo: [SD User Registration Form](https://saurabhrajendra7584.github.io/sd-user-registration-form/)

## 🚀 Deployment Options

### GitHub Pages (Recommended)
1. Fork or clone this repository
2. Go to Settings → Pages in your GitHub repository
3. Select source branch (`main`)
4. Your site will be available at: `https://yourusername.github.io/sd-user-registration-form`

### Other Deployment Options
- **Netlify**: Drag and drop the project folder
- **Vercel**: Import from GitHub with zero configuration
- **Surge**: `npm install -g surge && surge`

## 📁 Project Structure

```
sd-user-registration-form/
├── index.html          # Main application (HTML + CSS + JS)
├── new.html           # Alternative version with enhanced features
├── README.md          # Project documentation
└── .git/              # Git repository
```

## 🧪 Testing Checklist

### Form Validation Tests
- [x] Empty field validation with error messages
- [x] Invalid email format detection
- [x] Strong password requirements enforcement
- [x] Password confirmation matching
- [x] Age validation (18-100 years)
- [x] Real-time field validation

### Functionality Tests
- [x] Data saves to localStorage (excluding passwords)
- [x] Data retrieval displays correctly
- [x] Data clearing with confirmation dialog
- [x] Form resets after successful submission
- [x] Success message with auto-hide

### UI/UX Tests
- [x] Responsive design on mobile devices
- [x] Password visibility toggle
- [x] Visual field validation states
- [x] Social media links functional
- [x] Square container design maintained

## 🔐 Security Features

- **Password Protection**: Passwords are not stored in localStorage
- **Input Validation**: Comprehensive client-side validation
- **XSS Prevention**: Proper input sanitization
- **Age Verification**: Ensures users are 18+ years old

## 🐛 Known Limitations

- Data is stored locally only (browser-specific)
- No server-side validation or persistence
- No user session management
- Single user per browser instance

## 🔮 Future Enhancements

- Backend integration with database storage
- User authentication and session management
- Email verification system
- Multi-step registration process
- Advanced password strength indicators
- Export registration data functionality

## 👨‍� Developer

**Saurabh Rajendra Dubey**
- GitHub: [@SaurabhRajendra7584](https://github.com/SaurabhRajendra7584)
- LinkedIn: [Saurabh Rajendra Dubey](https://www.linkedin.com/in/saurabhrajendradubey/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

Give a ⭐️ if this project helped you learn about form validation and web development!

---

*Built with ❤️ using HTML, CSS & JavaScript*
- Password encryption and security improvements
- Multi-user support
- Data export capabilities
- Enhanced accessibility features

## 📞 Support

For issues or questions about this project:
1. Check the validation requirements carefully
2. Ensure JavaScript is enabled in your browser
3. Try clearing browser cache if experiencing issues
4. Verify localStorage is supported and enabled

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

**Made with ❤️ using HTML, CSS, and JavaScript**
