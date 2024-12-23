// Sample news data (mock API data)
const newsData = [
    { title: "Technology: AI Breakthrough", description: "An amazing new breakthrough in artificial intelligence.", category: "Technology", imageUrl: "https://tse2.mm.bing.net/th?id=OIP.1Q_sPzE0Nc13qLFD80Xp2QHaEK&pid=Api&P=0&h=180", url: "#" },
    { title: "Business: Stock Market Update", description: "The stock market is experiencing a significant rise.", category: "Business", imageUrl: "https://thumbs.dreamstime.com/z/team-business-executives-planning-consultations-business-investments-related-to-shares-team-business-158836794.jpg", url: "#" },
    { title: "Health: Benefits of Yoga", description: "Yoga has been shown to improve mental and physical health.", category: "Health", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.PJBJPKGY-8bRfgIWHuqdIAHaER&pid=Api&P=0&h=180", url: "#" },
    { title: "Science: New Mars Mission", description: "NASA's new Mars mission is set to launch next month.", category: "Science", imageUrl: "https://tse4.mm.bing.net/th?id=OIP.fuAnl7uApE8AjU9nP5hACgHaE8&pid=Api&P=0&h=180", url: "#" },
    { title: "Sports: Football Championship", description: "The football championship finals are just around the corner.", category: "Sports", imageUrl: "https://tse3.mm.bing.net/th?id=OIP.J2RorHvH5rXyRZpJkQSkeAHaEK&pid=Api&P=0&h=180", url: "#" },
];

// Function to render the news items
function renderNews(news) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ''; // Clear previous news
    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
            <img src="${item.imageUrl}" alt="News Image">
            <h2><a href="${item.url}" target="_blank">${item.title}</a></h2>
            <p>${item.description}</p>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Function to filter news by category
function filterNews(category) {
    const filteredNews = newsData.filter(item => item.category === category);
    renderNews(filteredNews);
}

// Function to search news by title or description
function searchNews(query) {
    const filteredNews = newsData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    renderNews(filteredNews);
}

// Event listener for search bar
document.getElementById("search-bar").addEventListener("input", (event) => {
    searchNews(event.target.value);
});

// Initial render (show all news)
renderNews(newsData);
