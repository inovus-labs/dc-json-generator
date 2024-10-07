
export const data = {

    // Operating systems
    platform: [
        { label: 'Android', value: 'android' },
        { label: 'iOS', value: 'ios' },
        { label: 'Web', value: 'web' },
        { label: 'Windows', value: 'windows' },
        { label: 'macOS', value: 'macos' },
        { label: 'Linux', value: 'linux' }
    ],

    // Product categories
    product_category: [
        { label: "Artificial Intelligence", value: "artificial-intelligence" },
        { label: "Business", value: "business" },
        { label: "Collaboration", value: "collaboration" },
        { label: "Communication", value: "communication" },
        { label: "CRM", value: "crm" },
        { label: "Crypto & Web3", value: "crypto & web3" },
        { label: "Developer Tools", value: "developer tools" },
        { label: "Eduaction", value: "education" },
        { label: "Entertainment", value: "entertainment" },
        { label: "Finance", value: "finance" },
        { label: "Food & Drink", value: "food & drink" },
        { label: "Graphics & Design", value: "graphics & design" },
        { label: "Health & Fitness", value: "health & fitness" },
        { label: "Jobs & Recruitment", value: "jobs & recruitment" },
        { label: "Lifestyle", value: "lifestyle" },
        { label: "Medical", value: "medical" },
        { label: "Music & Audio", value: "music & audio" },
        { label: "Maps & Navigation", value: "maps & navigation" },
        { label: "News", value: "news" },
        { label: "Photo & Video", value: "photo & video" },
        { label: "Productivity", value: "productivity" },
        { label: "Real Estate", value: "real estate" },
        { label: "Reference", value: "reference" },
        { label: "Shopping", value: "shopping" },
        { label: "Social Networking", value: "social networking" },
        { label: "Sports", value: "sports" },
        { label: "Travel & Transportation", value: "travel & transportation" },
        { label: "Utilities", value: "utilities" },
    ],

    // Screens
    screens: [
        {
            title: 'New User Experience',
            options: [
                { label: 'Launch Screen', value: 'launch-screen' },
                { label: 'Welcome & Get Started', value: 'welcome-get-started' },
                { label: 'Walkthrough', value: 'walkthrough' },
                { label: 'Signup', value: 'signup' },
                { label: 'Verification', value: 'verification' },
                { label: 'Account Setup', value: 'account-setup' },
                { label: 'Guided Tour & Toutorial', value: 'guided-tour-toutorial' }
            ]
        },
        {
            title: 'Account Management',
            options: [
                { label: 'My Account & Profile', value: 'my-account-profile' },
                { label: 'Settings & Preferences', value: 'settings-preferences' },
                { label: 'Login', value: 'login' }
            ]
        },
        {
            title: 'Communication',
            options: [
                { label: 'About', value: 'about' },
                { label: 'Action Option', value: 'action-option' },
                { label: 'Acknowledgement & Success', value: 'acknowledgement-success' },
                { label: 'Error', value: 'error' },
                { label: 'Confirmation', value: 'confirmation' },
                { label: 'Permission', value: 'permission' },
                { label: 'Empty State', value: 'empty-state' },
                { label: 'Loading', value: 'loading' },
                { label: 'Pull to Refresh', value: 'pull-to-refresh'},
                { label: 'Feature Info', value: 'feature-info'},
                { label: 'Suggestion & Similar Item', value: 'suggestion-similar-item'},
                { label: 'Help & Support', value: 'help-support'},
                { label: 'Feedback', value: 'feedback'},
                { label: 'Privacy Policy', value: 'privacy-policy'},
                { label: 'Terms & Conditons', value: 'terms-conditons'},
            ]
        },
        {
            title: 'Commerce & Finance',
            options: [
                { label: 'Shop & Storefront', value: 'shop-storefront' },
                { label: 'Subscription & Paywall', value: 'subscription-paywall' },
                { label: 'Checkout', value: 'checkout' },
                { label: 'Cart & Bag', value: 'cart-bag' },
                { label: 'Payment Method', value: 'payment-method' },
                { label: 'Order History', value: 'order-history' },
                { label: 'Pricing', value: 'pricing' },
                { label: 'Wallet & Balance', value: 'wallet-balance' },
                { label: 'Promotions & Reward', value: 'promotions-reward'}
            ]
        },
        {
            title: 'Social',
            options: [
                { label: 'Achievements & Awards', value: 'achievements-awards' },
                { label: 'Activity Feed & Notifications', value: 'activity-feed-notifications' },
                { label: 'Reviews & Ratings', value: 'reviews-ratings' },
                { label: 'Social Feed', value: 'social-feed' },
                { label: 'Followers & Following', value: 'followers-following' },
                { label: 'Comments', value: 'comments' },
                { label: 'Leaderboard', value: 'leaderboard' },
                { label: 'Chat Detail', value: 'chat-detail' },
                { label: 'Groups & Community', value: 'groups-community' }                
            ]
        },
        {
            title: 'Content',
            options: [
                { label: 'Home', value: 'home' },
                { label: 'Browse & Discover', value: 'browse-discover' },
                { label: 'News Feed', value: 'news-feed' },
                { label: 'Item List', value: 'item-list' },
                { label: 'Emails & Messages', value: 'emails-messages' },
                { label: 'Article Detail', value: 'article-detail' },
                { label: 'Product Detail', value: 'product-detail' },
                { label: 'Event Detail', value: 'event-detail' },
                { label: 'Class & Lesson Detail', value: 'class-lesson-detail' },
                { label: 'TV Show & Movie Detail', value: 'tvshow-movie-detail' },
                { label: 'Song & Podcast Detail', value: 'song-podcast-detail' },
                { label: 'Recipe Detail', value: 'recipe-detail' },
                { label: 'Note Detail', value: 'note-detail' },
                { label: 'Goal & Task', value: 'goal-task' },
                { label: 'Post Detail', value: 'post-detail' },
                { label: 'Stories', value: 'stories' },
                { label: 'Quiz', value: 'quiz' },
                { label: 'Augmented Reality', value: 'augmented-reality' },
                { label: 'Other Content', value: 'other-content' }
            ]
        }, {
            title: 'Actions',
            options: [
                { label: 'Add & Create', value: 'add-create' },
                { label: 'Edit', value: 'edit' },
                { label: 'Delete', value: 'delete' },
                { label: 'Upload & Download', value: 'upload-download' },
                { label: 'Select', value: 'select' },
                { label: 'Move', value: 'move' },
                { label: 'Reorder', value: 'reorder' },
                { label: 'Draw & Annotate', value: 'draw-annotate' },
                { label: 'Save', value: 'save' },
                { label: 'Cancel', value: 'cancel' },
                { label: 'Set', value: 'set' },
                { label: 'Schedule', value: 'schedule' },
                { label: 'Like & Upvote', value: 'like-upvote' },
                { label: 'Follow & Subscribe', value: 'follow-subscribe' },
                { label: 'Share', value: 'share' },
                { label: 'Flag & Report', value: 'flag-report' },
                { label: 'Ban & Block', value: 'ban-block' },
                { label: 'Invite & Refer Friends', value: 'invite-refer-friends' },
                { label: 'Filter & Sort', value: 'filter-sort' },
                { label: 'Search', value: 'search' },
                { label: 'Transfer & Send Money', value: 'transfer-send-money' },
                { label: 'Other Actions', value: 'other-actions' },          
            ]
        },
        {
            title: 'Data',
            options: [
                { label: 'Charts', value: 'charts' },
                { label: 'Progress', value: 'progress' },
                { label: 'Dashboard', value: 'dashboard' },
                { label: 'Size Guide', value: 'size-guide' }
            ]
        },
        {
            title: 'User Collections',
            options: [
                { label: 'Bookmarks & Collections', value: 'bookmarks-collections' },
                { label: 'Downloads & Available Offline', value: 'downloads-offline' },
                { label: 'Playlists', value: 'playlists' },
                { label: 'Trash & Archive', value: 'trash-archive' },
            ]
        },
        {
            title: 'User Collections',
            options: [
                { label: 'Timeline & History', value: 'timeline-history' },
                { label: 'Map', value: 'map' },
                { label: 'Calendar', value: 'calendar' },
                { label: 'Reminder', value: 'reminder' },
                { label: 'Timer & Clock', value: 'timer-clock' },
                { label: 'Date & Time', value: 'date-time' },
                { label: 'Location & Address', value: 'location-address' },
                { label: 'Chat Bot', value: 'chat-bot' },
                { label: 'Media Editor', value: 'media-editor' },
                { label: 'Audio Player', value: 'audio-player' },
                { label: 'Video Player', value: 'video-player' },
                { label: 'Audio & Video Recorder', value: 'audio-video-recorder' },
                { label: 'Camera & Scanner', value: 'camera-scanner' },
                { label: 'Filters & Stickers', value: 'filters-stickers' },
                { label: 'Call', value: 'call' },
                { label: 'Browser', value: 'browser' }
            ]
        },
        {
            title: 'Misc',
            options: [
                { label: 'Confetti', value: 'confetti' },
                { label: 'Dark Mode', value: 'dark-mode' },
                { label: 'Misc', value: 'misc' }
            ]
        },

        
    ],
    
    // UI Elements
    ui_elements: [
        {
            title: 'Control',
            options: [
                { label: 'Button', value: 'button' },
                { label: 'Floating Action Button', value: 'floating-action-button' },
                { label: 'Tab & Segmented Control', value: 'tab-segmented-control' },
                { label: 'Checkbox', value: 'checkbox' },
                { label: 'Radio Button', value: 'radio-button' },
                { label: 'Switch & Toggle', value: 'switch-toggle' },
                { label: 'Text Field', value: 'text-field' },
                { label: 'Search Bar', value: 'search-bar' },
                { label: 'Slider', value: 'slider' },
                { label: 'Stepper', value: 'stepper' },
                { label: 'Date Picker', value: 'date-picker' },
                { label: 'Time Picker', value: 'time-picker' },
                { label: 'Color Picker', value: 'color-picker' },
                { label: 'Accordion & Collapse', value: 'accordion-collapse' },
                { label: 'Page Control', value: 'page-control' },
                { label: 'Tile', value: 'tile' }
            ]
        },
        {
            title: 'View',
            options: [
                { label: 'Top Bar & Navigation Bar', value: 'top-bar-navigation-bar' },
                { label: 'Sidebar & Navigation Rail', value: 'sidebar-navigation-rail' },
                { label: 'Card', value: 'card' },
                { label: 'Carousel', value: 'carousel' },
                { label: 'Table', value: 'table' },
                { label: 'List', value: 'list' },
                { label: 'Image List & Gallery', value: 'image-list-gallery' },
                { label: 'Banner & Alert', value: 'banner-alert' },
                { label: 'Divider & Separator', value: 'divider-separator' },
                { label: 'Badge & Status Dot', value: 'badge-status-dot' },
                { label: 'Tag & Chip', value: 'tag-chip' },
                { label: 'Map Pin', value: 'map-pin' },
                { label: 'Skeleton', value: 'skeleton' },
                { label: 'Loading Indicator', value: 'loading-indicator' },
                { label: 'Progress Indicator', value: 'progress-indicator' },
                { label: 'Toolbar', value: 'toolbar' }
            ]
        },
        {
            title: 'Overlay',
            options: [
                { label: 'Dropdown Menu', value: 'dropdown-menu' },
                { label: 'Dialog', value: 'dialog' },
                { label: 'Toast & Snackbar', value: 'toast-snackbar' },
                { label: 'Tooltip', value: 'tooltip' },
                { label: 'Coach Marks', value: 'coach-marks' },
                { label: 'Bottom Sheet', value: 'bottom-sheet' },
                { label: 'Bottom Sheet (Tall)', value: 'bottom-sheet-tall' },
                { label: 'Drawer & Sheet', value: 'drawer-sheet' },
                { label: 'Full-Screen Overlay', value: 'full-screen-overlay' }
            ]
        },
        {
            title: 'Imagery',
            options: [
                { label: 'Avatar', value: 'avatar' },
                { label: 'Logo', value: 'logo' },
                { label: 'Icon', value: 'icon' },
                { label: 'Thumbnail', value: 'thumbnail' },
                { label: 'Hero Image', value: 'hero-image' },
                { label: 'Animation & Video', value: 'animation-video' },
                { label: 'Illustartion', value: 'illustartion' },
                { label: 'Photo', value: 'photo' }
            ]
        }
    ],

    // Flow
    user_flow: [
        {
            title: 'New User Experience',
            options: [
                { label: 'Onboarding', value: 'onboarding' },
                { label: 'Creating Account', value: 'creating-account' },
                { label: 'Browsing Tutorial', value: 'browsing-tutorial' }
            ]
        },
        {
            title: 'Account Management',
            options: [
                { label: 'Logging In', value: 'logging-in' },
                { label: 'Logging Out', value: 'logging-out' },
                { label: 'Editing Profile', value: 'editing-profile' },
                { label: 'Deleting & Deactivating Account', value: 'deleting-deactivating-account' },
                { label: 'Resetting Password', value: 'resetting-password' },
                { label: 'Switching Account', value: 'switching-account' },
            ]
        },
        {
            title: 'Commerce & Finance',
            options: [
                { label: 'Adding to Cart & Bag', value: 'adding-to-cart-bag' },
                { label: 'Purchasing & Ordering', value: 'purchasing-ordering' },
                { label: 'Booking & Reserving', value: 'booking-reserving' },
                { label: 'Subscribing & Upgrading', value: 'subscribing-upgrading' },
                { label: 'Transferring Money & Donating', value: 'transferring-money-donating' },
                { label: 'Listing', value: 'listing' },
                { label: 'Canceling Order & Refunding', value: 'canceling-order-refunding' },
                { label: 'Canceling Subscription', value: 'canceling-subscription' },
                { label: 'Redeeming', value: 'redeeming' }
            ]
        },
        {
            title: 'Social',
            options: [
                { label: 'Sharing', value: 'sharing' },
                { label: 'Chatting & Sending Messages', value: 'chatting-sending-messages' },
                { label: 'Gifting', value: 'gifting' },
                { label: 'Commenting & Replying', value: 'commenting-replying' },
                { label: 'Liking & Upvoting', value: 'liking-upvoting' },
                { label: 'Reporting', value: 'reporting' },
                { label: 'Banning & Blocking', value: 'banning-blocking' },
                { label: 'Muting', value: 'muting' },
                { label: 'Following & Subscribing', value: 'following-subscribing' },
                { label: 'Scheduling', value: 'scheduling' },
                { label: 'Joining & Accepting', value: 'joining-accepting' },
                { label: 'Leaving', value: 'leaving' },
                { label: 'Requesting', value: 'requesting' },
                { label: 'Calling', value: 'calling' },
                { label: 'Giving Feedback', value: 'giving-feedback' },
                { label: 'Reviewing & Rating', value: 'reviewing-rating' },
                { label: 'Registering', value: 'registering' },
                { label: 'Inviting Teammates & Friends', value: 'inviting-teammates-friends' },
                { label: 'Referring Friends', value: 'referring-friends' }
            ]
        },
        {
            title: 'Content',
            options:[
                { label: 'Adding & Creating', value: 'adding-creating' },
                { label: 'Editing & Updating', value: 'editing-updating' },
                { label: 'Deleting & Removing', value: 'deleting-removing' },
                { label: 'Searching & Finding', value: 'searching-finding' },
                { label: 'Filtering & Sorting', value: 'filtering-sorting' },
                { label: 'Saving to Collection', value: 'saving-to-collection' },
                { label: 'Starting & Completing', value: 'starting-completing' },
                { label: 'Watching Video', value: 'watching-video' },
                { label: 'Listening to Audio', value: 'listening-to-audio' },
                { label: 'Taking Photos', value: 'taking-photos' },
                { label: 'Scanning', value: 'scanning' },
                { label: 'Drawing', value: 'drawing' },
                { label: 'Recording Audio & Video', value: 'recording-audio-video' },
                { label: 'Uploading & Downloading', value: 'uploading-downloading' },
                { label: 'Importing & Exporting', value: 'importing-exporting' },
                { label: 'Selecting & Choosing', value: 'selecting-choosing' },
                { label: 'Copying & Duplicating', value: 'copying-duplicating' },
                { label: 'Moving', value: 'moving' },
                { label: 'Reordering', value: 'reordering' },
                { label: 'Logging & Tracking', value: 'logging-tracking' },
                { label: 'Publishing', value: 'publishing' },
                { label: 'Marking', value: 'marking' },
                { label: 'Pinning', value: 'pinning' },
                
            ]
        },
        {
            title: 'Misc',
            options:[
                { label: 'Archiving', value: 'archiving' },
                { label: 'Enabling & Disabling', value: 'enabling-disabling' },
                { label: 'Setting Up', value: 'setting-up' },
                { label: 'Connecting & Linking', value: 'connecting-linking' },
                { label: 'Verifying', value: 'verifying' },
                { label: 'Showing & Hiding', value: 'showing-hiding' },
                { label: 'Switching to Dark Mode', value: 'switching-to-dark-mode' },
                { label: 'Switching View', value: 'switching-view' },
                { label: 'Turning On/Off', value: 'turning-on-off' },
                { label: 'Misc', value: 'misc' }
            ]
        }
    ]
}
