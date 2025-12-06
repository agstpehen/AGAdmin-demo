// AGAdmin - Main JavaScript File

$(document).ready(function() {
    // Initialize the application
    initializeApp();
    
    // Sidebar toggle functionality moved to layout.js for better mobile support
    
    // Navigation handling
    $('.components a[data-page]').on('click', function(e) {
        e.preventDefault();
        const page = $(this).data('page');
        loadPage(page);
        
        // Update active state
        $('.components li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
    
    // Dark mode toggle moved to layout.js
    
    // Language selector
    $('#languageSelect').on('change', function() {
        const language = $(this).val();
        changeLanguage(language);
    });
    
    // Logout functionality
    $('#logoutBtn').on('click', function(e) {
        e.preventDefault();
        logout();
    });
    
    // Initialize tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    // Initialize popovers
    $('[data-bs-toggle="popover"]').popover();
    
    // Auto-hide alerts after 5 seconds
    $('.alert').each(function() {
        const alert = $(this);
        setTimeout(function() {
            alert.fadeOut();
        }, 5000);
    });
    
    // File upload drag and drop
    initializeFileUpload();
    
    // Initialize data tables
    initializeDataTables();
    
    // Load default page
    loadPage('dashboard-overview');
});

// Initialize application
function initializeApp() {
    // Set default theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Set default language
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    
    // Initialize notifications
    initializeNotifications();
    
    // Load user profile
    loadUserProfile();
    
    console.log('AGAdmin initialized successfully');
}

// Page loading system
function loadPage(pageName) {
    showLoading();
    
    // Hide all page content
    $('#pageContent').empty();
    
    // Load page content based on page name
    switch(pageName) {
        case 'dashboard-overview':
            loadDashboardOverview();
            break;
        case 'dashboard-analytics':
            loadDashboardAnalytics();
            break;
        case 'users':
            loadUsersPage();
            break;
        case 'roles':
            loadRolesPage();
            break;
        case 'permissions':
            loadPermissionsPage();
            break;
        case 'categories':
            loadCategoriesPage();
            break;
        case 'territories':
            loadTerritoriesPage();
            break;
        case 'stores':
            loadStoresPage();
            break;
        case 'sales':
            loadSalesPage();
            break;
        case 'inventory':
            loadInventoryPage();
            break;
        case 'customers':
            loadCustomersPage();
            break;
        case 'projects':
            loadProjectsPage();
            break;
        case 'hr':
            loadHRPage();
            break;
        case 'sales-reports':
            loadSalesReportsPage();
            break;
        case 'financial-reports':
            loadFinancialReportsPage();
            break;
        case 'user-reports':
            loadUserReportsPage();
            break;
        case 'notifications':
            loadNotificationsPage();
            break;
        case 'messages':
            loadMessagesPage();
            break;
        case 'announcements':
            loadAnnouncementsPage();
            break;
        case 'general-settings':
            loadGeneralSettingsPage();
            break;
        case 'email-settings':
            loadEmailSettingsPage();
            break;
        case 'security-settings':
            loadSecuritySettingsPage();
            break;
        case 'audit-logs':
            loadAuditLogsPage();
            break;
        case 'ui-components':
            loadUIComponentsPage();
            break;
        case 'profile':
            loadProfilePage();
            break;
        default:
            loadDashboardOverview();
    }
    
    hideLoading();
}

// Loading states
function showLoading() {
    $('#pageContent').html(`
        <div class="d-flex justify-content-center align-items-center" style="height: 400px;">
            <div class="text-center">
                <div class="loading-spinner mb-3"></div>
                <p>Loading...</p>
            </div>
        </div>
    `);
}

function hideLoading() {
    // Loading will be replaced by page content
}

// Dark mode functionality
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = $('#darkModeToggle i');
    if (theme === 'dark') {
        icon.removeClass('fa-moon').addClass('fa-sun');
    } else {
        icon.removeClass('fa-sun').addClass('fa-moon');
    }
}

// Language functionality
function changeLanguage(language) {
    setLanguage(language);
    toastr.success('Language changed to ' + language.toUpperCase());
}

function setLanguage(language) {
    localStorage.setItem('language', language);
    $('#languageSelect').val(language);
    // Here you would typically load language files
    // For now, we'll just update the UI
}

// Notification system
function initializeNotifications() {
    // Simulate real-time notifications
    setInterval(function() {
        if (Math.random() > 0.7) {
            showNotification('New notification', 'info');
            updateNotificationCount();
        }
    }, 30000);
}

function showNotification(message, type = 'info') {
    toastr[type](message);
}

function updateNotificationCount() {
    const currentCount = parseInt($('#notificationCount').text()) || 0;
    $('#notificationCount').text(currentCount + 1);
}

// User profile management
function loadUserProfile() {
    // Simulate user data loading
    const userData = {
        name: 'Admin User',
        email: 'admin@agadmin.com',
        role: 'Administrator',
        avatar: 'assets/images/avatar.jpg'
    };
    
    // Update user info in navbar
    $('.navbar .dropdown-toggle span').text(userData.name);
}

// Logout functionality
function logout() {
    Swal.fire({
        title: 'Logout',
        text: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, logout'
    }).then((result) => {
        if (result.isConfirmed) {
            // Simulate logout process
            showLoading();
            setTimeout(function() {
                window.location.href = 'login.html';
            }, 1000);
        }
    });
}

// File upload functionality
function initializeFileUpload() {
    $('.file-upload-area').on('dragover', function(e) {
        e.preventDefault();
        $(this).addClass('dragover');
    });
    
    $('.file-upload-area').on('dragleave', function(e) {
        e.preventDefault();
        $(this).removeClass('dragover');
    });
    
    $('.file-upload-area').on('drop', function(e) {
        e.preventDefault();
        $(this).removeClass('dragover');
        
        const files = e.originalEvent.dataTransfer.files;
        handleFileUpload(files);
    });
    
    $('.file-upload-area').on('click', function() {
        $('<input type="file" multiple>').click().on('change', function() {
            handleFileUpload(this.files);
        });
    });
}

function handleFileUpload(files) {
    if (files.length > 0) {
        toastr.success(files.length + ' file(s) selected for upload');
        // Here you would typically upload files to server
    }
}

// Data tables initialization
function initializeDataTables() {
    $('.data-table').DataTable({
        responsive: true,
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
        language: {
            search: "Search:",
            lengthMenu: "Show _MENU_ entries",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            paginate: {
                first: "First",
                last: "Last",
                next: "Next",
                previous: "Previous"
            }
        }
    });
}

// Form validation
function validateForm(formId) {
    const form = $('#' + formId);
    let isValid = true;
    
    // Remove previous validation classes
    form.find('.is-invalid').removeClass('is-invalid');
    form.find('.invalid-feedback').remove();
    
    // Validate required fields
    form.find('[required]').each(function() {
        const field = $(this);
        if (!field.val().trim()) {
            field.addClass('is-invalid');
            field.after('<div class="invalid-feedback">This field is required.</div>');
            isValid = false;
        }
    });
    
    // Validate email fields
    form.find('input[type="email"]').each(function() {
        const field = $(this);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.val() && !emailRegex.test(field.val())) {
            field.addClass('is-invalid');
            field.after('<div class="invalid-feedback">Please enter a valid email address.</div>');
            isValid = false;
        }
    });
    
    return isValid;
}

// AJAX helper functions
function makeAjaxRequest(url, method = 'GET', data = null) {
    return $.ajax({
        url: url,
        method: method,
        data: data,
        dataType: 'json',
        beforeSend: function() {
            showLoading();
        },
        complete: function() {
            hideLoading();
        },
        error: function(xhr, status, error) {
            toastr.error('Request failed: ' + error);
        }
    });
}

// Export functionality
function exportToPDF(elementId, filename = 'export.pdf') {
    // This would typically use a library like jsPDF
    toastr.info('PDF export functionality would be implemented here');
}

function exportToExcel(elementId, filename = 'export.xlsx') {
    // This would typically use a library like SheetJS
    toastr.info('Excel export functionality would be implemented here');
}

function exportToCSV(elementId, filename = 'export.csv') {
    // This would typically use a library like Papa Parse
    toastr.info('CSV export functionality would be implemented here');
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

function formatDateTime(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Event handlers for common actions
$(document).on('click', '.btn-delete', function() {
    const itemName = $(this).data('item-name') || 'this item';
    
    Swal.fire({
        title: 'Delete Confirmation',
        text: `Are you sure you want to delete ${itemName}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle deletion logic here
            toastr.success('Item deleted successfully');
        }
    });
});

$(document).on('click', '.btn-edit', function() {
    const itemId = $(this).data('item-id');
    // Handle edit logic here
    toastr.info('Edit functionality for item ID: ' + itemId);
});

$(document).on('click', '.btn-view', function() {
    const itemId = $(this).data('item-id');
    // Handle view logic here
    toastr.info('View functionality for item ID: ' + itemId);
});

// Search functionality
$(document).on('keyup', '.search-input', debounce(function() {
    const searchTerm = $(this).val().toLowerCase();
    const targetTable = $(this).data('target-table');
    
    if (targetTable) {
        $(targetTable + ' tbody tr').each(function() {
            const rowText = $(this).text().toLowerCase();
            if (rowText.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
}, 300));

// Print functionality
$(document).on('click', '.btn-print', function() {
    window.print();
});

// Refresh functionality
$(document).on('click', '.btn-refresh', function() {
    const currentPage = $('.components li.active a').data('page');
    if (currentPage) {
        loadPage(currentPage);
    }
});

// Initialize tooltips on dynamically loaded content
$(document).on('mouseenter', '[data-bs-toggle="tooltip"]', function() {
    $(this).tooltip('show');
});

// Handle form submissions
$(document).on('submit', 'form', function(e) {
    e.preventDefault();
    
    const form = $(this);
    const formId = form.attr('id');
    
    if (validateForm(formId)) {
        // Handle form submission
        toastr.success('Form submitted successfully');
        form[0].reset();
    } else {
        toastr.error('Please fix the errors in the form');
    }
});

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    toastr.error('An unexpected error occurred');
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    toastr.error('An unexpected error occurred');
});

// Export functions for use in other modules
window.AGAdmin = {
    loadPage: loadPage,
    showNotification: showNotification,
    validateForm: validateForm,
    makeAjaxRequest: makeAjaxRequest,
    formatCurrency: formatCurrency,
    formatDate: formatDate,
    formatDateTime: formatDateTime,
    generateId: generateId,
    debounce: debounce
};

