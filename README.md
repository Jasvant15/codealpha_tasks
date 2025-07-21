# Image Gallery

A beautiful, responsive image gallery built with HTML, CSS, and JavaScript featuring modern design, smooth animations, and interactive functionality.

## Features

### ✨ Core Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Image Filtering**: Filter images by categories (All, Nature, Architecture, People, Abstract)
- **Lightbox View**: Click any image to open it in a full-screen lightbox
- **Navigation Controls**: Previous/Next buttons for browsing through images
- **Smooth Animations**: Hover effects and transitions throughout the interface

### 🎨 Design Features
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Hover Effects**: Images scale and show overlays on hover
- **Smooth Transitions**: All interactions have smooth CSS transitions
- **Glass Morphism**: Semi-transparent elements with backdrop blur effects
- **Typography**: Beautiful typography with proper hierarchy

### 🚀 Interactive Features
- **Keyboard Navigation**: Use arrow keys and Escape in lightbox mode
- **Touch Friendly**: Optimized for touch devices
- **Lazy Loading**: Images load as needed for better performance
- **Category Filtering**: Instantly filter images by category
- **Lightbox Navigation**: Navigate through images within the lightbox

## File Structure

```
task 1/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md          # This documentation
```

## Usage

1. **Open the Gallery**: Open `index.html` in your web browser
2. **Browse Images**: Scroll through the gallery to see all images
3. **Filter Categories**: Click filter buttons to show specific categories
4. **View Lightbox**: Click any image to open it in full-screen mode
5. **Navigate**: Use arrow buttons or keyboard arrows to navigate
6. **Close Lightbox**: Press Escape or click the X button

## Technical Details

### HTML Structure
- Semantic HTML5 markup
- Accessible button and navigation elements
- Font Awesome icons for visual elements
- Responsive meta tags

### CSS Features
- CSS Grid for responsive layout
- Flexbox for component alignment
- CSS transitions and transforms
- Media queries for responsive design
- Backdrop filter effects
- Box shadows and gradients

### JavaScript Features
- ES6+ syntax
- Event delegation
- DOM manipulation
- Keyboard event handling
- Image filtering logic
- Lightbox functionality

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized Images**: Using Unsplash API with size parameters
- **Smooth Scrolling**: CSS scroll-behavior for better UX
- **Efficient DOM**: Minimal DOM manipulation
- **Event Optimization**: Proper event listener management

## Customization

### Adding New Images
Edit the `images` array in `script.js`:

```javascript
{
    id: 13,
    src: 'your-image-url.jpg',
    title: 'Image Title',
    description: 'Image description',
    category: 'nature' // or 'architecture', 'people', 'abstract'
}
```

### Styling Changes
- Colors: Modify CSS custom properties
- Layout: Adjust grid settings in `.gallery-grid`
- Animations: Modify transition durations in CSS
- Typography: Change font families and sizes

### Adding Categories
1. Add new filter button in HTML
2. Add category to image data
3. Update filter logic if needed

## Credits

- **Images**: Unsplash (free stock photos)
- **Icons**: Font Awesome
- **Design**: Custom modern design
- **Code**: Vanilla JavaScript, HTML5, CSS3

## License

This project is open source and available under the MIT License. 