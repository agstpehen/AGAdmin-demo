# PowerShell script to update HTML pages with consistent layout

# Common sidebar HTML
$sidebarHtml = @'
    <!-- Sidebar -->
    <nav id="sidebar" class="sidebar">
        <div class="sidebar-header">
            <h3><i class="fas fa-tachometer-alt"></i> AGAdmin</h3>
            <button type="button" id="sidebarCollapse" class="btn btn-outline-light btn-sm">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        
        <ul class="list-unstyled components">
            <!-- Dashboard -->
            <li>
                <a href="dashboard.html">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                </a>
            </li>
            
            <!-- User Management -->
            <li>
                <a href="#userManagement" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-users"></i> User Management
                </a>
                <ul class="collapse list-unstyled" id="userManagement">
                    <li><a href="users.html">Users</a></li>
                    <li><a href="roles.html">Roles</a></li>
                    <li><a href="permissions.html">Permissions</a></li>
                </ul>
            </li>
            
            <!-- Master Data -->
            <li>
                <a href="#masterData" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-database"></i> Master Data
                </a>
                <ul class="collapse list-unstyled" id="masterData">
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="territories.html">Territories</a></li>
                    <li><a href="stores.html">Stores</a></li>
                </ul>
            </li>
            
            <!-- Business Modules -->
            <li>
                <a href="#business" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-briefcase"></i> Business Modules
                </a>
                <ul class="collapse list-unstyled" id="business">
                    <li><a href="sales.html">Sales</a></li>
                    <li><a href="inventory.html">Inventory</a></li>
                    <li><a href="customers.html">Customers</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="hr.html">HR Management</a></li>
                </ul>
            </li>
            
            <!-- Finance & Payroll -->
            <li>
                <a href="#finance" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-chart-line"></i> Finance & Payroll
                </a>
                <ul class="collapse list-unstyled" id="finance">
                    <li><a href="finance.html">Finance</a></li>
                    <li><a href="payroll.html">Payroll</a></li>
                </ul>
            </li>
            
            <!-- Leave Management -->
            <li>
                <a href="leave-management.html">
                    <i class="fas fa-calendar-alt"></i> Leave Management
                </a>
            </li>
            
            <!-- Ticketing System -->
            <li>
                <a href="ticketing.html">
                    <i class="fas fa-ticket-alt"></i> Ticketing System
                </a>
            </li>
            
            <!-- Reports -->
            <li>
                <a href="reports.html">
                    <i class="fas fa-chart-bar"></i> Reports
                </a>
            </li>
            
            <!-- Communication -->
            <li>
                <a href="#communication" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-comments"></i> Communication
                </a>
                <ul class="collapse list-unstyled" id="communication">
                    <li><a href="notifications.html">Notifications</a></li>
                    <li><a href="messages.html">Messages</a></li>
                    <li><a href="announcements.html">Announcements</a></li>
                </ul>
            </li>
            
            <!-- Settings -->
            <li>
                <a href="settings.html">
                    <i class="fas fa-cog"></i> Settings
                </a>
            </li>
            
            <!-- Audit Logs -->
            <li>
                <a href="audit-logs.html">
                    <i class="fas fa-history"></i> Audit Logs
                </a>
            </li>
            
            <!-- UI Components -->
            <li>
                <a href="ui-components.html">
                    <i class="fas fa-palette"></i> UI Components
                </a>
            </li>
        </ul>
    </nav>
'@

# Common header HTML
$headerHtml = @'
        <!-- Top Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-bars"></i>
                </button>
                
                <div class="navbar-nav ms-auto">
                    <!-- Dark Mode Toggle -->
                    <div class="nav-item me-3">
                        <button class="btn btn-outline-secondary" id="darkModeToggle">
                            <i class="fas fa-moon"></i>
                        </button>
                    </div>
                    
                    <!-- Language Selector -->
                    <div class="nav-item me-3">
                        <select class="form-select form-select-sm" id="languageSelect">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                    
                    <!-- Notifications -->
                    <div class="nav-item dropdown me-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fas fa-bell"></i>
                            <span class="badge bg-danger" id="notificationCount">3</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><h6 class="dropdown-header">Notifications</h6></li>
                            <li><a class="dropdown-item" href="#">New user registered</a></li>
                            <li><a class="dropdown-item" href="#">Low inventory alert</a></li>
                            <li><a class="dropdown-item" href="#">System maintenance scheduled</a></li>
                        </ul>
                    </div>
                    
                    <!-- User Profile -->
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <img src="assets/images/avatar.jpg" alt="User" class="rounded-circle" width="30" height="30">
                            <span class="ms-2">Admin User</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="profile.html"><i class="fas fa-user"></i> Profile</a></li>
                            <li><a class="dropdown-item" href="settings.html"><i class="fas fa-cog"></i> Settings</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="login.html"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
'@

# Common scripts
$scriptsHtml = @'
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    
    <!-- Toastr -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    
    <!-- Layout Management -->
    <script src="assets/js/layout.js"></script>
'@

function Update-Page {
    param(
        [string]$FilePath,
        [string]$PageName
    )
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "File $FilePath not found" -ForegroundColor Red
        return
    }
    
    # Read the current file
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    
    # Extract title
    $titleMatch = $content -match '<title>(.*?)</title>'
    $title = if ($titleMatch) { $matches[1] } else { "$PageName - AGAdmin" }
    
    # Extract main content (between body tags, excluding existing nav)
    if ($content -match '<body[^>]*>(.*?)</body>') {
        $bodyContent = $matches[1]
    } else {
        Write-Host "Could not find body content in $FilePath" -ForegroundColor Red
        return
    }
    
    # Extract the main content area (excluding existing navigation)
    if ($bodyContent -match '(?:<!-- Main Content -->|<!-- Page Content -->|<div class="container-fluid mt-4">)(.*?)(?:</div>\s*</div>\s*)?</body>') {
        $mainContent = $matches[1]
    } else {
        # Fallback: look for content after navbar
        if ($bodyContent -match '</nav>') {
            $mainContent = $bodyContent.Substring($matches[0].Length)
        } else {
            $mainContent = $bodyContent
        }
    }
    
    # Clean up the main content
    $mainContent = $mainContent.Trim()
    
    # Determine active sidebar item
    $activeItem = ""
    $sidebarWithActive = $sidebarHtml
    
    switch ($PageName) {
        "dashboard" { $sidebarWithActive = $sidebarWithActive -replace '<li>', '<li class="active">', 1 }
        "users" { $sidebarWithActive = $sidebarWithActive -replace 'href="users.html"', 'href="users.html" class="active"' }
        "sales" { $sidebarWithActive = $sidebarWithActive -replace 'href="sales.html"', 'href="sales.html" class="active"' }
        "finance" { $sidebarWithActive = $sidebarWithActive -replace 'href="finance.html"', 'href="finance.html" class="active"' }
        "payroll" { $sidebarWithActive = $sidebarWithActive -replace 'href="payroll.html"', 'href="payroll.html" class="active"' }
        "leave-management" { $sidebarWithActive = $sidebarWithActive -replace 'href="leave-management.html"', 'href="leave-management.html" class="active"' }
        "ticketing" { $sidebarWithActive = $sidebarWithActive -replace 'href="ticketing.html"', 'href="ticketing.html" class="active"' }
        "reports" { $sidebarWithActive = $sidebarWithActive -replace 'href="reports.html"', 'href="reports.html" class="active"' }
        "notifications" { $sidebarWithActive = $sidebarWithActive -replace 'href="notifications.html"', 'href="notifications.html" class="active"' }
        "settings" { $sidebarWithActive = $sidebarWithActive -replace 'href="settings.html"', 'href="settings.html" class="active"' }
        "audit-logs" { $sidebarWithActive = $sidebarWithActive -replace 'href="audit-logs.html"', 'href="audit-logs.html" class="active"' }
        "ui-components" { $sidebarWithActive = $sidebarWithActive -replace 'href="ui-components.html"', 'href="ui-components.html" class="active"' }
        "profile" { $sidebarWithActive = $sidebarWithActive -replace 'href="profile.html"', 'href="profile.html" class="active"' }
    }
    
    # Create the new content
    $newContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$title</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <!-- Toastr -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
$sidebarWithActive
    
    <!-- Page Content -->
    <div id="content">
$headerHtml
        
        <!-- Main Content Area -->
        <div class="container-fluid">
$mainContent
        </div>
    </div>
    
$scriptsHtml
</body>
</html>
"@
    
    # Write the updated content
    Set-Content -Path $FilePath -Value $newContent -Encoding UTF8
    
    Write-Host "Updated $FilePath" -ForegroundColor Green
}

# List of pages to update (excluding index.html, login.html, and users.html which is already updated)
$pages = @(
    "roles.html", "permissions.html",
    "categories.html", "territories.html", "stores.html",
    "sales.html", "inventory.html", "customers.html", "projects.html", "hr.html",
    "finance.html", "payroll.html", "leave-management.html", "ticketing.html",
    "reports.html", "notifications.html", "messages.html", "announcements.html",
    "settings.html", "audit-logs.html", "ui-components.html", "profile.html"
)

foreach ($page in $pages) {
    $pageName = $page -replace '\.html$', ''
    Update-Page -FilePath $page -PageName $pageName
}

Write-Host "All pages updated successfully!" -ForegroundColor Green
