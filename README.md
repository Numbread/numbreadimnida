# Numbread-Imnida 🇰🇷

A premium Korean-English translator and learning platform specializing in nouns and verbs with interactive study modes.

## 🌟 Features

### 📚 Core Translation Features
- **Korean-English Translation**: Translate Korean words and phrases with high precision
- **Auto-Generated Words**: Shuffle random Korean nouns and verbs for practice
- **Pronunciation Guide**: Romanized pronunciation for all Korean words
- **Audio Pronunciation**: 
  - Listen to Korean words (TTS with Korean language)
  - Listen to romanized pronunciation
- **Word Categories**: Words organized by categories (Food, Animals, Transportation, etc.)
- **Difficulty Levels**: Beginner, Intermediate, and Advanced word classifications

### 🎯 Study Modes

#### 1. **Translator Mode**
- Shuffle random Korean words
- Real-time translation
- Category and difficulty filtering
- History tracking with search and filters

#### 2. **Flashcard Mode**
- Interactive flashcards with flip animation
- Shows Korean word, translation, pronunciation, and tags
- Navigate through cards with Previous/Next buttons
- Shuffle cards for random practice

#### 3. **Quiz Mode**
- Multiple-choice questions
- Score tracking
- Real-time feedback
- Results summary with accuracy percentage

#### 4. **Typing Practice Mode**
- Practice typing Korean words from English translations
- Real-time correctness feedback
- Statistics tracking (correct/wrong count)
- Results summary

### 📖 History & Learning
- **Persistent History**: Device-specific history saved in localStorage
- **History Search**: Search through history by Korean or English text
- **Advanced Filtering**: Filter by type (Noun/Verb), category, and difficulty
- **Click to Play**: Click any history item to hear its pronunciation
- **Export History**: Download history as JSON file
- **Pronunciation Display**: All history items show romanized pronunciation

### 🎨 User Interface
- **Modern Design**: Clean, premium white and sky blue theme
- **Dark/Light Theme Toggle**: Switch between themes with preference saving
- **Responsive Layout**: Works on desktop and mobile devices
- **Smooth Animations**: Polished transitions and effects

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs directly in the browser

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies needed

### File Structure
```
korean/
├── index.html      # Main HTML file
├── app.js          # JavaScript application logic
├── styles.css      # Styling and themes
└── README.md       # This file
```

## 📖 How to Use

### Basic Translation
1. Click the **"Shuffle"** button to get a random Korean word
2. The word will automatically translate
3. View pronunciation and click volume icons to hear it

### Using Filters
- Select **Nouns** or **Verbs** to filter word types
- Use **Category** dropdown to filter by topic
- Use **Difficulty** dropdown to filter by level

### Study Modes
1. Navigate using the top menu:
   - **Translator**: Main translation interface
   - **Flashcards**: Interactive flashcard practice
   - **Quiz**: Test your knowledge
   - **Typing**: Practice typing Korean words

### History Features
- **Search**: Type in the search box to find specific words
- **Filter**: Use dropdowns to filter by type, category, or difficulty
- **Play Pronunciation**: Click any history item to hear it
- **Export**: Click "Export" to download your history as JSON

### Theme Toggle
- Click the moon/sun icon in the top-right to switch themes
- Your preference is automatically saved

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with custom properties and animations
- **JavaScript (ES6+)**: Application logic and interactivity
- **Web Speech API**: Text-to-speech for pronunciation
- **MyMemory Translation API**: Korean-English translation
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Outfit, Noto Sans KR)
- **localStorage**: Client-side data persistence

## 📝 Word Database

The application includes:
- **100+ Korean Nouns**: Common nouns across various categories
- **100+ Korean Verbs**: Essential verbs for daily communication
- **Categories**: Food, Animals, Transportation, People, Nature, and more
- **Difficulty Levels**: Beginner, Intermediate, Advanced

## 🎯 Features in Detail

### Device-Specific History
- Each device gets a unique ID
- History is stored separately per device
- Automatically loads on page refresh
- Maximum 20 items per device

### Search & Filter
- **Search**: Real-time search through Korean and English text
- **Type Filter**: Nouns, Verbs, or All
- **Category Filter**: Dynamic list based on your history
- **Difficulty Filter**: Beginner, Intermediate, Advanced, or All

### Pronunciation
- **Romanization**: Revised Romanization of Korean standard
- **Korean TTS**: Native Korean pronunciation
- **English TTS**: Romanized pronunciation guide

## 🎨 Customization

### Themes
The application supports two themes:
- **Light Theme**: Premium white with sky blue accents (default)
- **Dark Theme**: Dark background with purple/indigo accents

### Styling
All colors and styles are defined in CSS custom properties in `styles.css`:
- `--bg-color`: Background color
- `--card-bg`: Card background
- `--accent-color`: Accent color (sky blue)
- `--text-main`: Main text color
- `--text-muted`: Muted text color

## 📊 Data Storage

- **localStorage**: Used for:
  - Device ID
  - History data (device-specific)
  - Theme preference
- **No Server Required**: All data stored locally in browser

## 🔧 Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Note: Web Speech API support varies by browser. Korean TTS works best in Chrome/Edge.

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- **MyMemory API**: Translation services
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Web Speech API**: Text-to-speech functionality

## 🐛 Known Issues

- Korean TTS may not work in all browsers (works best in Chrome/Edge)
- Translation API has rate limits (free tier)
- History is limited to 20 items per device

## 🚀 Future Enhancements

Potential features for future versions:
- User accounts and cloud sync
- More word categories and vocabulary
- Spaced repetition algorithm
- Progress tracking and statistics
- Offline mode support
- Mobile app version

## 📞 Support

For issues, questions, or contributions, please refer to the project repository.

---

**Made with ❤️ for Korean language learners**

*Numbread-Imnida - Your Korean Learning Companion*
