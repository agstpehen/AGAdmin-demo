// AGAdmin - Common JavaScript Functions

// Common page loading functions
function loadCategoriesPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Categories Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddCategoryModal()">
                    <i class="fas fa-plus"></i> Add Category
                </button>
            </div>
            
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Electronics</td>
                                <td>Electronic devices and accessories</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>2024-01-01</td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-warning" onclick="editCategory(1)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-outline-danger" onclick="deleteCategory(1)">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Clothing</td>
                                < Procedimiento>Fashion and apparel</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>2024-01-02</td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-warning" onclick="editCategory(2)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-outline-danger" onclick="deleteCategory(2)">
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
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
}

function loadTerritoriesPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Territories Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddTerritoryModal()">
                    <i class="fas fa-plus"></i> Add Territory
                </button>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon primary">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h4>North America</h4>
                        <p>5 Countries</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon success">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h4>Europe</h4>
                        <p>12 Countries</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon warning">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h4>Asia</h4>
                        <p>8 Countries</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <div class="card-icon danger">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h4>Others</h4>
                        <p>3 Countries</p>
                    </div>
                </div>
            </div>
            
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>Territory</th>
                                <th>Countries</th>
                                <th>Population</th>
                                <th>GDP</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>North America</td>
                                <td>5</td>
                                <td>579M</td>
                                <td>$25.3T</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-primary" onclick="viewTerritory(1)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-outline-warning" onclick="editTerritory(1)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
}

function loadStoresPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Stores Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddStoreModal()">
                    <i class="fas fa-plus"></i> Add Store
                </button>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-4">
                    <div class="search-box">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" class="form-control search-input" placeholder="Search stores...">
                    </div>
                </div>
                <div class="col-md-3">
                    <select class="form-select">
                        <option value="">All Territories</option>
                        <option value="na">North America</option>
                        <option value="eu">Europe</option>
                        <option value="asia">Asia</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <select class="form-select">
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-outline-secondary">
                        <i class="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h5>Store Performance</h5>
                                <p class="text-muted">Average sales per store</p>
                            </div>
                            <div class="text-end">
                                <h3 class="text-primary">$45,678</h3>
                                <small class="text-success">+12% from last month</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h5>Total Stores</h5>
                                <p class="text-muted">Active stores worldwide</p>
                            </div>
                            <div class="text-end">
                                <h3 class="text-success">156</h3>
                                <small class="text-success">+3 new this month</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>Store ID</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Territory</th>
                                <th>Manager</th>
                                <th>Sales</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ST001</td>
                                <td>Downtown Store</td>
                                <td>New York, NY</td>
                                <td>North America</td>
                                <td>John Smith</td>
                                <td>$125,000</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-primary" onclick="viewStore(1)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-outline-warning" onclick="editStore(1)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-outline-danger" onclick="deleteStore(1)">
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
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
}

function loadSalesPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Sales Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddSaleModal()">
                    <i class="fas fa-plus"></i> New Sale
                </button>
            </div>
            
            <!-- Sales Summary Cards -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <h3>$125,678</h3>
                        <p>Total Sales</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 15% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <h3>1,234</h3>
                        <p>Total Orders</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 8% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-percentage"></i>
                        </div>
                        <h3>12.5%</h3>
                        <p>Growth Rate</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-down"></i> 2% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3>$102</h3>
                        <p>Average Order</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 5% from last month
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Sales Chart -->
            <div class="row mb-4">
                <div class="col-12">
                    <div class="chart-container">
                        <h5>Sales Trend</h5>
                        <canvas id="salesTrendChart" height="100"></canvas>
                    </div>
                </div>
            </div>
            
            <!-- Sales Table -->
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ORD001</td>
                                <td>John Doe</td>
                                <td>Laptop Pro</td>
                                <td>1</td>
                                <td>$1,299</td>
                                <td>2024-01-15</td>
                                <td><span class="badge badge-success">Completed</span></td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-primary" onclick="viewSale(1)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-outline-warning" onclick="editSale(1)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
    
    // Initialize sales trend chart
    setTimeout(function() {
        initializeSalesTrendChart();
    }, 100);
}

function loadInventoryPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Inventory Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddProductModal()">
                    <i class="fas fa-plus"></i> Add Product
                </button>
            </div>
            
            <!-- Inventory Summary -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-boxes"></i>
                        </div>
                        <h3>1,234</h3>
                        <p>Total Products</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 25 new this month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3>23</h3>
                        <p>Low Stock Items</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-up"></i> 5 new alerts
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon danger">
                            <i class="fas fa-times"></i>
                        </div>
                        <h3>8</h3>
                        <p>Out of Stock</p>
                        <small class="text-danger">
                            <i class="fas fa-arrow-up"></i> 2 new today
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-check"></i>
                        </div>
                        <h3>$456,789</h3>
                        <p>Inventory Value</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 8% from last month
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Inventory Table -->
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>SKU</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PRD001</td>
                                <td>Laptop Pro</td>
                                <td>Electronics</td>
                                <td>LP-001</td>
                                <td>45</td>
                                <td>$1,299</td>
                                <td><span class="badge badge-success">In Stock</span></td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-primary" onclick="viewProduct(1)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-outline-warning" onclick="editProduct(1)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-outline-info" onclick="adjustStock(1)">
                                            <i class="fas fa-plus-minus"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </divdiv>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
}

function loadCustomersPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Customer Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddCustomerModal()">
                    <i class="fas fa-plus"></i> Add Customer
                </button>
            </div>
            
            <!-- Customer Summary -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>5,678</h3>
                        <p>Total Customers</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 12% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-star"></i>
                        </div>
                        <h3>1,234</h3>
                        <p>VIP Customers</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 8% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>456</h3>
                        <p>New This Month</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-up"></i> 15% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-percentage"></i>
                        </div>
                        <h3>78.5%</h3>
                        <p>Retention Rate</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 3% from last month
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Customer Table -->
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Total Orders</th>
                                <th>Total Spent</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CUST001</td>
                                <td>John Doe</td>
                                <td>john.doe@email.com</td>
                                <td>+1-555-0123</td>
                                <td>15</td>
                                <td>$2,456</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-primary" onclick="viewCustomer(1)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-outline-warning" onclick="editCustomer(1)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-outline-info" onclick="customerHistory(1)">
                                            <i class="fas fa-history"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
}

function loadProjectsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Project Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddProjectModal()">
                    <i class="fas fa-plus"></i> New Project
                </button>
            </div>
            
            <!-- Project Summary -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <h3>24</h3>
                        <p>Active Projects</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 3 new this week
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-check"></i>
                        </div>
                        <h3>18</h3>
                        <p>Completed</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 2 this week
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>6</h3>
                        <p>Overdue</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-up"></i> 1 new today
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-percentage"></i>
                        </div>
                        <h3>75%</h3>
                        <p>Success Rate</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 5% from last month
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Kanban Board -->
            <div class="kanban-board">
                <div class="kanban-column">
                    <h6 class="text-primary">To Do</h6>
                    <div class="kanban-card">
                        <h6>Website Redesign</h6>
                        <p class="text-muted">Update company website</p>
                        <small class="text-muted">Due: Jan 25, 2024</small>
                    </div>
                    <div class="kanban-card">
                        <h6>Mobile App</h6>
                        <p class="text-muted">Develop mobile application</p>
                        <small class="text-muted">Due: Feb 15, 2024</small>
                    </div>
                </div>
                
                <div class="kanban-column">
                    <h6 class="text-warning">In Progress</h6>
                    <div class="kanban-card">
                        <h6>Database Migration</h6>
                        <p class="text-muted">Migrate to new database</p>
                        <small class="text-muted">Due: Jan 30, 2024</small>
                    </div>
                </div>
                
                <div class="kanban-column">
                    <h6 class="text-info">Review</h6>
                    <div class="kanban-card">
                        <h6>API Integration</h6>
                        <p class="text-muted">Integrate third-party APIs</p>
                        <small class="text-muted">Due: Jan 20, 2024</small>
                    </div>
                </div>
                
                <div class="kanban-column">
                    <h6 class="text-success">Done</h6>
                    <div class="kanban-card">
                        <h6>User Authentication</h6>
                        <p class="text-muted">Implement user login system</p>
                        <small class="text-muted">Completed: Jan 10, 2024</small>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
}

function loadHRPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">HR Management</h2>
                <button class="btn btn-primary btn-sm" onclick="showAddEmployeeModal()">
                    <i class="fas fa-plus"></i> Add Employee
                </button>
            </div>
            
            <!-- HR Summary -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>156</h3>
                        <p>Total Employees</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 5 new this month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-user-check"></i>
                        </div>
                        <h3>142</h3>
                        <p>Active Employees</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 98% attendance
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-calendar-times"></i>
                        </div>
                        <h3>8</h3>
                        <p>On Leave</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-up"></i> 2 new today
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-building"></i>
                        </div>
                        <h3>12</h3>
                        <p>Departments</p>
                        <small class="text-info">
                            <i class="fas fa-arrow-up"></i> 1 new department
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Employee Table -->
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EMP001</td>
                                <td>John Doe</td>
                                <td>IT</td>
                                <td>Developer</td>
                                <td>john.doe@company.com</td>
                                <td>+1-555-0123</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-primary" onclick="viewEmployee(1)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-outline-warning" onclick="editEmployee(1)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-outline-info" onclick="employeeAttendance(1)">
                                            <i class="fas fa-calendar"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
}

// Reports Pages
function loadSalesReportsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Sales Reports</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="exportSalesReport()">
                        <i class="fas fa-download"></i> Export
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="generateSalesReport()">
                        <i class="fas fa-chart-bar"></i> Generate Report
                    </button>
                </div>
            </div>
            
            <!-- Report Filters -->
            <div class="row mb-4">
                <div class="col-md-3">
                    <label class="form-label">Date Range</label>
                    <select class="form-select">
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month" selected>This Month</option>
                        <option value="quarter">This Quarter</option>
                        <option value="year">This Year</option>
                        <option value="custom">Custom Range</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Territory</label>
                    <select class="form-select">
                        <option value="">All Territories</option>
                        <option value="na">North America</option>
                        <option value="eu">Europe</option>
                        <option value="asia">Asia</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Product Category</label>
                    <select class="form-select">
                        <option value="">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="books">Books</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">&nbsp;</label>
                    <button class="btn btn-primary d-block w-100" onclick="applyFilters()">
                        <i class="fas fa-filter"></i> Apply Filters
                    </button>
                </div>
            </div>
            
            <!-- Sales Report Chart -->
            <div class="row mb-4">
                <div class="col-12">
                    <div class="chart-container">
                        <h5>Sales Performance</h5>
                        <canvas id="salesReportChart" height="100"></canvas>
                    </div>
                </div>
            </div>
            
            <!-- Report Summary -->
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <h4 class="text-primary">$125,678</h4>
                        <p>Total Sales</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <h4 class="text-success">1,234</h4>
                        <p>Total Orders</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <h4 class="text-warning">$102</h4>
                        <p>Average Order</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="dashboard-card text-center">
                        <h4 class="text-info">15.2%</h4>
                        <p>Growth Rate</p>
                    </div>
                </div>
            </div>
            
            <!-- Detailed Report Table -->
            <div class="table-container">
                <h5>Detailed Sales Report</h5>
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-01-15</td>
                                <td>ORD001</td>
                                <td>John Doe</td>
                                <td>Laptop Pro</td>
                                <td>1</td>
                                <td>$1,299</td>
                                <td><span class="badge badge-success">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
    
    // Initialize sales report chart
    setTimeout(function() {
        initializeSalesReportChart();
    }, 100);
}

function loadFinancialReportsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">Financial Reports</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="exportFinancialReport()">
                        <i class="fas fa-download"></i> Export
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="generateFinancialReport()">
                        <i class="fas fa-chart-line"></i> Generate Report
                    </button>
                </div>
            </div>
            
            <!-- Financial Summary -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-arrow-up"></i>
                        </div>
                        <h3>$125,678</h3>
                        <p>Total Revenue</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 15% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon danger">
                            <i class="fas fa-arrow-down"></i>
                        </div>
                        <h3>$45,234</h3>
                        <p>Total Expenses</p>
                        <small class="text-danger">
                            <i class="fas fa-arrow-up"></i> 8% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <h3>$80,444</h3>
                        <p>Net Profit</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 20% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-percentage"></i>
                        </div>
                        <h3>64.1%</h3>
                        <p>Profit Margin</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 3% from last month
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Financial Charts -->
            <div class="row mb-4">
                <div class="col-xl-6 mb-4">
                    <div class="chart-container">
                        <h5>Revenue vs Expenses</h5>
                        <canvas id="revenueExpensesChart" height="200"></canvas>
                    </div>
                </div>
                
                <div class="col-xl-6 mb-4">
                    <div class="chart-container">
                        <h5>Profit Trend</h5>
                        <canvas id="profitTrendChart" height="200"></canvas>
                    </div>
                </div>
            </div>
            
            <!-- Financial Table -->
            <div class="table-container">
                <h5>Financial Summary</h5>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Revenue</th>
                                <th>Expenses</th>
                                <th>Profit</th>
                                <th>Margin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>January 2024</td>
                                <td>$125,678</td>
                                <td>$45,234</td>
                                <td>$80,444</td>
                                <td>64.1%</td>
                            </tr>
                            <tr>
                                <td>December 2023</td>
                                <td>$109,234</td>
                                <td>$41,890</td>
                                <td>$67,344</td>
                                <td>61.6%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    
    // Initialize financial charts
    setTimeout(function() {
        initializeRevenueExpensesChart();
        initializeProfitTrendChart();
    }, 100);
}

function loadUserReportsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">User Reports</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="exportUserReport()">
                        <i class="fas fa-download"></i> Export
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="generateUserReport()">
                        <i class="fas fa-users"></i> Generate Report
                    </button>
                </div>
            </div>
            
            <!-- User Statistics -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon primary">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>1,234</h3>
                        <p>Total Users</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 12% from last month
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon success">
                            <i class="fas fa-user-check"></i>
                        </div>
                        <h3>1,156</h3>
                        <p>Active Users</p>
                        <small class="text-success">
                            <i class="fas fa-arrow-up"></i> 94% active rate
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon warning">
                            <i class="fas fa-user-clock"></i>
                        </div>
                        <h3>78</h3>
                        <p>Inactive Users</p>
                        <small class="text-warning">
                            <i class="fas fa-arrow-up"></i> 6% inactive rate
                        </small>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="dashboard-card">
                        <div class="card-icon info">
                            <i class="fas fa-user-plus"></i>
                        </div>
                        <h3>45</h3>
                        <p>New This Month</p>
                        <small class="text-info">
                            <i class="fas fa-arrow-up"></i> 15% growth
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- User Activity Chart -->
            <div class="row mb-4">
                <div class="col-12">
                    <div class="chart-container">
                        <h5>User Activity Over Time</h5>
                        <canvas id="userActivityChart" height="100"></canvas>
                    </div>
                </div>
            </div>
            
            <!-- User Report Table -->
            <div class="table-container">
                <h5>User Activity Report</h5>
                <div class="table-responsive">
                    <table class="table table-hover data-table">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Last Login</th>
                                <th>Login Count</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>USR001</td>
                                <td>John Doe</td>
                                <td>john.doe@email.com</td>
                                <td>Admin</td>
                                <td>2024-01-15 10:30</td>
                                <td>156</td>
                                <td><span class="badge badge-success">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    initializeDataTables();
    
    // Initialize user activity chart
    setTimeout(function() {
        initializeUserActivityChart();
    }, 100);
}

// Chart initialization functions
function initializeSalesTrendChart() {
    const ctx = document.getElementById('salesTrendChart').getContext('2d');
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

function initializeSalesReportChart() {
    const ctx = document.getElementById('salesReportChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sales',
                data: [25000, 30000, 28000, 32000],
                backgroundColor: '#667eea'
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

function initializeRevenueExpensesChart() {
    const ctx = document.getElementById('revenueExpensesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [100000, 120000, 110000, 130000, 125000, 140000],
                backgroundColor: '#28a745'
            }, {
                label: 'Expenses',
                data: [40000, 45000, 42000, 48000, 46000, 50000],
                backgroundColor: '#dc3545'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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

function initializeProfitTrendChart() {
    const ctx = document.getElementById('profitTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Profit',
                data: [60000, 75000, 68000, 82000, 79000, 90000],
                borderColor: '#17a2b8',
                backgroundColor: 'rgba(23, 162, 184, 0.1)',
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

function initializeUserActivityChart() {
    const ctx = document.getElementById('userActivityChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Active Users',
                data: [800, 950, 900, 1100, 1050, 1200],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'New Users',
                data: [50, 75, 60, 90, 80, 100],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Placeholder functions for various actions
function showAddCategoryModal() { toastr.info('Add Category modal would be implemented here'); }
function editCategory(id) { toastr.info('Edit Category ' + id + ' functionality would be implemented here'); }
function deleteCategory(id) { toastr.info('Delete Category ' + id + ' functionality would be implemented here'); }

function showAddTerritoryModal() { toastr.info('Add Territory modal would be implemented here'); }
function viewTerritory(id) { toastr.info('View Territory ' + id + ' functionality would be implemented here'); }
function editTerritory(id) { toastr.info('Edit Territory ' + id + ' functionality would be implemented here'); }

function showAddStoreModal() { toastr.info('Add Store modal would be implemented here'); }
function viewStore(id) { toastr.info('View Store ' + id + ' functionality would be implemented here'); }
function editStore(id) { toastr.info('Edit Store ' + id + ' functionality would be implemented here'); }
function deleteStore(id) { toastr.info('Delete Store ' + id + ' functionality would be implemented here'); }

function showAddSaleModal() { toastr.info('Add Sale modal would be implemented here'); }
function viewSale(id) { toastr.info('View Sale ' + id + ' functionality would be implemented here'); }
function editSale(id) { toastr.info('Edit Sale ' + id + ' functionality would be implemented here'); }

function showAddProductModal() { toastr.info('Add Product modal would be implemented here'); }
function viewProduct(id) { toastr.info('View Product ' + id + ' functionality would be implemented here'); }
function editProduct(id) { toastr.info('Edit Product ' + id + ' functionality would be implemented here'); }
function adjustStock(id) { toastr.info('Adjust Stock for Product ' + id + ' functionality would be implemented here'); }

function showAddCustomerModal() { toastr.info('Add Customer modal would be implemented here'); }
function viewCustomer(id) { toastr.info('View Customer ' + id + ' functionality would be implemented here'); }
function editCustomer(id) { toastr.info('Edit Customer ' + id + ' functionality would be implemented here'); }
function customerHistory(id) { toastr.info('Customer History for ' + id + ' functionality would be implemented here'); }

function showAddProjectModal() { toastr.info('Add Project modal would be implemented here'); }

function showAddEmployeeModal() { toastr.info('Add Employee modal would be implemented here'); }
function viewEmployee(id) { toastr.info('View Employee ' + id + ' functionality would be implemented here'); }
function editEmployee(id) { toastr.info('Edit Employee ' + id + ' functionality would be implemented here'); }
function employeeAttendance(id) { toastr.info('Employee Attendance for ' + id + ' functionality would be implemented here'); }

function exportSalesReport() { toastr.info('Export Sales Report functionality would be implemented here'); }
function generateSalesReport() { toastr.info('Generate Sales Report functionality would be implemented here'); }
function applyFilters() { toastr.info('Apply Filters functionality would be implemented here'); }

function exportFinancialReport() { toastr.info('Export Financial Report functionality would be implemented here'); }
function generateFinancialReport() { toastr.info('Generate Financial Report functionality would be implemented here'); }

function exportUserReport() { toastr.info('Export User Report functionality would be implemented here'); }
function generateUserReport() { toastr.info('Generate User Report functionality would be implemented here'); }


