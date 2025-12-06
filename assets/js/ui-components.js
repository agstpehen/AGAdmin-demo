// AGAdmin - UI Components JavaScript

// UI Components Page
function loadUIComponentsPage() {
    const content = `
        <div class="fade-in">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-gradient">UI Components Showcase</h2>
                <div>
                    <button class="btn btn-outline-primary btn-sm me-2" onclick="copyComponentCode()">
                        <i class="fas fa-copy"></i> Copy Code
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="exportComponents()">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>
            
            <!-- Navigation Tabs -->
            <ul class="nav nav-tabs mb-4" id="componentsTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="forms-tab" data-bs-toggle="tab" data-bs-target="#forms" type="button" role="tab">
                        <i class="fas fa-wpforms"></i> Forms
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tables-tab" data-bs-toggle="tab" data-bs-target="#tables" type="button" role="tab">
                        <i class="fas fa-table"></i> Tables
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="modals-tab" data-bs-toggle="tab" data-bs-target="#modals" type="button" role="tab">
                        <i class="fas fa-window-restore"></i> Modals
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="cards-tab" data-bs-toggle="tab" data-bs-target="#cards" type="button" role="tab">
                        <i class="fas fa-id-card"></i> Cards
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="buttons-tab" data-bs-toggle="tab" data-bs-target="#buttons" type="button" role="tab">
                        <i class="fas fa-mouse-pointer"></i> Buttons
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="alerts-tab" data-bs-toggle="tab" data-bs-target="#alerts" type="button" role="tab">
                        <i class="fas fa-exclamation-circle"></i> Alerts
                    </button>
                </li>
            </ul>
            
            <!-- Tab Content -->
            <div class="tab-content" id="componentsTabContent">
                <!-- Forms Tab -->
                <div class="tab-pane fade show active" id="forms" role="tabpanel">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-container">
                                <h5>Basic Form</h5>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-container">
                                <h5>Advanced Form</h5>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="firstName" class="form-label">First Name</label>
                                                <input type="text" class="form-control" id="firstName" placeholder="First name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="lastName" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="lastName" placeholder="Last name">
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="selectOption" class="form-label">Select Option</label>
                                        <select class="form-select" id="selectOption">
                                            <option selected>Choose...</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="textarea" class="form-label">Textarea</label>
                                        <textarea class="form-control" id="textarea" rows="3" placeholder="Enter your message"></textarea>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label for="fileInput" class="form-label">File Input</label>
                                        <input type="file" class="form-control" id="fileInput">
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label class="form-label">Radio Buttons</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="radioOption" id="radio1" value="option1">
                                            <label class="form-check-label" for="radio1">Option 1</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="radioOption" id="radio2" value="option2">
                                            <label class="form-check-label" for="radio2">Option 2</label>
                                        </div>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    <button type="button" class="btn btn-secondary">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Tables Tab -->
                <div class="tab-pane fade" id="tables" role="tabpanel">
                    <div class="table-container">
                        <h5>Basic Table</h5>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td><span class="badge badge-success">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td><span class="badge badge-warning">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>Bird</td>
                                        <td>@twitter</td>
                                        <td><span class="badge badge-danger">Inactive</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="table-container mt-4">
                        <h5>Advanced Table with Actions</h5>
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" id="selectAllTable">
                                        </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Last Login</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" class="row-checkbox"></td>
                                        <td>John Doe</td>
                                        <td>john.doe@example.com</td>
                                        <td><span class="badge badge-primary">Admin</span></td>
                                        <td>2024-01-15 10:30</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <button class="btn btn-outline-primary" title="View">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                                <button class="btn btn-outline-warning" title="Edit">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button class="btn btn-outline-danger" title="Delete">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" class="row-checkbox"></td>
                                        <td>Jane Smith</td>
                                        <td>jane.smith@example.com</td>
                                        <td><span class="badge badge-info">Manager</span></td>
                                        <td>2024-01-15 09:15</td>
                                        <td>
                                            <div class="btn-group btn-group-sm">
                                                <button class="btn btn-outline-primary" title="View">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                                <button class="btn btn-outline-warning" title="Edit">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button class="btn btn-outline-danger" title="Delete">
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
                
                <!-- Modals Tab -->
                <div class="tab-pane fade" id="modals" role="tabpanel">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-container">
                                <h5>Modal Examples</h5>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i class="fas fa-window-restore"></i> Basic Modal
                                    </button>
                                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#confirmModal">
                                        <i class="fas fa-question-circle"></i> Confirmation Modal
                                    </button>
                                    <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#formModal">
                                        <i class="fas fa-wpforms"></i> Form Modal
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-container">
                                <h5>Modal Features</h5>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success"></i> Responsive design
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success"></i> Backdrop support
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success"></i> Keyboard navigation
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success"></i> Focus management
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success"></i> Animation effects
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Cards Tab -->
                <div class="tab-pane fade" id="cards" role="tabpanel">
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="dashboard-card">
                                <div class="card-icon primary">
                                    <i class="fas fa-users"></i>
                                </div>
                                <h4>1,234</h4>
                                <p>Total Users</p>
                                <small class="text-success">
                                    <i class="fas fa-arrow-up"></i> 12% from last month
                                </small>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="dashboard-card">
                                <div class="card-icon success">
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                                <h4>$45,678</h4>
                                <p>Total Sales</p>
                                <small class="text-success">
                                    <i class="fas fa-arrow-up"></i> 8% from last month
                                </small>
                            </div>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="dashboard-card">
                                <div class="card-icon warning">
                                    <i class="fas fa-boxes"></i>
                                </div>
                                <h4>567</h4>
                                <p>Total Products</p>
                                <small class="text-warning">
                                    <i class="fas fa-arrow-down"></i> 3% from last month
                                </small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-container">
                                <h5>Card with Image</h5>
                                <div class="card">
                                    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Card image">
                                    <div class="card-body">
                                        <h5 class="card-title">Card Title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-container">
                                <h5>Card with List</h5>
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Recent Activity</h5>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">User John Doe logged in</li>
                                            <li class="list-group-item">New sale recorded</li>
                                            <li class="list-group-item">Inventory updated</li>
                                            <li class="list-group-item">Report generated</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Buttons Tab -->
                <div class="tab-pane fade" id="buttons" role="tabpanel">
                    <div class="form-container">
                        <h5>Button Variants</h5>
                        <div class="mb-4">
                            <h6>Primary Buttons</h6>
                            <div class="btn-group me-2 mb-2" role="group">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <button type="button" class="btn btn-primary btn-sm">Small</button>
                                <button type="button" class="btn btn-primary btn-lg">Large</button>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h6>Secondary Buttons</h6>
                            <div class="btn-group me-2 mb-2" role="group">
                                <button type="button" class="btn btn-secondary">Secondary</button>
                                <button type="button" class="btn btn-success">Success</button>
                                <button type="button" class="btn btn-danger">Danger</button>
                                <button type="button" class="btn btn-warning">Warning</button>
                                <button type="button" class="btn btn-info">Info</button>
                                <button type="button" class="btn btn-light">Light</button>
                                <button type="button" class="btn btn-dark">Dark</button>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h6>Outline Buttons</h6>
                            <div class="btn-group me-2 mb-2" role="group">
                                <button type="button" class="btn btn-outline-primary">Primary</button>
                                <button type="button" class="btn btn-outline-secondary">Secondary</button>
                                <button type="button" class="btn btn-outline-success">Success</button>
                                <button type="button" class="btn btn-outline-danger">Danger</button>
                                <button type="button" class="btn btn-outline-warning">Warning</button>
                                <button type="button" class="btn btn-outline-info">Info</button>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h6>Button Groups</h6>
                            <div class="btn-group me-2 mb-2" role="group">
                                <button type="button" class="btn btn-primary">Left</button>
                                <button type="button" class="btn btn-primary">Middle</button>
                                <button type="button" class="btn btn-primary">Right</button>
                            </div>
                            
                            <div class="btn-group me-2 mb-2" role="group">
                                <button type="button" class="btn btn-outline-primary">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <button type="button" class="btn btn-outline-warning">
                                    <i class="fas fa-edit"></i> Edit
                                </button>
                                <button type="button" class="btn btn-outline-danger">
                                    <i class="fas fa-trash"></i> Delete
                                </button>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h6>Button States</h6>
                            <div class="btn-group me-2 mb-2" role="group">
                                <button type="button" class="btn btn-primary" disabled>Disabled</button>
                                <button type="button" class="btn btn-primary">
                                    <span class="loading-spinner me-2"></span>Loading
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Alerts Tab -->
                <div class="tab-pane fade" id="alerts" role="tabpanel">
                    <div class="form-container">
                        <h5>Alert Variants</h5>
                        
                        <div class="alert alert-success" role="alert">
                            <i class="fas fa-check-circle"></i>
                            <strong>Success!</strong> Your operation completed successfully.
                        </div>
                        
                        <div class="alert alert-danger" role="alert">
                            <i class="fas fa-exclamation-circle"></i>
                            <strong>Error!</strong> Something went wrong. Please try again.
                        </div>
                        
                        <div class="alert alert-warning" role="alert">
                            <i class="fas fa-exclamation-triangle"></i>
                            <strong>Warning!</strong> Please check your input before proceeding.
                        </div>
                        
                        <div class="alert alert-info" role="alert">
                            <i class="fas fa-info-circle"></i>
                            <strong>Info!</strong> Here's some useful information for you.
                        </div>
                        
                        <div class="alert alert-primary" role="alert">
                            <i class="fas fa-lightbulb"></i>
                            <strong>Primary!</strong> This is a primary alert message.
                        </div>
                        
                        <div class="alert alert-secondary" role="alert">
                            <i class="fas fa-info"></i>
                            <strong>Secondary!</strong> This is a secondary alert message.
                        </div>
                        
                        <h6 class="mt-4">Dismissible Alerts</h6>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <i class="fas fa-check-circle"></i>
                            <strong>Success!</strong> This alert can be dismissed.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                        
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <i class="fas fa-exclamation-triangle"></i>
                            <strong>Warning!</strong> This alert can be dismissed.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Example Modals -->
        <div class="modal fade" id="exampleModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Example Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p>This is an example modal. You can put any content here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="confirmModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirm Action</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to perform this action?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="formModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Form Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="modalName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="modalName">
                            </div>
                            <div class="mb-3">
                                <label for="modalEmail" class="form-label">Email</label>
                                <input type="email" class="form-control" id="modalEmail">
                            </div>
                            <div class="mb-3">
                                <label for="modalMessage" class="form-label">Message</label>
                                <textarea class="form-control" id="modalMessage" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    $('#pageContent').html(content);
    
    // Initialize table functionality
    setTimeout(function() {
        initializeTableCheckboxes();
    }, 100);
}

// Initialize Table Checkboxes
function initializeTableCheckboxes() {
    $('#selectAllTable').on('change', function() {
        const isChecked = $(this).is(':checked');
        $('.row-checkbox').prop('checked', isChecked);
    });
    
    $('.row-checkbox').on('change', function() {
        const totalCheckboxes = $('.row-checkbox').length;
        const checkedCheckboxes = $('.row-checkbox:checked').length;
        
        if (checkedCheckboxes === totalCheckboxes) {
            $('#selectAllTable').prop('checked', true);
        } else {
            $('#selectAllTable').prop('checked', false);
        }
    });
}

// Copy Component Code
function copyComponentCode() {
    const activeTab = $('.nav-link.active').attr('id');
    let code = '';
    
    switch(activeTab) {
        case 'forms-tab':
            code = getFormCode();
            break;
        case 'tables-tab':
            code = getTableCode();
            break;
        case 'modals-tab':
            code = getModalCode();
            break;
        case 'cards-tab':
            code = getCardCode();
            break;
        case 'buttons-tab':
            code = getButtonCode();
            break;
        case 'alerts-tab':
            code = getAlertCode();
            break;
    }
    
    navigator.clipboard.writeText(code).then(function() {
        toastr.success('Code copied to clipboard');
    }).catch(function() {
        toastr.error('Failed to copy code');
    });
}

// Get Form Code
function getFormCode() {
    return `<!-- Basic Form -->
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check">
        <label class="form-check-label" for="check">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
}

// Get Table Code
function getTableCode() {
    return `<!-- Basic Table -->
<div class="table-responsive">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><span class="badge badge-success">Active</span></td>
            </tr>
        </tbody>
    </table>
</div>`;
}

// Get Modal Code
function getModalCode() {
    return `<!-- Basic Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal Title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>Modal content goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>`;
}

// Get Card Code
function getCardCode() {
    return `<!-- Dashboard Card -->
<div class="dashboard-card">
    <div class="card-icon primary">
        <i class="fas fa-users"></i>
    </div>
    <h4>1,234</h4>
    <p>Total Users</p>
    <small class="text-success">
        <i class="fas fa-arrow-up"></i> 12% from last month
    </small>
</div>`;
}

// Get Button Code
function getButtonCode() {
    return `<!-- Button Variants -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>`;
}

// Get Alert Code
function getAlertCode() {
    return `<!-- Alert Variants -->
<div class="alert alert-success" role="alert">
    <strong>Success!</strong> Your operation completed successfully.
</div>

<div class="alert alert-danger" role="alert">
    <strong>Error!</strong> Something went wrong.
</div>

<div class="alert alert-warning" role="alert">
    <strong>Warning!</strong> Please check your input.
</div>

<div class="alert alert-info" role="alert">
    <strong>Info!</strong> Here's some useful information.
</div>`;
}

// Export Components
function exportComponents() {
    const components = {
        forms: getFormCode(),
        tables: getTableCode(),
        modals: getModalCode(),
        cards: getCardCode(),
        buttons: getButtonCode(),
        alerts: getAlertCode()
    };
    
    const blob = new Blob([JSON.stringify(components, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ui-components.json';
    a.click();
    URL.revokeObjectURL(url);
    
    toastr.success('Components exported successfully');
}



