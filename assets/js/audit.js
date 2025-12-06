// AGAdmin - Audit Logs JavaScript

// Audit Logs Page
function loadAuditLogsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Audit Logs</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="exportAuditLogs()">
                        <i class="fas fa-download"></i> Export
                    </button>
                    <button class="btn btn-outline-danger btn-sm me-2" onclick="clearAuditLogs()">
                        <i class="fas fa-trash"></i> Clear Logs
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="refreshAuditLogs()">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                </div>
            </div>
            
            <!-- Audit Log Filters -->
            <div class="row mb-4">
                <div class="col-md-2">
                    <label class="form-label">User</label>
                    <select class="form-select" id="auditUserFilter">
                        <option value="">All Users</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Action</label>
                    <select class="form-select" id="auditActionFilter">
                        <option value="">All Actions</option>
                        <option value="login">Login</option>
                        <option value="logout">Logout</option>
                        <option value="create">Create</option>
                        <option value="update">Update</option>
                        <option value="delete">Delete</option>
                        <option value="view">View</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Module</label>
                    <select class="form-select" id="auditModuleFilter">
                        <option value="">All Modules</option>
                        <option value="users">Users</option>
                        <option value="sales">Sales</option>
                        <option value="inventory">Inventory</option>
                        <option value="reports">Reports</option>
                        <option value="settings">Settings</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Status</label>
                    <select class="form-select" id="auditStatusFilter">
                        <option value="">All Status</option>
                        <option value="success">Success</option>
                        <option value="error">Error</option>
                        <option value="warning">Warning</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Date From</label>
                    <input type="date" class="form-control" id="auditDateFrom">
                </div>
                <div class="col-md-2">
                    <label class="form-label">Date To</label>
                    <input type="date" class="form-control" id="auditDateTo">
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-8">
                    <div class="search-box">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" class="form-control search-input" placeholder="Search audit logs..." id="auditSearchInput">
                    </div>
                </div>
                <div class="col-md-4 text-end">
                    <button class="btn btn-outline-secondary" onclick="applyAuditFilters()">
                        <i class="fas fa-filter"></i> Apply Filters
                    </button>
                </div>
            </div>
            
            <!-- Audit Log Summary -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-history"></i>
                        </div>
                        <h3 id="totalAuditLogs">1,234</h3>
                        <p>Total Logs</p>
                        <small class="text-primary">
                            <i class="fas fa-arrow-up"></i> 45 today
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-check"></i>
                        </div>
                        <h3 id="successfulActions">1,156</h3>
                        <p>Successful Actions</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 94% success rate
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon danger">
                            <i class="fas fa-times"></i>
                        </div>
                        <h3 id="failedActions">78</h3>
                        <p>Failed Actions</p>
                        <small class="text-danger">
                            <i class="fas fa-arrow-up"></i> 6% failure rate
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3 id="warningActions">23</h3>
                        <p>Warning Actions</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-up"></i> 2% warning rate
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Audit Logs Table -->
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table" id="auditLogsTable">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>User</th>
                                <th>Action</th>
                                <th>Module</th>
                                <th>Description</th>
                                <th>IP Address</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="auditLogsTableBody">
                            <!-- Audit logs will be loaded here -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <!-- Audit Log Details Modal -->
        <div class="modal fade" id="auditLogModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Audit Log Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body" id="auditLogDetails">
                        <!-- Audit log details will be loaded here -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    
    // Load audit logs data
    setTimeout(function() {
        loadAuditLogsData();
        initializeAuditLogsTable();
        setupAuditFilters();
    }, 100);
}

// Load Audit Logs Data
function loadAuditLogsData() {
    const auditLogs = [
        {
            id: 1,
            timestamp: '2024-01-15 10:30:00',
            user: 'admin',
            userName: 'Admin User',
            action: 'login',
            module: 'authentication',
            description: 'User logged in successfully',
            ipAddress: '192.168.1.100',
            status: 'success',
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            sessionId: 'sess_123456789',
            details: {
                loginMethod: 'email',
                twoFactorUsed: false,
                rememberMe: true
            }
        },
        {
            id: 2,
            timestamp: '2024-01-15 10:25:00',
            user: 'manager',
            userName: 'Jane Smith',
            action: 'create',
            module: 'users',
            description: 'Created new user account',
            ipAddress: '192.168.1.101',
            status: 'success',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            sessionId: 'sess_123456790',
            details: {
                newUserId: 123,
                newUserEmail: 'newuser@example.com',
                assignedRole: 'user'
            }
        },
        {
            id: 3,
            timestamp: '2024-01-15 10:20:00',
            user: 'user',
            userName: 'Mike Johnson',
            action: 'update',
            module: 'inventory',
            description: 'Updated product stock',
            ipAddress: '192.168.1.102',
            status: 'success',
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
            sessionId: 'sess_123456791',
            details: {
                productId: 456,
                oldStock: 50,
                newStock: 45,
                reason: 'sale'
            }
        },
        {
            id: 4,
            timestamp: '2024-01-15 10:15:00',
            user: 'admin',
            userName: 'Admin User',
            action: 'delete',
            module: 'sales',
            description: 'Deleted sales record',
            ipAddress: '192.168.1.100',
            status: 'success',
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            sessionId: 'sess_123456789',
            details: {
                recordId: 789,
                recordType: 'sale',
                reason: 'cancelled'
            }
        },
        {
            id: 5,
            timestamp: '2024-01-15 10:10:00',
            user: 'manager',
            userName: 'Jane Smith',
            action: 'view',
            module: 'reports',
            description: 'Generated sales report',
            ipAddress: '192.168.1.101',
            status: 'success',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            sessionId: 'sess_123456790',
            details: {
                reportType: 'sales',
                dateRange: '2024-01-01 to 2024-01-15',
                format: 'PDF'
            }
        },
        {
            id: 6,
            timestamp: '2024-01-15 10:05:00',
            user: 'user',
            userName: 'Mike Johnson',
            action: 'login',
            module: 'authentication',
            description: 'Failed login attempt',
            ipAddress: '192.168.1.102',
            status: 'error',
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
            sessionId: null,
            details: {
                loginMethod: 'email',
                failureReason: 'invalid_password',
                attemptsCount: 3
            }
        },
        {
            id: 7,
            timestamp: '2024-01-15 10:00:00',
            user: 'admin',
            userName: 'Admin User',
            action: 'update',
            module: 'settings',
            description: 'Updated system settings',
            ipAddress: '192.168.1.100',
            status: 'success',
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            sessionId: 'sess_123456789',
            details: {
                settingGroup: 'general',
                changedSettings: ['appName', 'timezone'],
                oldValues: ['OldApp', 'UTC'],
                newValues: ['AGAdmin', 'America/New_York']
            }
        },
        {
            id: 8,
            timestamp: '2024-01-15 09:55:00',
            user: 'manager',
            userName: 'Jane Smith',
            action: 'logout',
            module: 'authentication',
            description: 'User logged out',
            ipAddress: '192.168.1.101',
            status: 'success',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            sessionId: 'sess_123456790',
            details: {
                sessionDuration: '2h 15m',
                logoutReason: 'user_initiated'
            }
        }
    ];
    
    window.auditLogsData = auditLogs;
    renderAuditLogsTable(auditLogs);
    updateAuditLogCounts(auditLogs);
}

// Render Audit Logs Table
function renderAuditLogsTable(auditLogs) {
    let tableRows = '';
    
    auditLogs.forEach(log => {
        const statusClass = log.status === 'success' ? 'badge-success' : 
                           log.status === 'error' ? 'badge-danger' : 'badge-warning';
        
        const actionClass = log.action === 'login' ? 'badge-primary' : 
                           log.action === 'logout' ? 'badge-secondary' : 
                           log.action === 'create' ? 'badge-success' : 
                           log.action === 'update' ? 'badge-warning' : 
                           log.action === 'delete' ? 'badge-danger' : 'badge-info';
        
        tableRows += `
            <tr>
                <td>${AGAdmin.formatDateTime(log.timestamp)}</td>
                <td>
                    <div>
                        <strong>${log.userName}</strong>
                        <br><small class="text-muted">${log.user}</small>
                    </div>
                </td>
                <td><span class="badge ${actionClass}">${log.action}</span></td>
                <td><span class="badge badge-info">${log.module}</span></td>
                <td>${log.description}</td>
                <td><code>${log.ipAddress}</code></td>
                <td><span class="badge ${statusClass}">${log.status}</span></td>
                <td>
                    <div class="btn-group btn-group-sm" role="group">
                        <button class="btn btn-outline-primary" onclick="viewAuditLog(${log.id})" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-info" onclick="exportAuditLog(${log.id})" title="Export">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    $('#auditLogsTableBody').html(tableRows);
}

// Update Audit Log Counts
function updateAuditLogCounts(auditLogs) {
    const total = auditLogs.length;
    const successful = auditLogs.filter(log => log.status === 'success').length;
    const failed = auditLogs.filter(log => log.status === 'error').length;
    const warning = auditLogs.filter(log => log.status === 'warning').length;
    
    $('#totalAuditLogs').text(total);
    $('#successfulActions').text(successful);
    $('#failedActions').text(failed);
    $('#warningActions').text(warning);
}

// Initialize Audit Logs Table
function initializeAuditLogsTable() {
    $('#auditLogsTable').DataTable({
        responsive: true,
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
        order: [[0, 'desc']], // Sort by timestamp descending
        columnDefs: [
            { orderable: false, targets: [7] } // Actions column
        ],
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

// Setup Audit Filters
function setupAuditFilters() {
    $('#auditUserFilter, #auditActionFilter, #auditModuleFilter, #auditStatusFilter').on('change', function() {
        applyAuditFilters();
    });
    
    $('#auditDateFrom, #auditDateTo').on('change', function() {
        applyAuditFilters();
    });
    
    $('#auditSearchInput').on('keyup', AGAdmin.debounce(function() {
        applyAuditFilters();
    }, 300));
}

// Apply Audit Filters
function applyAuditFilters() {
    const userFilter = $('#auditUserFilter').val();
    const actionFilter = $('#auditActionFilter').val();
    const moduleFilter = $('#auditModuleFilter').val();
    const statusFilter = $('#auditStatusFilter').val();
    const dateFrom = $('#auditDateFrom').val();
    const dateTo = $('#auditDateTo').val();
    const searchTerm = $('#auditSearchInput').val().toLowerCase();
    
    let filteredLogs = window.auditLogsData;
    
    if (userFilter) {
        filteredLogs = filteredLogs.filter(log => log.user === userFilter);
    }
    
    if (actionFilter) {
        filteredLogs = filteredLogs.filter(log => log.action === actionFilter);
    }
    
    if (moduleFilter) {
        filteredLogs = filteredLogs.filter(log => log.module === moduleFilter);
    }
    
    if (statusFilter) {
        filteredLogs = filteredLogs.filter(log => log.status === statusFilter);
    }
    
    if (dateFrom) {
        filteredLogs = filteredLogs.filter(log => log.timestamp >= dateFrom);
    }
    
    if (dateTo) {
        filteredLogs = filteredLogs.filter(log => log.timestamp <= dateTo + ' 23:59:59');
    }
    
    if (searchTerm) {
        filteredLogs = filteredLogs.filter(log => 
            log.description.toLowerCase().includes(searchTerm) ||
            log.userName.toLowerCase().includes(searchTerm) ||
            log.ipAddress.includes(searchTerm)
        );
    }
    
    renderAuditLogsTable(filteredLogs);
}

// View Audit Log Details
function viewAuditLog(id) {
    const log = window.auditLogsData.find(l => l.id === id);
    if (!log) return;
    
    const content = `
        <div class="row">
            <div class="col-md-6">
                <table class="table table-borderless">
                    <tr>
                        <td><strong>ID:</strong></td>
                        <td>${log.id}</td>
                    </tr>
                    <tr>
                        <td><strong>Timestamp:</strong></td>
                        <td>${AGAdmin.formatDateTime(log.timestamp)}</td>
                    </tr>
                    <tr>
                        <td><strong>User:</strong></td>
                        <td>${log.userName} (${log.user})</td>
                    </tr>
                    <tr>
                        <td><strong>Action:</strong></td>
                        <td><span class="badge badge-primary">${log.action}</span></td>
                    </tr>
                    <tr>
                        <td><strong>Module:</strong></td>
                        <td><span class="badge badge-info">${log.module}</span></td>
                    </tr>
                    <tr>
                        <td><strong>Status:</strong></td>
                        <td><span class="badge badge-success">${log.status}</span></td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6">
                <table class="table table-borderless">
                    <tr>
                        <td><strong>Description:</strong></td>
                        <td>${log.description}</td>
                    </tr>
                    <tr>
                        <td><strong>IP Address:</strong></td>
                        <td><code>${log.ipAddress}</code></td>
                    </tr>
                    <tr>
                        <td><strong>User Agent:</strong></td>
                        <td><small>${log.userAgent}</small></td>
                    </tr>
                    <tr>
                        <td><strong>Session ID:</strong></td>
                        <td><code>${log.sessionId || 'N/A'}</code></td>
                    </tr>
                </table>
            </div>
        </div>
        
        ${log.details ? `
            <hr>
            <h6>Additional Details</h6>
            <pre class="bg-light p-3 rounded">${JSON.stringify(log.details, null, 2)}</pre>
        ` : ''}
    `;
    
    $('#auditLogDetails').html(content);
    $('#auditLogModal').modal('show');
}

// Export Audit Log
function exportAuditLog(id) {
    const log = window.auditLogsData.find(l => l.id === id);
    if (!log) return;
    
    const data = {
        id: log.id,
        timestamp: log.timestamp,
        user: log.userName,
        action: log.action,
        module: log.module,
        description: log.description,
        ipAddress: log.ipAddress,
        status: log.status,
        details: log.details
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `audit-log-${id}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    toastr.success('Audit log exported successfully');
}

// Export All Audit Logs
function exportAuditLogs() {
    Swal.fire({
        title: 'Export Audit Logs',
        text: 'Choose export format',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'JSON',
        cancelButtonText: 'CSV',
        showDenyButton: true,
        denyButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            const data = window.auditLogsData.map(log => ({
                id: log.id,
                timestamp: log.timestamp,
                user: log.userName,
                action: log.action,
                module: log.module,
                description: log.description,
                ipAddress: log.ipAddress,
                status: log.status
            }));
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'audit-logs.json';
            a.click();
            URL.revokeObjectURL(url);
            
            toastr.success('Audit logs exported successfully');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Export as CSV
            const csv = convertToCSV(window.auditLogsData);
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'audit-logs.csv';
            a.click();
            URL.revokeObjectURL(url);
            
            toastr.success('Audit logs exported successfully');
        }
    });
}

// Convert to CSV
function convertToCSV(data) {
    const headers = ['ID', 'Timestamp', 'User', 'Action', 'Module', 'Description', 'IP Address', 'Status'];
    const csvContent = [
        headers.join(','),
        ...data.map(log => [
            log.id,
            log.timestamp,
            `"${log.userName}"`,
            log.action,
            log.module,
            `"${log.description}"`,
            log.ipAddress,
            log.status
        ].join(','))
    ].join('\n');
    
    return csvContent;
}

// Clear Audit Logs
function clearAuditLogs() {
    Swal.fire({
        title: 'Clear Audit Logs',
        text: 'Are you sure you want to clear all audit logs? This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, clear all logs!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.auditLogsData = [];
            renderAuditLogsTable(window.auditLogsData);
            updateAuditLogCounts(window.auditLogsData);
            toastr.success('Audit logs cleared successfully');
        }
    });
}

// Refresh Audit Logs
function refreshAuditLogs() {
    showLoading();
    setTimeout(function() {
        loadAuditLogsData();
        toastr.success('Audit logs refreshed successfully');
    }, 1000);
}

// Add new audit log entry (for testing)
function addAuditLogEntry(user, action, module, description, status = 'success', details = null) {
    const newLog = {
        id: window.auditLogsData.length + 1,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
        user: user,
        userName: user === 'admin' ? 'Admin User' : user === 'manager' ? 'Jane Smith' : 'Mike Johnson',
        action: action,
        module: module,
        description: description,
        ipAddress: '192.168.1.' + Math.floor(Math.random() * 255),
        status: status,
        userAgent: navigator.userAgent,
        sessionId: 'sess_' + Math.random().toString(36).substr(2, 9),
        details: details
    };
    
    window.auditLogsData.unshift(newLog);
    renderAuditLogsTable(window.auditLogsData);
    updateAuditLogCounts(window.auditLogsData);
}

// Simulate real-time audit log updates
function startAuditLogUpdates() {
    setInterval(function() {
        if (Math.random() > 0.7) {
            const actions = ['login', 'logout', 'view', 'update', 'create'];
            const modules = ['users', 'sales', 'inventory', 'reports', 'settings'];
            const users = ['admin', 'manager', 'user'];
            
            const action = actions[Math.floor(Math.random() * actions.length)];
            const module = modules[Math.floor(Math.random() * modules.length)];
            const user = users[Math.floor(Math.random() * users.length)];
            
            addAuditLogEntry(
                user,
                action,
                module,
                `User performed ${action} action in ${module} module`,
                'success'
            );
        }
    }, 30000); // Update every 30 seconds
}

// Initialize real-time updates when audit logs page loads
$(document).ready(function() {
    // Start real-time updates after a delay
    setTimeout(startAuditLogUpdates, 5000);
});



