// Layout Management for AGAdmin
$(document).ready(function() {
    // Initialize layout components
    initializeLayout();
    
    // Set active sidebar state based on current page
    setActiveSidebarState();
    
    // Initialize simple charts
    initializeSimpleCharts();
});

// Initialize Layout Components
function initializeLayout() {
    // Sidebar toggle functionality
    $('#sidebarCollapse').on('click', function (e) {
        e.preventDefault();
        
        const sidebar = $('#sidebar');
        sidebar.toggleClass('active');
        
        // Add overlay for mobile
        if ($(window).width() < 768) {
            if (sidebar.hasClass('active')) {
                if ($('.sidebar-overlay').length === 0) {
                    $('body').append('<div class="sidebar-overlay"></div>');
                }
                $('body').addClass('sidebar-open');
            } else {
                $('.sidebar-overlay').remove();
                $('body').removeClass('sidebar-open');
            }
        }
    });
    
    // Close sidebar when clicking overlay
    $(document).on('click', '.sidebar-overlay', function() {
        $('#sidebar').removeClass('active');
        $('.sidebar-overlay').remove();
        $('body').removeClass('sidebar-open');
    });
    
    // Dark mode toggle
    $('#darkModeToggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        const icon = $(this).find('i');
        if ($('body').hasClass('dark-mode')) {
            icon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            icon.removeClass('fa-sun').addClass('fa-moon');
        }
    });
    
    // Language selector
    $('#languageSelect').on('change', function() {
        const selectedLang = $(this).val();
        // Language change logic would go here
        console.log('Language changed to:', selectedLang);
    });
    
    // Initialize mobile/desktop state
    initializeResponsiveState();
    
    // Handle window resize
    $(window).on('resize', function() {
        initializeResponsiveState();
    });
    
    function initializeResponsiveState() {
        if ($(window).width() < 768) {
            // Mobile view - sidebar hidden by default
            $('#sidebar').removeClass('active');
            $('#content').removeClass('active');
            $('.sidebar-overlay').remove();
            $('body').removeClass('sidebar-open');
        } else {
            // Desktop view - sidebar visible by default
            $('#sidebar').addClass('active');
            $('#content').addClass('active');
            $('.sidebar-overlay').remove();
            $('body').removeClass('sidebar-open');
        }
    }
}

// Set Active Sidebar State
function setActiveSidebarState() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // Remove all active states
    $('.sidebar .components li').removeClass('active');
    $('.sidebar .collapse').removeClass('show');
    
    // Set active state based on current page
    switch(currentPage) {
        case 'dashboard':
        case 'index':
            $('.sidebar a[href="dashboard.html"]').parent().addClass('active');
            break;
        case 'users':
            $('.sidebar a[href="#userManagement"]').parent().addClass('active');
            $('.sidebar #userManagement').addClass('show');
            $('.sidebar a[href="users.html"]').parent().addClass('active');
            break;
        case 'roles':
            $('.sidebar a[href="#userManagement"]').parent().addClass('active');
            $('.sidebar #userManagement').addClass('show');
            $('.sidebar a[href="roles.html"]').parent().addClass('active');
            break;
        case 'permissions':
            $('.sidebar a[href="#userManagement"]').parent().addClass('active');
            $('.sidebar #userManagement').addClass('show');
            $('.sidebar a[href="permissions.html"]').parent().addClass('active');
            break;
        case 'categories':
            $('.sidebar a[href="#masterData"]').parent().addClass('active');
            $('.sidebar #masterData').addClass('show');
            $('.sidebar a[href="categories.html"]').parent().addClass('active');
            break;
        case 'territories':
            $('.sidebar a[href="#masterData"]').parent().addClass('active');
            $('.sidebar #masterData').addClass('show');
            $('.sidebar a[href="territories.html"]').parent().addClass('active');
            break;
        case 'stores':
            $('.sidebar a[href="#masterData"]').parent().addClass('active');
            $('.sidebar #masterData').addClass('show');
            $('.sidebar a[href="stores.html"]').parent().addClass('active');
            break;
        case 'sales':
            $('.sidebar a[href="#business"]').parent().addClass('active');
            $('.sidebar #business').addClass('show');
            $('.sidebar a[href="sales.html"]').parent().addClass('active');
            break;
        case 'inventory':
            $('.sidebar a[href="#business"]').parent().addClass('active');
            $('.sidebar #business').addClass('show');
            $('.sidebar a[href="inventory.html"]').parent().addClass('active');
            break;
        case 'customers':
            $('.sidebar a[href="#business"]').parent().addClass('active');
            $('.sidebar #business').addClass('show');
            $('.sidebar a[href="customers.html"]').parent().addClass('active');
            break;
        case 'projects':
            $('.sidebar a[href="#business"]').parent().addClass('active');
            $('.sidebar #business').addClass('show');
            $('.sidebar a[href="projects.html"]').parent().addClass('active');
            break;
        case 'hr':
            $('.sidebar a[href="#business"]').parent().addClass('active');
            $('.sidebar #business').addClass('show');
            $('.sidebar a[href="hr.html"]').parent().addClass('active');
            break;
        case 'finance':
            $('.sidebar a[href="#finance"]').parent().addClass('active');
            $('.sidebar #finance').addClass('show');
            $('.sidebar a[href="finance.html"]').parent().addClass('active');
            break;
        case 'payroll':
            $('.sidebar a[href="#finance"]').parent().addClass('active');
            $('.sidebar #finance').addClass('show');
            $('.sidebar a[href="payroll.html"]').parent().addClass('active');
            break;
        case 'leave-management':
            $('.sidebar a[href="leave-management.html"]').parent().addClass('active');
            break;
        case 'ticketing':
            $('.sidebar a[href="ticketing.html"]').parent().addClass('active');
            break;
        case 'reports':
            $('.sidebar a[href="reports.html"]').parent().addClass('active');
            break;
        case 'notifications':
            $('.sidebar a[href="#communication"]').parent().addClass('active');
            $('.sidebar #communication').addClass('show');
            $('.sidebar a[href="notifications.html"]').parent().addClass('active');
            break;
        case 'messages':
            $('.sidebar a[href="#communication"]').parent().addClass('active');
            $('.sidebar #communication').addClass('show');
            $('.sidebar a[href="messages.html"]').parent().addClass('active');
            break;
        case 'announcements':
            $('.sidebar a[href="#communication"]').parent().addClass('active');
            $('.sidebar #communication').addClass('show');
            $('.sidebar a[href="announcements.html"]').parent().addClass('active');
            break;
        case 'settings':
            $('.sidebar a[href="settings.html"]').parent().addClass('active');
            break;
        case 'audit-logs':
            $('.sidebar a[href="audit-logs.html"]').parent().addClass('active');
            break;
        case 'ui-components':
            $('.sidebar a[href="ui-components.html"]').parent().addClass('active');
            break;
        case 'profile':
            // Profile doesn't have a sidebar link, so no active state needed
            break;
    }
}

// Initialize Simple Charts (CSS-based)
function initializeSimpleCharts() {
    // Replace all canvas elements with simple CSS charts
    $('canvas').each(function() {
        const canvasId = this.id;
        const canvas = $(this);
        const container = canvas.parent();
        
        // Create simple chart based on ID
        let chartHtml = '';
        
        switch(canvasId) {
            case 'salesTrendChart':
                chartHtml = createSimpleLineChart('Sales Trend', [12000, 19000, 15000, 25000, 22000, 30000, 28000], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']);
                break;
            case 'revenueChart':
                chartHtml = createSimplePieChart('Revenue Sources', [300, 150, 100], ['Online', 'Offline', 'Mobile'], ['#ff6384', '#36a2eb', '#ffce56']);
                break;
            case 'customerGrowthChart':
                chartHtml = createSimpleLineChart('Customer Growth', [120, 190, 150, 250, 220, 300, 280], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']);
                break;
            case 'projectProgressChart':
                chartHtml = createSimplePieChart('Project Progress', [35, 45, 15, 5], ['Completed', 'In Progress', 'Planning', 'On Hold'], ['#28a745', '#007bff', '#ffc107', '#dc3545']);
                break;
            case 'employeeDistributionChart':
                chartHtml = createSimpleBarChart('Employee Distribution', [45, 12, 18, 15, 22, 8], ['IT', 'HR', 'Finance', 'Marketing', 'Sales', 'Operations']);
                break;
            case 'employeeStatusChart':
                chartHtml = createSimplePieChart('Employee Status', [142, 23, 5], ['Active', 'On Leave', 'Inactive'], ['#28a745', '#ffc107', '#dc3545']);
                break;
            case 'revenueExpensesChart':
                chartHtml = createSimpleBarChart('Revenue vs Expenses', [100000, 120000, 110000, 130000, 125000, 140000], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
                break;
            case 'profitTrendChart':
                chartHtml = createSimpleLineChart('Profit Trend', [60000, 75000, 68000, 82000, 79000, 90000], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
                break;
            case 'financialTrendsChart':
                chartHtml = createSimpleLineChart('Financial Trends', [35000, 38000, 42000, 39000, 45000, 48000], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
                break;
            case 'incomeExpenseChart':
                chartHtml = createSimplePieChart('Income vs Expenses', [45230, 28450], ['Income', 'Expenses'], ['#28a745', '#dc3545']);
                break;
            case 'payrollTrendsChart':
                chartHtml = createSimpleLineChart('Payroll Trends', [120000, 125000, 130000, 128000, 135000, 140000], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
                break;
            case 'leaveTrendsChart':
                chartHtml = createSimpleLineChart('Leave Trends', [25, 30, 28, 35, 32, 40], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
                break;
            case 'ticketTrendsChart':
                chartHtml = createSimpleLineChart('Ticket Trends', [120, 135, 128, 145, 142, 160], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
                break;
            case 'barChart':
                chartHtml = createSimpleBarChart('Sample Bar Chart', [12, 19, 3, 5, 2], ['Jan', 'Feb', 'Mar', 'Apr', 'May']);
                break;
            case 'pieChart':
                chartHtml = createSimplePieChart('Sample Pie Chart', [300, 50, 100], ['Red', 'Blue', 'Yellow'], ['#ff6384', '#36a2eb', '#ffce56']);
                break;
            default:
                chartHtml = createSimpleBarChart('Chart', [12, 19, 3, 5], ['Item 1', 'Item 2', 'Item 3', 'Item 4']);
        }
        
        // Replace canvas with simple chart
        canvas.replaceWith(chartHtml);
    });
}

// Create Simple Line Chart
function createSimpleLineChart(title, data, labels) {
    const maxValue = Math.max(...data);
    const chartId = 'chart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    let barsHtml = '';
    data.forEach((value, index) => {
        const height = (value / maxValue) * 100;
        barsHtml += `
            <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${height}%"></div>
                <div class="chart-label">${labels[index]}</div>
                <div class="chart-value">${value.toLocaleString()}</div>
            </div>
        `;
    });
    
    return `
        <div class="simple-chart-container" id="${chartId}">
            <h6 class="chart-title">${title}</h6>
            <div class="simple-line-chart">
                ${barsHtml}
            </div>
        </div>
    `;
}

// Create Simple Bar Chart
function createSimpleBarChart(title, data, labels) {
    const maxValue = Math.max(...data);
    const chartId = 'chart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    let barsHtml = '';
    data.forEach((value, index) => {
        const height = (value / maxValue) * 100;
        barsHtml += `
            <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${height}%"></div>
                <div class="chart-label">${labels[index]}</div>
                <div class="chart-value">${value.toLocaleString()}</div>
            </div>
        `;
    });
    
    return `
        <div class="simple-chart-container" id="${chartId}">
            <h6 class="chart-title">${title}</h6>
            <div class="simple-bar-chart">
                ${barsHtml}
            </div>
        </div>
    `;
}

// Create Simple Pie Chart
function createSimplePieChart(title, data, labels, colors) {
    const total = data.reduce((sum, value) => sum + value, 0);
    const chartId = 'chart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    let segmentsHtml = '';
    let legendHtml = '';
    let currentAngle = 0;
    
    data.forEach((value, index) => {
        const percentage = (value / total) * 100;
        const angle = (value / total) * 360;
        const color = colors[index] || '#007bff';
        
        segmentsHtml += `
            <div class="pie-segment" style="
                background: conic-gradient(${color} 0deg ${angle}deg, transparent ${angle}deg);
                transform: rotate(${currentAngle}deg);
            "></div>
        `;
        
        legendHtml += `
            <div class="legend-item">
                <span class="legend-color" style="background-color: ${color}"></span>
                <span class="legend-label">${labels[index]}</span>
                <span class="legend-value">${value.toLocaleString()} (${percentage.toFixed(1)}%)</span>
            </div>
        `;
        
        currentAngle += angle;
    });
    
    return `
        <div class="simple-chart-container" id="${chartId}">
            <h6 class="chart-title">${title}</h6>
            <div class="simple-pie-chart">
                <div class="pie-chart-circle">
                    ${segmentsHtml}
                </div>
                <div class="pie-legend">
                    ${legendHtml}
                </div>
            </div>
        </div>
    `;
}

// Utility function to destroy all charts
function destroyAllCharts() {
    // No need to destroy charts since we're using CSS-based charts
    $('.simple-chart-container').remove();
}

// Reinitialize charts when page content changes
function reinitializeCharts() {
    destroyAllCharts();
    setTimeout(function() {
        initializeSimpleCharts();
    }, 100);
}