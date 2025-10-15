const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const autoToggleBtn = document.getElementById('auto-toggle');
const shareBtn = document.getElementById('share-quote');
const themeToggleBtn = document.getElementById('theme-toggle');
const fadeOverlay = document.querySelector('.fade-overlay');

let autoMode = false;
let autoInterval;

const fallbackQuotes = [
    { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
    { text: 'Experience is the name everyone gives to their mistakes.', author: 'Oscar Wilde' },
    { text: 'In order to be irreplaceable, one must always be different.', author: 'Coco Chanel' },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
    { text: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson' },
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
    { text: 'Programming isn\'t about what you know; it\'s about what you can figure out.', author: 'Chris Pine' },
    { text: 'The only way to go fast, is to go well.', author: 'Robert C. Martin' },
    { text: 'Deleted code is debugged code.', author: 'Jeff Sickel' },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
    { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
    { text: 'Don\'t comment bad code - rewrite it.', author: 'Brian Kernighan' },
    { text: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan Perlis' },
    { text: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code.', author: 'Dan Salomon' },
    { text: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.', author: 'Antoine de Saint-Exupery' },
    { text: 'Before you marry a person, you should first make them use a computer with slow internet to see who they really are.', author: 'Will Ferrell' },
    { text: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
    { text: 'Walking on water and developing software from a specification are easy if both are frozen.', author: 'Edward V. Berard' },
    { text: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.', author: 'Bill Gates' },
    { text: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.', author: 'Edsger Dijkstra' },
    { text: 'The most important property of a program is whether it accomplishes the intention of its user.', author: 'C.A.R. Hoare' },
    { text: 'The function of good software is to make the complex appear to be simple.', author: 'Grady Booch' },
    { text: 'Software and cathedrals are much the same — first we build them, then we pray.', author: 'Sam Redwine' },
    { text: 'Programming is not easy like Sunday morning, it\'s more like wrestling a gorilla all day.', author: 'Matt Welsh' }
];

async function getQuoteFromAPI() {
    try {
        const res = await fetch('https://zenquotes.io/api/random');
        if (!res.ok) throw new Error('API Error');
        const data = await res.json();
        return { text: data[0].q, author: data[0].a };
    } catch (err) {
        console.warn('Using fallback quote due to API/network issue:', err);
        const randomLocal = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        return randomLocal;
    }
}

async function showQuote(animated = true) {
    const randomQuote = await getQuoteFromAPI();
    
    if (animated) {
        quoteText.classList.remove('show');
        setTimeout(() => {
            quoteText.textContent = `"${randomQuote.text}"`;
            quoteAuthor.textContent = `- ${randomQuote.author}`;
            quoteText.classList.add('show');
        }, 300);
    } else {
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
        quoteText.classList.add('show');
    }
}

function shareOnTwitter() {
    const text = encodeURIComponent(`${quoteText.textContent} ${quoteAuthor.textContent}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterUrl, '_blank');
}

function smoothThemeTransition() {
    document.body.classList.add('transitioning');
    fadeOverlay.style.opacity = '1';
    
    setTimeout(() => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        setTimeout(() => {
            fadeOverlay.style.opacity = '0';
            setTimeout(() => {
                document.body.classList.remove('transitioning');
            }, 100);
        }, 200);
    }, 600);
}

function toggleAutoMode() {
    autoMode = !autoMode;
    autoToggleBtn.textContent = `Auto: ${autoMode ? 'ON' : 'OFF'}`;
    
    if (autoMode) {
        autoToggleBtn.style.background = 'var(--btn-hover-bg)';
        autoToggleBtn.style.color = 'var(--btn-hover-text)';
        showQuote(false);
        autoInterval = setInterval(showQuote, 5000);
    } else {
        autoToggleBtn.style.background = '';
        autoToggleBtn.style.color = '';
        clearInterval(autoInterval);
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', () => {
    showQuote();
});

autoToggleBtn.addEventListener('click', toggleAutoMode);

shareBtn.addEventListener('click', shareOnTwitter);

themeToggleBtn.addEventListener('click', smoothThemeTransition);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        showQuote();
    }
    
    if (e.code === 'KeyA' && e.ctrlKey) {
        e.preventDefault();
        toggleAutoMode();
    }
    
    if (e.code === 'KeyT' && e.ctrlKey) {
        e.preventDefault();
        smoothThemeTransition();
    }
});

// Initialize
showQuote(false);

// Add some visual feedback for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});