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
    // Duplicated Movies to Fill the List
    {
        id: 4,
        title: "The Matrix Reloaded",
        description: "Neo and the rebel leaders estimate that they have 72 hours until Zion falls.",
        image: "matrix.png",
        rating: "16+"
    },
    {
        id: 5,
        title: "Inception (Alternate)",
        description: "A thief who steals corporate secrets through dream-sharing technology.",
        image: "inception.png",
        rating: "13+"
    },
    {
        id: 6,
        title: "Stranger Things 2",
        description: "The adventure continues as supernatural forces return to Hawkins.",
        image: "strangerthings.png",
        rating: "16+"
    },
    {
        id: 7,
        title: "The Matrix Revolutions",
        description: "The human city of Zion defends itself against the massive invasion of the machines.",
        image: "matrix.png",
        rating: "16+"
    },
    {
        id: 8,
        title: "Inception Dream",
        description: "A team embarks on a mission in the dream world.",
        image: "inception.png",
        rating: "13+"
    },
    {
        id: 9,
        title: "Stranger Things 3",
        description: "New threats emerge as the kids face adolescence and supernatural forces.",
        image: "strangerthings.png",
        rating: "16+"
    },
    // Additional duplicates if needed
    {
        id: 10,
        title: "The Matrix Awakens",
        description: "A new simulation reveals deeper layers of reality.",
        image: "matrix.png",
        rating: "16+"
    },
    {
        id: 11,
        title: "Inception Reality",
        description: "The line between dreams and reality blurs.",
        image: "inception.png",
        rating: "13+"
    },
    {
        id: 12,
        title: "Stranger Things 4",
        description: "The gang faces their most terrifying threat yet.",
        image: "strangerthings.png",
        rating: "16+"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Global Variables
    const bannerVideo = document.getElementById('banner-video');
    const banner = document.querySelector('.banner');
    const modalVideo = document.getElementById('modal-video');
    const playButton = document.querySelector('.play-button');
    const moreInfoButton = document.querySelector('.more-info-button');
    const moreInfoModal = document.getElementById('more-info-modal');
    const modalCloseButton = document.querySelector('.modal-close-button');

    const profilePicture = document.querySelector('.profile-picture');
    const profilePopup = document.getElementById('profile-popup');
    const signOutButton = document.getElementById('sign-out-button');

    // Function to Load Movies
    function loadMovies() {
        const moviesContainer = document.getElementById('movies-container');

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie-item');

            const movieImage = document.createElement('img');
            movieImage.src = `./images/${movie.image}`;
            movieImage.alt = movie.title;

            movieDiv.appendChild(movieImage);

            moviesContainer.appendChild(movieDiv);
        });

        // Scroll Button Functionality
        const leftScrollButton = document.querySelector('.left-scroll');
        const rightScrollButton = document.querySelector('.right-scroll');

        leftScrollButton.addEventListener('click', () => {
            moviesContainer.scrollBy({
                left: -300, // Adjust scrolling distance
                behavior: 'smooth'
            });
        });

        rightScrollButton.addEventListener('click', () => {
            moviesContainer.scrollBy({
                left: 300, // Adjust scrolling distance
                behavior: 'smooth'
            });
        });
    }

    // Load Movies
    loadMovies();

    // Preload and Preplay Modal Video for Smooth Transition
    modalVideo.muted = true;
    modalVideo.pause(); // Ensure it's paused

    // Play Button Functionality
    playButton.addEventListener('click', () => {
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

    // More Info Button Functionality
    moreInfoButton.addEventListener('click', () => {
        // Pause banner video
        let currentTime = bannerVideo.currentTime;
        bannerVideo.pause();
        bannerVideo.muted = true;
        bannerVideo.classList.remove('active');
        banner.classList.remove('video-playing');
        bannerVideo.removeAttribute('controls');

        // Set modal video time to match banner video
        modalVideo.currentTime = currentTime;
        modalVideo.muted = false;

        modalVideo.play().catch(error => {
            console.error('Error playing modal video:', error);
        });

        // Show modal
        moreInfoModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    });

    // Close Modal Button Functionality
    modalCloseButton.addEventListener('click', () => {
        // Pause modal video
        let currentTime = modalVideo.currentTime;
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.muted = true;

        // Resume banner video from same time
        bannerVideo.currentTime = currentTime;
        bannerVideo.play().catch(error => {
            console.error('Error playing banner video:', error);
        });
        bannerVideo.muted = false;
        bannerVideo.classList.add('active');
        banner.classList.add('video-playing');

        // Hide modal
        moreInfoModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    // Close Modal When Clicking Outside
    moreInfoModal.addEventListener('click', (event) => {
        if (event.target === moreInfoModal) {
            modalCloseButton.click();
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

    // ============================
    // Profile Popup Functionality
    // ============================

    // Toggle Popup Visibility on Profile Picture Click
    profilePicture.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        profilePopup.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!profilePicture.contains(event.target) && !profilePopup.contains(event.target)) {
            profilePopup.classList.remove('show');
        }
    });

    // Sign Out Button Functionality
    signOutButton.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });
});
