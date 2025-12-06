// AGAdmin - Profile JavaScript

// Profile Page
function loadProfilePage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">User Profile</h2>
                <button class="btn btn-primary btn-sm" onclick="editProfile()">
                    <i class="fas fa-edit"></i> Edit Profile
                </button>
            </div>
            
            <div class="row">
                <div class="col-md-4">
                    <div class="form-container text-center">
                        <div class="mb-3">
                            <img src="assets/images/avatar.jpg" alt="Profile" class="rounded-circle" width="150" height="150" style="object-fit: cover;">
                        </div>
                        <h4>Admin User</h4>
                        <p class="text-muted">Administrator</p>
                        <div class="mb-3">
                            <span class="badge badge-success">Active</span>
                        </div>
                        
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary" onclick="changeAvatar()">
                                <i class="fas fa-camera"></i> Change Avatar
                            </button>
                            <button class="btn btn-outline-warning" onclick="changePassword()">
                                <i class="fas fa-key"></i> Change Password
                            </button>
                        </div>
                        
                        <hr>
                        
                        <div class="text-start">
                            <h6>Profile Completion</h6>
                            <div class="progress mb-2">
                                <div class="progress-bar bg-success" style="width: 85%"></div>
                            </div>
                            <small class="text-muted">85% Complete</small>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-8">
                    <div class="form-container">
                        <h5>Personal Information</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">First Name</label>
                                    <input type="text" class="form-control" value="Admin" readonly>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Last Name</label>
                                    <input type="text" class="form-control" value="User" readonly>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Email Address</label>
                                    <input type="email" class="form-control" value="admin@agadmin.com" readonly>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" value="+1-555-0123" readonly>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label">Address</label>
                            <textarea class="form-control" rows="3" readonly>123 Admin St, City, State 12345</textarea>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Department</label>
                                    <input type="text" class="form-control" value="IT" readonly>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Position</label>
                                    <input type="text" class="form-control" value="System Administrator" readonly>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Role</label>
                                    <input type="text" class="form-control" value="Administrator" readonly>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Status</label>
                                    <input type="text" class="form-control" value="Active" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-container mt-4">
                        <h5>Account Information</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Member Since</label>
                                    <input type="text" class="form-control" value="January 1, 2024" readonly>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Last Login</label>
                                    <input type="text" class="form-control" value="January 15, 2024 10:30 AM" readonly>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Login Count</label>
                                    <input type="text" class="form-control" value="156" readonly>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Password Last Changed</label>
                                    <input type="text" class="form-control" value="December 1, 2023" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Activity Timeline -->
            <div class="row mt-4">
                <div class="col-12">
                    <div class="form-container">
                        <h5>Recent Activity</h5>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-content">
                                    <h6>Profile Updated</h6>
                                    <p class="text-muted">Updated personal information</p>
                                    <small class="text-muted">2 hours ago</small>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-content">
                                    <h6>Password Changed</h6>
                                    <p class="text-muted">Changed account password</p>
                                    <small class="text-muted">1 day ago</small>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-content">
                                    <h6>Login Successful</h6>
                                    <p class="text-muted">Logged in from Chrome on Windows</p>
                                    <small class="text-muted">2 days ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Edit Profile Modal -->
        <div class="modal fade" id="editProfileModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Profile</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="editProfileForm">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="editFirstName" class="form-label">First Name *</label>
                                        <input type="text" class="form-control" id="editFirstName" value="Admin" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="editLastName" class="form-label">Last Name *</label>
                                        <input type="text" class="form-control" id="editLastName" value="User" required>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="editEmail" class="form-label">Email Address *</label>
                                        <input type="email" class="form-control" id="editEmail" value="admin@agadmin.com" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="editPhone" class="form-label">Phone Number</label>
                                        <input type="tel" class="form-control" id="editPhone" value="+1-555-0123">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="editAddress" class="form-label">Address</label>
                                <textarea class="form-control" id="editAddress" rows="3">123 Admin St, City, State 12345</textarea>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="editDepartment" class="form-label">Department</label>
                                        <select class="form-select" id="editDepartment">
                                            <option value="it" selected>IT</option>
                                            <option value="hr">Human Resources</option>
                                            <option value="finance">Finance</option>
                                            <option value="marketing">Marketing</option>
                                            <option value="sales">Sales</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="editPosition" class="form-label">Position</label>
                                        <input type="text" class="form-control" id="editPosition" value="System Administrator">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveProfile()">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Change Password Modal -->
        <div class="modal fade" id="changePasswordModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Change Password</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="changePasswordForm">
                            <div class="mb-3">
                                <label for="currentPassword" class="form-label">Current Password *</label>
                                <input type="password" class="form-control" id="currentPassword" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="newPassword" class="form-label">New Password *</label>
                                <input type="password" class="form-control" id="newPassword" required>
                                <div class="form-text">Minimum 8 characters</div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="confirmNewPassword" class="form-label">Confirm New Password *</label>
                                <input type="password" class="form-control" id="confirmNewPassword" required>
                            </div>
                            
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="showPasswords">
                                    <label class="form-check-label" for="showPasswords">
                                        Show passwords
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="savePassword()">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Change Avatar Modal -->
        <div class="modal fade" id="changeAvatarModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Change Avatar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <div class="mb-3">
                                <img src="assets/images/avatar.jpg" alt="Current Avatar" class="rounded-circle" width="150" height="150" style="object-fit: cover;" id="currentAvatar">
                            </div>
                            
                            <div class="file-upload-area" onclick="document.getElementById('avatarFile').click()">
                                <i class="fas fa-cloud-upload-alt fa-3x text-muted mb-3"></i>
                                <h6>Click to upload new avatar</h6>
                                <p class="text-muted">JPG, PNG or GIF. Max size 2MB.</p>
                                <input type="file" id="avatarFile" accept="image/*" style="display: none;" onchange="previewAvatar(this)">
                            </div>
                            
                            <div class="mt-3">
                                <small class="text-muted">Or choose from predefined avatars:</small>
                                <div class="row mt-2">
                                    <div class="col-3">
                                        <img src="assets/images/avatar1.jpg" alt="Avatar 1" class="img-fluid rounded-circle avatar-option" onclick="selectAvatar('assets/images/avatar1.jpg')">
                                    </div>
                                    <div class="col-3">
                                        <img src="assets/images/avatar2.jpg" alt="Avatar 2" class="img-fluid rounded-circle avatar-option" onclick="selectAvatar('assets/images/avatar2.jpg')">
                                    </div>
                                    <div class="col-3">
                                        <img src="assets/images/avatar3.jpg" alt="Avatar 3" class="img-fluid rounded-circle avatar-option" onclick="selectAvatar('assets/images/avatar3.jpg')">
                                    </div>
                                    <div class="col-3">
                                        <img src="assets/images/avatar4.jpg" alt="Avatar 4" class="img-fluid rounded-circle avatar-option" onclick="selectAvatar('assets/images/avatar4.jpg')">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveAvatar()">Save Avatar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Edit Profile
function editProfile() {
    $('#editProfileModal').modal('show');
}

// Save Profile
function saveProfile() {
    if (!AGAdmin.validateForm('editProfileForm')) {
        return;
    }
    
    const profileData = {
        firstName: $('#editFirstName').val(),
        lastName: $('#editLastName').val(),
        email: $('#editEmail').val(),
        phone: $('#editPhone').val(),
        address: $('#editAddress').val(),
        department: $('#editDepartment').val(),
        position: $('#editPosition').val()
    };
    
    // Simulate saving profile
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    
    $('#editProfileModal').modal('hide');
    toastr.success('Profile updated successfully');
    
    // Refresh profile page
    setTimeout(function() {
        loadProfilePage();
    }, 1000);
}

// Change Password
function changePassword() {
    $('#changePasswordForm')[0].reset();
    $('#changePasswordModal').modal('show');
}

// Save Password
function savePassword() {
    if (!AGAdmin.validateForm('changePasswordForm')) {
        return;
    }
    
    const currentPassword = $('#currentPassword').val();
    const newPassword = $('#newPassword').val();
    const confirmPassword = $('#confirmNewPassword').val();
    
    if (newPassword !== confirmPassword) {
        toastr.error('New passwords do not match');
        return;
    }
    
    if (newPassword.length < 8) {
        toastr.error('Password must be at least 8 characters long');
        return;
    }
    
    // Simulate password change
    showLoading();
    setTimeout(function() {
        hideLoading();
        $('#changePasswordModal').modal('hide');
        toastr.success('Password changed successfully');
    }, 2000);
}

// Change Avatar
function changeAvatar() {
    $('#changeAvatarModal').modal('show');
}

// Preview Avatar
function previewAvatar(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            $('#currentAvatar').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Select Avatar
function selectAvatar(avatarPath) {
    $('#currentAvatar').attr('src', avatarPath);
    $('.avatar-option').removeClass('selected');
    $(`.avatar-option[src="${avatarPath}"]`).addClass('selected');
}

// Save Avatar
function saveAvatar() {
    const newAvatar = $('#currentAvatar').attr('src');
    
    // Simulate saving avatar
    showLoading();
    setTimeout(function() {
        hideLoading();
        $('#changeAvatarModal').modal('hide');
        toastr.success('Avatar updated successfully');
        
        // Update avatar in profile
        $('.rounded-circle[width="150"]').attr('src', newAvatar);
    }, 1000);
}

// Show/Hide Passwords
$(document).on('change', '#showPasswords', function() {
    const isChecked = $(this).is(':checked');
    const passwordFields = ['#currentPassword', '#newPassword', '#confirmNewPassword'];
    
    passwordFields.forEach(field => {
        $(field).attr('type', isChecked ? 'text' : 'password');
    });
});

// Load saved profile data
$(document).ready(function() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        // Apply saved profile data to form fields
    }
});



