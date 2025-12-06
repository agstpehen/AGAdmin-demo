// AGAdmin - Dashboard JavaScript

// Dashboard Overview Page
function loadDashboardOverview() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Dashboard Overview</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="refreshDashboard()">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="exportDashboard()">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>
            
            <!-- Key Metrics Cards -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 id="totalUsers">1,234</h3>
                        <p>Total Users</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 12% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <h3 id="totalSales">$45,678</h3>
                        <p>Total Sales</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 8% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-boxes"></i>
                        </div>
                        <h3 id="totalProducts">567</h3>
                        <p>Total Products</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-down"></i> 3% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon danger">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3 id="alerts">23</h3>
                        <p>Active Alerts</p>
                        <small class="text-danger">
                            <i class="fas fa-arrow-up"></i> 5 new today
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Charts Row -->
            <div class="row mb-4">
                <div class="col-xl-8 col-lg-7">
                    <div class="chart-container">
                        <h5>Sales Overview</h5>
                        <canvas id="salesChart" height="100"></canvas>
                    </div>
                </div>
                
                <div class="col-xl-4 col-lg-5">
                    <div class="chart-container">
                        <h5>User Distribution</h5>
                        <canvas id="userChart" height="100"></canvas>
                    </div>
                </div>
            </div>
            
            <!-- Recent Activity and Quick Actions -->
            <div class="row">
                <div class="col-xl-8 col-lg-7">
                    <div class="table-container">
                        <h5>Recent Activity</h5>
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Action</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="recentActivityTable">
                                    <tr>
                                        <td>
                                            <img src="assets/images/avatar1.jpg" alt="User" class="user-avatar me-2">
                                            John Doe
                                        </td>
                                        <td>Created new user account</td>
                                        <td>2 minutes ago</td>
                                        <td><span class="badge badge-success">Success</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/images/avatar2.jpg" alt="User" class="user-avatar me-2">
                                            Jane Smith
                                        </td>
                                        <td>Updated product inventory</td>
                                        <td>15 minutes ago</td>
                                        <td><span class="badge badge-success">Success</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/images/avatar3.jpg" alt="User" class="user-avatar me-2">
                                            Mike Johnson
                                        </td>
                                        <td>Generated sales report</td>
                                        <td>1 hour ago</td>
                                        <td><span class="badge badge-info">Processing</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-4 col-lg-5">
                    <div class="chart-container">
                        <h5>Quick Actions</h5>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" onclick="AGAdmin.loadPage('users')">
                                <i class="fas fa-user-plus"></i> Add New User
                            </button>
                            <button class="btn btn-success" onclick="AGAdmin.loadPage('sales')">
                                <i class="fas fa-plus"></i> New Sale
                            </button>
                            <button class="btn btn-info" onclick="AGAdmin.loadPage('reports')">
                                <i class="fas fa-chart-bar"></i> Generate Report
                            </button>
                            <button class="btn btn-warning" onclick="AGAdmin.loadPage('inventory')">
                                <i class="fas fa-boxes"></i> Check Inventory
                            </button>
                        </div>
                        
                        <hr>
                        
                        <h6>System Status</h6>
                        <div class="mb-2">
                            <small>Server Status</small>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <small>Database Status</small>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: 98%"></div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <small>Storage Usage</small>
                            <div class="progress">
                                <div class="progress-bar bg-warning" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    
    // Initialize charts after content is loaded
    setTimeout(function() {
        initializeSalesChart();
        initializeUserChart();
        loadRecentActivity();
    }, 100);
}

// Dashboard Analytics Page
function loadDashboardAnalytics() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Analytics Dashboard</h2>
                <div class="btn-group" role="group">
                    <button class="btn btn-outline-primary btn-sm active" data-period="7d">7 Days</button>
                    <button class="btn btn-outline-primary btn-sm" data-period="30d">30 Days</button>
                    <button class="btn btn-outline-primary btn-sm" data-period="90d">90 Days</button>
                    <button class="btn btn-outline-primary btn-sm" data-period="1y">1 Year</button>
                </div>
            </div>
            
            <!-- Analytics Cards -->
            <div class="row mb-4">
                <div class="col-md-3 mb-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon primary">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h4>Page Views</h4>
                        <h2 id="pageViews">12,345</h2>
                        <small class="text-success">+15% from last period</small>
                    </div>
                </div>
                
                <div class="col-md-3 mb-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon success">
                            <i class="fas fa-mouse-pointer"></i>
                        </div>
                        <h4>Click Rate</h4>
                        <h2 id="clickRate">3.2%</h2>
                        <small class="text-success">+0.5% from last period</small>
                    </div>
                </div>
                
                <div class="col-md-3 mb-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon warning">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h4>Avg. Session</h4>
                        <h2 id="avgSession">4:32</h2>
                        <small class="text-warning">-0:15 from last period</small>
                    </div>
                </div>
                
                <div class="col-md-3 mb-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon danger">
                            <i class="fas fa-times"></i>
                        </div>
                        <h4>Bounce Rate</h4>
                        <h2 id="bounceRate">42%</h2>
                        <small class="text-danger">+2% from last period</small>
                    </div>
                </div>
            </div>
            
            <!-- Detailed Charts -->
            <div class="row mb-4">
                <div class="col-xl-6 mb-4">
                    <div class="chart-container">
                        <h5>Traffic Sources</h5>
                        <canvas id="trafficChart" height="200"></canvas>
                    </div>
                </div>
                
                <div class="col-xl-6 mb-4">
                    <div class="chart-container">
                        <h5>Geographic Distribution</h5>
                        <canvas id="geoChart" height="200"></canvas>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xl-8 mb-4">
                    <div class="chart-container">
                        <h5>Performance Trends</h5>
                        <canvas id="performanceChart" height="100"></canvas>
                    </div>
                </div>
                
                <div class="col-xl-4 mb-4">
                    <div class="chart-container">
                        <h5>Top Pages</h5>
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Page</th>
                                        <th>Views</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>/dashboard</td>
                                        <td>3,456</td>
                                        <td>28%</td>
                                    </tr>
                                    <tr>
                                        <td>/users</td>
                                        <td>2,123</td>
                                        <td>17%</td>
                                    </tr>
                                    <tr>
                                        <td>/sales</td>
                                        <td>1,890</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>/reports</td>
                                        <td>1,234</td>
                                        <td>10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    
    // Initialize analytics charts
    setTimeout(function() {
        initializeTrafficChart();
        initializeGeoChart();
        initializePerformanceChart();
        
        // Period selector functionality
        $('[data-period]').on('click', function() {
            $('[data-period]').removeClass('active');
            $(this).addClass('active');
            const period = $(this).data('period');
            updateAnalyticsData(period);
        });
    }, 100);
}

// Initialize Sales Chart
function initializeSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sales',
                data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Revenue',
                data: [8000, 12000, 10000, 18000, 16000, 22000, 20000],
                borderColor: '#764ba2',
                backgroundColor: 'rgba(118, 75, 162, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Initialize User Chart
function initializeUserChart() {
    const ctx = document.getElementById('userChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active Users', 'Inactive Users', 'Pending Users'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

// Initialize Traffic Chart
function initializeTrafficChart() {
    const ctx = document.getElementById('trafficChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Direct', 'Search', 'Social', 'Email', 'Referral'],
            datasets: [{
                label: 'Visitors',
                data: [45, 30, 15, 7, 3],
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#28a745',
                    '#ffc107',
                    '#dc3545'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize Geographic Chart
function initializeGeoChart() {
    const ctx = document.getElementById('geoChart').getContext('2d');
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'],
            datasets: [{
                data: [35, 25, 20, 10, 7, 3],
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#28a745',
                    '#ffc107',
                    '#dc3545',
                    '#17a2b8'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

// Initialize Performance Chart
function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Performance Score',
                data: [75, 82, 78, 85],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Load Recent Activity
function loadRecentActivity() {
    // Simulate loading recent activity data
    const activities = [
        { user: 'John Doe', action: 'Created new user account', time: '2 minutes ago', status: 'success' },
        { user: 'Jane Smith', action: 'Updated product inventory', time: '15 minutes ago', status: 'success' },
        { user: 'Mike Johnson', action: 'Generated sales report', time: '1 hour ago', status: 'info' },
        { user: 'Sarah Wilson', action: 'Processed payment', time: '2 hours ago', status: 'success' },
        { user: 'David Brown', action: 'Updated system settings', time: '3 hours ago', status: 'warning' }
    ];
    
    let tableRows = '';
    activities.forEach(activity => {
        const statusClass = activity.status === 'success' ? 'badge-success' : 
                           activity.status === 'info' ? 'badge-info' : 'badge-warning';
        tableRows += `
            <tr>
                <td>
                    <img src="assets/images/avatar${Math.floor(Math.random() * 5) + 1}.jpg" alt="User" class="user-avatar me-2">
                    ${activity.user}
                </td>
                <td>${activity.action}</td>
                <td>${activity.time}</td>
                <td><span class="badge ${statusClass}">${activity.status}</span></td>
            </tr>
        `;
    });
    
    $('#recentActivityTable').html(tableRows);
}

// Update Analytics Data
function updateAnalyticsData(period) {
    // Simulate data update based on period
    const data = {
        '7d': { pageViews: 12345, clickRate: 3.2, avgSession: '4:32', bounceRate: 42 },
        '30d': { pageViews: 45678, clickRate: 3.8, avgSession: '5:15', bounceRate: 38 },
        '90d': { pageViews: 123456, clickRate: 4.1, avgSession: '5:45', bounceRate: 35 },
        '1y': { pageViews: 456789, clickRate: 4.5, avgSession: '6:20', bounceRate: 32 }
    };
    
    const periodData = data[period];
    $('#pageViews').text(periodData.pageViews.toLocaleString());
    $('#clickRate').text(periodData.clickRate + '%');
    $('#avgSession').text(periodData.avgSession);
    $('#bounceRate').text(periodData.bounceRate + '%');
    
    toastr.info('Analytics data updated for ' + period);
}

// Refresh Dashboard
function refreshDashboard() {
    showLoading();
    
    // Simulate data refresh
    setTimeout(function() {
        loadDashboardOverview();
        toastr.success('Dashboard refreshed successfully');
    }, 1000);
}

// Export Dashboard
function exportDashboard() {
    Swal.fire({
        title: 'Export Dashboard',
        text: 'Choose export format',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'PDF',
        cancelButtonText: 'Excel',
        showDenyButton: true,
        denyButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            exportToPDF('dashboard-content', 'dashboard-report.pdf');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            exportToExcel('dashboard-content', 'dashboard-report.xlsx');
        }
    });
}

// Real-time updates simulation
function startRealTimeUpdates() {
    setInterval(function() {
        // Update metrics randomly
        const totalUsers = parseInt($('#totalUsers').text().replace(',', ''));
        const newTotal = totalUsers + Math.floor(Math.random() * 3);
        $('#totalUsers').text(newTotal.toLocaleString());
        
        // Update sales
        const totalSales = parseInt($('#totalSales').text().replace(/[$,]/g, ''));
        const newSales = totalSales + Math.floor(Math.random() * 100);
        $('#totalSales').text('$' + newSales.toLocaleString());
        
        // Update alerts
        const alerts = parseInt($('#alerts').text());
        const newAlerts = Math.max(0, alerts + Math.floor(Math.random() * 3) - 1);
        $('#alerts').text(newAlerts);
        
    }, 30000); // Update every 30 seconds
}

// Initialize real-time updates when dashboard loads
$(document).ready(function() {
    // Start real-time updates after a delay
    setTimeout(startRealTimeUpdates, 5000);
});


