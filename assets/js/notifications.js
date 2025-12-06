// AGAdmin - Notifications JavaScript

// Notifications Page
function loadNotificationsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Notifications</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="markAllAsRead()">
                        <i class="fas fa-check-double"></i> Mark All Read
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="showAddNotificationModal()">
                        <i class="fas fa-plus"></i> Add Notification
                    </button>
                </div>
            </div>
            
            <!-- Notification Filters -->
            <div class="row mb-4">
                <div class="col-md-3">
                    <select class="form-select" id="notificationTypeFilter">
                        <option value="">All Types</option>
                        <option value="info">Info</option>
                        <option value="success">Success</option>
                        <option value="warning">Warning</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <select class="form-select" id="notificationStatusFilter">
                        <option value="">All Status</option>
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <input type="date" class="form-control" id="notificationDateFilter">
                </div>
                <div class="col-md-3">
                    <button class="btn btn-outline-secondary" onclick="filterNotifications()">
                        <i class="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>
            
            <!-- Notification Summary -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-bell"></i>
                        </div>
                        <h3 id="totalNotifications">24</h3>
                        <p>Total Notifications</p>
                        <small class="text-primary">
                            <i class="fas fa-arrow-up"></i> 5 new today
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3 id="unreadNotifications">8</h3>
                        <p>Unread Notifications</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-up"></i> 3 new alerts
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-check"></i>
                        </div>
                        <h3 id="readNotifications">16</h3>
                        <p>Read Notifications</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 67% read rate
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3 id="todayNotifications">5</h3>
                        <p>Today's Notifications</p>
                        <small class="text-info">
                            <i class="fas fa-arrow-up"></i> 2 system alerts
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Notifications List -->
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Title</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="notificationsTableBody">
                            <!-- Notifications will be loaded here -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <!-- Add Notification Modal -->
        <div class="modal fade" id="notificationModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Notification</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="notificationForm">
                            <div class="mb-3">
                                <label for="notificationType" class="form-label">Type *</label>
                                <select class="form-select" id="notificationType" required>
                                    <option value="">Select Type</option>
                                    <option value="info">Info</option>
                                    <option value="success">Success</option>
                                    <option value="warning">Warning</option>
                                    <option value="error">Error</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label for="notificationTitle" class="form-label">Title *</label>
                                <input type="text" class="form-control" id="notificationTitle" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="notificationMessage" class="form-label">Message *</label>
                                <textarea class="form-control" id="notificationMessage" rows="4" required></textarea>
                            </div>
                            
                            <div class="mb-3">
                                <label for="notificationRecipients" class="form-label">Recipients</label>
                                <select class="form-select" id="notificationRecipients">
                                    <option value="all">All Users</option>
                                    <option value="admins">Administrators Only</option>
                                    <option value="managers">Managers Only</option>
                                    <option value="custom">Custom Selection</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label for="notificationPriority" class="form-label">Priority</label>
                                <select class="form-select" id="notificationPriority">
                                    <option value="low">Low</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="high">High</option>
                                    <option value="urgent">Urgent</option>
                                </select>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="sendEmail">
                                <label class="form-check-label" for="sendEmail">
                                    Send Email Notification
                                </label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveNotification()">Send Notification</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    
    // Load notifications data
    setTimeout(function() {
        loadNotificationsData();
    }, 100);
}

// Load Notifications Data
function loadNotificationsData() {
    const notifications = [
        {
            id: 1,
            type: 'info',
            title: 'System Maintenance',
            message: 'Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST.',
            date: '2024-01-15 10:30:00',
            status: 'unread',
            priority: 'medium'
        },
        {
            id: 2,
            type: 'success',
            title: 'Backup Completed',
            message: 'Daily backup has been completed successfully.',
            date: '2024-01-15 09:15:00',
            status: 'read',
            priority: 'low'
        },
        {
            id: 3,
            type: 'warning',
            title: 'Low Disk Space',
            message: 'Server disk space is running low. Please check storage usage.',
            date: '2024-01-15 08:45:00',
            status: 'unread',
            priority: 'high'
        },
        {
            id: 4,
            type: 'error',
            title: 'Database Connection Error',
            message: 'Failed to connect to the database. Please check configuration.',
            date: '2024-01-14 16:20:00',
            status: 'read',
            priority: 'urgent'
        },
        {
            id: 5,
            type: 'info',
            title: 'New User Registered',
            message: 'A new user has registered: john.doe@example.com',
            date: '2024-01-14 14:30:00',
            status: 'read',
            priority: 'low'
        }
    ];
    
    window.notificationsData = notifications;
    renderNotificationsTable(notifications);
    updateNotificationCounts(notifications);
}

// Render Notifications Table
function renderNotificationsTable(notifications) {
    let tableRows = '';
    
    notifications.forEach(notification => {
        const typeClass = notification.type === 'info' ? 'badge-info' : 
                         notification.type === 'success' ? 'badge-success' : 
                         notification.type === 'warning' ? 'badge-warning' : 'badge-danger';
        
        const statusClass = notification.status === 'unread' ? 'badge-warning' : 'badge-success';
        const statusText = notification.status === 'unread' ? 'Unread' : 'Read';
        
        const priorityClass = notification.priority === 'urgent' ? 'badge-danger' : 
                             notification.priority === 'high' ? 'badge-warning' : 
                             notification.priority === 'medium' ? 'badge-info' : 'badge-secondary';
        
        tableRows += `
            <tr class="${notification.status === 'unread' ? 'notification-item unread' : 'notification-item'}">
                <td>
                    <span class="badge ${typeClass}">${notification.type}</span>
                    <br><small class="text-muted">${notification.priority}</small>
                </td>
                <td>
                    <strong>${notification.title}</strong>
                    ${notification.status === 'unread' ? '<span class="badge badge-warning ms-2">New</span>' : ''}
                </td>
                <td>${notification.message}</td>
                <td>${AGAdmin.formatDateTime(notification.date)}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>
                    <div class="btn-group btn-group-sm" role="group">
                        <button class="btn btn-outline-primary" onclick="viewNotification(${notification.id})" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        ${notification.status === 'unread' ? 
                            `<button class="btn btn-outline-success" onclick="markAsRead(${notification.id})" title="Mark as Read">
                                <i class="fas fa-check"></i>
                            </button>` : 
                            `<button class="btn btn-outline-warning" onclick="markAsUnread(${notification.id})" title="Mark as Unread">
                                <i class="fas fa-times"></i>
                            </button>`
                        }
                        <button class="btn btn-outline-danger" onclick="deleteNotification(${notification.id})" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    $('#notificationsTableBody').html(tableRows);
}

// Update Notification Counts
function updateNotificationCounts(notifications) {
    const total = notifications.length;
    const unread = notifications.filter(n => n.status === 'unread').length;
    const read = notifications.filter(n => n.status === 'read').length;
    const today = notifications.filter(n => {
        const today = new Date().toISOString().split('T')[0];
        return n.date.startsWith(today);
    }).length;
    
    $('#totalNotifications').text(total);
    $('#unreadNotifications').text(unread);
    $('#readNotifications').text(read);
    $('#todayNotifications').text(today);
    
    // Update navbar notification count
    $('#notificationCount').text(unread);
}

// Show Add Notification Modal
function showAddNotificationModal() {
    $('#notificationForm')[0].reset();
    $('#notificationModal').modal('show');
}

// Save Notification
function saveNotification() {
    if (!AGAdmin.validateForm('notificationForm')) {
        return;
    }
    
    const notification = {
        id: window.notificationsData.length + 1,
        type: $('#notificationType').val(),
        title: $('#notificationTitle').val(),
        message: $('#notificationMessage').val(),
        priority: $('#notificationPriority').val(),
        date: new Date().toISOString(),
        status: 'unread'
    };
    
    window.notificationsData.unshift(notification);
    renderNotificationsTable(window.notificationsData);
    updateNotificationCounts(window.notificationsData);
    
    $('#notificationModal').modal('hide');
    toastr.success('Notification sent successfully');
}

// View Notification
function viewNotification(id) {
    const notification = window.notificationsData.find(n => n.id === id);
    if (!notification) return;
    
    // Mark as read if unread
    if (notification.status === 'unread') {
        markAsRead(id);
    }
    
    Swal.fire({
        title: notification.title,
        text: notification.message,
        icon: notification.type,
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Delete'
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            deleteNotification(id);
        }
    });
}

// Mark as Read
function markAsRead(id) {
    const notification = window.notificationsData.find(n => n.id === id);
    if (notification && notification.status === 'unread') {
        notification.status = 'read';
        renderNotificationsTable(window.notificationsData);
        updateNotificationCounts(window.notificationsData);
        toastr.success('Notification marked as read');
    }
}

// Mark as Unread
function markAsUnread(id) {
    const notification = window.notificationsData.find(n => n.id === id);
    if (notification && notification.status === 'read') {
        notification.status = 'unread';
        renderNotificationsTable(window.notificationsData);
        updateNotificationCounts(window.notificationsData);
        toastr.success('Notification marked as unread');
    }
}

// Delete Notification
function deleteNotification(id) {
    const notification = window.notificationsData.find(n => n.id === id);
    if (!notification) return;
    
    Swal.fire({
        title: 'Delete Notification',
        text: `Are you sure you want to delete "${notification.title}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.notificationsData = window.notificationsData.filter(n => n.id !== id);
            renderNotificationsTable(window.notificationsData);
            updateNotificationCounts(window.notificationsData);
            toastr.success('Notification deleted successfully');
        }
    });
}

// Mark All as Read
function markAllAsRead() {
    window.notificationsData.forEach(notification => {
        if (notification.status === 'unread') {
            notification.status = 'read';
        }
    });
    
    renderNotificationsTable(window.notificationsData);
    updateNotificationCounts(window.notificationsData);
    toastr.success('All notifications marked as read');
}

// Filter Notifications
function filterNotifications() {
    const typeFilter = $('#notificationTypeFilter').val();
    const statusFilter = $('#notificationStatusFilter').val();
    const dateFilter = $('#notificationDateFilter').val();
    
    let filteredNotifications = window.notificationsData;
    
    if (typeFilter) {
        filteredNotifications = filteredNotifications.filter(n => n.type === typeFilter);
    }
    
    if (statusFilter) {
        filteredNotifications = filteredNotifications.filter(n => n.status === statusFilter);
    }
    
    if (dateFilter) {
        filteredNotifications = filteredNotifications.filter(n => n.date.startsWith(dateFilter));
    }
    
    renderNotificationsTable(filteredNotifications);
}

// Messages Page
function loadMessagesPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Messages</h2>
                <button class="btn btn-primary btn-sm" onclick="showComposeModal()">
                    <i class="fas fa-plus"></i> Compose Message
                </button>
            </div>
            
            <div class="row">
                <div class="col-md-3">
                    <div class="form-container">
                        <h5>Folders</h5>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active" onclick="loadMessageFolder('inbox')">
                                <i class="fas fa-inbox"></i> Inbox
                                <span class="badge badge-primary float-end">12</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" onclick="loadMessageFolder('sent')">
                                <i class="fas fa-paper-plane"></i> Sent
                                <span class="badge badge-secondary float-end">8</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" onclick="loadMessageFolder('drafts')">
                                <i class="fas fa-file-alt"></i> Drafts
                                <span class="badge badge-secondary float-end">3</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" onclick="loadMessageFolder('trash')">
                                <i class="fas fa-trash"></i> Trash
                                <span class="badge badge-secondary float-end">5</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-9">
                    <div class="table-container">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" id="selectAllMessages">
                                        </th>
                                        <th>From</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="messagesTableBody">
                                    <tr>
                                        <td><input type="checkbox" class="message-checkbox"></td>
                                        <td>John Doe</td>
                                        <td>Meeting Request</td>
                                        <td>2024-01-15 10:30</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <button class="btn btn-outline-primary" onclick="viewMessage(1)">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                                <button class="btn btn-outline-danger" onclick="deleteMessage(1)">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Compose Message Modal -->
        <div class="modal fade" id="composeModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Compose Message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="composeForm">
                            <div class="mb-3">
                                <label for="messageTo" class="form-label">To *</label>
                                <input type="email" class="form-control" id="messageTo" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="messageCc" class="form-label">CC</label>
                                <input type="email" class="form-control" id="messageCc">
                            </div>
                            
                            <div class="mb-3">
                                <label for="messageSubject" class="form-label">Subject *</label>
                                <input type="text" class="form-control" id="messageSubject" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="messageBody" class="form-label">Message *</label>
                                <textarea class="form-control" id="messageBody" rows="8" required></textarea>
                            </div>
                            
                            <div class="mb-3">
                                <label for="messageAttachment" class="form-label">Attachment</label>
                                <input type="file" class="form-control" id="messageAttachment" multiple>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onclick="saveDraft()">Save Draft</button>
                        <button type="button" class="btn btn-primary" onclick="sendMessage()">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Announcements Page
function loadAnnouncementsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Announcements</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddAnnouncementModal()">
                    <i class="fas fa-plus"></i> Add Announcement
                </button>
            </div>
            
            <!-- Announcements List -->
            <div class="row">
                <div class="col-md-8">
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <h6>System Maintenance Scheduled</h6>
                                <p class="text-muted">Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST. During this time, the system will be unavailable.</p>
                                <small class="text-muted">Posted by Admin • 2 hours ago</small>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <h6>New Feature Release</h6>
                                <p class="text-muted">We're excited to announce the release of our new dashboard analytics feature. Check it out in the Analytics section.</p>
                                <small class="text-muted">Posted by Admin • 1 day ago</small>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <h6>Security Update</h6>
                                <p class="text-muted">Important security updates have been applied to the system. Please ensure you're using the latest version.</p>
                                <small class="text-muted">Posted by Admin • 3 days ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="form-container">
                        <h5>Quick Stats</h5>
                        <div class="mb-3">
                            <small>Total Announcements</small>
                            <h4 class="text-primary">24</h4>
                        </div>
                        <div class="mb-3">
                            <small>This Month</small>
                            <h4 class="text-success">8</h4>
                        </div>
                        <div class="mb-3">
                            <small>Active</small>
                            <h4 class="text-info">12</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Message Functions
function loadMessageFolder(folder) {
    // Update active folder
    $('.list-group-item').removeClass('active');
    $(`.list-group-item:contains('${folder}')`).addClass('active');
    
    toastr.info(`Loading ${folder} messages...`);
}

function showComposeModal() {
    $('#composeForm')[0].reset();
    $('#composeModal').modal('show');
}

function viewMessage(id) {
    toastr.info('View message ' + id + ' functionality would be implemented here');
}

function deleteMessage(id) {
    toastr.info('Delete message ' + id + ' functionality would be implemented here');
}

function saveDraft() {
    toastr.success('Draft saved successfully');
    $('#composeModal').modal('hide');
}

function sendMessage() {
    if (!AGAdmin.validateForm('composeForm')) {
        return;
    }
    
    toastr.success('Message sent successfully');
    $('#composeModal').modal('hide');
}

// Announcement Functions
function showAddAnnouncementModal() {
    toastr.info('Add announcement modal would be implemented here');
}


