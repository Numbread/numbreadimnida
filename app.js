document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const sourceText = document.getElementById('source-text');
    const targetText = document.getElementById('target-text');
    const translateBtn = document.getElementById('translate-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const copyBtn = document.getElementById('copy-btn');
    const listenBtn = document.getElementById('listen-btn');
    const pronunciationListenBtn = document.getElementById('pronunciation-listen-btn');
    const koreanListenBtn = document.getElementById('korean-listen-btn');
    const wordTags = document.getElementById('word-tags');
    const genBtns = document.querySelectorAll('.gen-btn');
    const pronunciationArea = document.getElementById('pronunciation-area');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const categoryFilter = document.getElementById('category-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    
    // Mode sections
    const translatorSection = document.querySelector('.translator-card');
    const flashcardSection = document.getElementById('flashcard-mode');
    const quizSection = document.getElementById('quiz-mode');
    const typingSection = document.getElementById('typing-mode');
    
    // Flashcard elements
    const flashcard = document.getElementById('flashcard');
    const flashcardWord = document.getElementById('flashcard-word');
    const flashcardTranslation = document.getElementById('flashcard-translation');
    const flashcardPronunciation = document.getElementById('flashcard-pronunciation');
    const flashcardTags = document.getElementById('flashcard-tags');
    const prevCardBtn = document.getElementById('prev-card');
    const nextCardBtn = document.getElementById('next-card');
    const shuffleCardsBtn = document.getElementById('shuffle-cards');
    
    // Quiz elements
    const startQuizBtn = document.getElementById('start-quiz');
    const quizContent = document.getElementById('quiz-content');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const nextQuestionBtn = document.getElementById('next-question');
    const quizScore = document.getElementById('quiz-score');
    const quizTotal = document.getElementById('quiz-total');
    
    // Typing elements
    const startTypingBtn = document.getElementById('start-typing');
    const typingContent = document.getElementById('typing-content');
    const typingEnglish = document.getElementById('typing-english');
    const typingInput = document.getElementById('typing-input');
    const typingFeedback = document.getElementById('typing-feedback');
    const typingNextBtn = document.getElementById('typing-next');
    const typingCorrect = document.getElementById('typing-correct');
    const typingWrong = document.getElementById('typing-wrong');

    // Word database with categories and difficulty levels
    const WORD_DATABASE_RAW = {
        "nouns": [
            "사과", "자동차", "하늘", "바다", "나무", "책", "컴퓨터", "친구", "가족", "학교",
            "음식", "물", "커피", "고양이", "강아지", "산", "길", "집", "도시", "나라",
            "사랑", "행복", "시간", "날씨", "계절", "노래", "영화", "꿈", "기억", "바람",
            "태양", "달", "별", "구름", "꽃", "숲", "들판", "파도", "모래", "돌",
            "의자", "책상", "침대", "창문", "문", "가방", "지갑", "옷", "구두", "안경",
            "사람", "아이", "어머니", "아버지", "선생님", "학생", "의사", "회사", "돈", "옷",
            "아침", "점심", "저녁", "오늘", "내일", "어제", "지금", "나중", "항상", "자주",
            "공부", "요리", "운동", "여행", "사진", "전화", "문자", "생일", "선물", "축하",
            "계란", "빵", "우유", "고기", "생선", "채소", "과일", "포도", "딸기", "수박",
            "머리", "얼굴", "눈", "코", "입", "귀", "손", "발", "다리", "어깨",
            "여름", "겨울", "봄", "가을", "비", "눈", "천둥", "번개", "안개", "무지개",
            "버스", "기차", "지하철", "비행기", "자전거", "오토바이", "택시", "배", "공항", "역",
            "식당", "카페", "병원", "은행", "공원", "도서관", "서점", "가게", "백화점", "시장",
            "모자", "시계", "반지", "목걸이", "우산", "열쇠", "거울", "휴지", "수건", "비누"
        ],
        "verbs": [
            "먹다", "가다", "오다", "보다", "듣다", "말하다", "쓰다", "읽다", "공부하다", "일하다",
            "자다", "일어나다", "걷다", "뛰다", "웃다", "울다", "사랑하다", "생각하다", "배우다", "가르치다",
            "주다", "받다", "사다", "팔다", "기다리다", "전화하다", "놀다", "쉬다", "만들다", "사용하다",
            "열다", "닫다", "시작하다", "끝내다", "도착하다", "출발하다", "묻다", "대답하다", "노래하다", "춤추다",
            "싸우다", "이기다", "지다", "노력하다", "기억하다", "잊다", "도와주다", "약속하다", "결정하다", "준비하다",
            "알다", "모르다", "노력하다", "성공하다", "실패하다", "기쁘다", "슬프다", "아프다", "맵다", "달다",
            "좋아하다", "싫어하다", "운동하다", "샤워하다", "세수하다", "운전하다", "예약하다", "주문하다", "계산하다", "청소하다",
            "입다", "벗다", "신다", "닦다", "씻다", "타다", "내리다", "타이핑하다", "그리다", "찍다",
            "찾다", "버리다", "잃어버리다", "빌리다", "돌려주다", "보내다", "가져오다", "가져가다", "이사하다", "결혼하다",
            "부탁하다", "소개하다", "인사하다", "칭찬하다", "사과하다", "이해하다", "기억하다", "설명하다", "비교하다", "조심하다"
        ]
    };

    // Category and difficulty mapping
    const WORD_METADATA = {
        // Nouns categories
        "사과": { category: "Food", difficulty: "beginner" }, "자동차": { category: "Transportation", difficulty: "beginner" },
        "하늘": { category: "Nature", difficulty: "beginner" }, "바다": { category: "Nature", difficulty: "beginner" },
        "나무": { category: "Nature", difficulty: "beginner" }, "책": { category: "Education", difficulty: "beginner" },
        "컴퓨터": { category: "Technology", difficulty: "intermediate" }, "친구": { category: "People", difficulty: "beginner" },
        "가족": { category: "People", difficulty: "beginner" }, "학교": { category: "Education", difficulty: "beginner" },
        "음식": { category: "Food", difficulty: "beginner" }, "물": { category: "Food", difficulty: "beginner" },
        "커피": { category: "Food", difficulty: "beginner" }, "고양이": { category: "Animals", difficulty: "beginner" },
        "강아지": { category: "Animals", difficulty: "beginner" }, "산": { category: "Nature", difficulty: "beginner" },
        "길": { category: "Places", difficulty: "beginner" }, "집": { category: "Places", difficulty: "beginner" },
        "도시": { category: "Places", difficulty: "intermediate" }, "나라": { category: "Places", difficulty: "beginner" },
        "사랑": { category: "Emotions", difficulty: "beginner" }, "행복": { category: "Emotions", difficulty: "intermediate" },
        "시간": { category: "Time", difficulty: "beginner" }, "날씨": { category: "Nature", difficulty: "intermediate" },
        "계절": { category: "Time", difficulty: "intermediate" }, "노래": { category: "Entertainment", difficulty: "beginner" },
        "영화": { category: "Entertainment", difficulty: "beginner" }, "꿈": { category: "Emotions", difficulty: "intermediate" },
        "기억": { category: "Emotions", difficulty: "intermediate" }, "바람": { category: "Nature", difficulty: "beginner" },
        "태양": { category: "Nature", difficulty: "beginner" }, "달": { category: "Nature", difficulty: "beginner" },
        "별": { category: "Nature", difficulty: "beginner" }, "구름": { category: "Nature", difficulty: "beginner" },
        "꽃": { category: "Nature", difficulty: "beginner" }, "숲": { category: "Nature", difficulty: "intermediate" },
        "들판": { category: "Nature", difficulty: "advanced" }, "파도": { category: "Nature", difficulty: "intermediate" },
        "모래": { category: "Nature", difficulty: "intermediate" }, "돌": { category: "Nature", difficulty: "beginner" },
        "의자": { category: "Furniture", difficulty: "beginner" }, "책상": { category: "Furniture", difficulty: "beginner" },
        "침대": { category: "Furniture", difficulty: "beginner" }, "창문": { category: "Furniture", difficulty: "beginner" },
        "문": { category: "Furniture", difficulty: "beginner" }, "가방": { category: "Items", difficulty: "beginner" },
        "지갑": { category: "Items", difficulty: "beginner" }, "옷": { category: "Items", difficulty: "beginner" },
        "구두": { category: "Items", difficulty: "intermediate" }, "안경": { category: "Items", difficulty: "intermediate" },
        "사람": { category: "People", difficulty: "beginner" }, "아이": { category: "People", difficulty: "beginner" },
        "어머니": { category: "People", difficulty: "beginner" }, "아버지": { category: "People", difficulty: "beginner" },
        "선생님": { category: "People", difficulty: "beginner" }, "학생": { category: "People", difficulty: "beginner" },
        "의사": { category: "People", difficulty: "intermediate" }, "회사": { category: "Places", difficulty: "beginner" },
        "돈": { category: "Items", difficulty: "beginner" },
        "아침": { category: "Time", difficulty: "beginner" }, "점심": { category: "Time", difficulty: "beginner" },
        "저녁": { category: "Time", difficulty: "beginner" }, "오늘": { category: "Time", difficulty: "beginner" },
        "내일": { category: "Time", difficulty: "beginner" }, "어제": { category: "Time", difficulty: "beginner" },
        "지금": { category: "Time", difficulty: "beginner" }, "나중": { category: "Time", difficulty: "intermediate" },
        "항상": { category: "Time", difficulty: "intermediate" }, "자주": { category: "Time", difficulty: "intermediate" },
        "공부": { category: "Education", difficulty: "beginner" }, "요리": { category: "Activities", difficulty: "intermediate" },
        "운동": { category: "Activities", difficulty: "beginner" }, "여행": { category: "Activities", difficulty: "intermediate" },
        "사진": { category: "Items", difficulty: "beginner" }, "전화": { category: "Technology", difficulty: "beginner" },
        "문자": { category: "Technology", difficulty: "intermediate" }, "생일": { category: "Time", difficulty: "beginner" },
        "선물": { category: "Items", difficulty: "beginner" }, "축하": { category: "Emotions", difficulty: "intermediate" },
        "계란": { category: "Food", difficulty: "beginner" }, "빵": { category: "Food", difficulty: "beginner" },
        "우유": { category: "Food", difficulty: "beginner" }, "고기": { category: "Food", difficulty: "beginner" },
        "생선": { category: "Food", difficulty: "intermediate" }, "채소": { category: "Food", difficulty: "intermediate" },
        "과일": { category: "Food", difficulty: "beginner" }, "포도": { category: "Food", difficulty: "intermediate" },
        "딸기": { category: "Food", difficulty: "intermediate" }, "수박": { category: "Food", difficulty: "intermediate" },
        "머리": { category: "Body", difficulty: "beginner" }, "얼굴": { category: "Body", difficulty: "beginner" },
        "눈": { category: "Body", difficulty: "beginner" }, "코": { category: "Body", difficulty: "beginner" },
        "입": { category: "Body", difficulty: "beginner" }, "귀": { category: "Body", difficulty: "beginner" },
        "손": { category: "Body", difficulty: "beginner" }, "발": { category: "Body", difficulty: "beginner" },
        "다리": { category: "Body", difficulty: "beginner" }, "어깨": { category: "Body", difficulty: "intermediate" },
        "여름": { category: "Time", difficulty: "beginner" }, "겨울": { category: "Time", difficulty: "beginner" },
        "봄": { category: "Time", difficulty: "beginner" }, "가을": { category: "Time", difficulty: "beginner" },
        "비": { category: "Nature", difficulty: "beginner" }, "눈": { category: "Nature", difficulty: "beginner" },
        "천둥": { category: "Nature", difficulty: "advanced" }, "번개": { category: "Nature", difficulty: "advanced" },
        "안개": { category: "Nature", difficulty: "advanced" }, "무지개": { category: "Nature", difficulty: "intermediate" },
        "버스": { category: "Transportation", difficulty: "beginner" }, "기차": { category: "Transportation", difficulty: "beginner" },
        "지하철": { category: "Transportation", difficulty: "intermediate" }, "비행기": { category: "Transportation", difficulty: "beginner" },
        "자전거": { category: "Transportation", difficulty: "intermediate" }, "오토바이": { category: "Transportation", difficulty: "intermediate" },
        "택시": { category: "Transportation", difficulty: "beginner" }, "배": { category: "Transportation", difficulty: "beginner" },
        "공항": { category: "Places", difficulty: "intermediate" }, "역": { category: "Places", difficulty: "intermediate" },
        "식당": { category: "Places", difficulty: "beginner" }, "카페": { category: "Places", difficulty: "beginner" },
        "병원": { category: "Places", difficulty: "beginner" }, "은행": { category: "Places", difficulty: "intermediate" },
        "공원": { category: "Places", difficulty: "beginner" }, "도서관": { category: "Places", difficulty: "intermediate" },
        "서점": { category: "Places", difficulty: "intermediate" }, "가게": { category: "Places", difficulty: "beginner" },
        "백화점": { category: "Places", difficulty: "advanced" }, "시장": { category: "Places", difficulty: "intermediate" },
        "모자": { category: "Items", difficulty: "beginner" }, "시계": { category: "Items", difficulty: "beginner" },
        "반지": { category: "Items", difficulty: "intermediate" }, "목걸이": { category: "Items", difficulty: "advanced" },
        "우산": { category: "Items", difficulty: "beginner" }, "열쇠": { category: "Items", difficulty: "beginner" },
        "거울": { category: "Items", difficulty: "beginner" }, "휴지": { category: "Items", difficulty: "intermediate" },
        "수건": { category: "Items", difficulty: "intermediate" }, "비누": { category: "Items", difficulty: "intermediate" },
        // Verbs - most are beginner/intermediate
        "먹다": { category: "Actions", difficulty: "beginner" }, "가다": { category: "Actions", difficulty: "beginner" },
        "오다": { category: "Actions", difficulty: "beginner" }, "보다": { category: "Actions", difficulty: "beginner" },
        "듣다": { category: "Actions", difficulty: "beginner" }, "말하다": { category: "Communication", difficulty: "beginner" },
        "쓰다": { category: "Actions", difficulty: "beginner" }, "읽다": { category: "Actions", difficulty: "beginner" },
        "공부하다": { category: "Education", difficulty: "beginner" }, "일하다": { category: "Actions", difficulty: "beginner" },
        "자다": { category: "Actions", difficulty: "beginner" }, "일어나다": { category: "Actions", difficulty: "intermediate" },
        "걷다": { category: "Actions", difficulty: "beginner" }, "뛰다": { category: "Actions", difficulty: "beginner" },
        "웃다": { category: "Emotions", difficulty: "beginner" }, "울다": { category: "Emotions", difficulty: "beginner" },
        "사랑하다": { category: "Emotions", difficulty: "beginner" }, "생각하다": { category: "Mental", difficulty: "intermediate" },
        "배우다": { category: "Education", difficulty: "beginner" }, "가르치다": { category: "Education", difficulty: "intermediate" },
        "주다": { category: "Actions", difficulty: "beginner" }, "받다": { category: "Actions", difficulty: "beginner" },
        "사다": { category: "Actions", difficulty: "beginner" }, "팔다": { category: "Actions", difficulty: "intermediate" },
        "기다리다": { category: "Actions", difficulty: "intermediate" }, "전화하다": { category: "Communication", difficulty: "beginner" },
        "놀다": { category: "Activities", difficulty: "beginner" }, "쉬다": { category: "Actions", difficulty: "beginner" },
        "만들다": { category: "Actions", difficulty: "beginner" }, "사용하다": { category: "Actions", difficulty: "intermediate" },
        "열다": { category: "Actions", difficulty: "beginner" }, "닫다": { category: "Actions", difficulty: "beginner" },
        "시작하다": { category: "Actions", difficulty: "intermediate" }, "끝내다": { category: "Actions", difficulty: "intermediate" },
        "도착하다": { category: "Actions", difficulty: "intermediate" }, "출발하다": { category: "Actions", difficulty: "intermediate" },
        "묻다": { category: "Communication", difficulty: "intermediate" }, "대답하다": { category: "Communication", difficulty: "intermediate" },
        "노래하다": { category: "Entertainment", difficulty: "beginner" }, "춤추다": { category: "Entertainment", difficulty: "intermediate" },
        "싸우다": { category: "Actions", difficulty: "advanced" }, "이기다": { category: "Actions", difficulty: "intermediate" },
        "지다": { category: "Actions", difficulty: "intermediate" }, "노력하다": { category: "Mental", difficulty: "intermediate" },
        "기억하다": { category: "Mental", difficulty: "intermediate" }, "잊다": { category: "Mental", difficulty: "intermediate" },
        "도와주다": { category: "Actions", difficulty: "intermediate" }, "약속하다": { category: "Communication", difficulty: "intermediate" },
        "결정하다": { category: "Mental", difficulty: "intermediate" }, "준비하다": { category: "Actions", difficulty: "intermediate" },
        "알다": { category: "Mental", difficulty: "beginner" }, "모르다": { category: "Mental", difficulty: "beginner" },
        "성공하다": { category: "Mental", difficulty: "intermediate" }, "실패하다": { category: "Mental", difficulty: "intermediate" },
        "기쁘다": { category: "Emotions", difficulty: "intermediate" }, "슬프다": { category: "Emotions", difficulty: "intermediate" },
        "아프다": { category: "Body", difficulty: "intermediate" }, "맵다": { category: "Food", difficulty: "intermediate" },
        "달다": { category: "Food", difficulty: "intermediate" },
        "좋아하다": { category: "Emotions", difficulty: "beginner" }, "싫어하다": { category: "Emotions", difficulty: "intermediate" },
        "운동하다": { category: "Activities", difficulty: "beginner" }, "샤워하다": { category: "Actions", difficulty: "intermediate" },
        "세수하다": { category: "Actions", difficulty: "intermediate" }, "운전하다": { category: "Actions", difficulty: "intermediate" },
        "예약하다": { category: "Actions", difficulty: "advanced" }, "주문하다": { category: "Actions", difficulty: "intermediate" },
        "계산하다": { category: "Actions", difficulty: "intermediate" }, "청소하다": { category: "Actions", difficulty: "intermediate" },
        "입다": { category: "Actions", difficulty: "beginner" }, "벗다": { category: "Actions", difficulty: "intermediate" },
        "신다": { category: "Actions", difficulty: "intermediate" }, "닦다": { category: "Actions", difficulty: "intermediate" },
        "씻다": { category: "Actions", difficulty: "intermediate" }, "타다": { category: "Actions", difficulty: "beginner" },
        "내리다": { category: "Actions", difficulty: "intermediate" }, "타이핑하다": { category: "Actions", difficulty: "advanced" },
        "그리다": { category: "Activities", difficulty: "intermediate" }, "찍다": { category: "Actions", difficulty: "intermediate" },
        "찾다": { category: "Actions", difficulty: "beginner" }, "버리다": { category: "Actions", difficulty: "intermediate" },
        "잃어버리다": { category: "Actions", difficulty: "advanced" }, "빌리다": { category: "Actions", difficulty: "intermediate" },
        "돌려주다": { category: "Actions", difficulty: "intermediate" }, "보내다": { category: "Actions", difficulty: "beginner" },
        "가져오다": { category: "Actions", difficulty: "intermediate" }, "가져가다": { category: "Actions", difficulty: "intermediate" },
        "이사하다": { category: "Actions", difficulty: "advanced" }, "결혼하다": { category: "Actions", difficulty: "advanced" },
        "부탁하다": { category: "Communication", difficulty: "intermediate" }, "소개하다": { category: "Communication", difficulty: "intermediate" },
        "인사하다": { category: "Communication", difficulty: "beginner" }, "칭찬하다": { category: "Communication", difficulty: "advanced" },
        "사과하다": { category: "Communication", difficulty: "intermediate" }, "이해하다": { category: "Mental", difficulty: "intermediate" },
        "설명하다": { category: "Communication", difficulty: "intermediate" }, "비교하다": { category: "Mental", difficulty: "advanced" },
        "조심하다": { category: "Actions", difficulty: "advanced" }
    };

    // Build enhanced database
    function buildWordDatabase() {
        const database = { nouns: [], verbs: [] };
        
        WORD_DATABASE_RAW.nouns.forEach(word => {
            const meta = WORD_METADATA[word] || { category: "General", difficulty: "beginner" };
            database.nouns.push({ word, type: 'nouns', ...meta });
        });
        
        WORD_DATABASE_RAW.verbs.forEach(word => {
            const meta = WORD_METADATA[word] || { category: "General", difficulty: "beginner" };
            database.verbs.push({ word, type: 'verbs', ...meta });
        });
        
        return database;
    }

    const WORD_DATABASE = buildWordDatabase();

    let sourceLang = 'ko';
    let targetLang = 'en';
    let currentType = 'nouns';
    let currentMode = 'translator';
    let currentWord = null;
    let currentTranslation = null;

    // Shuffle logic variables
    let pools = {
        nouns: [...WORD_DATABASE.nouns],
        verbs: [...WORD_DATABASE.verbs]
    };
    let history = [];
    
    // Device ID for history storage
    function getDeviceId() {
        let deviceId = localStorage.getItem('numbread_device_id');
        if (!deviceId) {
            // Generate a unique device ID
            deviceId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('numbread_device_id', deviceId);
        }
        return deviceId;
    }
    
    const deviceId = getDeviceId();
    const historyStorageKey = `numbread_history_${deviceId}`;
    
    // Load history from localStorage
    function loadHistory() {
        try {
            const savedHistory = localStorage.getItem(historyStorageKey);
            if (savedHistory) {
                history = JSON.parse(savedHistory);
                // Ensure history is an array
                if (!Array.isArray(history)) {
                    history = [];
                } else {
                    // Add pronunciation to old history items that don't have it
                    history = history.map(item => {
                        if (!item.pronunciation && item.korean) {
                            item.pronunciation = koreanToRomanization(item.korean);
                        }
                        return item;
                    });
                    // Save updated history with pronunciations
                    saveHistory();
                }
            } else {
                history = [];
            }
            // Always render to show placeholder if empty
            renderHistory();
        } catch (error) {
            console.error('Error loading history:', error);
            history = [];
            renderHistory();
        }
    }
    
    // Save history to localStorage
    function saveHistory() {
        try {
            localStorage.setItem(historyStorageKey, JSON.stringify(history));
        } catch (error) {
            console.error('Error saving history:', error);
            // If storage is full, try to clear old entries
            if (error.name === 'QuotaExceededError') {
                // Keep only the most recent 10 items
                history = history.slice(0, 10);
                try {
                    localStorage.setItem(historyStorageKey, JSON.stringify(history));
                } catch (e) {
                    console.error('Still unable to save history:', e);
                }
            }
        }
    }
    
    // Flashcard state
    let flashcardIndex = 0;
    let flashcardWords = [];
    let isFlipped = false;
    
    // Quiz state
    let quizWords = [];
    let currentQuizIndex = 0;
    let quizScoreCount = 0;
    let quizAnswers = [];
    
    // Typing state
    let typingWords = [];
    let currentTypingIndex = 0;
    let typingCorrectCount = 0;
    let typingWrongCount = 0;
    
    // Theme state
    let isDarkTheme = false;

    // Korean to Romanization (Revised Romanization of Korean)
    function koreanToRomanization(korean) {
        // Initial consonants (19 total, indexed 0-18)
        const initialConsonants = [
            'g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's',
            'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'
        ];
        
        // Medial vowels (21 total, indexed 0-20)
        const medialVowels = [
            'a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa',
            'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'
        ];
        
        // Final consonants (28 total including empty, indexed 0-27)
        const finalConsonants = [
            '', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'k',
            'm', 'p', 'l', 'l', 'p', 'l', 'm', 'p', 'p', 't',
            't', 'ng', 't', 't', 'k', 't', 'p', 't'
        ];
        
        let result = '';
        
        for (let i = 0; i < korean.length; i++) {
            const char = korean[i];
            const code = char.charCodeAt(0);
            
            // Check if it's a Hangul character (0xAC00-0xD7A3)
            if (code >= 0xAC00 && code <= 0xD7A3) {
                const base = code - 0xAC00;
                const initial = Math.floor(base / 588);
                const medial = Math.floor((base % 588) / 28);
                const final = base % 28;
                
                let romanized = initialConsonants[initial] || '';
                romanized += medialVowels[medial] || '';
                romanized += finalConsonants[final] || '';
                
                result += romanized;
            } else {
                // Non-Hangul character, keep as is
                result += char;
            }
        }
        
        return result;
    }

    // Utility to shuffle an array (Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Initial shuffle of pools
    shuffleArray(pools.nouns);
    shuffleArray(pools.verbs);

    // Get filtered words based on category and difficulty
    function getFilteredWords(type) {
        const category = categoryFilter.value;
        const difficulty = difficultyFilter.value;
        
        return WORD_DATABASE[type].filter(item => {
            const categoryMatch = category === 'all' || item.category === category;
            const difficultyMatch = difficulty === 'all' || item.difficulty === difficulty;
            return categoryMatch && difficultyMatch;
        });
    }

    // Update category filter options
    function updateCategoryFilter() {
        const categories = new Set();
        WORD_DATABASE.nouns.forEach(item => categories.add(item.category));
        WORD_DATABASE.verbs.forEach(item => categories.add(item.category));
        
        categoryFilter.innerHTML = '<option value="all">All Categories</option>';
        [...categories].sort().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });
    }

    // Shuffle Function
    async function shuffleWord() {
        const filtered = getFilteredWords(currentType);
        if (filtered.length === 0) {
            alert('No words match the selected filters. Please adjust your filters.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * filtered.length);
        const wordData = filtered[randomIndex];
        const randomWord = wordData.word;
        currentWord = wordData;

        sourceText.value = randomWord;
        sourceText.classList.add('shimmer');

        // Show pronunciation for Korean words
        if (sourceLang === 'ko' && randomWord) {
            const pronunciation = koreanToRomanization(randomWord);
            pronunciationArea.textContent = `Pronunciation: ${pronunciation}`;
            pronunciationListenBtn.style.display = 'block';
            koreanListenBtn.style.display = 'block';
        } else {
            pronunciationArea.textContent = '';
            pronunciationListenBtn.style.display = 'none';
            koreanListenBtn.style.display = 'none';
        }

        // Auto-translate after a small delay to feel like an API call
        setTimeout(() => {
            sourceText.classList.remove('shimmer');
            translate(randomWord, currentType);
        }, 300);
    }

    // Translate Function (External API)
    async function translate(text, type) {
        if (!text) return;

        // UI Loading state
        translateBtn.classList.add('loading');
        translateBtn.querySelector('span').textContent = 'Translating...';
        targetText.classList.add('shimmer');

        try {
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.responseData) {
                const translated = data.responseData.translatedText;
                currentTranslation = translated;
                targetText.textContent = translated;
                targetText.classList.add('result-active');

                // Show pronunciation for Korean words in source area
                if (sourceLang === 'ko' && text) {
                    const pronunciation = koreanToRomanization(text);
                    pronunciationArea.textContent = `Pronunciation: ${pronunciation}`;
                    pronunciationListenBtn.style.display = 'block';
                } else {
                    pronunciationArea.textContent = '';
                    pronunciationListenBtn.style.display = 'none';
                }

                // Show tags based on current type, category, and difficulty if in Korean mode
                wordTags.innerHTML = '';
                if (sourceLang === 'ko' && currentWord) {
                    const typeSpan = document.createElement('span');
                    typeSpan.className = 'tag';
                    typeSpan.textContent = type === 'nouns' ? 'Noun' : 'Verb';
                    wordTags.appendChild(typeSpan);
                    
                    if (currentWord.category) {
                        const catSpan = document.createElement('span');
                        catSpan.className = 'tag';
                        catSpan.textContent = currentWord.category;
                        wordTags.appendChild(catSpan);
                    }
                    
                    if (currentWord.difficulty) {
                        const diffSpan = document.createElement('span');
                        diffSpan.className = 'tag difficulty-' + currentWord.difficulty;
                        diffSpan.textContent = currentWord.difficulty.charAt(0).toUpperCase() + currentWord.difficulty.slice(1);
                        wordTags.appendChild(diffSpan);
                    }
                }

                // Add to history with metadata and pronunciation
                const pronunciation = koreanToRomanization(text);
                addToHistory(text, translated, type, currentWord, pronunciation);

                targetText.style.animation = 'none';
                targetText.offsetHeight; // trigger reflow
                targetText.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                targetText.textContent = "Error: Could not retrieve translation.";
                pronunciationArea.textContent = '';
                pronunciationListenBtn.style.display = 'none';
            }
        } catch (error) {
            console.error('Translation error:', error);
            targetText.textContent = "Error: API request failed.";
            pronunciationArea.textContent = '';
            pronunciationListenBtn.style.display = 'none';
        } finally {
            translateBtn.classList.remove('loading');
            translateBtn.querySelector('span').textContent = 'Translate';
            targetText.classList.remove('shimmer');
        }
    }

    // History Logic
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history');
    const exportHistoryBtn = document.getElementById('export-history');
    const deviceIndicator = document.getElementById('device-indicator');
    
    // Show device indicator (shortened version)
    if (deviceIndicator) {
        const shortDeviceId = deviceId.split('_')[1] || deviceId.substring(0, 8);
        deviceIndicator.textContent = `Device: ${shortDeviceId}`;
    }

    function addToHistory(korean, english, type, wordData = null, pronunciation = null) {
        // Generate pronunciation if not provided
        if (!pronunciation && korean) {
            pronunciation = koreanToRomanization(korean);
        }
        
        const item = { 
            korean, 
            english, 
            type, 
            timestamp: Date.now(),
            category: wordData?.category || null,
            difficulty: wordData?.difficulty || null,
            pronunciation: pronunciation || null
        };
        history.unshift(item); // Add to start
        if (history.length > 20) history.pop(); // Keep last 20

        saveHistory(); // Save to localStorage
        updateHistoryCategoryFilter(); // Update category filter options
        renderHistory();
    }

    // Filter and search history
    function getFilteredHistory() {
        const searchTerm = document.getElementById('history-search-input')?.value.toLowerCase() || '';
        const typeFilter = document.getElementById('history-type-filter')?.value || 'all';
        const categoryFilter = document.getElementById('history-category-filter')?.value || 'all';
        const difficultyFilter = document.getElementById('history-difficulty-filter')?.value || 'all';

        return history.filter(item => {
            // Search filter
            const matchesSearch = !searchTerm || 
                item.korean.toLowerCase().includes(searchTerm) ||
                item.english.toLowerCase().includes(searchTerm);
            
            // Type filter
            const matchesType = typeFilter === 'all' || item.type === typeFilter;
            
            // Category filter
            const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
            
            // Difficulty filter
            const matchesDifficulty = difficultyFilter === 'all' || item.difficulty === difficultyFilter;
            
            return matchesSearch && matchesType && matchesCategory && matchesDifficulty;
        });
    }

    function renderHistory() {
        const filteredHistory = getFilteredHistory();
        
        if (filteredHistory.length === 0) {
            if (history.length === 0) {
                historyList.innerHTML = '<div class="history-placeholder">Your shuffle history will appear here...</div>';
            } else {
                historyList.innerHTML = '<div class="history-placeholder">No items match your search/filter criteria.</div>';
            }
            return;
        }

        historyList.innerHTML = filteredHistory.map((item, index) => {
            // Generate pronunciation if not stored
            const pronunciation = item.pronunciation || koreanToRomanization(item.korean);
            
            const tags = [];
            tags.push(`<span class="tag h-tag">${item.type === 'nouns' ? 'Noun' : 'Verb'}</span>`);
            if (item.category) {
                tags.push(`<span class="tag h-tag">${item.category}</span>`);
            }
            if (item.difficulty) {
                const diffClass = `difficulty-${item.difficulty}`;
                tags.push(`<span class="tag h-tag ${diffClass}">${item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}</span>`);
            }
            
            return `
                <div class="history-item" data-korean="${item.korean}" data-pronunciation="${pronunciation}" data-index="${index}">
                    <div class="h-content">
                        <span class="h-korean">${item.korean}</span>
                        <span class="h-english">${item.english}</span>
                        <span class="h-pronunciation">
                            <i class="fas fa-volume-up"></i> ${pronunciation}
                        </span>
                    </div>
                    <div class="h-tags">${tags.join('')}</div>
                </div>
            `;
        }).join('');
        
        // Add click event listeners to history items
        document.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // Don't trigger if clicking on tags
                if (e.target.closest('.h-tags')) return;
                
                const korean = item.dataset.korean;
                const pronunciation = item.dataset.pronunciation;
                
                if (korean && pronunciation) {
                    // Play Korean pronunciation
                    const utterance = new SpeechSynthesisUtterance(korean);
                    utterance.lang = 'ko-KR';
                    window.speechSynthesis.speak(utterance);
                    
                    // Add visual feedback
                    item.classList.add('playing');
                    setTimeout(() => {
                        item.classList.remove('playing');
                    }, 1000);
                }
            });
        });
    }

    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all history for this device?')) {
            history = [];
            saveHistory(); // Clear from localStorage
            renderHistory();
        }
    });
    
    // History search and filter elements
    const historySearchInput = document.getElementById('history-search-input');
    const historyTypeFilter = document.getElementById('history-type-filter');
    const historyCategoryFilter = document.getElementById('history-category-filter');
    const historyDifficultyFilter = document.getElementById('history-difficulty-filter');
    
    // Update history category filter options
    function updateHistoryCategoryFilter() {
        if (!historyCategoryFilter) return;
        
        const categories = new Set();
        history.forEach(item => {
            if (item.category) categories.add(item.category);
        });
        
        // Keep "All Categories" option
        const currentValue = historyCategoryFilter.value;
        historyCategoryFilter.innerHTML = '<option value="all">All Categories</option>';
        
        [...categories].sort().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            historyCategoryFilter.appendChild(option);
        });
        
        // Restore selection if it still exists
        if (categories.has(currentValue)) {
            historyCategoryFilter.value = currentValue;
        }
    }
    
    // Event listeners for search and filters
    if (historySearchInput) {
        historySearchInput.addEventListener('input', () => {
            renderHistory();
        });
    }
    
    if (historyTypeFilter) {
        historyTypeFilter.addEventListener('change', () => {
            renderHistory();
        });
    }
    
    if (historyCategoryFilter) {
        historyCategoryFilter.addEventListener('change', () => {
            renderHistory();
        });
    }
    
    if (historyDifficultyFilter) {
        historyDifficultyFilter.addEventListener('change', () => {
            renderHistory();
        });
    }
    
    // Load history on page load (after all functions are defined)
    loadHistory();
    
    // Update category filter after loading history
    updateHistoryCategoryFilter();
    
    // Export history to file
    if (exportHistoryBtn) {
        exportHistoryBtn.addEventListener('click', () => {
            if (history.length === 0) {
                alert('No history to export.');
                return;
            }
            
            const historyData = {
                deviceId: deviceId,
                exportDate: new Date().toISOString(),
                totalItems: history.length,
                history: history
            };
            
            const dataStr = JSON.stringify(historyData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `numbread-history-${deviceId}-${Date.now()}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });
    }
    
    // Export history to file
    exportHistoryBtn.addEventListener('click', () => {
        if (history.length === 0) {
            alert('No history to export.');
            return;
        }
        
        const historyData = {
            deviceId: deviceId,
            exportDate: new Date().toISOString(),
            totalItems: history.length,
            history: history
        };
        
        const dataStr = JSON.stringify(historyData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `numbread-history-${deviceId}-${Date.now()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });

    // Event Listeners
    translateBtn.addEventListener('click', () => translate(sourceText.value, currentType));
    shuffleBtn.addEventListener('click', shuffleWord);

    copyBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (text && text !== 'Translation will appear here...') {
            navigator.clipboard.writeText(text).then(() => {
                const icon = copyBtn.querySelector('i');
                icon.className = 'fas fa-check';
                setTimeout(() => icon.className = 'far fa-copy', 2000);
            });
        }
    });

    listenBtn.addEventListener('click', () => {
        const text = targetText.textContent;
        if (text && text !== 'Translation will appear here...') {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = targetLang === 'ko' ? 'ko-KR' : 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    });

    pronunciationListenBtn.addEventListener('click', () => {
        const pronunciationText = pronunciationArea.textContent;
        if (pronunciationText) {
            // Extract pronunciation from "Pronunciation: [text]" format
            const match = pronunciationText.match(/Pronunciation:\s*(.+)/);
            if (match && match[1]) {
                const pronunciation = match[1].trim();
                const utterance = new SpeechSynthesisUtterance(pronunciation);
                utterance.lang = 'en-US'; // Romanized pronunciation uses English phonetics
                utterance.rate = 0.9; // Slightly slower for clarity
                window.speechSynthesis.speak(utterance);
            }
        }
    });

    genBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            genBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentType = btn.dataset.type;
        });
    });

    // Korean TTS Button
    koreanListenBtn.addEventListener('click', () => {
        const koreanWord = sourceText.value;
        if (koreanWord) {
            const utterance = new SpeechSynthesisUtterance(koreanWord);
            utterance.lang = 'ko-KR';
            window.speechSynthesis.speak(utterance);
        }
    });

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);
        const icon = themeToggle.querySelector('i');
        icon.className = isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }

    // Mode Switching
    function switchMode(mode) {
        currentMode = mode;
        translatorSection.style.display = mode === 'translator' ? 'block' : 'none';
        flashcardSection.style.display = mode === 'flashcard' ? 'block' : 'none';
        quizSection.style.display = mode === 'quiz' ? 'block' : 'none';
        typingSection.style.display = mode === 'typing' ? 'block' : 'none';
        
        // Show/hide filter controls
        const filterControls = document.getElementById('filter-controls');
        if (filterControls) {
            filterControls.style.display = mode === 'translator' ? 'flex' : 'none';
        }
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.mode === mode);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchMode(link.dataset.mode);
        });
    });

    // Initialize category filter
    updateCategoryFilter();

    // Filter change listeners
    categoryFilter.addEventListener('change', () => {
        // Reset pools when filters change
        pools.nouns = [...WORD_DATABASE.nouns];
        pools.verbs = [...WORD_DATABASE.verbs];
    });

    difficultyFilter.addEventListener('change', () => {
        // Reset pools when filters change
        pools.nouns = [...WORD_DATABASE.nouns];
        pools.verbs = [...WORD_DATABASE.verbs];
    });

    // Flashcard Functions
    function loadFlashcards() {
        const filtered = getFilteredWords(currentType);
        flashcardWords = [...filtered];
        shuffleArray(flashcardWords);
        flashcardIndex = 0;
        isFlipped = false;
        if (flashcardWords.length > 0) {
            showFlashcard();
        }
    }

    async function showFlashcard() {
        if (flashcardWords.length === 0) return;
        const wordData = flashcardWords[flashcardIndex];
        flashcardWord.textContent = wordData.word;
        flashcardTranslation.textContent = 'Click to see translation';
        flashcardPronunciation.textContent = '';
        flashcardTags.innerHTML = '';
        isFlipped = false;
        flashcard.classList.remove('flipped');
        
        // Get translation
        const translation = await getTranslation(wordData.word);
        if (translation) {
            flashcardTranslation.textContent = translation;
            flashcardPronunciation.textContent = `Pronunciation: ${koreanToRomanization(wordData.word)}`;
            
            const tags = [wordData.type === 'nouns' ? 'Noun' : 'Verb'];
            if (wordData.category) tags.push(wordData.category);
            if (wordData.difficulty) tags.push(wordData.difficulty.charAt(0).toUpperCase() + wordData.difficulty.slice(1));
            
            flashcardTags.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        }
    }

    flashcard.addEventListener('click', () => {
        isFlipped = !isFlipped;
        flashcard.classList.toggle('flipped', isFlipped);
    });

    prevCardBtn.addEventListener('click', () => {
        if (flashcardWords.length === 0) return;
        flashcardIndex = (flashcardIndex - 1 + flashcardWords.length) % flashcardWords.length;
        isFlipped = false;
        flashcard.classList.remove('flipped');
        showFlashcard();
    });

    nextCardBtn.addEventListener('click', () => {
        if (flashcardWords.length === 0) return;
        flashcardIndex = (flashcardIndex + 1) % flashcardWords.length;
        isFlipped = false;
        flashcard.classList.remove('flipped');
        showFlashcard();
    });

    shuffleCardsBtn.addEventListener('click', () => {
        loadFlashcards();
    });

    // Quiz Functions
    function startQuiz() {
        const filtered = getFilteredWords(currentType);
        if (filtered.length < 4) {
            alert('Need at least 4 words for quiz. Adjust filters.');
            return;
        }
        quizWords = [...filtered].slice(0, Math.min(10, filtered.length));
        shuffleArray(quizWords);
        currentQuizIndex = 0;
        quizScoreCount = 0;
        quizAnswers = [];
        startQuizBtn.style.display = 'none';
        quizContent.style.display = 'block';
        showQuizQuestion();
    }

    async function showQuizQuestion() {
        if (currentQuizIndex >= quizWords.length) {
            endQuiz();
            return;
        }
        
        const wordData = quizWords[currentQuizIndex];
        quizQuestion.textContent = `What does "${wordData.word}" mean?`;
        quizTotal.textContent = quizWords.length;
        
        // Get correct answer
        const correctAnswer = await getTranslation(wordData.word);
        
        // Get wrong answers
        const wrongWords = quizWords.filter((w, i) => i !== currentQuizIndex).slice(0, 3);
        const wrongAnswers = [];
        for (const w of wrongWords) {
            const trans = await getTranslation(w.word);
            if (trans) wrongAnswers.push(trans);
        }
        
        // Shuffle options
        const options = [correctAnswer, ...wrongAnswers];
        shuffleArray(options);
        const correctIndex = options.indexOf(correctAnswer);
        
        quizOptions.innerHTML = options.map((opt, i) => 
            `<button class="quiz-option" data-correct="${i === correctIndex}">${opt}</button>`
        ).join('');
        
        quizAnswers.push({ word: wordData.word, correct: correctAnswer, correctIndex });
        
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', handleQuizAnswer);
        });
        
        quizFeedback.textContent = '';
        nextQuestionBtn.style.display = 'none';
    }

    function handleQuizAnswer(e) {
        const isCorrect = e.target.dataset.correct === 'true';
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        });
        
        if (isCorrect) {
            quizScoreCount++;
            quizFeedback.textContent = 'Correct! ✓';
            quizFeedback.className = 'quiz-feedback correct';
        } else {
            quizFeedback.textContent = `Wrong! The answer is: ${quizAnswers[currentQuizIndex].correct}`;
            quizFeedback.className = 'quiz-feedback wrong';
        }
        
        quizScore.textContent = quizScoreCount;
        nextQuestionBtn.style.display = 'block';
    }

    nextQuestionBtn.addEventListener('click', () => {
        currentQuizIndex++;
        showQuizQuestion();
    });

    function endQuiz() {
        quizContent.innerHTML = `
            <div class="quiz-results">
                <h2>Quiz Complete!</h2>
                <p>Your Score: ${quizScoreCount}/${quizWords.length}</p>
                <p>Accuracy: ${Math.round((quizScoreCount / quizWords.length) * 100)}%</p>
                <button id="restart-quiz" class="primary-btn">Try Again</button>
            </div>
        `;
        document.getElementById('restart-quiz').addEventListener('click', () => {
            startQuiz();
        });
    }

    startQuizBtn.addEventListener('click', startQuiz);

    // Typing Practice Functions
    function startTyping() {
        const filtered = getFilteredWords(currentType);
        if (filtered.length === 0) {
            alert('No words match the selected filters.');
            return;
        }
        typingWords = [...filtered].slice(0, Math.min(20, filtered.length));
        shuffleArray(typingWords);
        currentTypingIndex = 0;
        typingCorrectCount = 0;
        typingWrongCount = 0;
        startTypingBtn.style.display = 'none';
        typingContent.style.display = 'block';
        showTypingWord();
    }

    async function showTypingWord() {
        if (currentTypingIndex >= typingWords.length) {
            endTyping();
            return;
        }
        
        const wordData = typingWords[currentTypingIndex];
        const translation = await getTranslation(wordData.word);
        typingEnglish.textContent = translation || 'Loading...';
        typingInput.value = '';
        typingInput.focus();
        typingFeedback.textContent = '';
        typingNextBtn.style.display = 'none';
        
        typingInput.onkeypress = (e) => {
            if (e.key === 'Enter') {
                checkTypingAnswer();
            }
        };
    }

    function checkTypingAnswer() {
        const userInput = typingInput.value.trim();
        const correctWord = typingWords[currentTypingIndex].word;
        
        if (userInput === correctWord) {
            typingCorrectCount++;
            typingFeedback.textContent = 'Correct! ✓';
            typingFeedback.className = 'typing-feedback correct';
        } else {
            typingWrongCount++;
            typingFeedback.textContent = `Wrong! The answer is: ${correctWord}`;
            typingFeedback.className = 'typing-feedback wrong';
        }
        
        typingCorrect.textContent = typingCorrectCount;
        typingWrong.textContent = typingWrongCount;
        typingNextBtn.style.display = 'block';
    }

    typingNextBtn.addEventListener('click', () => {
        currentTypingIndex++;
        showTypingWord();
    });

    function endTyping() {
        typingContent.innerHTML = `
            <div class="typing-results">
                <h2>Practice Complete!</h2>
                <p>Correct: ${typingCorrectCount}</p>
                <p>Wrong: ${typingWrongCount}</p>
                <p>Accuracy: ${Math.round((typingCorrectCount / (typingCorrectCount + typingWrongCount)) * 100)}%</p>
                <button id="restart-typing" class="primary-btn">Try Again</button>
            </div>
        `;
        document.getElementById('restart-typing').addEventListener('click', () => {
            startTyping();
        });
    }

    startTypingBtn.addEventListener('click', startTyping);

    // Helper function to get translation without UI updates
    async function getTranslation(text) {
        try {
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ko|en`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.responseData) {
                return data.responseData.translatedText;
            }
        } catch (error) {
            console.error('Translation error:', error);
        }
        return null;
    }
});
