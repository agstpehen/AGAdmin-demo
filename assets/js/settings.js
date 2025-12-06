// AGAdmin - Settings JavaScript

// General Settings Page
function loadGeneralSettingsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">General Settings</h2>
                <button class="btn btn-primary btn-sm" onclick="saveGeneralSettings()">
                    <i class="fas fa-save"></i> Save Settings
                </button>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Company Information</h5>
                        <form id="companyForm">
                            <div class="mb-3">
                                <label for="companyName" class="form-label">Company Name *</label>
                                <input type="text" class="form-control" id="companyName" value="AGAdmin Corp" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="companyEmail" class="form-label">Company Email *</label>
                                <input type="email" class="form-control" id="companyEmail" value="info@agadmin.com" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="companyPhone" class="form-label">Company Phone</label>
                                <input type="tel" class="form-control" id="companyPhone" value="+1-555-0123">
                            </div>
                            
                            <div class="mb-3">
                                <label for="companyAddress" class="form-label">Company Address</label>
                                <textarea class="form-control" id="companyAddress" rows="3">123 Business St, City, State 12345</textarea>
                            </div>
                            
                            <div class="mb-3">
                                <label for="companyWebsite" class="form-label">Company Website</label>
                                <input type="url" class="form-control" id="companyWebsite" value="https://www.agadmin.com">
                            </div>
                            
                            <div class="mb-3">
                                <label for="companyLogo" class="form-label">Company Logo</label>
                                <input type="file" class="form-control" id="companyLogo" accept="image/*">
                                <div class="form-text">Upload company logo (PNG, JPG, SVG)</div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Application Settings</h5>
                        <form id="appForm">
                            <div class="mb-3">
                                <label for="appName" class="form-label">Application Name *</label>
                                <input type="text" class="form-control" id="appName" value="AGAdmin" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="appVersion" class="form-label">Application Version</label>
                                <input type="text" class="form-control" id="appVersion" value="1.0.0" readonly>
                            </div>
                            
                            <div class="mb-3">
                                <label for="timezone" class="form-label">Default Timezone</label>
                                <select class="form-select" id="timezone">
                                    <option value="UTC">UTC</option>
                                    <option value="America/New_York" selected>America/New_York</option>
                                    <option value="America/Los_Angeles">America/Los_Angeles</option>
                                    <option value="Europe/London">Europe/London</option>
                                    <option value="Europe/Paris">Europe/Paris</option>
                                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label for="dateFormat" class="form-label">Date Format</label>
                                <select class="form-select" id="dateFormat">
                                    <option value="MM/DD/YYYY" selected>MM/DD/YYYY</option>
                                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label for="currency" class="form-label">Default Currency</label>
                                <select class="form-select" id="currency">
                                    <option value="USD" selected>USD - US Dollar</option>
                                    <option value="EUR">EUR - Euro</option>
                                    <option value="GBP">GBP - British Pound</option>
                                    <option value="JPY">JPY - Japanese Yen</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label for="itemsPerPage" class="form-label">Items Per Page</label>
                                <select class="form-select" id="itemsPerPage">
                                    <option value="10">10</option>
                                    <option value="25" selected>25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="maintenanceMode">
                                <label class="form-check-label" for="maintenanceMode">
                                    Maintenance Mode
                                </label>
                                <div class="form-text">Enable maintenance mode to restrict access</div>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="userRegistration" checked>
                                <label class="form-check-label" for="userRegistration">
                                    Allow User Registration
                                </label>
                                <div class="form-text">Allow new users to register accounts</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-12">
                    <div class="form-container">
                        <h5>System Information</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon primary">
                                        <i class="fas fa-server"></i>
                                    </div>
                                    <h6>Server Status</h6>
                                    <span class="badge badge-success">Online</span>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon success">
                                        <i class="fas fa-database"></i>
                                    </div>
                                    <h6>Database</h6>
                                    <span class="badge badge-success">Connected</span>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon warning">
                                        <i class="fas fa-hdd"></i>
                                    </div>
                                    <h6>Storage</h6>
                                    <span class="badge badge-warning">75% Used</span>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon info">
                                        <i class="fas fa-memory"></i>
                                    </div>
                                    <h6>Memory</h6>
                                    <span class="badge badge-info">2.1GB / 4GB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Email Settings Page
function loadEmailSettingsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Email Settings</h2>
                <button class="btn btn-primary btn-sm" onclick="saveEmailSettings()">
                    <i class="fas fa-save"></i> Save Settings
                </button>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>SMTP Configuration</h5>
                        <form id="smtpForm">
                            <div class="mb-3">
                                <label for="smtpHost" class="form-label">SMTP Host *</label>
                                <input type="text" class="form-control" id="smtpHost" value="smtp.gmail.com" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="smtpPort" class="form-label">SMTP Port *</label>
                                <input type="number" class="form-control" id="smtpPort" value="587" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="smtpUsername" class="form-label">SMTP Username *</label>
                                <input type="email" class="form-control" id="smtpUsername" value="noreply@agadmin.com" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="smtpPassword" class="form-label">SMTP Password *</label>
                                <input type="password" class="form-control" id="smtpPassword" required>
                            </div>
                            
                            <div class="mb-3">
                                <label for="smtpEncryption" class="form-label">Encryption</label>
                                <select class="form-select" id="smtpEncryption">
                                    <option value="tls" selected>TLS</option>
                                    <option value="ssl">SSL</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="smtpAuth" checked>
                                <label class="form-check-label" for="smtpAuth">
                                    SMTP Authentication
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Email Templates</h5>
                        <div class="mb-3">
                            <label for="welcomeEmail" class="form-label">Welcome Email Template</label>
                            <textarea class="form-control" id="welcomeEmail" rows="8">Welcome to AGAdmin!

Dear {{name}},

Welcome to our platform. Your account has been successfully created.

Login Details:
- Email: {{email}}
- Password: {{password}}

Please change your password after first login.

Best regards,
AGAdmin Team</textarea>
                        </div>
                        
                        <div class="mb-3">
                            <label for="passwordResetEmail" class="form-label">Password Reset Email Template</label>
                            <textarea class="form-control" id="passwordResetEmail" rows="8">Password Reset Request

Dear {{name}},

You have requested to reset your password. Click the link below to reset your password:

{{reset_link}}

This link will expire in 24 hours.

If you didn't request this, please ignore this email.

Best regards,
AGAdmin Team</textarea>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Email Preferences</h5>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="sendWelcomeEmail" checked>
                            <label class="form-check-label" for="sendWelcomeEmail">
                                Send Welcome Email to New Users
                            </label>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="sendNotifications" checked>
                            <label class="form-check-label" for="sendNotifications">
                                Send Email Notifications
                            </label>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="sendReports" checked>
                            <label class="form-check-label" for="sendReports">
                                Send Automated Reports
                            </label>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="sendAlerts">
                            <label class="form-check-label" for="sendAlerts">
                                Send System Alerts
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Test Email</h5>
                        <div class="mb-3">
                            <label for="testEmail" class="form-label">Test Email Address</label>
                            <input type="email" class="form-control" id="testEmail" placeholder="Enter email address to test">
                        </div>
                        
                        <button class="btn btn-outline-primary" onclick="sendTestEmail()">
                            <i class="fas fa-paper-plane"></i> Send Test Email
                        </button>
                        
                        <div class="mt-3">
                            <small class="text-muted">This will send a test email to verify your SMTP configuration.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Security Settings Page
function loadSecuritySettingsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Security Settings</h2>
                <button class="btn btn-primary btn-sm" onclick="saveSecuritySettings()">
                    <i class="fas fa-save"></i> Save Settings
                </button>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Password Policy</h5>
                        <form id="passwordForm">
                            <div class="mb-3">
                                <label for="minPasswordLength" class="form-label">Minimum Password Length</label>
                                <input type="number" class="form-control" id="minPasswordLength" value="8" min="6" max="20">
                            </div>
                            
                            <div class="mb-3">
                                <label for="passwordExpiry" class="form-label">Password Expiry (Days)</label>
                                <input type="number" class="form-control" id="passwordExpiry" value="90" min="30" max="365">
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="requireUppercase" checked>
                                <label class="form-check-label" for="requireUppercase">
                                    Require Uppercase Letters
                                </label>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="requireLowercase" checked>
                                <label class="form-check-label" for="requireLowercase">
                                    Require Lowercase Letters
                                </label>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="requireNumbers" checked>
                                <label class="form-check-label" for="requireNumbers">
                                    Require Numbers
                                </label>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="requireSpecialChars">
                                <label class="form-check-label" for="requireSpecialChars">
                                    Require Special Characters
                                </label>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="preventReuse" checked>
                                <label class="form-check-label" for="preventReuse">
                                    Prevent Password Reuse (Last 5 passwords)
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Login Security</h5>
                        <form id="loginForm">
                            <div class="mb-3">
                                <label for="maxLoginAttempts" class="form-label">Maximum Login Attempts</label>
                                <input type="number" class="form-control" id="maxLoginAttempts" value="5" min="3" max="10">
                            </div>
                            
                            <div class="mb-3">
                                <label for="lockoutDuration" class="form-label">Lockout Duration (Minutes)</label>
                                <input type="number" class="form-control" id="lockoutDuration" value="15" min="5" max="60">
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="twoFactorAuth">
                                <label class="form-check-label" for="twoFactorAuth">
                                    Enable Two-Factor Authentication
                                </label>
                                <div class="form-text">Require 2FA for all users</div>
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="sessionTimeout" checked>
                                <label class="form-check-label" for="sessionTimeout">
                                    Enable Session Timeout
                                </label>
                            </div>
                            
                            <div class="mb-3">
                                <label for="sessionTimeoutDuration" class="form-label">Session Timeout (Minutes)</label>
                                <input type="number" class="form-control" id="sessionTimeoutDuration" value="30" min="15" max="480">
                            </div>
                            
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="ipWhitelist">
                                <label class="form-check-label" for="ipWhitelist">
                                    Enable IP Whitelist
                                </label>
                                <div class="form-text">Restrict access to specific IP addresses</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Data Security</h5>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="dataEncryption" checked>
                            <label class="form-check-label" for="dataEncryption">
                                Enable Data Encryption
                            </label>
                            <div class="form-text">Encrypt sensitive data in database</div>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="auditLogging" checked>
                            <label class="form-check-label" for="auditLogging">
                                Enable Audit Logging
                            </label>
                            <div class="form-text">Log all user actions and system events</div>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="backupEncryption" checked>
                            <label class="form-check-label" for="backupEncryption">
                                Encrypt Backups
                            </label>
                            <div class="form-text">Encrypt database backups</div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="backupRetention" class="form-label">Backup Retention (Days)</label>
                            <input type="number" class="form-control" id="backupRetention" value="30" min="7" max="365">
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="form-container">
                        <h5>Security Monitoring</h5>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="securityAlerts" checked>
                            <label class="form-check-label" for="securityAlerts">
                                Enable Security Alerts
                            </label>
                            <div class="form-text">Send alerts for suspicious activities</div>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="failedLoginAlerts" checked>
                            <label class="form-check-label" for="failedLoginAlerts">
                                Failed Login Alerts
                            </label>
                            <div class="form-text">Alert on multiple failed login attempts</div>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="adminActionAlerts" checked>
                            <label class="form-check-label" for="adminActionAlerts">
                                Admin Action Alerts
                            </label>
                            <div class="form-text">Alert on critical admin actions</div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="alertEmail" class="form-label">Security Alert Email</label>
                            <input type="email" class="form-control" id="alertEmail" value="security@agadmin.com">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-12">
                    <div class="form-container">
                        <h5>Security Status</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon success">
                                        <i class="fas fa-shield-alt"></i>
                                    </div>
                                    <h6>Security Score</h6>
                                    <span class="badge badge-success">85/100</span>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon warning">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <h6>Active Threats</h6>
                                    <span class="badge badge-warning">2</span>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon info">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <h6>Last Scan</h6>
                                    <small>2 hours ago</small>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div class="dashboard-card text-center">
                                    <div class="card-icon primary">
                                        <i class="fas fa-download"></i>
                                    </div>
                                    <h6>Last Backup</h6>
                                    <small>6 hours ago</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center mt-3">
                            <button class="btn btn-outline-primary" onclick="runSecurityScan()">
                                <i class="fas fa-search"></i> Run Security Scan
                            </button>
                            <button class="btn btn-outline-success" onclick="createBackup()">
                                <i class="fas fa-download"></i> Create Backup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

// Save General Settings
function saveGeneralSettings() {
    if (!AGAdmin.validateForm('companyForm') || !AGAdmin.validateForm('appForm')) {
        return;
    }
    
    const settings = {
        company: {
            name: $('#companyName').val(),
            email: $('#companyEmail').val(),
            phone: $('#companyPhone').val(),
            address: $('#companyAddress').val(),
            website: $('#companyWebsite').val()
        },
        app: {
            name: $('#appName').val(),
            timezone: $('#timezone').val(),
            dateFormat: $('#dateFormat').val(),
            currency: $('#currency').val(),
            itemsPerPage: $('#itemsPerPage').val(),
            maintenanceMode: $('#maintenanceMode').is(':checked'),
            userRegistration: $('#userRegistration').is(':checked')
        }
    };
    
    // Simulate saving settings
    localStorage.setItem('generalSettings', JSON.stringify(settings));
    toastr.success('General settings saved successfully');
}

// Save Email Settings
function saveEmailSettings() {
    if (!AGAdmin.validateForm('smtpForm')) {
        return;
    }
    
    const settings = {
        smtp: {
            host: $('#smtpHost').val(),
            port: $('#smtpPort').val(),
            username: $('#smtpUsername').val(),
            password: $('#smtpPassword').val(),
            encryption: $('#smtpEncryption').val(),
            auth: $('#smtpAuth').is(':checked')
        },
        templates: {
            welcome: $('#welcomeEmail').val(),
            passwordReset: $('#passwordResetEmail').val()
        },
        preferences: {
            sendWelcomeEmail: $('#sendWelcomeEmail').is(':checked'),
            sendNotifications: $('#sendNotifications').is(':checked'),
            sendReports: $('#sendReports').is(':checked'),
            sendAlerts: $('#sendAlerts').is(':checked')
        }
    };
    
    // Simulate saving settings
    localStorage.setItem('emailSettings', JSON.stringify(settings));
    toastr.success('Email settings saved successfully');
}

// Save Security Settings
function saveSecuritySettings() {
    if (!AGAdmin.validateForm('passwordForm') || !AGAdmin.validateForm('loginForm')) {
        return;
    }
    
    const settings = {
        password: {
            minLength: $('#minPasswordLength').val(),
            expiry: $('#passwordExpiry').val(),
            requireUppercase: $('#requireUppercase').is(':checked'),
            requireLowercase: $('#requireLowercase').is(':checked'),
            requireNumbers: $('#requireNumbers').is(':checked'),
            requireSpecialChars: $('#requireSpecialChars').is(':checked'),
            preventReuse: $('#preventReuse').is(':checked')
        },
        login: {
            maxAttempts: $('#maxLoginAttempts').val(),
            lockoutDuration: $('#lockoutDuration').val(),
            twoFactorAuth: $('#twoFactorAuth').is(':checked'),
            sessionTimeout: $('#sessionTimeout').is(':checked'),
            sessionTimeoutDuration: $('#sessionTimeoutDuration').val(),
            ipWhitelist: $('#ipWhitelist').is(':checked')
        },
        data: {
            encryption: $('#dataEncryption').is(':checked'),
            auditLogging: $('#auditLogging').is(':checked'),
            backupEncryption: $('#backupEncryption').is(':checked'),
            backupRetention: $('#backupRetention').val()
        },
        monitoring: {
            securityAlerts: $('#securityAlerts').is(':checked'),
            failedLoginAlerts: $('#failedLoginAlerts').is(':checked'),
            adminActionAlerts: $('#adminActionAlerts').is(':checked'),
            alertEmail: $('#alertEmail').val()
        }
    };
    
    // Simulate saving settings
    localStorage.setItem('securitySettings', JSON.stringify(settings));
    toastr.success('Security settings saved successfully');
}

// Send Test Email
function sendTestEmail() {
    const email = $('#testEmail').val();
    if (!email) {
        toastr.error('Please enter a test email address');
        return;
    }
    
    if (!AGAdmin.validateForm('smtpForm')) {
        return;
    }
    
    // Simulate sending test email
    showLoading();
    setTimeout(function() {
        hideLoading();
        toastr.success('Test email sent successfully to ' + email);
    }, 2000);
}

// Run Security Scan
function runSecurityScan() {
    showLoading();
    setTimeout(function() {
        hideLoading();
        toastr.success('Security scan completed successfully');
        
        // Update security status
        $('.dashboard-card .badge-warning').text('0');
        $('.dashboard-card .badge-success').text('92/100');
    }, 3000);
}

// Create Backup
function createBackup() {
    showLoading();
    setTimeout(function() {
        hideLoading();
        toastr.success('Backup created successfully');
        
        // Update last backup time
        $('.dashboard-card small').last().text('Just now');
    }, 2000);
}

// Load settings on page load
$(document).ready(function() {
    // Load saved settings
    const generalSettings = localStorage.getItem('generalSettings');
    if (generalSettings) {
        const settings = JSON.parse(generalSettings);
        // Apply settings to form fields
    }
    
    const emailSettings = localStorage.getItem('emailSettings');
    if (emailSettings) {
        const settings = JSON.parse(emailSettings);
        // Apply settings to form fields
    }
    
    const securitySettings = localStorage.getItem('securitySettings');
    if (securitySettings) {
        const settings = JSON.parse(securitySettings);
        // Apply settings to form fields
    }
});


