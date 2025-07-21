// Sample image data with categories
const images = [
    // Nature Images
    {
        id: 1,
        src: 'landscape-9521261_1280.webp',
        title: 'Mountain Landscape',
        description: 'Beautiful mountain scenery with snow-capped peaks',
        category: 'nature'
    },
    {
        id: 2,
        src: 'trees-4450514_1280.jpg',
        title: 'Forest Canopy',
        description: 'Lush green forest with sunlight filtering through trees',
        category: 'nature'
    },
    {
        id: 3,
        src: 'sunset-6387462_1280.jpg',
        title: 'Ocean Sunset',
        description: 'Stunning sunset over calm ocean waters',
        category: 'nature'
    },
    {
        id: 4,
        src: 'desert-6826297_1280.jpg',
        title: 'Desert Dunes',
        description: 'Rolling sand dunes in golden desert landscape',
        category: 'nature'
    },
    {
        id: 5,
        src: 'cascata-delle-marmore-526945_1280.jpg',
        title: 'Waterfall',
        description: 'Majestic waterfall cascading down rocky cliffs',
        category: 'nature'
    },
    {
        id: 6,
        src: 'flower-7958117_1280.jpg',
        title: 'Cherry Blossoms',
        description: 'Pink cherry blossoms in full bloom',
        category: 'nature'
    },
    
    // Architecture Images
    {
        id: 7,
        src: 'skyscraper-4433572_1280.jpg',
        title: 'Modern Skyscraper',
        description: 'Glass and steel skyscraper reflecting city lights',
        category: 'architecture'
    },
    {
        id: 8,
        src: 'duomo-6808817_1280.jpg',
        title: 'Gothic Cathedral',
        description: 'Historic gothic cathedral with intricate stonework',
        category: 'architecture'
    },
    {
        id: 9,
        src: 'landscape-5313115_1280.jpg',
        title: 'Bridge Architecture',
        description: 'Elegant bridge spanning across a river',
        category: 'architecture'
    },
    {
        id: 10,
        src: 'port-7366365_1280.jpg',
        title: 'Modern Museum',
        description: 'Contemporary museum with innovative design',
        category: 'architecture'
    },
    {
        id: 11,
        src: 'temple-3723244_1280.jpg',
        title: 'Traditional Temple',
        description: 'Ancient temple with ornate architectural details',
        category: 'architecture'
    },
    {
        id: 12,
        src: 'dubai-4722074_1280.jpg',
        title: 'Luxury Hotel',
        description: 'Opulent hotel with modern luxury design',
        category: 'architecture'
    },
    
    // People Images
    {
        id: 13,
        src: 'camera-7903435_1280.jpg',
        title: 'Professional Portrait',
        description: 'Confident business professional in formal attire',
        category: 'people'
    },
    {
        id: 14,
        src: 'men-771677_1280.jpg',
        title: 'Street Musician',
        description: 'Talented street performer playing guitar',
        category: 'people'
    },
    {
        id: 15,
        src: 'family-7022831_1280.jpg',
        title: 'Family Portrait',
        description: 'Happy family enjoying outdoor activities',
        category: 'people'
    },
    {
        id: 16,
        src: 'kitchen-81493_1280.jpg',
        title: 'Chef at Work',
        description: 'Professional chef preparing gourmet cuisine',
        category: 'people'
    },
    {
        id: 17,
        src: 'artist-4622221_1280.jpg',
        title: 'Artist Studio',
        description: 'Creative artist working in their studio',
        category: 'people'
    },
    {
        id: 18,
        src: 'cricket-166904_1280.jpg',
        title: 'Athlete in Action',
        description: 'Dynamic sports photography capturing movement',
        category: 'people'
    },
    
    // Screenshot Images
    {
        id: 19,
        src: 'Screenshot 2025-06-28 193220.png',
        title: 'Dashboard Interface',
        description: 'Modern web dashboard with analytics and charts',
        category: 'screenshots'
    },
    {
        id: 20,
        src: 'Screenshot 2025-07-15 115048.png',
        title: 'Portfolio Skills',
        description: 'My Portfolio Skills',
        category: 'screenshots'
    },
    {
        id: 21,
        src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
        title: 'Code Editor',
        description: 'Programming interface with syntax highlighting',
        category: 'screenshots'
    },
    {
        id: 22,
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        title: 'E-commerce Platform',
        description: 'Online shopping website with product catalog',
        category: 'screenshots'
    },
    {
        id: 23,
        src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
        title: 'Social Media App',
        description: 'Social networking platform with user profiles',
        category: 'screenshots'
    },
    {
        id: 24,
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        title: 'Project Management',
        description: 'Task management interface with team collaboration',
        category: 'screenshots'
    }
];

// Global variables
let currentFilter = 'all';
let currentImageIndex = 0;
let filteredImages = [...images];

// Favorites system
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function isFavorite(id) {
    return favorites.includes(id);
}

function toggleFavorite(id) {
    if (isFavorite(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderGallery();
}

// Filter categories for navigation
const filterCategories = ['all', 'nature', 'architecture', 'people', 'screenshots', 'favorites'];
let currentFilterIndex = 0;

// DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// Initialize the gallery
function initGallery() {
    renderGallery();
    setupEventListeners();
    updateNavigationButtons();
}

// Render gallery items
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    filteredImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });
}

// Create individual gallery item
function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-index', index);
    item.setAttribute('data-category', image.category);

    // Heart icon for favorite
    const heartClass = isFavorite(image.id) ? 'favorite' : '';
    item.innerHTML = `
        <img src="${image.src}" alt="${image.title}" loading="lazy">
        <div class="gallery-item-overlay">
            <h3>${image.title}</h3>
            <p>${image.description}</p>
            <span class="heart-icon ${heartClass}" title="Favorite" data-id="${image.id}">&#10084;</span>
        </div>
    `;

    // Add click event for lightbox (ignore if heart clicked)
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('heart-icon')) return;
        openLightbox(index);
    });

    // Heart icon click event
    const heart = item.querySelector('.heart-icon');
    heart.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(image.id);
    });

    return item;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterImages(filter);
        });
    });
    
    // Navigation buttons now change filter
    prevBtn.addEventListener('click', () => navigateFilter('prev'));
    nextBtn.addEventListener('click', () => navigateFilter('next'));
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Close lightbox on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Filter images by category
function filterImages(category) {
    currentFilter = category;
    currentFilterIndex = filterCategories.indexOf(category);
    
    // Update active filter button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter images
    if (category === 'all') {
        filteredImages = [...images];
    } else if (category === 'favorites') {
        filteredImages = images.filter(image => isFavorite(image.id));
    } else {
        filteredImages = images.filter(image => image.category === category);
    }
    
    // Re-render gallery
    renderGallery();
    updateNavigationButtons();
}

// Navigation for filter categories
function navigateFilter(direction) {
    if (direction === 'prev') {
        currentFilterIndex = currentFilterIndex > 0 ? currentFilterIndex - 1 : filterCategories.length - 1;
    } else {
        currentFilterIndex = currentFilterIndex < filterCategories.length - 1 ? currentFilterIndex + 1 : 0;
    }
    const newFilter = filterCategories[currentFilterIndex];
    filterImages(newFilter);
}

// Update navigation button states
function updateNavigationButtons() {
    const hasImages = filteredImages.length > 0;
    prevBtn.disabled = !hasImages;
    nextBtn.disabled = !hasImages;
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    const image = filteredImages[index];
    
    lightboxImage.src = image.src;
    lightboxTitle.textContent = image.title;
    lightboxDescription.textContent = image.description;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigate within lightbox
function navigateLightbox(direction) {
    if (filteredImages.length === 0) return;
    
    if (direction === 'prev') {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    } else {
        currentImageIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    const image = filteredImages[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxTitle.textContent = image.title;
    lightboxDescription.textContent = image.description;
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
    if (!lightbox.classList.contains('active')) return;
    
    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            navigateLightbox('prev');
            break;
        case 'ArrowRight':
            navigateLightbox('next');
            break;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery); 