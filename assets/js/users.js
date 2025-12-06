// AGAdmin - Users Management JavaScript

// Users Page
function loadUsersPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">User Management</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="refreshUsersTable()">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="showAddUserModal()">
                        <i class="fas fa-plus"></i> Add User
                    </button>
                </div>
            </div>
            
            <!-- Filters and Search -->
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="search-box">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" class="form-control search-input" placeholder="Search users..." data-target-table="#usersTable">
                    </div>
                </div>
                <div class="col-md-2">
                    <select class="form-select" id="statusFilter">
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <select class="form-select" id="roleFilter">
                        <option value="">All Roles</option>
                        <option value="admin">Administrator</option>
                        <option value="manager">Manager</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-outline-secondary" onclick="exportUsers()">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
                <div class="col-md-3 text-end">
                    <span class="text-muted">Total: <strong id="userCount">0</strong> users</span>
                </div>
            </div>
            
            <!-- Users Table -->
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table" id="usersTable">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" id="selectAll" onchange="toggleSelectAll()">
                                </th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Last Login</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="usersTableBody">
                            <!-- Users will be loaded here -->
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Bulk Actions -->
            <div class="row mt-3" id="bulkActions" style="display: none;">
                <div class="col-12">
                    <div class="alert alert-info">
                        <strong id="selectedCount">0</strong> users selected
                        <div class="btn-group ms-3" role="group">
                            <button class="btn btn-sm btn-outline-primary" onclick="bulkAction('activate')">
                                <i class="fas fa-check"></i> Activate
                            </button>
                            <button class="btn btn-sm btn-outline-warning" onclick="bulkAction('deactivate')">
                                <i class="fas fa-times"></i> Deactivate
                            </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="bulkAction('delete')">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Add/Edit User Modal -->
        <div class="modal fade" id="userModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="userModalTitle">Add New User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="userForm">
                            <input type="hidden" id="userId" name="userId">
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="firstName" class="form-label">First Name *</label>
                                        <input type="text" class="form-control" id="firstName" name="firstName" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="lastName" class="form-label">Last Name *</label>
                                        <input type="text" class="form-control" id="lastName" name="lastName" required>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email Address *</label>
                                        <input type="email" class="form-control" id="email" name="email" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone Number</label>
                                        <input type="tel" class="form-control" id="phone" name="phone">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="role" class="form-label">Role *</label>
                                        <select class="form-select" id="role" name="role" required>
                                            <option value="">Select Role</option>
                                            <option value="admin">Administrator</option>
                                            <option value="manager">Manager</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="status" class="form-label">Status *</label>
                                        <select class="form-select" id="status" name="status" required>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                            <option value="pending">Pending</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="department" class="form-label">Department</label>
                                <select class="form-select" id="department" name="department">
                                    <option value="">Select Department</option>
                                    <option value="it">IT</option>
                                    <option value="hr">Human Resources</option>
                                    <option value="finance">Finance</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="sales">Sales</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <textarea class="form-control" id="address" name="address" rows="3"></textarea>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password *</label>
                                        <input type="password" class="form-control" id="password" name="password" required>
                                        <div class="form-text">Minimum 8 characters</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="confirmPassword" class="form-label">Confirm Password *</label>
                                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="avatar" class="form-label">Profile Picture</label>
                                <input type="file" class="form-control" id="avatar" name="avatar" accept="image/*">
                                <div class="form-text">JPG, PNG or GIF. Max size 2MB.</div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveUser()">Save User</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- User Details Modal -->
        <div class="modal fade" id="userDetailsModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">User Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body" id="userDetailsContent">
                        <!-- User details will be loaded here -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="editUserFromDetails()">Edit User</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    
    // Initialize users table
    setTimeout(function() {
        loadUsersData();
        initializeUsersTable();
        setupFilters();
    }, 100);
}

// Load Users Data
function loadUsersData() {
    // Simulate API call
    const users = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1-555-0123',
            role: 'admin',
            status: 'active',
            department: 'it',
            address: '123 Main St, City, State 12345',
            avatar: 'assets/images/avatar1.jpg',
            lastLogin: '2024-01-15 10:30:00',
            createdAt: '2024-01-01 09:00:00'
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1-555-0124',
            role: 'manager',
            status: 'active',
            department: 'hr',
            address: '456 Oak Ave, City, State 12345',
            avatar: 'assets/images/avatar2.jpg',
            lastLogin: '2024-01-15 09:15:00',
            createdAt: '2024-01-02 10:00:00'
        },
        {
            id: 3,
            firstName: 'Mike',
            lastName: 'Johnson',
            email: 'mike.johnson@example.com',
            phone: '+1-555-0125',
            role: 'user',
            status: 'inactive',
            department: 'finance',
            address: '789 Pine St, City, State 12345',
            avatar: 'assets/images/avatar3.jpg',
            lastLogin: '2024-01-10 14:20:00',
            createdAt: '2024-01-03 11:00:00'
        },
        {
            id: 4,
            firstName: 'Sarah',
            lastName: 'Wilson',
            email: 'sarah.wilson@example.com',
            phone: '+1-555-0126',
            role: 'user',
            status: 'pending',
            department: 'marketing',
            address: '321 Elm St, City, State 12345',
            avatar: 'assets/images/avatar4.jpg',
            lastLogin: null,
            createdAt: '2024-01-14 16:30:00'
        },
        {
            id: 5,
            firstName: 'David',
            lastName: 'Brown',
            email: 'david.brown@example.com',
            phone: '+1-555-0127',
            role: 'manager',
            status: 'active',
            department: 'sales',
            address: '654 Maple Dr, City, State 12345',
            avatar: 'assets/images/avatar5.jpg',
            lastLogin: '2024-01-15 08:45:00',
            createdAt: '2024-01-05 13:00:00'
        }
    ];
    
    window.usersData = users;
    renderUsersTable(users);
}

// Render Users Table
function renderUsersTable(users) {
    let tableRows = '';
    
    users.forEach(user => {
        const statusClass = user.status === 'active' ? 'badge-success' : 
                           user.status === 'inactive' ? 'badge-danger' : 'badge-warning';
        const roleClass = user.role === 'admin' ? 'badge-primary' : 
                         user.role === 'manager' ? 'badge-info' : 'badge-secondary';
        
        tableRows += `
            <tr>
                <td>
                    <input type="checkbox" class="user-checkbox" value="${user.id}" onchange="updateBulkActions()">
                </td>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${user.avatar}" alt="User" class="user-avatar me-2">
                        <div>
                            <strong>${user.firstName} ${user.lastName}</strong>
                            <br><small class="text-muted">ID: ${user.id}</small>
                        </div>
                    </div>
                </td>
                <td>${user.email}</td>
                <td><span class="badge ${roleClass}">${user.role}</span></td>
                <td><span class="badge ${statusClass}">${user.status}</span></td>
                <td>${user.lastLogin ? AGAdmin.formatDateTime(user.lastLogin) : 'Never'}</td>
                <td>${AGAdmin.formatDate(user.createdAt)}</td>
                <td>
                    <div class="btn-group btn-group-sm" role="group">
                        <button class="btn btn-outline-primary" onclick="viewUser(${user.id})" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-outline-warning" onclick="editUser(${user.id})" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-danger" onclick="deleteUser(${user.id})" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    $('#usersTableBody').html(tableRows);
    $('#userCount').text(users.length);
}

// Initialize Users Table
function initializeUsersTable() {
    $('#usersTable').DataTable({
        responsive: true,
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
        order: [[1, 'asc']],
        columnDefs: [
            { orderable: false, targets: [0, 7] }
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

// Setup Filters
function setupFilters() {
    $('#statusFilter, #roleFilter').on('change', function() {
        filterUsers();
    });
}

// Filter Users
function filterUsers() {
    const statusFilter = $('#statusFilter').val();
    const roleFilter = $('#roleFilter').val();
    
    let filteredUsers = window.usersData;
    
    if (statusFilter) {
        filteredUsers = filteredUsers.filter(user => user.status === statusFilter);
    }
    
    if (roleFilter) {
        filteredUsers = filteredUsers.filter(user => user.role === roleFilter);
    }
    
    renderUsersTable(filteredUsers);
}

// Show Add User Modal
function showAddUserModal() {
    $('#userModalTitle').text('Add New User');
    $('#userForm')[0].reset();
    $('#userId').val('');
    $('#userModal').modal('show');
}

// Edit User
function editUser(userId) {
    const user = window.usersData.find(u => u.id === userId);
    if (!user) return;
    
    $('#userModalTitle').text('Edit User');
    $('#userId').val(user.id);
    $('#firstName').val(user.firstName);
    $('#lastName').val(user.lastName);
    $('#email').val(user.email);
    $('#phone').val(user.phone);
    $('#role').val(user.role);
    $('#status').val(user.status);
    $('#department').val(user.department);
    $('#address').val(user.address);
    $('#password').prop('required', false);
    $('#confirmPassword').prop('required', false);
    
    $('#userModal').modal('show');
}

// View User Details
function viewUser(userId) {
    const user = window.usersData.find(u => u.id === userId);
    if (!user) return;
    
    const content = `
        <div class="row">
            <div class="col-md-4 text-center">
                <img src="${user.avatar}" alt="User" class="img-fluid rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;">
                <h4>${user.firstName} ${user.lastName}</h4>
                <p class="text-muted">${user.email}</p>
            </div>
            <div class="col-md-8">
                <table class="table table-borderless">
                    <tr>
                        <td><strong>User ID:</strong></td>
                        <td>${user.id}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone:</strong></td>
                        <td>${user.phone || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Role:</strong></td>
                        <td><span class="badge badge-primary">${user.role}</span></td>
                    </tr>
                    <tr>
                        <td><strong>Status:</strong></td>
                        <td><span class="badge badge-success">${user.status}</span></td>
                    </tr>
                    <tr>
                        <td><strong>Department:</strong></td>
                        <td>${user.department || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Last Login:</strong></td>
                        <td>${user.lastLogin ? AGAdmin.formatDateTime(user.lastLogin) : 'Never'}</td>
                    </tr>
                    <tr>
                        <td><strong>Created:</strong></td>
                        <td>${AGAdmin.formatDateTime(user.createdAt)}</td>
                    </tr>
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td>${user.address || 'N/A'}</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    
    $('#userDetailsContent').html(content);
    $('#userDetailsModal').modal('show');
}

// Edit User from Details
function editUserFromDetails() {
    $('#userDetailsModal').modal('hide');
    const userId = $('#userDetailsContent').data('userId');
    editUser(userId);
}

// Save User
function saveUser() {
    if (!AGAdmin.validateForm('userForm')) {
        return;
    }
    
    // Check password confirmation
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();
    
    if (password && password !== confirmPassword) {
        toastr.error('Passwords do not match');
        return;
    }
    
    const userId = $('#userId').val();
    const userData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        role: $('#role').val(),
        status: $('#status').val(),
        department: $('#department').val(),
        address: $('#address').val()
    };
    
    if (userId) {
        // Update existing user
        const userIndex = window.usersData.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            window.usersData[userIndex] = { ...window.usersData[userIndex], ...userData };
            toastr.success('User updated successfully');
        }
    } else {
        // Add new user
        const newUser = {
            id: window.usersData.length + 1,
            ...userData,
            avatar: 'assets/images/avatar-default.jpg',
            lastLogin: null,
            createdAt: new Date().toISOString()
        };
        window.usersData.push(newUser);
        toastr.success('User added successfully');
    }
    
    $('#userModal').modal('hide');
    renderUsersTable(window.usersData);
}

// Delete User
function deleteUser(userId) {
    const user = window.usersData.find(u => u.id === userId);
    if (!user) return;
    
    Swal.fire({
        title: 'Delete User',
        text: `Are you sure you want to delete ${user.firstName} ${user.lastName}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.usersData = window.usersData.filter(u => u.id !== userId);
            renderUsersTable(window.usersData);
            toastr.success('User deleted successfully');
        }
    });
}

// Toggle Select All
function toggleSelectAll() {
    const selectAll = $('#selectAll').is(':checked');
    $('.user-checkbox').prop('checked', selectAll);
    updateBulkActions();
}

// Update Bulk Actions
function updateBulkActions() {
    const selectedCount = $('.user-checkbox:checked').length;
    $('#selectedCount').text(selectedCount);
    
    if (selectedCount > 0) {
        $('#bulkActions').show();
    } else {
        $('#bulkActions').hide();
    }
}

// Bulk Actions
function bulkAction(action) {
    const selectedUsers = $('.user-checkbox:checked').map(function() {
        return parseInt($(this).val());
    }).get();
    
    if (selectedUsers.length === 0) {
        toastr.warning('Please select users first');
        return;
    }
    
    let actionText = action.charAt(0).toUpperCase() + action.slice(1);
    
    Swal.fire({
        title: `${actionText} Users`,
        text: `Are you sure you want to ${action} ${selectedUsers.length} user(s)?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Yes, ${action} them!`
    }).then((result) => {
        if (result.isConfirmed) {
            selectedUsers.forEach(userId => {
                const userIndex = window.usersData.findIndex(u => u.id === userId);
                if (userIndex !== -1) {
                    if (action === 'delete') {
                        window.usersData.splice(userIndex, 1);
                    } else if (action === 'activate') {
                        window.usersData[userIndex].status = 'active';
                    } else if (action === 'deactivate') {
                        window.usersData[userIndex].status = 'inactive';
                    }
                }
            });
            
            renderUsersTable(window.usersData);
            $('#selectAll').prop('checked', false);
            updateBulkActions();
            toastr.success(`${selectedUsers.length} user(s) ${action}d successfully`);
        }
    });
}

// Refresh Users Table
function refreshUsersTable() {
    showLoading();
    setTimeout(function() {
        loadUsersData();
        toastr.success('Users table refreshed');
    }, 1000);
}

// Export Users
function exportUsers() {
    Swal.fire({
        title: 'Export Users',
        text: 'Choose export format',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Excel',
        cancelButtonText: 'CSV',
        showDenyButton: true,
        denyButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            exportToExcel('usersTable', 'users-export.xlsx');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            exportToCSV('usersTable', 'users-export.csv');
        }
    });
}

// Roles Page
function loadRolesPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Role Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddRoleModal()">
                    <i class="fas fa-plus"></i> Add Role
                </button>
            </div>
            
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-crown"></i>
                        </div>
                        <h4>Administrator</h4>
                        <p>Full system access</p>
                        <span class="badge badge-success">3 users</span>
                    </div>
                </div>
                
                <div class="col-md-4 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h4>Manager</h4>
                        <p>Department management</p>
                        <span class="badge badge-success">5 users</span>
                    </div>
                </div>
                
                <div class="col-md-4 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon secondary">
                            <i class="fas fa-user"></i>
                        </div>
                        <h4>User</h4>
                        <p>Basic access</p>
                        <span class="badge badge-success">12 users</span>
                    </div>
                </div>
            </div>
            
            <div class="table-container">
                <h5>Role Permissions</h5>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Permission</th>
                                <th>Administrator</th>
                                <th>Manager</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>View Dashboard</td>
                                <td><i class="fas fa-check text-success"></i></td>
                                <td><i class="fas fa-check text-success"></i></td>
                                <td><i class="fas fa-check text-success"></i></td>
                            </tr>
                            <tr>
                                <td>Manage Users</td>
                                <td><i class="fas fa-check text-success"></i></td>
                                <td><i class="fas fa-times text-danger"></i></td>
                                <td><i class="fas fa-times text-danger"></i></td>
                            </tr>
                            <tr>
                                <td>View Reports</td>
                                <td><i class="fas fa-check text-success"></i></td>
                                <td><i class="fas fa-check text-success"></i></td>
                                <td><i class="fas fa-times text-danger"></i></td>
                            </tr>
                            <tr>
                                <td>System Settings</td>
                                <td><i class="fas fa-check text-success"></i></td>
                                <td><i class="fas fa-times text-danger"></i></td>
                                <td><i class="fas fa-times text-danger"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Permissions Page
function loadPermissionsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Permission Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddPermissionModal()">
                    <i class="fas fa-plus"></i> Add Permission
                </button>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Module Permissions</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="dashboardPermission" checked>
                            <label class="form-check-label" for="dashboardPermission">
                                Dashboard Access
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="usersPermission" checked>
                            <label class="form-check-label" for="usersPermission">
                                User Management
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="reportsPermission">
                            <label class="form-check-label" for="reportsPermission">
                                Reports Access
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="settingsPermission">
                            <label class="form-check-label" for="settingsPermission">
                                System Settings
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Action Permissions</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="createPermission" checked>
                            <label class="form-check-label" for="createPermission">
                                Create Records
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="readPermission" checked>
                            <label class="form-check-label" for="readPermission">
                                Read Records
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="updatePermission">
                            <label class="form-check-label" for="updatePermission">
                                Update Records
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="deletePermission">
                            <label class="form-check-label" for="deletePermission">
                                Delete Records
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-end mt-3">
                <button class="btn btn-success" onclick="savePermissions()">
                    <i class="fas fa-save"></i> Save Permissions
                </button>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Show Add Role Modal
function showAddRoleModal() {
    toastr.info('Add Role modal would be implemented here');
}

// Show Add Permission Modal
function showAddPermissionModal() {
    toastr.info('Add Permission modal would be implemented here');
}

// Save Permissions
function savePermissions() {
    toastr.success('Permissions saved successfully');
}


