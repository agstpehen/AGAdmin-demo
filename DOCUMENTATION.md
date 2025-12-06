# AGAdmin Documentation

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Modules](#modules)
5. [API Reference](#api-reference)
6. [Customization](#customization)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)

## Overview

AGAdmin is a comprehensive business admin panel built with modern web technologies. It provides a complete solution for business management with features like user management, analytics, reporting, and more.

### Key Features
- Modern, responsive design
- Comprehensive module system
- Real-time updates
- Export functionality
- Multi-language support
- Dark mode
- Security features

## Installation

### Requirements
- Modern web browser
- Web server (optional)

### Quick Start
1. Download or clone the repository
2. Open `index.html` in your browser
3. Login with demo credentials:
   - Email: `admin@agadmin.com`
   - Password: `admin123`

### Server Setup
For local development, use any of these methods:

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

## Configuration

### Basic Configuration
The admin panel can be configured through the Settings module:

1. Navigate to Settings > General
2. Configure company information
3. Set application preferences
4. Save changes

### Email Configuration
1. Go to Settings > Email
2. Configure SMTP settings
3. Set up email templates
4. Test email functionality

### Security Settings
1. Access Settings > Security
2. Configure password policies
3. Set up login security
4. Enable audit logging

## Modules

### Dashboard Module
The dashboard provides an overview of key metrics and system status.

**Features:**
- Key performance indicators
- Interactive charts
- Recent activity feed
- Quick actions
- System status

**Usage:**
```javascript
// Load dashboard overview
loadDashboardOverview();

// Load analytics dashboard
loadDashboardAnalytics();
```

### User Management Module
Comprehensive user management with CRUD operations.

**Features:**
- User creation and editing
- Role assignment
- Status management
- Bulk operations
- Profile management

**Usage:**
```javascript
// Load users page
loadUsersPage();

// Add new user
showAddUserModal();

// Edit user
editUser(userId);
```

### Settings Module
Global configuration and system settings.

**Features:**
- Company information
- Email settings
- Security configuration
- System preferences

**Usage:**
```javascript
// Load general settings
loadGeneralSettingsPage();

// Save settings
saveGeneralSettings();
```

### Notifications Module
Real-time notification system.

**Features:**
- In-app notifications
- Email notifications
- Notification history
- Bulk operations

**Usage:**
```javascript
// Load notifications
loadNotificationsPage();

// Send notification
showAddNotificationModal();
```

### Audit Logs Module
Comprehensive audit trail and logging.

**Features:**
- User action tracking
- System event logging
- Search and filtering
- Export functionality

**Usage:**
```javascript
// Load audit logs
loadAuditLogsPage();

// View log details
viewAuditLog(logId);
```

## API Reference

### Core Functions

#### Page Loading
```javascript
// Load a specific page
AGAdmin.loadPage(pageName);

// Show loading state
showLoading();

// Hide loading state
hideLoading();
```

#### Notifications
```javascript
// Show notification
AGAdmin.showNotification(message, type);

// Success notification
toastr.success('Operation completed');

// Error notification
toastr.error('Operation failed');
```

#### Form Validation
```javascript
// Validate form
AGAdmin.validateForm(formId);

// Example usage
if (AGAdmin.validateForm('userForm')) {
    // Form is valid
}
```

#### Data Export
```javascript
// Export to PDF
exportToPDF(elementId, filename);

// Export to Excel
exportToExcel(elementId, filename);

// Export to CSV
exportToCSV(elementId, filename);
```

### Utility Functions

#### Date Formatting
```javascript
// Format date
AGAdmin.formatDate(date);

// Format date and time
AGAdmin.formatDateTime(date);

// Format currency
AGAdmin.formatCurrency(amount);
```

#### AJAX Requests
```javascript
// Make AJAX request
AGAdmin.makeAjaxRequest(url, method, data);

// Example usage
AGAdmin.makeAjaxRequest('/api/users', 'GET')
    .then(response => {
        console.log(response);
    });
```

## Customization

### Adding New Modules

1. **Create JavaScript file:**
```javascript
// assets/js/newmodule.js
function loadNewModulePage() {
    const content = `
        <div class="fade-in">
            <h2>New Module</h2>
            <!-- Module content -->
        </div>
    `;
    
    $('#pageContent').html(content);
}
```

2. **Add to navigation:**
```html
<!-- In index.html -->
<li>
    <a href="#newmodule" data-page="newmodule">
        <i class="fas fa-icon"></i> New Module
    </a>
</li>
```

3. **Add to main.js:**
```javascript
// In main.js loadPage function
case 'newmodule':
    loadNewModulePage();
    break;
```

### Custom Themes

1. **Create theme CSS:**
```css
/* assets/css/themes/custom.css */
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... other variables */
}
```

2. **Apply theme:**
```javascript
// Apply custom theme
function applyCustomTheme() {
    document.documentElement.setAttribute('data-theme', 'custom');
}
```

### Custom Components

Create reusable components:

```javascript
// Custom button component
function createCustomButton(text, onClick, variant = 'primary') {
    return `
        <button class="btn btn-${variant}" onclick="${onClick}">
            ${text}
        </button>
    `;
}

// Usage
const button = createCustomButton('Click Me', 'handleClick()', 'success');
```

## Troubleshooting

### Common Issues

#### 1. Charts Not Loading
**Problem:** Charts don't appear on dashboard
**Solution:** Ensure Chart.js is loaded before initializing charts

```javascript
// Wait for Chart.js to load
setTimeout(function() {
    initializeSalesChart();
}, 100);
```

#### 2. Data Tables Not Working
**Problem:** DataTables not initializing
**Solution:** Initialize after content is loaded

```javascript
// Initialize after content load
setTimeout(function() {
    $('#dataTable').DataTable();
}, 100);
```

#### 3. Modal Not Opening
**Problem:** Bootstrap modals not working
**Solution:** Ensure Bootstrap JS is loaded

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

#### 4. Dark Mode Not Working
**Problem:** Dark mode toggle not functioning
**Solution:** Check CSS custom properties

```css
[data-theme="dark"] {
    --primary-color: #0d6efd;
    /* ... other dark theme variables */
}
```

### Performance Issues

#### 1. Slow Loading
**Solutions:**
- Minify CSS and JavaScript
- Use CDN for libraries
- Implement lazy loading
- Optimize images

#### 2. Memory Leaks
**Solutions:**
- Remove event listeners
- Clear intervals/timeouts
- Use proper cleanup

```javascript
// Cleanup example
function cleanup() {
    // Remove event listeners
    $(document).off('click', '.btn');
    
    // Clear intervals
    clearInterval(updateInterval);
}
```

## FAQ

### Q: How do I add a new user?
A: Navigate to User Management > Users, click "Add User", fill in the form, and save.

### Q: How do I change the company logo?
A: Go to Settings > General, upload a new logo file, and save settings.

### Q: How do I enable dark mode?
A: Click the dark mode toggle in the top navigation bar.

### Q: How do I export data?
A: Most modules have export buttons. Click the export button and choose your preferred format.

### Q: How do I customize the dashboard?
A: Modify the `loadDashboardOverview()` function in `dashboard.js` to change the layout and content.

### Q: How do I add new languages?
A: Add language files and update the language selector in the navigation.

### Q: How do I integrate with a backend?
A: Modify the AJAX functions in `main.js` to connect to your backend API.

### Q: How do I deploy to production?
A: Upload all files to your web server and configure your domain to point to the `index.html` file.

### Q: How do I backup the system?
A: Use the backup functionality in Settings > Security, or manually backup the database and files.

### Q: How do I update the system?
A: Download the latest version and replace the files, keeping your customizations intact.

## Support

For additional support:
- Check the GitHub Issues page
- Review the documentation
- Contact support@agadmin.com

## Changelog

### Version 1.0.0
- Initial release
- Core modules implemented
- Responsive design
- Dark mode support
- Export functionality

### Version 1.0.1
- Bug fixes
- Performance improvements
- Additional themes

### Version 1.1.0
- New modules added
- Enhanced security
- Improved mobile experience

## License

This project is licensed under the MIT License. See LICENSE file for details.

---

**AGAdmin Documentation** - Complete guide for developers and administrators.



