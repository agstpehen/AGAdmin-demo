#!/usr/bin/env python3
"""
Script to update all HTML pages with consistent sidebar and header layout
"""

import os
import re

# Common sidebar HTML
SIDEBAR_HTML = '''    <!-- Sidebar -->
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
    </nav>'''

# Common header HTML
HEADER_HTML = '''        <!-- Top Navigation -->
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
        </nav>'''

# Common scripts
SCRIPTS_HTML = '''    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    
    <!-- Toastr -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    
    <!-- Layout Management -->
    <script src="assets/js/layout.js"></script>'''

def update_page(file_path, page_name):
    """Update a single HTML page with consistent layout"""
    
    # Read the current file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the title
    title_match = re.search(r'<title>(.*?)</title>', content)
    title = title_match.group(1) if title_match else f"{page_name} - AGAdmin"
    
    # Extract the main content (between body tags, excluding existing nav)
    body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
    if not body_match:
        print(f"Could not find body content in {file_path}")
        return
    
    body_content = body_match.group(1)
    
    # Extract the main content area (excluding existing navigation)
    # Look for content after any existing nav elements
    main_content_match = re.search(r'(?:<!-- Main Content -->|<!-- Page Content -->|<div class="container-fluid mt-4">)(.*?)(?:</div>\s*</div>\s*)?</body>', body_content, re.DOTALL)
    if main_content_match:
        main_content = main_content_match.group(1)
    else:
        # Fallback: look for content after navbar
        navbar_end = re.search(r'</nav>', body_content)
        if navbar_end:
            main_content = body_content[navbar_end.end():]
        else:
            main_content = body_content
    
    # Clean up the main content
    main_content = main_content.strip()
    
    # Determine active sidebar item
    active_item = ""
    if page_name == "dashboard":
        active_item = 'class="active"'
    elif page_name in ["users", "roles", "permissions"]:
        active_item = 'class="active"' if page_name == "users" else ""
    elif page_name in ["categories", "territories", "stores"]:
        active_item = 'class="active"' if page_name == "categories" else ""
    elif page_name in ["sales", "inventory", "customers", "projects", "hr"]:
        active_item = 'class="active"' if page_name == "sales" else ""
    elif page_name in ["finance", "payroll"]:
        active_item = 'class="active"' if page_name == "finance" else ""
    elif page_name in ["notifications", "messages", "announcements"]:
        active_item = 'class="active"' if page_name == "notifications" else ""
    
    # Update sidebar with active state
    sidebar_with_active = SIDEBAR_HTML
    if active_item:
        # Find the appropriate li element and add active class
        if page_name == "dashboard":
            sidebar_with_active = sidebar_with_active.replace('<li>', f'<li {active_item}>', 1)
        else:
            # For other pages, we need to find the specific li element
            sidebar_with_active = sidebar_with_active.replace(f'href="{page_name}.html"', f'href="{page_name}.html" {active_item}')
    
    # Create the new content
    new_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    
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
{SIDEBAR_HTML}
    
    <!-- Page Content -->
    <div id="content">
{HEADER_HTML}
        
        <!-- Main Content Area -->
        <div class="container-fluid">
{main_content}
        </div>
    </div>
    
{SCRIPTS_HTML}
</body>
</html>'''
    
    # Write the updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated {file_path}")

def main():
    """Update all HTML pages"""
    
    # List of pages to update (excluding index.html and login.html)
    pages = [
        "users.html", "roles.html", "permissions.html",
        "categories.html", "territories.html", "stores.html",
        "sales.html", "inventory.html", "customers.html", "projects.html", "hr.html",
        "finance.html", "payroll.html", "leave-management.html", "ticketing.html",
        "reports.html", "notifications.html", "messages.html", "announcements.html",
        "settings.html", "audit-logs.html", "ui-components.html", "profile.html"
    ]
    
    for page in pages:
        if os.path.exists(page):
            page_name = page.replace('.html', '')
            update_page(page, page_name)
        else:
            print(f"File {page} not found")

if __name__ == "__main__":
    main()



