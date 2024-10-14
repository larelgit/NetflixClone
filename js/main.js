// Sample Data for Movies
const movies = [
    {
        id: 1,
        title: "The Matrix",
        description: "A computer hacker learns about the true nature of his reality.",
        image: "matrix.png",
        rating: "16+"
    },
    {
        id: 2,
        title: "Inception",
        description: "A thief who steals corporate secrets through dream-sharing technology.",
        image: "inception.png",
        rating: "13+"
    },
    {
        id: 3,
        title: "Stranger Things",
        description: "When a young boy disappears, his mother must confront supernatural forces to get him back.",
        image: "strangerthings.png",
        rating: "16+"
    },
    // Add more movie objects as needed
];

// Function to Load Movies
function loadMovies() {
    const moviesContainer = document.getElementById('movies-container');

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-item');

        const movieImage = document.createElement('img');
        movieImage.src = `./images/${movie.image}`;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('p');
        movieTitle.textContent = movie.title;

        movieDiv.appendChild(movieImage);
        movieDiv.appendChild(movieTitle);

        // Add click event to show movie details
        movieDiv.addEventListener('click', () => showMovieDetails(movie));

        moviesContainer.appendChild(movieDiv);
    });
}

// Modal Elements
const modal = document.getElementById('movie-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');

// Function to Show Movie Details in Modal
function showMovieDetails(movie) {
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;
    modal.style.display = 'block';
}

// Close Modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close Modal When Clicking Outside
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Play Button Functionality
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    const bannerVideo = document.getElementById('banner-video');
    const banner = document.querySelector('.banner');

    bannerVideo.muted = false; // Unmute the video
    bannerVideo.play().catch(error => {
        console.error('Error playing video:', error);
    });
    bannerVideo.setAttribute('controls', 'controls'); // Show video controls

    // Add classes to trigger CSS animations if not already added
    if (!bannerVideo.classList.contains('active')) {
        bannerVideo.classList.add('active');
    }
    if (!banner.classList.contains('video-playing')) {
        banner.classList.add('video-playing');
    }
});

// Scroll Event to Change Header Transparency
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Banner Video Transition
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();

    const banner = document.querySelector('.banner');
    const bannerVideo = document.getElementById('banner-video');
    let transitionStarted = false;

    // Function to start video transition
    function startVideoTransition() {
        if (!transitionStarted) {
            transitionStarted = true;
            bannerVideo.classList.add('active');
            banner.classList.add('video-playing');
            bannerVideo.play().catch(error => {
                console.error('Error playing video:', error);
            });
        }
    }

    // Delay before attempting to start the transition
    setTimeout(() => {
        if (bannerVideo.readyState >= 3) { // HAVE_FUTURE_DATA
            startVideoTransition();
        } else {
            // Wait for video to be ready
            bannerVideo.addEventListener('canplaythrough', startVideoTransition);
        }
    }, 3000); // 3-second delay

    // Handle video end event to transition back to banner image
    bannerVideo.addEventListener('ended', () => {
        // Reset classes to transition back to banner image
        bannerVideo.classList.remove('active');
        banner.classList.remove('video-playing');
        bannerVideo.removeAttribute('controls'); // Hide video controls
        bannerVideo.currentTime = 0; // Reset video to start

        // Mute the video again
        bannerVideo.muted = true;
    });
});