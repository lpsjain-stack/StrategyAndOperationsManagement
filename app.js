// Strategic & Operations Management App Logic - Refactored for Dates & Dense Dataset

// Rich Preloaded Sample Data (CTO Chief of Staff context with 7-10 dependencies per project)
const defaultProjects = [
    {
        id: "p1",
        name: "Wealth Management Integration",
        goal: "Wealth Management Expansion",
        progress: 45,
        status: "At Risk",
        cost: 120000,
        owner: "Sarah Jenkins",
        riskDesc: "KYC provider API latency spikes during peak trading hours.",
        riskImpact: "Medium",
        mitigation: "Implement server-side caching & deploy backup identity provider.",
        riskEta: "2026-07-28",
        dependencies: [
            {
                id: "d1_1",
                desc: "Securities division regulatory filing audit",
                owner: "Compliance Team",
                plannedStart: "2026-07-01",
                eta: "2026-07-15",
                actualEta: "2026-07-15",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Audited & signed off by chief officer."
            },
            {
                id: "d1_2",
                desc: "Clearing house connectivity API firewall signoff",
                owner: "SecOps",
                plannedStart: "2026-07-10",
                eta: "2026-07-22",
                actualEta: "2026-07-25",
                plannedProgress: 90,
                actualProgress: 60,
                solution: "Latency checks ongoing, port configuration delays."
            },
            {
                id: "d1_3",
                desc: "UI mockup validation for robo-advisory dashboard",
                owner: "Wealth Product",
                plannedStart: "2026-07-05",
                eta: "2026-07-20",
                actualEta: "2026-07-20",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Product manager approved layout design."
            },
            {
                id: "d1_4",
                desc: "Reconciliation pipeline API integration",
                owner: "Core Ledger",
                plannedStart: "2026-07-12",
                eta: "2026-07-28",
                actualEta: "",
                plannedProgress: 70,
                actualProgress: 40,
                solution: "Awaiting spec clarification on multi-currency schemas."
            },
            {
                id: "d1_5",
                desc: "High-throughput rate limiter deployment",
                owner: "API Gateway Team",
                plannedStart: "2026-07-15",
                eta: "2026-08-01",
                actualEta: "",
                plannedProgress: 50,
                actualProgress: 50,
                solution: "In development, Redis cluster set up."
            },
            {
                id: "d1_6",
                desc: "PostgreSQL cluster indexing optimization",
                owner: "DBA Team",
                plannedStart: "2026-07-14",
                eta: "2026-07-25",
                actualEta: "",
                plannedProgress: 80,
                actualProgress: 85,
                solution: "Ahead of schedule, testing query logs."
            },
            {
                id: "d1_7",
                desc: "Integration test suite for broker executions",
                owner: "QA Automation",
                plannedStart: "2026-07-18",
                eta: "2026-08-05",
                actualEta: "",
                plannedProgress: 20,
                actualProgress: 20,
                solution: "Test cases defined for edge-case fills."
            },
            {
                id: "d1_8",
                desc: "Securities escrow capital allocation approval",
                owner: "Finance",
                plannedStart: "2026-07-01",
                eta: "2026-07-10",
                actualEta: "2026-07-10",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Capital pool allocated and escrow setup finalized."
            }
        ]
    },
    {
        id: "p2",
        name: "Cloud Infrastructure Auto-scaling",
        goal: "Infrastructure Scaling",
        progress: 80,
        status: "On Track",
        cost: 240000,
        owner: "Devendra Kumar",
        riskDesc: "Potential cloud budget overrun due to scaling spikes.",
        riskImpact: "Low",
        mitigation: "Optimize resource limits, implement budget alerts and auto-kill thresholds.",
        riskEta: "2026-08-05",
        dependencies: [
            {
                id: "d2_1",
                desc: "AWS Terraform main module refactoring",
                owner: "Infra Ops",
                plannedStart: "2026-07-02",
                eta: "2026-07-12",
                actualEta: "2026-07-12",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Code merged into production repository."
            },
            {
                id: "d2_2",
                desc: "AWS Enterprise support contract authorization",
                owner: "Finance",
                plannedStart: "2026-07-05",
                eta: "2026-07-25",
                actualEta: "2026-07-24",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Approved by VP Finance, account upgraded."
            },
            {
                id: "d2_3",
                desc: "IAM role policy principle audit and cleanup",
                owner: "SecOps",
                plannedStart: "2026-07-10",
                eta: "2026-07-22",
                actualEta: "2026-07-24",
                plannedProgress: 95,
                actualProgress: 95,
                solution: "Minor administrative permission sets patched."
            },
            {
                id: "d2_4",
                desc: "Read-replica connection pooling adjustment",
                owner: "DBA Team",
                plannedStart: "2026-07-14",
                eta: "2026-07-28",
                actualEta: "",
                plannedProgress: 60,
                actualProgress: 70,
                solution: "Scale testing verified on PgBouncer."
            },
            {
                id: "d2_5",
                desc: "Prometheus alert rules & Grafana setup",
                owner: "SRE Team",
                plannedStart: "2026-07-15",
                eta: "2026-08-02",
                actualEta: "",
                plannedProgress: 40,
                actualProgress: 30,
                solution: "SLA tracking metrics defined in dashboards."
            },
            {
                id: "d2_6",
                desc: "Tagging compliance scripts validation",
                owner: "Billing Ops",
                plannedStart: "2026-07-18",
                eta: "2026-08-05",
                actualEta: "",
                plannedProgress: 10,
                actualProgress: 10,
                solution: "Drafting script parameters for resource scanning."
            },
            {
                id: "d2_7",
                desc: "Ingress controller scaling configurations",
                owner: "API Gateway Team",
                plannedStart: "2026-07-15",
                eta: "2026-07-30",
                actualEta: "",
                plannedProgress: 50,
                actualProgress: 50,
                solution: "Verified staging auto-scaling thresholds."
            }
        ]
    },
    {
        id: "p3",
        name: "Fintech Regulatory Compliance Audit",
        goal: "Regulatory Compliance",
        progress: 95,
        status: "On Track",
        cost: 75000,
        owner: "Priya Sharma",
        riskDesc: "New guidelines from RBI requiring additional logging.",
        riskImpact: "High",
        mitigation: "Engage external regulatory counsel and add database columns.",
        riskEta: "2026-07-22",
        dependencies: [
            {
                id: "d3_1",
                desc: "RBI guidelines verification checklist",
                owner: "Compliance Team",
                plannedStart: "2026-07-01",
                eta: "2026-07-10",
                actualEta: "2026-07-08",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "RBI compliance checklist fully verified."
            },
            {
                id: "d3_2",
                desc: "Audit response brief slide deck compilation",
                owner: "CTO Office",
                plannedStart: "2026-07-08",
                eta: "2026-07-18",
                actualEta: "2026-07-18",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Deck sent to CXO leadership team for review."
            },
            {
                id: "d3_3",
                desc: "User access control matrix validation report",
                owner: "SecOps",
                plannedStart: "2026-07-12",
                eta: "2026-07-25",
                actualEta: "",
                plannedProgress: 80,
                actualProgress: 80,
                solution: "Review of key account roles ongoing."
            },
            {
                id: "d3_4",
                desc: "System logs retention policy upgrade",
                owner: "Core Ledger",
                plannedStart: "2026-07-15",
                eta: "2026-07-28",
                actualEta: "",
                plannedProgress: 70,
                actualProgress: 80,
                solution: "Index rotation parameters adjusted."
            },
            {
                id: "d3_5",
                desc: "Offsite tape backup compliance verification",
                owner: "IT Ops",
                plannedStart: "2026-07-14",
                eta: "2026-07-24",
                actualEta: "2026-07-26",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Offsite logs trail secured and audit validated."
            },
            {
                id: "d3_6",
                desc: "Business continuity plan draft signature",
                owner: "Risk Management",
                plannedStart: "2026-07-18",
                eta: "2026-08-01",
                actualEta: "",
                plannedProgress: 20,
                actualProgress: 20,
                solution: "Undergoing legal review."
            },
            {
                id: "d3_7",
                desc: "Third-party KYC provider contract amendment",
                owner: "Legal",
                plannedStart: "2026-07-05",
                eta: "2026-07-20",
                actualEta: "2026-07-25",
                plannedProgress: 100,
                actualProgress: 85,
                solution: "Amendment executed after negotiation latency."
            }
        ]
    },
    {
        id: "p4",
        name: "NextGen App Migration",
        goal: "Major App Migration",
        progress: 15,
        status: "Delayed",
        cost: 380000,
        owner: "Vikram Malhotra",
        riskDesc: "Legacy Oracle database locks up during schema upgrades.",
        riskImpact: "High",
        mitigation: "Migrate in phases; use a blue-green deployment topology.",
        riskEta: "2026-08-12",
        dependencies: [
            {
                id: "d4_1",
                desc: "Customer PII encryption scheme verification",
                owner: "SecOps",
                plannedStart: "2026-07-01",
                eta: "2026-07-12",
                actualEta: "2026-07-12",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Keys rotation protocols signed off."
            },
            {
                id: "d4_2",
                desc: "Datacenter B express route bandwidth setup",
                owner: "Infra Ops",
                plannedStart: "2026-07-10",
                eta: "2026-07-24",
                actualEta: "2026-07-28",
                plannedProgress: 95,
                actualProgress: 60,
                solution: "Telecom provider encountered fiber-laying delays."
            },
            {
                id: "d4_3",
                desc: "Oracle schema compatibility migrations",
                owner: "DBA Team",
                plannedStart: "2026-07-12",
                eta: "2026-07-28",
                actualEta: "",
                plannedProgress: 75,
                actualProgress: 35,
                solution: "Database locks require script adjustments."
            },
            {
                id: "d4_4",
                desc: "SwiftUI migration core build",
                owner: "iOS App Team",
                plannedStart: "2026-07-05",
                eta: "2026-07-26",
                actualEta: "",
                plannedProgress: 80,
                actualProgress: 60,
                solution: "Lagging due to view-model architecture revisions."
            },
            {
                id: "d4_5",
                desc: "Jetpack Compose migration core build",
                owner: "Android App Team",
                plannedStart: "2026-07-05",
                eta: "2026-07-26",
                actualEta: "",
                plannedProgress: 80,
                actualProgress: 75,
                solution: "Aligning layout code templates with iOS UI."
            },
            {
                id: "d4_6",
                desc: "Mobile end-to-end Appium script suite",
                owner: "QA Automation",
                plannedStart: "2026-07-18",
                eta: "2026-08-08",
                actualEta: "",
                plannedProgress: 15,
                actualProgress: 15,
                solution: "Test script frameworks configured."
            },
            {
                id: "d4_7",
                desc: "OAuth2 token migration backend validation",
                owner: "API Gateway Team",
                plannedStart: "2026-07-15",
                eta: "2026-08-02",
                actualEta: "",
                plannedProgress: 40,
                actualProgress: 35,
                solution: "Refining refresh token duration configurations."
            },
            {
                id: "d4_8",
                desc: "Beta user program rollout communications",
                owner: "Marketing",
                plannedStart: "2026-07-20",
                eta: "2026-08-05",
                actualEta: "",
                plannedProgress: 0,
                actualProgress: 0,
                solution: "Pending core mobile build stability."
            },
            {
                id: "d4_9",
                desc: "Amplitude event telemetry validation",
                owner: "Analytics Team",
                plannedStart: "2026-07-15",
                eta: "2026-07-30",
                actualEta: "",
                plannedProgress: 50,
                actualProgress: 55,
                solution: "Core events mapped in analytics dashboard."
            }
        ]
    },
    {
        id: "p5",
        name: "Vendor Governance Portal",
        goal: "Operations & Governance",
        progress: 60,
        status: "On Track",
        cost: 45000,
        owner: "Anjali Mehta",
        riskDesc: "Vendor API documentation is incomplete.",
        riskImpact: "Medium",
        mitigation: "Engage vendor technical account manager directly.",
        riskEta: "2026-08-01",
        dependencies: [
            {
                id: "d5_1",
                desc: "AD FS single sign-on mapping config",
                owner: "IT Ops",
                plannedStart: "2026-07-01",
                eta: "2026-07-15",
                actualEta: "2026-07-14",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "SSO mapped and user logins validated."
            },
            {
                id: "d5_2",
                desc: "SaaS procurement cost reconciliation",
                owner: "Finance",
                plannedStart: "2026-07-05",
                eta: "2026-07-20",
                actualEta: "2026-07-20",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Payment orders released to vendor vendor partner."
            },
            {
                id: "d5_3",
                desc: "SOC2 Type II report verification check",
                owner: "Compliance Team",
                plannedStart: "2026-07-10",
                eta: "2026-07-25",
                actualEta: "2026-07-25",
                plannedProgress: 100,
                actualProgress: 100,
                solution: "Audit security reports reviewed & logged."
            },
            {
                id: "d5_4",
                desc: "External API gateway firewall rules",
                owner: "SecOps",
                plannedStart: "2026-07-14",
                eta: "2026-07-28",
                actualEta: "",
                plannedProgress: 80,
                actualProgress: 85,
                solution: "Rules pushed to staging routers."
            },
            {
                id: "d5_5",
                desc: "Master services agreement final check",
                owner: "Legal",
                plannedStart: "2026-07-12",
                eta: "2026-07-26",
                actualEta: "2026-07-28",
                plannedProgress: 100,
                actualProgress: 95,
                solution: "Counterparty delay in signature loop."
            },
            {
                id: "d5_6",
                desc: "Bulk user import script implementation",
                owner: "Vendor Product",
                plannedStart: "2026-07-18",
                eta: "2026-08-02",
                actualEta: "",
                plannedProgress: 30,
                actualProgress: 30,
                solution: "Sandbox tests running on csv imports."
            },
            {
                id: "d5_7",
                desc: "Logstash integration setup for audit trails",
                owner: "SRE Team",
                plannedStart: "2026-07-15",
                eta: "2026-07-30",
                actualEta: "",
                plannedProgress: 50,
                actualProgress: 50,
                solution: "ELK index config validated."
            }
        ]
    }
];

// Application State
let appState = {
    projects: [],
    executiveSummary: "",
    lastAutoGeneratedSummary: "",
    sortColumn: "name",
    sortDirection: "asc"
};

// Chart instances
let statusChart = null;
let costChart = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupEventListeners();
    initCharts();
    renderAll();
});

// Load state from LocalStorage or default to sample data
function loadState() {
    const savedProjects = localStorage.getItem("som_projects");
    const savedSummary = localStorage.getItem("som_summary");
    const savedAutoSummary = localStorage.getItem("som_auto_summary");

    let needsReset = false;
    if (savedProjects) {
        try {
            const parsed = JSON.parse(savedProjects);
            // Verify if it is the old schema (e.g. missing plannedStart, plannedProgress or has less than 3 dependencies per project)
            if (Array.isArray(parsed) && parsed.length > 0) {
                const firstProj = parsed[0];
                if (!firstProj.dependencies || !Array.isArray(firstProj.dependencies) || firstProj.dependencies.length < 3) {
                    needsReset = true; // Old data schema detected, clear cache to load the 7-10 dependencies default set
                } else {
                    appState.projects = parsed;
                }
            } else {
                needsReset = true;
            }
        } catch (e) {
            needsReset = true;
        }
    }

    if (!savedProjects || needsReset) {
        appState.projects = [...defaultProjects];
        localStorage.setItem("som_projects", JSON.stringify(appState.projects));
    }

    if (savedSummary !== null) {
        appState.executiveSummary = savedSummary;
    } else {
        appState.executiveSummary = generateAutomatedSummaryText();
    }

    if (savedAutoSummary !== null) {
        appState.lastAutoGeneratedSummary = savedAutoSummary;
    } else {
        appState.lastAutoGeneratedSummary = appState.executiveSummary;
    }

    document.getElementById("executiveSummaryText").value = appState.executiveSummary;
}

// Save state to LocalStorage
function saveState() {
    localStorage.setItem("som_projects", JSON.stringify(appState.projects));
    localStorage.setItem("som_summary", appState.executiveSummary);
    localStorage.setItem("som_auto_summary", appState.lastAutoGeneratedSummary);
    showAutosaveStatus("Saved");
}

function showAutosaveStatus(text) {
    const indicator = document.getElementById("autosaveIndicator");
    indicator.innerHTML = `<i class="fas fa-check-circle"></i> ${text}`;
    setTimeout(() => {
        indicator.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> Auto-saved to browser`;
    }, 2000);
}

// Dynamic Executive Summary Generator (Target Phrase Removed)
function generateAutomatedSummaryText() {
    const projects = appState.projects;
    if (projects.length === 0) {
        return "No strategic projects are currently tracked in the portfolio dashboard.";
    }

    let totalProjects = projects.length;
    let onTrackCount = 0;
    let atRiskCount = 0;
    let delayedCount = 0;
    let completedCount = 0;
    let totalProgress = 0;
    let totalCost = 0;
    
    let keyRisks = [];
    let delayedProjects = [];
    let slippingDeps = [];

    projects.forEach(p => {
        totalProgress += parseFloat(p.progress || 0);
        totalCost += parseFloat(p.cost || 0);

        if (p.status === "On Track") onTrackCount++;
        else if (p.status === "At Risk") {
            atRiskCount++;
            if (p.riskDesc) keyRisks.push(`"${p.name}" (${p.riskDesc})`);
        }
        else if (p.status === "Delayed") {
            delayedCount++;
            delayedProjects.push(p.name);
            if (p.riskDesc) keyRisks.push(`"${p.name}" (${p.riskDesc})`);
        }
        else if (p.status === "Completed") completedCount++;

        // Track lagging dependencies (by progress deviation or ETA overshoot)
        if (p.dependencies) {
            p.dependencies.forEach(d => {
                const plan = parseInt(d.plannedProgress || 0);
                const act = parseInt(d.actualProgress || 0);
                const planEnd = d.eta ? new Date(d.eta) : null;
                const actEnd = d.actualEta ? new Date(d.actualEta) : null;
                
                const progressLag = act < plan;
                const dateSlippage = (planEnd && actEnd && actEnd > planEnd);

                if (progressLag || dateSlippage) {
                    slippingDeps.push(`${d.owner} on "${p.name}"`);
                }
            });
        }
    });

    const avgProgress = Math.round(totalProgress / totalProjects);
    const formattedCost = formatCurrency(totalCost);

    // Phrase removed as requested by user (starts directly with "We are tracking...")
    let summaryText = `Currently, ${totalProjects} high-level strategic initiatives are active in the portfolio with an aggregate implementation cost of ${formattedCost}. The overall average completion stands at ${avgProgress}%. Current portfolio breakdown shows ${onTrackCount} On Track, ${completedCount} Completed, ${atRiskCount} At Risk, and ${delayedCount} Delayed.`;

    if (delayedProjects.length > 0) {
        summaryText += ` Strategic delays are impacting: ${delayedProjects.join(", ")}.`;
    }

    if (keyRisks.length > 0) {
        summaryText += ` Critical project risks identified: ${keyRisks.slice(0, 3).join("; ")}.`;
    }

    if (slippingDeps.length > 0) {
        // Dedup list
        const uniqueLaggingTeams = [...new Set(slippingDeps)];
        summaryText += ` Dependency slippage warnings flagged for: ${uniqueLaggingTeams.slice(0, 3).join(", ")}.`;
    } else {
        summaryText += ` All cross-functional milestones remain aligned.`;
    }

    return summaryText;
}

// Refresh summary area with automated draft
function autoUpdateSummaryDraft(force = false) {
    const currentText = document.getElementById("executiveSummaryText").value.trim();
    const generated = generateAutomatedSummaryText();

    if (force || currentText === "" || currentText === appState.lastAutoGeneratedSummary.trim()) {
        appState.executiveSummary = generated;
        appState.lastAutoGeneratedSummary = generated;
        document.getElementById("executiveSummaryText").value = generated;
        saveState();
        if (force) {
            showToast("Summary auto-draft updated successfully.", "success");
        }
    }
}

// Setup navigation, filters, modal forms, drag-and-drop, sorting, summary refresh
function setupEventListeners() {
    // Navigation Tabs
    const navItems = document.querySelectorAll(".nav-item[data-tab]");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const tabId = item.getAttribute("data-tab");
            
            navItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            
            document.querySelectorAll(".tab-panel").forEach(panel => {
                panel.classList.remove("active");
            });
            document.getElementById(tabId).classList.add("active");
            
            // Re-render components based on visible tab
            if (tabId === "dashboard-tab") {
                renderDashboard();
            } else if (tabId === "detailed-tab") {
                renderDetailedOverview();
            } else if (tabId === "aop-tab") {
                renderAopTab();
            } else if (tabId === "newsletter-tab") {
                renderNewsletterTab();
            }
        });
    });

    // Executive Summary manual edit triggers autosave
    const summaryText = document.getElementById("executiveSummaryText");
    let summaryTimeout;
    summaryText.addEventListener("input", (e) => {
        document.getElementById("autosaveIndicator").innerHTML = `<i class="fas fa-spinner fa-spin"></i> Saving...`;
        appState.executiveSummary = e.target.value;
        clearTimeout(summaryTimeout);
        summaryTimeout = setTimeout(saveState, 800);
    });

    // Regenerate Draft Summary Button
    document.getElementById("regenerateSummaryBtn").addEventListener("click", () => {
        if (confirm("Are you sure you want to overwrite your executive summary notes with an automated draft generated from project statuses?")) {
            autoUpdateSummaryDraft(true);
        }
    });

    // Filters for Project Management
    document.getElementById("searchProject").addEventListener("input", filterAndRenderProjects);
    document.getElementById("filterGoal").addEventListener("change", filterAndRenderProjects);
    document.getElementById("filterStatus").addEventListener("change", filterAndRenderProjects);

    // Modal Actions
    document.getElementById("openAddModalBtn")?.addEventListener("click", () => openProjectModal());
    document.getElementById("closeModalBtn").addEventListener("click", closeProjectModal);
    document.getElementById("cancelModalBtn").addEventListener("click", closeProjectModal);
    document.getElementById("projectForm").addEventListener("submit", handleFormSubmit);

    // Dynamic Dependency rows
    document.getElementById("addDepRowBtn").addEventListener("click", () => addDepRow("", "", "", "", "", 0, 0, "", true));

    // Table Header Sorting listeners
    const sortableHeaders = document.querySelectorAll("#projectsTable th.sortable");
    sortableHeaders.forEach(th => {
        th.addEventListener("click", () => {
            const column = th.getAttribute("data-column");
            toggleSort(column);
        });
    });

    // Click outside modal to close
    document.getElementById("projectModal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("projectModal")) {
            closeProjectModal();
        }
    });

    // Drag and Drop Upload Setup
    const uploadZone = document.getElementById("uploadZone");
    const fileInput = document.getElementById("fileInput");

    uploadZone.addEventListener("click", () => fileInput.click());

    uploadZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadZone.classList.add("dragover");
    });

    uploadZone.addEventListener("dragleave", () => {
        uploadZone.classList.remove("dragover");
    });

    uploadZone.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadZone.classList.remove("dragover");
        if (e.dataTransfer.files.length > 0) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            handleFileUpload(e.target.files[0]);
        }
    });

    // Backup & Template Downloads
    document.getElementById("downloadTemplateBtn").addEventListener("click", downloadCSVTemplate);
    document.getElementById("exportBackupBtn").addEventListener("click", exportBackup);
    document.getElementById("importBackupBtn").addEventListener("click", () => document.getElementById("backupFileInput").click());
    document.getElementById("backupFileInput").addEventListener("change", importBackup);

    // Reset Portfolio defaults
    document.getElementById("resetDefaultsBtn").addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your current local storage cache and reload the default 40-dependency sample dataset? All your current changes will be overwritten.")) {
            appState.projects = [...defaultProjects];
            appState.executiveSummary = generateAutomatedSummaryText();
            appState.lastAutoGeneratedSummary = appState.executiveSummary;
            document.getElementById("executiveSummaryText").value = appState.executiveSummary;
            saveState();
            renderAll();
            showToast("Sample data restored successfully.", "success");
        }
    });
}

// Sorting logic handler
function toggleSort(column) {
    if (appState.sortColumn === column) {
        appState.sortDirection = appState.sortDirection === "asc" ? "desc" : "asc";
    } else {
        appState.sortColumn = column;
        appState.sortDirection = "asc";
    }
    updateSortIcons();
    filterAndRenderProjects();
}

// Update sorting indicator chevrons
function updateSortIcons() {
    const headers = document.querySelectorAll("#projectsTable th.sortable");
    headers.forEach(th => {
        const col = th.getAttribute("data-column");
        const iconSpan = document.getElementById(`sort-icon-${col}`);
        if (!iconSpan) return;

        if (col === appState.sortColumn) {
            const iconClass = appState.sortDirection === "asc" ? "fa-chevron-up" : "fa-chevron-down";
            iconSpan.innerHTML = `<i class="fas ${iconClass}"></i>`;
            iconSpan.style.opacity = "1";
        } else {
            iconSpan.innerHTML = "";
            iconSpan.style.opacity = "0.6";
        }
    });
}

// Toast Notifications Helper
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "info-circle";
    if (type === "success") icon = "check-circle";
    if (type === "error") icon = "exclamation-triangle";

    toast.innerHTML = `
        <i class="toast-icon fas fa-${icon}"></i>
        <div class="toast-msg">${message}</div>
    `;

    container.appendChild(toast);
    
    toast.offsetHeight; // trigger reflow
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// Initialise ChartJS
function initCharts() {
    if (typeof Chart === 'undefined') {
        console.warn("Chart.js is not loaded. Graphical visualizers are disabled.");
        return;
    }
    Chart.defaults.color = '#9ca3af';
    Chart.defaults.borderColor = 'rgba(55, 65, 81, 0.4)';
    Chart.defaults.font.family = "'Inter', sans-serif";

    // Status Chart
    const ctxStatus = document.getElementById("statusChartCanvas").getContext("2d");
    statusChart = new Chart(ctxStatus, {
        type: 'doughnut',
        data: {
            labels: ['On Track', 'At Risk', 'Delayed', 'Completed'],
            datasets: [{
                data: [0, 0, 0, 0],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#3b82f6'],
                borderWidth: 1,
                borderColor: '#1f2937'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { boxWidth: 12, padding: 15 }
                }
            },
            cutout: '65%'
        }
    });

    // Cost Chart
    const ctxCost = document.getElementById("costChartCanvas").getContext("2d");
    costChart = new Chart(ctxCost, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Allocated Budget',
                    data: [],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    hoverBackgroundColor: '#6366f1',
                    borderRadius: 4,
                    borderWidth: 0
                },
                {
                    label: 'Actual Utilization',
                    data: [],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    hoverBackgroundColor: '#10b981',
                    borderRadius: 4,
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#9ca3af',
                        boxWidth: 12,
                        font: {
                            size: 11
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#9ca3af',
                        callback: function(value) {
                            return '$' + (value >= 1000 ? (value / 1000) + 'k' : value);
                        }
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: {
                        color: '#9ca3af'
                    }
                }
            }
        }
    });
}

// Render Dashboard Metrics & Charts
function renderDashboard() {
    const projects = appState.projects;
    
    // Aggregate data
    let totalProjects = projects.length;
    let onTrackCount = 0;
    let atRiskCount = 0;
    let delayedCount = 0;
    let completedCount = 0;
    let totalProgress = 0;
    let totalCost = 0;
    let activeRisks = 0;
    let pendingDeps = 0;
    let totalOverrun = 0;

    let costByGoal = {};
    let utilByGoal = {};
    let riskList = [];
    let depList = [];

    projects.forEach(p => {
        // Status counts
        if (p.status === "On Track") onTrackCount++;
        else if (p.status === "At Risk") atRiskCount++;
        else if (p.status === "Delayed") delayedCount++;
        else if (p.status === "Completed") completedCount++;

        // Aggregations
        totalProgress += parseFloat(p.progress || 0);
        totalCost += parseFloat(p.cost || 0);
        totalOverrun += calculateProjectOverrun(p);

        // Goal Cost & Utilization rollup
        const goal = p.goal || "General / Other";
        const costVal = parseFloat(p.cost || 0);
        const progressVal = parseFloat(p.progress || 0) / 100;
        const utilVal = costVal * progressVal;

        costByGoal[goal] = (costByGoal[goal] || 0) + costVal;
        utilByGoal[goal] = (utilByGoal[goal] || 0) + utilVal;

        // Risks
        if (p.riskDesc && p.riskDesc.trim() !== "") {
            activeRisks++;
            riskList.push({
                projectName: p.name,
                desc: p.riskDesc,
                impact: p.riskImpact || "Medium",
                mitigation: p.mitigation || "None listed.",
                eta: p.riskEta || ""
            });
        }

        // Multiple Dependencies
        if (p.dependencies && Array.isArray(p.dependencies)) {
            p.dependencies.forEach(d => {
                if (d.desc && d.desc.trim() !== "") {
                    pendingDeps++;
                    depList.push({
                        projectName: p.name,
                        desc: d.desc,
                        owner: d.owner || "N/A",
                        plannedStart: d.plannedStart || "",
                        eta: d.eta || "",
                        actualEta: d.actualEta || "",
                        solution: d.solution || "",
                        planned: d.plannedProgress || 0,
                        actual: d.actualProgress || 0
                    });
                }
            });
        }
    });

    const avgProgress = totalProjects > 0 ? Math.round(totalProgress / totalProjects) : 0;

    // Update KPI Card values
    document.getElementById("kpiProgress").innerText = `${avgProgress}%`;
    document.getElementById("kpiCost").innerText = formatCurrency(totalCost);
    document.getElementById("kpiRisks").innerText = activeRisks;
    document.getElementById("kpiDeps").innerText = pendingDeps;
    document.getElementById("kpiOverrun").innerText = formatCurrency(totalOverrun);

    const overrunTrend = document.getElementById("kpiOverrunTrend");
    if (totalOverrun > 0) {
        overrunTrend.className = "metric-trend trend-down";
        overrunTrend.innerHTML = `<i class="fas fa-arrow-trend-up"></i> Cost variance risk`;
    } else {
        overrunTrend.className = "metric-trend trend-up";
        overrunTrend.innerHTML = `<i class="fas fa-check"></i> On budget targets`;
    }

    // Status bars updates
    const onTrackPercent = totalProjects > 0 ? Math.round((onTrackCount / totalProjects) * 100) : 0;
    const atRiskPercent = totalProjects > 0 ? Math.round((atRiskCount / totalProjects) * 100) : 0;
    const delayedPercent = totalProjects > 0 ? Math.round((delayedCount / totalProjects) * 100) : 0;
    const completedPercent = totalProjects > 0 ? Math.round((completedCount / totalProjects) * 100) : 0;

    document.getElementById("onTrackStatusPercent").innerText = `${onTrackPercent}%`;
    document.getElementById("onTrackStatusFill").style.width = `${onTrackPercent}%`;
    
    document.getElementById("atRiskStatusPercent").innerText = `${atRiskPercent}%`;
    document.getElementById("atRiskStatusFill").style.width = `${atRiskPercent}%`;

    document.getElementById("delayedStatusPercent").innerText = `${delayedPercent}%`;
    document.getElementById("delayedStatusFill").style.width = `${delayedPercent}%`;

    document.getElementById("completedStatusPercent").innerText = `${completedPercent}%`;
    document.getElementById("completedStatusFill").style.width = `${completedPercent}%`;

    // Render Highlights: Risks with ETA
    const risksContainer = document.getElementById("dashboardRisks");
    risksContainer.innerHTML = "";
    if (riskList.length === 0) {
        risksContainer.innerHTML = `<div class="settings-info">No active strategic risks reported.</div>`;
    } else {
        const impactOrder = { "High": 3, "Medium": 2, "Low": 1 };
        riskList.sort((a, b) => impactOrder[b.impact] - impactOrder[a.impact]);

        riskList.forEach(r => {
            const riskClass = `risk-item-${r.impact.toLowerCase()}`;
            const badgeClass = r.impact === 'High' ? 'status-delayed' : (r.impact === 'Medium' ? 'status-atrisk' : 'status-ontrack');
            const etaMarkup = r.eta ? `<span style="font-size:0.75rem; color:#fca5a5; margin-left:0.5rem;"><i class="far fa-clock"></i> ETA: ${r.eta}</span>` : "";
            
            const div = document.createElement("div");
            div.className = `highlight-item ${riskClass}`;
            div.innerHTML = `
                <div class="highlight-meta">
                    <span>${r.projectName}</span>
                    <div>
                        <span class="status-badge ${badgeClass}">${r.impact} Impact</span>
                        ${etaMarkup}
                    </div>
                </div>
                <div class="highlight-title">${escapeHTML(r.desc)}</div>
                <div class="highlight-desc"><strong>Mitigation:</strong> ${escapeHTML(r.mitigation)}</div>
            `;
            risksContainer.appendChild(div);
        });
    }

    // Render Highlights: Dependencies & Solutions & ETA
    const depsContainer = document.getElementById("dashboardDeps");
    depsContainer.innerHTML = "";
    if (depList.length === 0) {
        depsContainer.innerHTML = `<div class="settings-info">No pending cross-functional dependencies reported.</div>`;
    } else {
        // Sort: Delayed and Unresolved at the top
        depList.sort((a, b) => {
            const planEndA = a.eta ? new Date(a.eta) : null;
            const actEndA = a.actualEta ? new Date(a.actualEta) : null;
            const isBehindA = (parseInt(a.actual) < parseInt(a.planned)) || (planEndA && actEndA && actEndA > planEndA);
            const isUnresolvedA = !a.solution || a.solution.trim() === "";

            const planEndB = b.eta ? new Date(b.eta) : null;
            const actEndB = b.actualEta ? new Date(b.actualEta) : null;
            const isBehindB = (parseInt(b.actual) < parseInt(b.planned)) || (planEndB && actEndB && actEndB > planEndB);
            const isUnresolvedB = !b.solution || b.solution.trim() === "";

            let scoreA = 0;
            if (isBehindA && isUnresolvedA) scoreA = 3;
            else if (isBehindA) scoreA = 2;
            else if (isUnresolvedA) scoreA = 1;

            let scoreB = 0;
            if (isBehindB && isUnresolvedB) scoreB = 3;
            else if (isBehindB) scoreB = 2;
            else if (isUnresolvedB) scoreB = 1;

            return scoreB - scoreA;
        });

        depList.forEach(d => {
            let solutionMarkup = "";
            if (d.solution && d.solution.trim() !== "") {
                solutionMarkup = `<div class="highlight-solution"><i class="fas fa-check-circle"></i> Resolved: ${escapeHTML(d.solution)}</div>`;
            }
            const etaMarkup = d.eta ? `<span style="font-size:0.75rem; color:#93c5fd;"><i class="far fa-calendar-alt"></i> ETA: ${d.eta}</span>` : "";
            
            // Check for progress lag or actual date overrun
            const planEnd = d.eta ? new Date(d.eta) : null;
            const actEnd = d.actualEta ? new Date(d.actualEta) : null;
            const isBehind = (d.actual < d.planned) || (planEnd && actEnd && actEnd > planEnd);
            
            const progressWarning = isBehind ? `<span style="font-size:0.72rem; color:var(--status-delayed); margin-left:0.5rem;"><i class="fas fa-triangle-exclamation"></i> Behind</span>` : "";
            
            const div = document.createElement("div");
            div.className = `highlight-item dep-item`;
            div.innerHTML = `
                <div class="highlight-meta">
                    <span>${escapeHTML(d.projectName)}</span>
                    <div style="display:flex; gap:0.5rem; align-items:center;">
                        <span>Owner: <strong>${escapeHTML(d.owner)}</strong></span>
                        ${etaMarkup}
                        ${progressWarning}
                    </div>
                </div>
                <div class="highlight-title">${escapeHTML(d.desc)}</div>
                ${solutionMarkup}
            `;
            depsContainer.appendChild(div);
        });
    }

    // Populate filter options dynamically
    populateGoalFilters();

    // Trigger Charts Update
    updateCharts(onTrackCount, atRiskCount, delayedCount, completedCount, costByGoal, utilByGoal);
}

// Update charts with fresh aggregated data
function updateCharts(onTrack = 0, atRisk = 0, delayed = 0, completed = 0, costByGoal = {}, utilByGoal = {}) {
    if (typeof Chart === 'undefined' || !statusChart || !costChart) return;

    // Update doughnut data
    statusChart.data.datasets[0].data = [onTrack, atRisk, delayed, completed];
    statusChart.update();

    // Prepare horizontal bar data
    const goals = Object.keys(costByGoal);
    const costs = goals.map(g => costByGoal[g] || 0);
    const utils = goals.map(g => utilByGoal[g] || 0);

    costChart.data.labels = goals;
    costChart.data.datasets[0].data = costs;
    costChart.data.datasets[1].data = utils;
    costChart.update();
}

// Populate search filter dropdowns based on existing data
function populateGoalFilters() {
    const goals = [...new Set(appState.projects.map(p => p.goal).filter(Boolean))];
    const select = document.getElementById("filterGoal");
    
    // Save current selection
    const currentVal = select.value;
    
    // Clear except first option
    select.innerHTML = `<option value="all">All Strategic Goals</option>`;
    
    goals.forEach(goal => {
        const option = document.createElement("option");
        option.value = goal;
        option.innerText = goal;
        select.appendChild(option);
    });
    
    // Restore selection
    if (goals.includes(currentVal)) {
        select.value = currentVal;
    }
}

// Render Detailed Overview Tab (Actual vs Planned progress, Planned Start, Target ETA, Actual ETA, Gantt Chart)
function renderDetailedOverview() {
    const grid = document.getElementById("detailedOverviewGrid");
    grid.innerHTML = "";

    const projects = appState.projects;

    if (projects.length === 0) {
        grid.innerHTML = `
            <div class="settings-card" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fas fa-folder-open" style="font-size: 2.5rem; margin-bottom: 0.75rem;"></i>
                <p>No project data available to show detailed breakdowns.</p>
            </div>
        `;
        return;
    }

    projects.forEach(p => {
        let statusBadgeClass = "status-ontrack";
        if (p.status === "At Risk") statusBadgeClass = "status-atrisk";
        else if (p.status === "Delayed") statusBadgeClass = "status-delayed";
        else if (p.status === "Completed") statusBadgeClass = "status-completed";

        const card = document.createElement("div");
        card.className = "detailed-card";
        card.id = `project-card-${p.id}`;
        
        let depsRowsHTML = "";
        let hasDeps = p.dependencies && p.dependencies.length > 0;

        if (!hasDeps) {
            depsRowsHTML = `
                <tr>
                    <td colspan="8" style="text-align:center; color:var(--text-muted); padding: 1.5rem 0;">
                        No external team dependencies currently logged.
                    </td>
                </tr>
            `;
        } else {
            p.dependencies.forEach(d => {
                const plan = parseInt(d.plannedProgress || 0);
                const act = parseInt(d.actualProgress || 0);
                
                const planEnd = d.eta ? new Date(d.eta) : null;
                const actEnd = d.actualEta ? new Date(d.actualEta) : null;
                const isProgressBehind = act < plan;
                const isDateBehind = (planEnd && actEnd && actEnd > planEnd);
                
                const isBehind = isProgressBehind || isDateBehind;
                const varianceClass = isBehind ? "variance-behind" : "variance-ontrack";
                const varianceText = isBehind ? `<i class="fas fa-warning"></i> Behind Schedule` : `<i class="fas fa-check"></i> On Track`;
                
                const planColor = "var(--primary)";
                const actColor = isBehind ? "var(--status-delayed)" : "var(--status-ontrack)";

                depsRowsHTML += `
                    <tr>
                        <td><span class="dep-team-badge">${escapeHTML(d.owner)}</span></td>
                        <td><strong>${escapeHTML(d.desc)}</strong></td>
                        <td style="white-space:nowrap;"><i class="far fa-calendar"></i> ${d.plannedStart || "N/A"}</td>
                        <td style="white-space:nowrap;"><i class="far fa-calendar-check"></i> ${d.eta || "N/A"}</td>
                        <td style="white-space:nowrap; color: ${isDateBehind ? 'var(--status-delayed)' : 'inherit'};">
                            <i class="far fa-calendar-times"></i> ${d.actualEta || "N/A"}
                        </td>
                        <td>
                            <div class="progress-cell-container">
                                <div>
                                    <div class="progress-lbl-row">
                                        <span>Planned:</span>
                                        <strong>${plan}%</strong>
                                    </div>
                                    <div style="height: 5px; background: var(--border-color); border-radius: 2px; overflow:hidden;">
                                        <div style="width: ${plan}%; background: ${planColor}; height:100%;"></div>
                                    </div>
                                </div>
                                <div style="margin-top: 0.25rem;">
                                    <div class="progress-lbl-row">
                                        <span>Actual:</span>
                                        <strong style="color:${actColor}">${act}%</strong>
                                    </div>
                                    <div style="height: 5px; background: var(--border-color); border-radius: 2px; overflow:hidden;">
                                        <div style="width: ${act}%; background: ${actColor}; height:100%;"></div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td><span class="variance-indicator ${varianceClass}">${varianceText}</span></td>
                        <td><span class="text-secondary" style="font-size:0.8rem;">${escapeHTML(d.solution) || "None listed."}</span></td>
                    </tr>
                `;
            });
        }

        // Generate Gantt Timeline HTML
        let ganttHTML = "";
        if (hasDeps) {
            // Find global boundary times
            let minDateVal = null;
            let maxDateVal = null;

            p.dependencies.forEach(d => {
                const s = d.plannedStart ? new Date(d.plannedStart).getTime() : null;
                const e = d.eta ? new Date(d.eta).getTime() : null;
                const ae = d.actualEta ? new Date(d.actualEta).getTime() : null;
                const maxE = Math.max(e || 0, ae || 0);

                if (s) {
                    if (minDateVal === null || s < minDateVal) minDateVal = s;
                }
                if (maxE > 0) {
                    if (maxDateVal === null || maxE > maxDateVal) maxDateVal = maxE;
                }
            });

            // Set reasonable defaults if missing
            if (!minDateVal) minDateVal = Date.now();
            if (!maxDateVal) maxDateVal = minDateVal + 30 * 24 * 60 * 60 * 1000;

            // Add padding margins (3 days)
            minDateVal -= 3 * 24 * 60 * 60 * 1000;
            maxDateVal += 3 * 24 * 60 * 60 * 1000;

            const timeSpan = maxDateVal - minDateVal;

            // X-axis Date Markers
            const gridDates = [];
            for (let i = 0; i <= 4; i++) {
                const timePoint = minDateVal + (timeSpan * i / 4);
                const d = new Date(timePoint);
                gridDates.push(d.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
            }

            let ganttRowsHTML = "";
            p.dependencies.forEach(d => {
                const s = d.plannedStart ? new Date(d.plannedStart).getTime() : minDateVal;
                const e = d.eta ? new Date(d.eta).getTime() : maxDateVal;
                const ae = d.actualEta ? new Date(d.actualEta).getTime() : e;

                const leftPercent = Math.max(0, Math.min(95, ((s - minDateVal) / timeSpan) * 100));
                const widthPercent = Math.max(2, Math.min(100 - leftPercent, ((e - s) / timeSpan) * 100));
                
                const isDateBehind = ae > e;
                const isProgressBehind = parseInt(d.actualProgress || 0) < parseInt(d.plannedProgress || 0);
                const isBehind = isDateBehind || isProgressBehind;
                const progressColor = isBehind ? "var(--status-delayed)" : "var(--status-ontrack)";

                // Overshoot calculation if actual end date exceeds target ETA
                const overshootWidth = isDateBehind ? Math.max(1, ((ae - e) / timeSpan) * 100) : 0;

                ganttRowsHTML += `
                    <div class="gantt-row">
                        <!-- Rich Tooltip Content -->
                        <div class="gantt-tooltip-content">
                            <div style="font-weight:700; color:var(--primary); border-bottom:1px solid var(--border-color); padding-bottom:0.25rem; font-size:0.8rem; display:flex; justify-content:space-between; align-items:center;">
                                <span>${escapeHTML(d.owner)}</span>
                                <span class="status-badge ${isBehind ? 'status-delayed' : 'status-ontrack'}" style="font-size:0.65rem; padding:0.1rem 0.4rem; letter-spacing:0.25px;">
                                    ${isBehind ? 'Behind' : 'On Track'}
                                </span>
                            </div>
                            <div style="font-size:0.75rem; line-height:1.3; margin-top:0.25rem;">
                                <strong>Deliverable:</strong> ${escapeHTML(d.desc)}
                            </div>
                            <div style="font-size:0.75rem; display:flex; justify-content:space-between; margin-top:0.25rem; color:var(--text-secondary);">
                                <span>Start: ${d.plannedStart || "N/A"}</span>
                                <span>Target: ${d.eta || "N/A"}</span>
                            </div>
                            ${d.actualEta ? `<div style="font-size:0.75rem; color:${isDateBehind ? 'var(--status-delayed)' : 'inherit'};"><strong>Actual ETA:</strong> ${d.actualEta}</div>` : ""}
                            <div style="font-size:0.75rem; display:flex; justify-content:space-between; margin-top:0.25rem; color:var(--text-secondary);">
                                <span>Planned Progress: ${d.plannedProgress || 0}%</span>
                                <span>Actual Progress: ${d.actualProgress || 0}%</span>
                            </div>
                            
                            <!-- Delay Reason / Solution Status -->
                            <div style="border-top:1px dashed var(--border-color); padding-top:0.4rem; margin-top:0.4rem;">
                                <strong style="color:var(--text-secondary); font-size:0.7rem; text-transform:uppercase; display:block;">Delay Reason / Solution Status</strong>
                                <p style="font-size:0.75rem; margin:0.15rem 0 0 0; color:var(--text-primary); line-height:1.3;">
                                    ${escapeHTML(d.solution) || "No delays or status updates logged."}
                                </p>
                            </div>

                            <!-- Overall Project Risk context -->
                            ${p.riskDesc ? `
                                <div style="border-top:1px dashed var(--border-color); padding-top:0.4rem; margin-top:0.4rem;">
                                    <strong style="color:var(--status-delayed); font-size:0.7rem; text-transform:uppercase; display:block;"><i class="fas fa-triangle-exclamation"></i> Project Risk Context</strong>
                                    <p style="font-size:0.75rem; margin:0.15rem 0 0 0; color:var(--text-secondary); font-style:italic; line-height:1.3;">
                                        "${escapeHTML(p.riskDesc)}"
                                    </p>
                                    <p style="font-size:0.7rem; margin:0.15rem 0 0 0; color:var(--text-muted); line-height:1.2;">
                                        <strong>Mitigation:</strong> ${escapeHTML(p.mitigation)}
                                    </p>
                                </div>
                            ` : ""}
                        </div>

                        <div class="gantt-label-col">
                            <div class="gantt-task-info">
                                <strong>${escapeHTML(d.desc)}</strong>
                                <span class="dep-team-badge" style="width:fit-content;">${escapeHTML(d.owner)}</span>
                            </div>
                        </div>
                        <div class="gantt-track-col">
                            <!-- Background Grid Guidelines -->
                            <div class="gantt-grid-line" style="left: 0%;"></div>
                            <div class="gantt-grid-line" style="left: 25%;"></div>
                            <div class="gantt-grid-line" style="left: 50%;"></div>
                            <div class="gantt-grid-line" style="left: 75%;"></div>
                            <div class="gantt-grid-line" style="left: 100%;"></div>

                            <!-- Gantt Timeline Bars -->
                            <div class="gantt-bar-container">
                                <!-- Planned Bar -->
                                <div class="gantt-bar-planned" style="left: ${leftPercent}%; width: ${widthPercent}%;">
                                    <div class="gantt-bar-progress" style="width: ${d.actualProgress}%; background-color: ${progressColor};"></div>
                                </div>
                                <!-- Overshoot Delay Bar -->
                                ${overshootWidth > 0 ? `
                                    <div class="gantt-bar-overshoot" style="left: ${leftPercent + widthPercent}%; width: ${overshootWidth}%;"></div>
                                ` : ""}
                            </div>
                        </div>
                    </div>
                `;
            });

            ganttHTML = `
                <!-- Legend block -->
                <div class="gantt-legend" style="display:flex; gap:1.5rem; margin-bottom:1rem; font-size:0.75rem; color:var(--text-secondary); align-items:center; flex-wrap:wrap; background-color:rgba(255,255,255,0.02); padding:0.5rem 1rem; border-radius:0.5rem; border:1px solid var(--border-color);">
                    <span><strong>Legend:</strong></span>
                    <span style="display:flex; align-items:center; gap:0.35rem;">
                        <span style="display:inline-block; width:12px; height:12px; background-color:rgba(99, 102, 241, 0.15); border:1px solid rgba(99, 102, 241, 0.4); border-radius:3px;"></span>
                        Planned Duration
                    </span>
                    <span style="display:flex; align-items:center; gap:0.35rem;">
                        <span style="display:inline-block; width:12px; height:12px; background-color:var(--status-ontrack); border-radius:3px;"></span>
                        On Track Progress
                    </span>
                    <span style="display:flex; align-items:center; gap:0.35rem;">
                        <span style="display:inline-block; width:12px; height:12px; background-color:var(--status-delayed); border-radius:3px;"></span>
                        Behind Schedule Progress
                    </span>
                    <span style="display:flex; align-items:center; gap:0.35rem;">
                        <span style="display:inline-block; width:12px; height:12px; background:repeating-linear-gradient(45deg, rgba(239,68,68,0.25), rgba(239,68,68,0.25) 4px, rgba(239,68,68,0.1) 4px, rgba(239,68,68,0.1) 8px); border:1px dashed var(--status-delayed); border-radius:3px;"></span>
                        Schedule Overrun (Overshoot)
                    </span>
                    <span style="display:flex; align-items:center; gap:0.35rem; margin-left:auto; color:var(--primary); font-weight:600;">
                        <i class="fas fa-info-circle"></i> Hover over rows for details
                    </span>
                </div>

                <div class="gantt-wrapper">
                    <div class="gantt-chart">
                        <!-- Dates X-axis Header -->
                        <div class="gantt-header">
                            <div class="gantt-label-col"><strong>Deliverables / Milestones</strong></div>
                            <div class="gantt-track-col" style="height:18px; position:relative;">
                                ${gridDates.map((date, idx) => `
                                    <div class="gantt-header-date" style="left: ${idx * 25}%;">${date}</div>
                                `).join("")}
                            </div>
                        </div>
                        <!-- Dependency rows -->
                        ${ganttRowsHTML}
                    </div>
                </div>
            `;
        } else {
            ganttHTML = `
                <div class="settings-card" style="text-align: center; padding: 2rem; color: var(--text-muted); margin-top:1rem;">
                    <p>No deliverables logged to compile visual timeline.</p>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="detailed-card-header">
                <div class="detailed-project-title">
                    <h3>${escapeHTML(p.name)}</h3>
                    <span class="detailed-project-goal">${escapeHTML(p.goal)}</span>
                </div>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                    <div class="view-toggle-pills" style="margin-right:0.25rem;">
                        <button class="view-pill active" id="pill-table-${p.id}" onclick="toggleCardView('${p.id}', 'table')">
                            <i class="fas fa-table"></i> Table
                        </button>
                        <button class="view-pill" id="pill-timeline-${p.id}" onclick="toggleCardView('${p.id}', 'timeline')">
                            <i class="fas fa-chart-gantt"></i> Timeline
                        </button>
                    </div>
                    <button class="btn btn-secondary" onclick="openProjectModal('${p.id}')" style="font-size:0.75rem; padding:0.35rem 0.65rem; border-radius:0.35rem; display:inline-flex; align-items:center; gap:0.35rem; font-weight:600; cursor:pointer;">
                        <i class="fas fa-edit"></i> Edit Plan
                    </button>
                    <span class="status-badge ${statusBadgeClass}">${p.status}</span>
                </div>
            </div>
            
            <!-- Views Containers -->
            <div id="container-table-${p.id}">
                <table class="dep-progress-table">
                    <thead>
                        <tr>
                            <th style="width: 12%;">Dependent Team</th>
                            <th style="width: 22%;">Deliverable</th>
                            <th style="width: 10%;">Planned Start</th>
                            <th style="width: 10%;">Target ETA</th>
                            <th style="width: 10%;">Actual ETA</th>
                            <th style="width: 18%;">Progress (Act vs Plan)</th>
                            <th style="width: 10%;">Schedule</th>
                            <th style="width: 8%;">Mitigation / Solution</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${depsRowsHTML}
                    </tbody>
                </table>
            </div>
            
            <div id="container-timeline-${p.id}" style="display:none;">
                ${ganttHTML}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Global scope toggle view mode function
window.toggleCardView = function(projectId, viewMode) {
    const tableContainer = document.getElementById(`container-table-${projectId}`);
    const timelineContainer = document.getElementById(`container-timeline-${projectId}`);
    const pillTable = document.getElementById(`pill-table-${projectId}`);
    const pillTimeline = document.getElementById(`pill-timeline-${projectId}`);

    if (!tableContainer || !timelineContainer || !pillTable || !pillTimeline) return;

    if (viewMode === 'table') {
        tableContainer.style.display = 'block';
        timelineContainer.style.display = 'none';
        pillTable.classList.add('active');
        pillTimeline.classList.remove('active');
    } else {
        tableContainer.style.display = 'none';
        timelineContainer.style.display = 'block';
        pillTable.classList.remove('active');
        pillTimeline.classList.add('active');
    }
};

// Render Project Table with sorting and filtering
function filterAndRenderProjects() {
    const searchQuery = document.getElementById("searchProject").value.toLowerCase();
    const filterGoal = document.getElementById("filterGoal").value;
    const filterStatus = document.getElementById("filterStatus").value;

    let filtered = appState.projects.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || 
                              p.owner.toLowerCase().includes(searchQuery) ||
                              (p.goal && p.goal.toLowerCase().includes(searchQuery));
        const matchesGoal = filterGoal === "all" || p.goal === filterGoal;
        const matchesStatus = filterStatus === "all" || p.status === filterStatus;

        return matchesSearch && matchesGoal && matchesStatus;
    });

    // Apply Sorting
    const col = appState.sortColumn;
    const dirMultiplier = appState.sortDirection === "asc" ? 1 : -1;

    filtered.sort((a, b) => {
        let valA = a[col];
        let valB = b[col];

        if (col === "progress" || col === "cost") {
            return (parseFloat(valA || 0) - parseFloat(valB || 0)) * dirMultiplier;
        }

        valA = (valA || "").toString().toLowerCase();
        valB = (valB || "").toString().toLowerCase();

        return valA.localeCompare(valB) * dirMultiplier;
    });

    renderProjectsTable(filtered);
}

function renderProjectsTable(projectsList) {
    const tbody = document.querySelector("#projectsTable tbody");
    tbody.innerHTML = "";

    if (projectsList.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    <i class="fas fa-folder-open" style="font-size: 2rem; margin-bottom: 0.75rem; display: block;"></i>
                    No projects found matching the criteria.
                </td>
            </tr>
        `;
        return;
    }

    projectsList.forEach(p => {
        let statusClass = "status-ontrack";
        if (p.status === "At Risk") statusClass = "status-atrisk";
        else if (p.status === "Delayed") statusClass = "status-delayed";
        else if (p.status === "Completed") statusClass = "status-completed";

        let progressColor = "var(--primary)";
        if (p.status === "On Track") progressColor = "var(--status-ontrack)";
        else if (p.status === "At Risk") progressColor = "var(--status-atrisk)";
        else if (p.status === "Delayed") progressColor = "var(--status-delayed)";
        else if (p.status === "Completed") progressColor = "var(--status-completed)";

        const overrun = calculateProjectOverrun(p);
        const overrunMarkup = overrun > 0 
            ? `<div style="font-size:0.7rem; color:var(--status-delayed); font-weight:600; margin-top:0.15rem;"><i class="fas fa-arrow-trend-up"></i> +${formatCurrency(overrun)} est.</div>`
            : `<div style="font-size:0.7rem; color:var(--status-ontrack); margin-top:0.15rem;"><i class="fas fa-check"></i> On budget</div>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="td-project-name">${escapeHTML(p.name)}</td>
            <td><span class="td-goal">${escapeHTML(p.goal || "General")}</span></td>
            <td>
                <div class="progress-bar-container">
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${p.progress}%; background-color: ${progressColor};"></div>
                    </div>
                    <span class="progress-value">${p.progress}%</span>
                </div>
            </td>
            <td><span class="status-badge ${statusClass}">${p.status}</span></td>
            <td>
                <div>${formatCurrency(p.cost)}</div>
                ${overrunMarkup}
            </td>
            <td>${escapeHTML(p.owner)}</td>
            <td class="actions-cell">
                <button class="action-btn" onclick="openProjectModal('${p.id}')" title="Edit Project"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete" onclick="deleteProject('${p.id}')" title="Delete Project"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderAll() {
    renderDashboard();
    updateSortIcons();
    filterAndRenderProjects();
    renderDetailedOverview();
    renderAopTab();
    renderNewsletterTab();
}

// Modal Form handling
let currentEditingId = null;

function openProjectModal(projectId = null) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const form = document.getElementById("projectForm");
    const depsContainer = document.getElementById("modalDepsContainer");
    
    form.reset();
    depsContainer.innerHTML = "";
    
    if (projectId) {
        currentEditingId = projectId;
        modalTitle.innerText = "Edit Project";
        
        const project = appState.projects.find(p => p.id === projectId);
        if (project) {
            document.getElementById("projName").value = project.name;
            document.getElementById("projGoal").value = project.goal;
            document.getElementById("projProgress").value = project.progress;
            document.getElementById("projStatus").value = project.status;
            document.getElementById("projCost").value = project.cost;
            document.getElementById("projOwner").value = project.owner;
            document.getElementById("projRiskDesc").value = project.riskDesc || "";
            document.getElementById("projRiskImpact").value = project.riskImpact || "Low";
            document.getElementById("projMitigation").value = project.mitigation || "";
            document.getElementById("projRiskEta").value = project.riskEta || "";
            
            // Populate multiple dependencies
            if (project.dependencies && project.dependencies.length > 0) {
                project.dependencies.forEach(d => {
                    addDepRow(d.desc, d.owner, d.plannedStart, d.eta, d.actualEta, d.plannedProgress, d.actualProgress, d.solution);
                });
            } else {
                addDepRow(); // default empty row
            }
        }
    } else {
        currentEditingId = null;
        modalTitle.innerText = "Add Strategic Project";
        addDepRow(); // default empty row
    }
    
    modal.classList.add("active");
}

function closeProjectModal() {
    document.getElementById("projectModal").classList.remove("active");
    currentEditingId = null;
}

function addDepRow(desc = "", owner = "", start = "", target = "", actual_eta = "", planned = 0, actual = 0, solution = "", prepend = false) {
    const container = document.getElementById("modalDepsContainer");
    
    const row = document.createElement("div");
    row.className = "modal-dep-card";
    row.innerHTML = `
        <!-- Row 1: Deliverable, Owner, Solution -->
        <div class="modal-dep-grid-1">
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;">Deliverable Description</label>
                <input type="text" class="form-input dep-row-desc" placeholder="e.g. KYC verification API integrations" value="${escapeHTML(desc)}">
            </div>
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;">Team Owner</label>
                <input type="text" class="form-input dep-row-owner" placeholder="e.g. Compliance Team" value="${escapeHTML(owner)}">
            </div>
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;">Solution / Mitigation</label>
                <input type="text" class="form-input dep-row-solution" placeholder="e.g. Approved and logged" value="${escapeHTML(solution)}">
            </div>
        </div>
        <!-- Row 2: Milestone Dates & Progress Metrics -->
        <div class="modal-dep-grid-2">
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;"><i class="far fa-calendar"></i> Planned Start</label>
                <input type="date" class="form-input dep-row-start" value="${start}">
            </div>
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;"><i class="far fa-calendar-check"></i> Target ETA</label>
                <input type="date" class="form-input dep-row-eta" value="${target}">
            </div>
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;"><i class="far fa-calendar-times"></i> Actual ETA</label>
                <input type="date" class="form-input dep-row-actual-eta" value="${actual_eta}">
            </div>
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;">Plan %</label>
                <input type="number" class="form-input dep-row-planned" placeholder="Plan %" min="0" max="100" value="${planned}">
            </div>
            <div class="form-group">
                <label class="form-label" style="font-size:0.7rem;">Act %</label>
                <input type="number" class="form-input dep-row-actual" placeholder="Act %" min="0" max="100" value="${actual}">
            </div>
            <div class="form-group" style="align-items:center; justify-content:center;">
                <button type="button" class="btn-remove-dep" title="Remove Dependency" onclick="this.parentElement.parentElement.parentElement.remove()" style="margin-bottom:0.35rem; color:#ef4444; background:none; border:none; cursor:pointer; font-size:1.1rem;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `;
    if (prepend && container.firstChild) {
        container.insertBefore(row, container.firstChild);
    } else {
        container.appendChild(row);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Extract dynamic dependencies
    const depRows = document.querySelectorAll("#modalDepsContainer .modal-dep-card");
    const dependencies = [];
    
    depRows.forEach((row, i) => {
        const desc = row.querySelector(".dep-row-desc").value.trim();
        const owner = row.querySelector(".dep-row-owner").value.trim();
        const plannedStart = row.querySelector(".dep-row-start").value;
        const eta = row.querySelector(".dep-row-eta").value;
        const actualEta = row.querySelector(".dep-row-actual-eta").value;
        const planned = parseInt(row.querySelector(".dep-row-planned").value) || 0;
        const actual = parseInt(row.querySelector(".dep-row-actual").value) || 0;
        const solution = row.querySelector(".dep-row-solution").value.trim();
        
        if (desc || owner) {
            dependencies.push({
                id: 'd_' + Date.now() + '_' + i,
                desc,
                owner,
                plannedStart,
                eta,
                actualEta,
                plannedProgress: Math.max(0, Math.min(100, planned)),
                actualProgress: Math.max(0, Math.min(100, actual)),
                solution
            });
        }
    });
    
    const projectData = {
        name: document.getElementById("projName").value.trim(),
        goal: document.getElementById("projGoal").value.trim(),
        progress: parseInt(document.getElementById("projProgress").value) || 0,
        status: document.getElementById("projStatus").value,
        cost: parseFloat(document.getElementById("projCost").value) || 0,
        owner: document.getElementById("projOwner").value.trim(),
        riskDesc: document.getElementById("projRiskDesc").value.trim(),
        riskImpact: document.getElementById("projRiskImpact").value,
        mitigation: document.getElementById("projMitigation").value.trim(),
        riskEta: document.getElementById("projRiskEta").value,
        dependencies: dependencies
    };

    if (!projectData.name || !projectData.goal || !projectData.owner) {
        showToast("Please fill in Name, Goal, and Owner.", "error");
        return;
    }

    if (currentEditingId) {
        const idx = appState.projects.findIndex(p => p.id === currentEditingId);
        if (idx !== -1) {
            appState.projects[idx] = { ...appState.projects[idx], ...projectData };
            showToast("Project updated successfully.", "success");
        }
    } else {
        const newProj = {
            id: 'p_' + Date.now(),
            ...projectData
        };
        appState.projects.push(newProj);
        showToast("New project added successfully.", "success");
    }

    autoUpdateSummaryDraft(false);

    saveState();
    renderAll();
    closeProjectModal();
}

// Global scope window methods for inline action buttons
window.openProjectModal = openProjectModal;
window.deleteProject = function(projectId) {
    if (confirm("Are you sure you want to delete this project?")) {
        appState.projects = appState.projects.filter(p => p.id !== projectId);
        autoUpdateSummaryDraft(false);
        saveState();
        renderAll();
        showToast("Project deleted.", "info");
    }
};

// Excel & CSV File Upload Processing
function handleFileUpload(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    
    if (ext === 'csv') {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            processCSVText(text);
        };
        reader.readAsText(file);
    } else if (ext === 'xlsx' || ext === 'xls') {
        if (typeof XLSX !== 'undefined') {
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const rows = XLSX.utils.sheet_to_json(worksheet);
                processImportedRows(rows);
            };
            reader.readAsArrayBuffer(file);
        } else {
            showToast("SheetJS library not loaded. Try converting your file to CSV.", "error");
        }
    } else {
        showToast("Unsupported file format. Please upload .xlsx, .xls, or .csv", "error");
    }
}

// Custom parser for CSV texts
function processCSVText(text) {
    const lines = [];
    let row = [""];
    let inQuotes = false;

    // Robust CSV parser matching quotes and line endings
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let nextChar = text[i+1];
        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                row[row.length - 1] += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            row.push('');
        } else if ((char === '\r' || char === '\n') && !inQuotes) {
            if (char === '\r' && nextChar === '\n') { i++; }
            lines.push(row);
            row = [''];
        } else {
            row[row.length - 1] += char;
        }
    }
    if (row.length > 1 || row[0] !== '') {
        lines.push(row);
    }

    if (lines.length < 2) {
        showToast("CSV file appears to be empty.", "error");
        return;
    }

    const headers = lines[0].map(h => h.trim().toLowerCase());
    const dataRows = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.length === 1 && line[0] === '') continue; 
        
        const rowObj = {};
        headers.forEach((header, index) => {
            rowObj[header] = line[index] ? line[index].trim() : "";
        });
        dataRows.push(rowObj);
    }

    processImportedRows(dataRows);
}

// Harmonise imported rows, handling multiple progress and date fields split by semicolon
function processImportedRows(rows) {
    if (rows.length === 0) {
        showToast("No data rows found in sheet.", "error");
        return;
    }

    let importCount = 0;
    const newProjects = [];

    rows.forEach(row => {
        // Dynamic matching of keys
        const name = findValue(row, ["project name", "project", "name", "title"]);
        const goal = findValue(row, ["goal", "strategic goal", "category", "pillar"]);
        const progressStr = findValue(row, ["progress (%)", "progress", "% completed", "%", "completion"]);
        const status = findValue(row, ["status", "state"]);
        const costStr = findValue(row, ["cost", "budget", "cost implemented"]);
        const owner = findValue(row, ["owner", "project owner", "lead"]);
        
        const riskDesc = findValue(row, ["risk description", "risk", "risks"]);
        const riskImpact = findValue(row, ["risk impact", "impact", "risk level"]) || "Low";
        const mitigation = findValue(row, ["mitigation", "mitigation plan", "risk solution"]);
        const riskEta = findValue(row, ["risk eta", "eta for risk", "risk due date"]);
        
        const depDescCol = findValue(row, ["dependency description", "dependency", "dependencies"]);
        const depOwnerCol = findValue(row, ["dependency owner", "dependency lead", "dep owner"]);
        const depStartCol = findValue(row, ["dependency planned start", "dependency start", "planned start"]);
        const depEtaCol = findValue(row, ["dependency target eta", "dependency eta", "target eta", "eta"]);
        const depActEtaCol = findValue(row, ["dependency actual eta", "actual eta"]);
        const depPlanCol = findValue(row, ["dependency planned progress", "planned progress", "dependency plan"]);
        const depActCol = findValue(row, ["dependency actual progress", "actual progress", "dependency actual"]);
        const depSolutionCol = findValue(row, ["solution", "dependency solution", "resolution"]);

        if (name && owner) {
            let progress = parseInt(progressStr) || 0;
            progress = Math.max(0, Math.min(100, progress));

            // Clean cost
            let cost = 0;
            if (costStr) {
                cost = parseFloat(costStr.toString().replace(/[^0-9.-]+/g, "")) || 0;
            }

            // Normalise status
            let cleanStatus = "On Track";
            const sLower = (status || "").toLowerCase().replace(/\s/g, "");
            if (sLower.includes("risk")) cleanStatus = "At Risk";
            else if (sLower.includes("delay") || sLower.includes("block") || sLower.includes("crit")) cleanStatus = "Delayed";
            else if (sLower.includes("complet") || sLower.includes("done")) cleanStatus = "Completed";

            // Parse multiple dependencies (split on semicolons)
            const dependencies = [];
            const descs = depDescCol ? depDescCol.toString().split(";") : [];
            const owners = depOwnerCol ? depOwnerCol.toString().split(";") : [];
            const starts = depStartCol ? depStartCol.toString().split(";") : [];
            const etas = depEtaCol ? depEtaCol.toString().split(";") : [];
            const actualEtas = depActEtaCol ? depActEtaCol.toString().split(";") : [];
            const plans = depPlanCol ? depPlanCol.toString().split(";") : [];
            const acts = depActCol ? depActCol.toString().split(";") : [];
            const solutions = depSolutionCol ? depSolutionCol.toString().split(";") : [];

            const maxDeps = Math.max(descs.length, owners.length);
            for (let i = 0; i < maxDeps; i++) {
                const desc = descs[i] ? descs[i].trim() : "";
                const own = owners[i] ? owners[i].trim() : (owners[0] ? owners[0].trim() : "N/A"); 
                const start = starts[i] ? starts[i].trim() : "";
                const eta = etas[i] ? etas[i].trim() : "";
                const actEta = actualEtas[i] ? actualEtas[i].trim() : "";
                const plan = parseInt(plans[i]) || 0;
                const act = parseInt(acts[i]) || 0;
                const sol = solutions[i] ? solutions[i].trim() : "";
                
                if (desc || own) {
                    dependencies.push({
                        id: 'd_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                        desc: desc,
                        owner: own,
                        plannedStart: start,
                        eta: eta,
                        actualEta: actEta,
                        plannedProgress: Math.max(0, Math.min(100, plan)),
                        actualProgress: Math.max(0, Math.min(100, act)),
                        solution: sol
                    });
                }
            }

            newProjects.push({
                id: 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                name: name.trim(),
                goal: goal ? goal.trim() : "Strategic Priorities",
                progress: progress,
                status: cleanStatus,
                cost: cost,
                owner: owner.trim(),
                riskDesc: riskDesc ? riskDesc.trim() : "",
                riskImpact: riskImpact,
                mitigation: mitigation ? mitigation.trim() : "",
                riskEta: riskEta ? riskEta.trim() : "",
                dependencies: dependencies
            });
            importCount++;
        }
    });

    if (importCount > 0) {
        appState.projects = [...appState.projects, ...newProjects];
        autoUpdateSummaryDraft(false);
        saveState();
        renderAll();
        showToast(`Successfully imported ${importCount} projects.`, "success");
    } else {
        showToast("Import failed. Make sure headers match 'Project Name', 'Owner', 'Goal' fields.", "error");
    }
}

// Find object keys ignoring spacing, case, and dashes
function findValue(obj, keys) {
    const objKeys = Object.keys(obj);
    for (let k of keys) {
        if (obj[k] !== undefined) return obj[k];
        const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, "");
        for (let ok of objKeys) {
            const cleanOK = ok.toLowerCase().replace(/[^a-z0-9]/g, "");
            if (cleanK === cleanOK && obj[ok] !== undefined) {
                return obj[ok];
            }
        }
    }
    return null;
}

// Export and Import JSON backups
function exportBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `strategic_ops_backup_${Date.now()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast("Backup exported.", "success");
}

function importBackup(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const data = JSON.parse(evt.target.result);
            if (data.projects && Array.isArray(data.projects)) {
                appState.projects = data.projects;
                if (data.executiveSummary !== undefined) {
                    appState.executiveSummary = data.executiveSummary;
                    document.getElementById("executiveSummaryText").value = appState.executiveSummary;
                }
                if (data.lastAutoGeneratedSummary !== undefined) {
                    appState.lastAutoGeneratedSummary = data.lastAutoGeneratedSummary;
                }
                saveState();
                renderAll();
                showToast("State restored from backup successfully.", "success");
            } else {
                showToast("Invalid backup file structure.", "error");
            }
        } catch (err) {
            showToast("Failed to parse JSON file.", "error");
        }
    };
    reader.readAsText(file);
    e.target.value = ""; // reset file input
}

// Download CSV Template with planned starts, target ETAs, and actual ETAs support
function downloadCSVTemplate() {
    const headers = "Project Name,Goal,Progress (%),Status,Cost,Owner,Risk Description,Risk Impact,Mitigation,Risk ETA,Dependency Description,Dependency Owner,Dependency Planned Start,Dependency Target ETA,Dependency Actual ETA,Dependency Planned Progress,Dependency Actual Progress,Solution\r\n";
    const sample = 'Wealth Management App,Wealth Management Expansion,40,At Risk,120000,Sarah Jenkins,KYC provider API latency,Medium,Implement server caching,2026-07-28,"Regulatory approval; API integration","Compliance Team; SecOps","2026-07-01; 2026-07-10","2026-07-15; 2026-07-25","2026-07-15; 2026-07-28","100; 80","100; 40","Obtained tentative approval; Pending"\r\n';
    
    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(headers + sample);
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", csvContent);
    dlAnchor.setAttribute("download", "strategic_projects_template.csv");
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
}

// Helpers
function formatCurrency(num) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(num);
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function calculateProjectOverrun(p) {
    let overrun = 0;
    if (p.dependencies && p.dependencies.length > 0) {
        let totalPlanned = 0;
        let totalActual = 0;
        p.dependencies.forEach(d => {
            totalPlanned += parseInt(d.plannedProgress || 0);
            totalActual += parseInt(d.actualProgress || 0);
        });

        if (totalPlanned > 0 && totalActual < totalPlanned) {
            const spi = totalActual / totalPlanned;
            if (spi > 0) {
                const eac = parseFloat(p.cost || 0) / spi;
                overrun = Math.max(0, eac - parseFloat(p.cost || 0));
            } else {
                overrun = parseFloat(p.cost || 0);
            }
        }
    } else if (p.status === "Delayed") {
        overrun = parseFloat(p.cost || 0) * 0.20;
    } else if (p.status === "At Risk") {
        overrun = parseFloat(p.cost || 0) * 0.10;
    }
    return Math.round(overrun);
}

// AOP & Quarterly Planning Tab Logic & Compiler
let currentQuarterFilter = "Q1";

function renderAopTab() {
    const container = document.getElementById("aop-tab");
    if (!container) return;

    // Calculate rolled up achievement from active projects
    const totalProjects = appState.projects.length;
    let avgProgress = 0;
    if (totalProjects > 0) {
        const sumProg = appState.projects.reduce((acc, p) => acc + (parseFloat(p.progress) || 0), 0);
        avgProgress = Math.round(sumProg / totalProjects);
    }

    // AOP Financial & Operational Driver Model
    const aopData = {
        revTarget: "$15.00M",
        revActual: "$9.75M",
        revAchievedPercent: 65,
        burnRate: "$350,000 / mo",
        runway: "18 Months",
        settlementReserve: "$1.20M",
        compBudget: "$650,000",
        compSpent: "$420,000",
        compPercent: 64.6
    };

    // Quarterly OKR Execution Sprints Data
    const quarterlySprints = {
        "Q1": {
            quarterName: "Q1 Execution Sprint",
            objective: "Secure NBFC lending license & launch BNPL checkout flow to lower cart abandonment.",
            keyResults: [
                { desc: "Increase checkout conversion rate from 75% to 85%", target: "85%", actual: "82%", status: "On Track", percent: 82 },
                { desc: "Clear Phase-2 regulatory & NBFC licensing audits by end of Month 2", target: "100%", actual: "100%", status: "Completed", percent: 100 }
            ],
            productTheme: "Deploy Buy-Now-Pay-Later (BNPL) to Tier-1 merchants (Linked: Wealth Management Integration)",
            engineeringTheme: "Refactor legacy payment gateway for 99.99% high-availability uptime (Linked: Cloud Infra Auto-scaling)",
            securityTheme: "Implement real-time fraud detection using AI transaction monitoring (Linked: Fintech Regulatory Audit)",
            capacityHours: "4,500 Hrs",
            allocatedHours: "4,200 Hrs",
            techDebtPercent: "20% (Infra & Refactoring)",
            fpaCadence: "Bi-weekly FP&A Review: Revenue & Expenses matched against AOP forecasts (Status: On Track)",
            steerCoCadence: "Monthly Steer-Co: Roadmap adjustments & bandwidth reallocation (Status: Completed)"
        },
        "Q2": {
            quarterName: "Q2 Execution Sprint",
            objective: "Scale cloud infrastructure for festive trading surges & automate AML transaction monitoring.",
            keyResults: [
                { desc: "Achieve 50,000 TPS festive surge benchmark in staging tests", target: "50k TPS", actual: "45k TPS", status: "On Track", percent: 90 },
                { desc: "Automate AML transaction monitoring to cover 99% of digital flows", target: "99%", actual: "94.5%", status: "On Track", percent: 95 }
            ],
            productTheme: "Launch automated KYC instant onboarding flow with Sumsub & Onfido tooling",
            engineeringTheme: "Deploy high-throughput Redis rate limiters & PostgreSQL indexing optimization",
            securityTheme: "Conduct external penetration testing & SOC2 Type II compliance audit",
            capacityHours: "4,800 Hrs",
            allocatedHours: "4,600 Hrs",
            techDebtPercent: "22% (Performance Tuning)",
            fpaCadence: "Bi-weekly FP&A Review: Cloud infrastructure cost vs unit economics (Status: On Track)",
            steerCoCadence: "Monthly Steer-Co: Q2 Mid-quarter re-forecasting & risk mitigations (Status: On Track)"
        },
        "Q3": {
            quarterName: "Q3 Execution Sprint",
            objective: "Expand Wealth Management robo-advisory & integrate clearing house APIs.",
            keyResults: [
                { desc: "Integrate multi-currency core ledger API for broker executions", target: "100%", actual: "60%", status: "At Risk", percent: 60 },
                { desc: "Scale robo-advisory active AUM to $50M", target: "$50M", actual: "$32M", status: "On Track", percent: 64 }
            ],
            productTheme: "Deliver robo-advisory portfolio rebalancing & analytics dashboard",
            engineeringTheme: "Integrate clearing house connectivity API & Securities filing audit",
            securityTheme: "Deploy external API gateway firewall & Zero-Trust network rules",
            capacityHours: "5,000 Hrs",
            allocatedHours: "4,850 Hrs",
            techDebtPercent: "18% (API Gateway Refactoring)",
            fpaCadence: "Bi-weekly FP&A Review: Brokerage commissions & clearing fees (Status: In Review)",
            steerCoCadence: "Monthly Steer-Co: Product roadmap prioritization & vendor approvals (Status: Scheduled)"
        },
        "Q4": {
            quarterName: "Q4 Execution Sprint",
            objective: "Refactor core ledger database for multi-currency settlement & pass global SecOps audit.",
            keyResults: [
                { desc: "Achieve 99.99% annual uptime SLA across core payment gateway", target: "99.99%", actual: "99.96%", status: "On Track", percent: 96 },
                { desc: "Complete Annual ISO27001 & Regulatory Compliance filings", target: "4 Filings", actual: "3 Filings", status: "On Track", percent: 75 }
            ],
            productTheme: "Roll out multi-currency digital wallet & enterprise vendor portal",
            engineeringTheme: "Complete Logstash audit trail & multi-region database replication",
            securityTheme: "Finalize annual SecOps audit signoffs & board governance decks",
            capacityHours: "5,200 Hrs",
            allocatedHours: "4,900 Hrs",
            techDebtPercent: "20% (Core Ledger Refactoring)",
            fpaCadence: "Bi-weekly FP&A Review: Annual AOP budget variance & next year target prep",
            steerCoCadence: "Monthly Steer-Co: Annual strategy review & executive compensation alignment"
        }
    };

    const currentSprint = quarterlySprints[currentQuarterFilter] || quarterlySprints["Q1"];

    // Find linked projects from live appState.projects
    const p1 = appState.projects.find(p => p.id === "p1" || p.name.includes("Wealth")) || appState.projects[0];
    const p2 = appState.projects.find(p => p.id === "p2" || p.name.includes("Cloud")) || appState.projects[1];
    const p3 = appState.projects.find(p => p.id === "p3" || p.name.includes("Compliance")) || appState.projects[2];
    const p4 = appState.projects.find(p => p.id === "p4" || p.name.includes("Migration") || p.name.includes("NextGen")) || appState.projects[3];

    // Helper for status badge class
    function getStatusBadgeClass(st) {
        if (st === "At Risk") return "status-atrisk";
        if (st === "Delayed") return "status-delayed";
        if (st === "Completed") return "status-completed";
        return "status-ontrack";
    }

    container.innerHTML = `
        <!-- Top AOP Financial & Operational Blueprint Banner -->
        <div class="aop-banner">
            <div class="aop-banner-header">
                <div class="aop-banner-title">
                    <h2><i class="fas fa-chart-line text-primary"></i> Annual Operating Plan (AOP) Blueprint</h2>
                    <p>Fintech Strategic Financial Alignment, Cash Flow & Unit Economics (12-Month Horizon)</p>
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                    <span class="status-badge status-ontrack" style="font-size:0.75rem; padding:0.35rem 0.75rem;">
                        <i class="fas fa-check-circle"></i> AOP Active • ${avgProgress}% Project Portfolio Met
                    </span>
                </div>
            </div>
            
            <div class="aop-metrics-row">
                <div class="aop-metric-box">
                    <span class="aop-metric-lbl">Driver-Based Revenue Target</span>
                    <span class="aop-metric-val">${aopData.revTarget}</span>
                    <span class="aop-metric-sub" style="color:var(--status-ontrack);">
                        <i class="fas fa-arrow-trend-up"></i> ${aopData.revActual} Achieved (${aopData.revAchievedPercent}%)
                    </span>
                </div>
                <div class="aop-metric-box">
                    <span class="aop-metric-lbl">Capital & Cash Plan</span>
                    <span class="aop-metric-val">${aopData.burnRate}</span>
                    <span class="aop-metric-sub">
                        <i class="fas fa-shield"></i> Runway: <strong>${aopData.runway}</strong> (Reserves: ${aopData.settlementReserve})
                    </span>
                </div>
                <div class="aop-metric-box">
                    <span class="aop-metric-lbl">Regulatory & Compliance Budget</span>
                    <span class="aop-metric-val">${aopData.compBudget}</span>
                    <span class="aop-metric-sub" style="color:#93c5fd;">
                        <i class="fas fa-wallet"></i> Spent: ${aopData.compSpent} (${aopData.compPercent}%)
                    </span>
                </div>
                <div class="aop-metric-box">
                    <span class="aop-metric-lbl">AOP Target Achievement</span>
                    <span class="aop-metric-val">${avgProgress}%</span>
                    <span class="aop-metric-sub" style="color:var(--primary);">
                        <i class="fas fa-tasks"></i> Rolled up from ${totalProjects} Active Projects
                    </span>
                </div>
            </div>
        </div>

        <!-- Categorized Quantifiable KPI Clusters -->
        <h3 class="aop-section-title"><i class="fas fa-gauge-high text-primary"></i> Quantifiable Driver & Operational KPIs</h3>
        
        <div class="aop-kpi-grid">
            <!-- Revenue & Driver KPIs -->
            <div class="aop-kpi-card">
                <div class="aop-kpi-card-header">
                    <h4><i class="fas fa-sack-dollar text-primary"></i> Revenue & Unit Economics</h4>
                    <span class="status-badge status-ontrack" style="font-size:0.65rem;">Bottom-up Model</span>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">Monthly Active Users (MAUs)</span>
                        <span class="aop-kpi-values">Target: 2.50M | <strong>Actual: 1.85M</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 74%; background: var(--status-ontrack); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">Gross Transaction Volume (GTV)</span>
                        <span class="aop-kpi-values">Target: $450M | <strong>Actual: $315M</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 70%; background: var(--status-ontrack); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">Take Rate (bps) & LTV/CAC</span>
                        <span class="aop-kpi-values">Take: <strong>42 bps</strong> (45 target) | LTV/CAC: <strong>8.0x</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 93%; background: var(--primary); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">Checkout Conversion Rate</span>
                        <span class="aop-kpi-values">Original: 75% | <strong>Actual: 82%</strong> (Target 85%)</span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 82%; background: var(--status-ontrack); height:100%;"></div>
                    </div>
                </div>
            </div>

            <!-- Compliance & Regulatory KPIs -->
            <div class="aop-kpi-card">
                <div class="aop-kpi-card-header">
                    <h4><i class="fas fa-shield-halved text-primary"></i> Regulatory & Compliance KPIs</h4>
                    <span class="status-badge status-completed" style="font-size:0.65rem;">Audit & Control</span>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">NBFC Phase-2 Licensing Audit</span>
                        <span class="aop-kpi-values">Target: 100% | <strong>Cleared & Approved</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 100%; background: var(--status-completed); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">AI Real-Time Fraud Monitoring</span>
                        <span class="aop-kpi-values">Target: 99.0% tx | <strong>Actual: 94.5%</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 95%; background: var(--status-ontrack); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">KYC/AML Automated Verify Time</span>
                        <span class="aop-kpi-values">Sumsub/Onfido: <strong>42 Seconds</strong> (Target <60s)</span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 90%; background: var(--status-ontrack); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">Regulatory Audit Sign-offs</span>
                        <span class="aop-kpi-values">Filings: <strong>3 / 4 Cleared</strong> (75% Complete)</span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 75%; background: var(--status-atrisk); height:100%;"></div>
                    </div>
                </div>
            </div>

            <!-- Technical & Infrastructure KPIs -->
            <div class="aop-kpi-card">
                <div class="aop-kpi-card-header">
                    <h4><i class="fas fa-server text-primary"></i> Technical Quantifiable KPIs</h4>
                    <span class="status-badge status-ontrack" style="font-size:0.65rem;">Engineering & SLA</span>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">Core Gateway Uptime SLA</span>
                        <span class="aop-kpi-values">Target: 99.99% | <strong>Actual: 99.96%</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 96%; background: var(--status-ontrack); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">API Gateway Latency</span>
                        <span class="aop-kpi-values">Target: <45ms | <strong>Actual: 38ms</strong> (Passed)</span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 100%; background: var(--status-completed); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">Tech Debt Sprint Allocation</span>
                        <span class="aop-kpi-values">Target: 20.0% | <strong>Actual: 18.5% Bandwidth</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 92%; background: var(--primary); height:100%;"></div>
                    </div>
                </div>
                <div class="aop-kpi-item">
                    <div class="aop-kpi-item-row">
                        <span class="aop-kpi-name">High-Volume Festive Load Test</span>
                        <span class="aop-kpi-values">Target: 50,000 TPS | <strong>Actual: 45,000 TPS</strong></span>
                    </div>
                    <div style="height: 5px; background: var(--border-color); border-radius: 3px; overflow:hidden;">
                        <div style="width: 90%; background: var(--status-ontrack); height:100%;"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quarterly Execution Sprints (90-Day Execution Template) -->
        <h3 class="aop-section-title"><i class="fas fa-cubes text-primary"></i> Quarterly Planning Template (90-Day Execution Sprints)</h3>

        <div class="quarterly-sprint-container">
            <!-- Selector Pills -->
            <div class="quarterly-pill-bar">
                <button class="quarterly-pill ${currentQuarterFilter === 'Q1' ? 'active' : ''}" onclick="switchQuarter('Q1')">Q1 Execution Sprint</button>
                <button class="quarterly-pill ${currentQuarterFilter === 'Q2' ? 'active' : ''}" onclick="switchQuarter('Q2')">Q2 Execution Sprint</button>
                <button class="quarterly-pill ${currentQuarterFilter === 'Q3' ? 'active' : ''}" onclick="switchQuarter('Q3')">Q3 Execution Sprint</button>
                <button class="quarterly-pill ${currentQuarterFilter === 'Q4' ? 'active' : ''}" onclick="switchQuarter('Q4')">Q4 Execution Sprint</button>
            </div>

            <!-- Objectives & Key Results Block -->
            <div class="okr-block">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--primary); font-weight:700;">1. Quarterly Objective (OKR)</span>
                    <span class="status-badge status-ontrack" style="font-size:0.7rem;">${currentSprint.quarterName}</span>
                </div>
                <div class="okr-title">${currentSprint.objective}</div>

                <div class="okr-key-results">
                    ${currentSprint.keyResults.map(kr => `
                        <div class="kr-item">
                            <i class="fas fa-check-circle" style="color:${kr.percent === 100 ? 'var(--status-completed)' : (kr.percent < 70 ? 'var(--status-atrisk)' : 'var(--status-ontrack)')};"></i>
                            <span style="flex:1;"><strong>Key Result:</strong> ${kr.desc}</span>
                            <span style="font-weight:700; color:var(--text-primary); margin-left:1rem;">${kr.actual}</span>
                            <span class="status-badge ${kr.percent === 100 ? 'status-completed' : (kr.percent < 70 ? 'status-atrisk' : 'status-ontrack')}" style="font-size:0.65rem; padding:0.1rem 0.4rem;">
                                ${kr.status} (${kr.percent}%)
                            </span>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Core Themes & Initiatives Grid -->
            <div style="font-size:0.85rem; font-weight:700; color:var(--text-primary); margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.5px;">
                2. Core Themes & Linked Strategic Projects
            </div>
            <div class="themes-grid">
                <div class="theme-card">
                    <h5><i class="fas fa-box text-primary"></i> Product Initiative</h5>
                    <p style="font-size:0.82rem; color:var(--text-secondary); margin:0 0 0.5rem 0; line-height:1.4;">${currentSprint.productTheme}</p>
                    ${p1 ? `
                        <div style="border-top:1px solid var(--border-color); padding-top:0.5rem; margin-top:0.5rem;">
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem;">
                                <span style="font-weight:700; color:var(--text-primary);">${escapeHTML(p1.name)}</span>
                                <span class="status-badge ${getStatusBadgeClass(p1.status)}" style="font-size:0.65rem;">${p1.status} (${p1.progress}%)</span>
                            </div>
                            <button class="project-link-chip" onclick="navigateToProject('${p1.id}')">
                                <i class="fas fa-arrow-right-to-bracket"></i> View Linked Project Details
                            </button>
                        </div>
                    ` : ''}
                </div>
                <div class="theme-card">
                    <h5><i class="fas fa-code text-primary"></i> Engineering Initiative</h5>
                    <p style="font-size:0.82rem; color:var(--text-secondary); margin:0 0 0.5rem 0; line-height:1.4;">${currentSprint.engineeringTheme}</p>
                    ${p2 ? `
                        <div style="border-top:1px solid var(--border-color); padding-top:0.5rem; margin-top:0.5rem;">
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem;">
                                <span style="font-weight:700; color:var(--text-primary);">${escapeHTML(p2.name)}</span>
                                <span class="status-badge ${getStatusBadgeClass(p2.status)}" style="font-size:0.65rem;">${p2.status} (${p2.progress}%)</span>
                            </div>
                            <button class="project-link-chip" onclick="navigateToProject('${p2.id}')">
                                <i class="fas fa-arrow-right-to-bracket"></i> View Linked Project Details
                            </button>
                        </div>
                    ` : ''}
                </div>
                <div class="theme-card">
                    <h5><i class="fas fa-lock text-primary"></i> Security & Compliance</h5>
                    <p style="font-size:0.82rem; color:var(--text-secondary); margin:0 0 0.5rem 0; line-height:1.4;">${currentSprint.securityTheme}</p>
                    ${p3 ? `
                        <div style="border-top:1px solid var(--border-color); padding-top:0.5rem; margin-top:0.5rem;">
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem;">
                                <span style="font-weight:700; color:var(--text-primary);">${escapeHTML(p3.name)}</span>
                                <span class="status-badge ${getStatusBadgeClass(p3.status)}" style="font-size:0.65rem;">${p3.status} (${p3.progress}%)</span>
                            </div>
                            <button class="project-link-chip" onclick="navigateToProject('${p3.id}')">
                                <i class="fas fa-arrow-right-to-bracket"></i> View Linked Project Details
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>

            <!-- Resource Allocation & Tech Debt -->
            <div style="font-size:0.85rem; font-weight:700; color:var(--text-primary); margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.5px;">
                3. Resource Allocation & Tech Debt Capacity
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem; margin-bottom:1.5rem;">
                <div style="background-color:rgba(0,0,0,0.15); padding:0.85rem; border-radius:0.5rem; border:1px solid var(--border-color); font-size:0.8rem;">
                    <div style="color:var(--text-muted); margin-bottom:0.25rem;">Cross-Functional Engineering Hours</div>
                    <div style="font-size:1.1rem; font-weight:800; color:var(--text-primary);">${currentSprint.allocatedHours} <span style="font-size:0.8rem; font-weight:normal; color:var(--text-secondary);">/ ${currentSprint.capacityHours} Capacity</span></div>
                </div>
                <div style="background-color:rgba(0,0,0,0.15); padding:0.85rem; border-radius:0.5rem; border:1px solid var(--border-color); font-size:0.8rem;">
                    <div style="color:var(--text-muted); margin-bottom:0.25rem;">Infrastructure Scaling & Tech Debt</div>
                    <div style="font-size:1.1rem; font-weight:800; color:var(--status-ontrack);">${currentSprint.techDebtPercent}</div>
                </div>
            </div>

            <!-- Tracking & Execution Cadence -->
            <div style="font-size:0.85rem; font-weight:700; color:var(--text-primary); margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.5px;">
                4. Governance & Execution Cadence
            </div>
            <div class="cadence-bar">
                <div><strong style="color:var(--primary);"><i class="fas fa-calendar-week"></i> Bi-weekly FP&A Review:</strong> ${currentSprint.fpaCadence}</div>
                <div><strong style="color:var(--status-completed);"><i class="fas fa-users-gear"></i> Monthly Steer-Co:</strong> ${currentSprint.steerCoCadence}</div>
            </div>
        </div>
    `;
}

window.switchQuarter = function(qId) {
    currentQuarterFilter = qId;
    renderAopTab();
};

// Monthly CTO Executive Newsletter Logic & Compiler (Auto-Generated & Section Editable)
let activeSectionEditing = null;

function renderNewsletterTab() {
    const container = document.getElementById("newsletter-tab");
    if (!container) return;

    appState.customNewsletterSections = appState.customNewsletterSections || {};

    // Find live linked projects
    const p1 = appState.projects.find(p => p.id === "p1" || p.name.includes("Wealth")) || appState.projects[0];
    const p2 = appState.projects.find(p => p.id === "p2" || p.name.includes("Cloud")) || appState.projects[1];
    const p3 = appState.projects.find(p => p.id === "p3" || p.name.includes("Compliance")) || appState.projects[2];

    const custom = appState.customNewsletterSections;

    container.innerHTML = `
        <!-- Auto-Generate & Reset Toolbar -->
        <div class="newsletter-toolbar">
            <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; font-weight:700; color:var(--text-primary);">
                <i class="fas fa-wand-magic-sparkles text-primary"></i> CTO Executive Newsletter Suite
            </div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <button class="btn btn-primary" onclick="triggerAutoGenerateNewsletter()" style="font-size:0.75rem; padding:0.4rem 0.85rem;">
                    <i class="fas fa-bolt"></i> ⚡ Auto-Generate CTO Newsletter
                </button>
                <button class="btn btn-secondary" onclick="resetNewsletterToAutoDraft()" style="font-size:0.75rem; padding:0.4rem 0.85rem;">
                    <i class="fas fa-rotate-left"></i> 🔄 Reset to Live Auto-Draft
                </button>
            </div>
        </div>

        <div class="newsletter-wrapper">
            <!-- Header Bar -->
            <div class="newsletter-header">
                <div class="newsletter-title-bar">
                    <h2><i class="fas fa-newspaper text-primary"></i> 📈 Angel One Tech Pulse | Monthly Executive Update</h2>
                    <span class="status-badge status-completed" style="font-size:0.75rem; padding:0.35rem 0.75rem;">
                        <i class="fas fa-paper-plane"></i> Published & Distributed
                    </span>
                </div>
                
                <div class="newsletter-meta-grid">
                    <div class="newsletter-meta-item">
                        <strong>To:</strong>
                        <span>Chief Technology Officer</span>
                    </div>
                    <div class="newsletter-meta-item">
                        <strong>From:</strong>
                        <span>Engineering Excellence & Architecture Group</span>
                    </div>
                    <div class="newsletter-meta-item">
                        <strong>Reporting Period:</strong>
                        <span>June 2026</span>
                    </div>
                    <div class="newsletter-meta-item">
                        <strong>Governance Status:</strong>
                        <span style="color:var(--status-ontrack);"><i class="fas fa-circle-check"></i> Executive Sign-off</span>
                    </div>
                </div>
            </div>

            <!-- Section 1: High-Frequency Trading (HFT) & Platform Performance -->
            <div class="newsletter-section">
                <div class="newsletter-sec-header">
                    <h3 class="newsletter-sec-title" style="margin:0;"><i class="fas fa-bolt text-primary"></i> 1. High-Frequency Trading (HFT) & Platform Performance</h3>
                    <button class="btn btn-secondary" onclick="editNewsletterSection('sec1')" style="font-size:0.7rem; padding:0.25rem 0.6rem;">
                        <i class="fas fa-pen-to-square"></i> ✏️ Edit Section
                    </button>
                </div>

                ${activeSectionEditing === 'sec1' ? `
                    <div class="newsletter-edit-box">
                        <div style="font-size:0.75rem; font-weight:700; color:var(--primary); margin-bottom:0.75rem;">
                            <i class="fas fa-table"></i> Edit Section 1 Metrics & Text Bullets:
                        </div>

                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-bottom:1rem;">
                            <div>
                                <label class="form-label" style="font-size:0.7rem;">Peak Orders Per Second (OPS)</label>
                                <input type="text" id="edit_sec1_ops" class="form-input" value="${escapeHTML(custom.sec1_ops || '12,500')}">
                            </div>
                            <div>
                                <label class="form-label" style="font-size:0.7rem;">Order Execution Latency (P99)</label>
                                <input type="text" id="edit_sec1_latency" class="form-input" value="${escapeHTML(custom.sec1_latency || '11.2ms')}">
                            </div>
                            <div>
                                <label class="form-label" style="font-size:0.7rem;">API Gateway Availability</label>
                                <input type="text" id="edit_sec1_availability" class="form-input" value="${escapeHTML(custom.sec1_availability || '99.992%')}">
                            </div>
                            <div>
                                <label class="form-label" style="font-size:0.7rem;">SmartAPI Error Rate</label>
                                <input type="text" id="edit_sec1_errorRate" class="form-input" value="${escapeHTML(custom.sec1_errorRate || '0.021%')}">
                            </div>
                        </div>

                        <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem;">Section Bullet Points:</div>
                        <textarea id="edit_sec1" class="newsletter-textarea">${escapeHTML(custom.sec1 || "Peak Load Handling: Handled a record 12,500 OPS during the post-budget market opening on June 15. The core order management system (OMS) processed all orders smoothly without any queue backlog.\nLatency Optimization: Optimized our Redis caching layers, which cut P99 order placement latency by 1.8ms across all mobile and web platforms.")}</textarea>
                        
                        <div style="display:flex; gap:0.5rem; margin-top:0.75rem; justify-content:flex-end;">
                            <button class="btn btn-primary" onclick="saveNewsletterSection('sec1')" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-floppy-disk"></i> 💾 Save Section</button>
                            <button class="btn btn-secondary" onclick="cancelEditNewsletterSection()" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-xmark"></i> ✖ Cancel</button>
                        </div>
                    </div>
                ` : `
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin:0 0 0.75rem 0; line-height:1.5;">
                        Our primary focus remains keeping order execution latency low and ensuring system stability during market opens and high-volatility events.
                    </p>

                    <table class="hft-table">
                        <thead>
                            <tr>
                                <th>Metric</th>
                                <th>Target</th>
                                <th>June Actual</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Peak Orders Per Second (OPS)</strong></td>
                                <td>—</td>
                                <td><strong style="color:var(--text-primary);">${escapeHTML(custom.sec1_ops || '12,500')}</strong></td>
                                <td><span class="status-badge status-completed" style="font-size:0.7rem;">🚀 Record High</span></td>
                            </tr>
                            <tr>
                                <td><strong>Order Execution Latency (P99)</strong></td>
                                <td>&lt; 15ms</td>
                                <td><strong style="color:var(--status-ontrack);">${escapeHTML(custom.sec1_latency || '11.2ms')}</strong></td>
                                <td><span class="status-badge status-ontrack" style="font-size:0.7rem;">🟢 Healthy</span></td>
                            </tr>
                            <tr>
                                <td><strong>API Gateway Availability</strong></td>
                                <td>99.99%</td>
                                <td><strong style="color:var(--status-ontrack);">${escapeHTML(custom.sec1_availability || '99.992%')}</strong></td>
                                <td><span class="status-badge status-ontrack" style="font-size:0.7rem;">🟢 Healthy</span></td>
                            </tr>
                            <tr>
                                <td><strong>SmartAPI Error Rate</strong></td>
                                <td>&lt; 0.05%</td>
                                <td><strong style="color:var(--status-ontrack);">${escapeHTML(custom.sec1_errorRate || '0.021%')}</strong></td>
                                <td><span class="status-badge status-ontrack" style="font-size:0.7rem;">🟢 Healthy</span></td>
                            </tr>
                        </tbody>
                    </table>

                    <ul class="newsletter-bullets">
                        ${custom.sec1 ? custom.sec1.split('\n').map(line => `<li>${escapeHTML(line)}</li>`).join('') : `
                            <li><strong>Peak Load Handling:</strong> Handled a record 12,500 OPS during the post-budget market opening on June 15. The core order management system (OMS) processed all orders smoothly without any queue backlog.</li>
                            <li><strong>Latency Optimization:</strong> Optimized our Redis caching layers, which cut P99 order placement latency by 1.8ms across all mobile and web platforms.</li>
                        `}
                    </ul>
                `}

                ${p2 ? `
                    <div style="margin-top:0.75rem;">
                        <button class="project-link-chip" onclick="navigateToProject('${p2.id}')">
                            <i class="fas fa-link"></i> Live Project Driver: ${escapeHTML(p2.name)} (${p2.progress}% Complete • ${p2.status})
                        </button>
                    </div>
                ` : ''}
            </div>

            <!-- Section 2: Infrastructure Scale & Cloud Cost Optimization -->
            <div class="newsletter-section">
                <div class="newsletter-sec-header">
                    <h3 class="newsletter-sec-title" style="margin:0;"><i class="fas fa-server text-primary"></i> 2. Infrastructure Scale & Cloud Cost Optimization</h3>
                    <button class="btn btn-secondary" onclick="editNewsletterSection('sec2')" style="font-size:0.7rem; padding:0.25rem 0.6rem;">
                        <i class="fas fa-pen-to-square"></i> ✏️ Edit Section
                    </button>
                </div>

                ${activeSectionEditing === 'sec2' ? `
                    <div class="newsletter-edit-box">
                        <div style="font-size:0.75rem; font-weight:700; color:var(--primary); margin-bottom:0.35rem;">Editing Section 2 Content:</div>
                        <textarea id="edit_sec2" class="newsletter-textarea">${escapeHTML(custom.sec2 || "Database Migration: Successfully shifted 40% of historical ledger data to offline cold storage, cutting primary DB costs by 14%.\nCloud Spend FinOps: Cleaned up unused dev/staging environments and automated scaling rules for Kubernetes clusters, saving $42,000 in cloud costs this month.")}</textarea>
                        <div style="display:flex; gap:0.5rem; margin-top:0.5rem; justify-content:flex-end;">
                            <button class="btn btn-primary" onclick="saveNewsletterSection('sec2')" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-floppy-disk"></i> 💾 Save Section</button>
                            <button class="btn btn-secondary" onclick="cancelEditNewsletterSection()" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-xmark"></i> ✖ Cancel</button>
                        </div>
                    </div>
                ` : `
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
                        We continue to scale our hybrid cloud setup while keeping a close eye on budget efficiency.
                    </p>

                    <ul class="newsletter-bullets">
                        ${custom.sec2 ? custom.sec2.split('\n').map(line => `<li>${escapeHTML(line)}</li>`).join('') : `
                            <li><strong>Database Migration:</strong> Successfully shifted 40% of our historical ledger data to an offline cold storage system. This reduced our active database load and cut primary database storage costs by 14%.</li>
                            <li><strong>Cloud Spend FinOps:</strong> Cleaned up unused dev/staging environments and set up automated scaling rules for Kubernetes clusters. This saved $42,000 in cloud costs this month.</li>
                        `}
                    </ul>

                    <div class="finops-budget-card">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; font-size:0.82rem;">
                            <strong style="color:var(--text-primary);"><i class="fas fa-chart-pie text-primary"></i> Monthly Cloud Budget Track</strong>
                            <span style="color:var(--status-ontrack); font-weight:700;">[████████████████░░░░] 82% of Monthly Budget Expended</span>
                        </div>
                        <div style="height:8px; background:var(--border-color); border-radius:4px; overflow:hidden;">
                            <div style="width:82%; background:linear-gradient(90deg, var(--primary), var(--status-ontrack)); height:100%;"></div>
                        </div>
                    </div>
                `}

                ${p2 ? `
                    <div style="margin-top:0.75rem;">
                        <button class="project-link-chip" onclick="navigateToProject('${p2.id}')">
                            <i class="fas fa-link"></i> Live Project Driver: ${escapeHTML(p2.name)} (${p2.progress}% Complete • ${p2.status})
                        </button>
                    </div>
                ` : ''}
            </div>

            <!-- Section 3: Engineering Velocity & DevOps -->
            <div class="newsletter-section">
                <div class="newsletter-sec-header">
                    <h3 class="newsletter-sec-title" style="margin:0;"><i class="fas fa-code-branch text-primary"></i> 3. Engineering Velocity & DevOps</h3>
                    <button class="btn btn-secondary" onclick="editNewsletterSection('sec3')" style="font-size:0.7rem; padding:0.25rem 0.6rem;">
                        <i class="fas fa-pen-to-square"></i> ✏️ Edit Section
                    </button>
                </div>

                ${activeSectionEditing === 'sec3' ? `
                    <div class="newsletter-edit-box">
                        <div style="font-size:0.75rem; font-weight:700; color:var(--primary); margin-bottom:0.35rem;">Editing Section 3 Content:</div>
                        <textarea id="edit_sec3" class="newsletter-textarea">${escapeHTML(custom.sec3 || "Deployment Frequency: Deployed 142 successful production changes this month.\nChange Failure Rate (CFR): Dropped to 0.7% thanks to stricter automated smoke tests in pre-production pipeline.\nMean Time to Repair (MTTR): Averaged 8 minutes for minor production issues, well below our 15-minute SLA limit.")}</textarea>
                        <div style="display:flex; gap:0.5rem; margin-top:0.5rem; justify-content:flex-end;">
                            <button class="btn btn-primary" onclick="saveNewsletterSection('sec3')" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-floppy-disk"></i> 💾 Save Section</button>
                            <button class="btn btn-secondary" onclick="cancelEditNewsletterSection()" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-xmark"></i> ✖ Cancel</button>
                        </div>
                    </div>
                ` : `
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
                        This section tracks how quickly we are delivering software and the health of our deployment pipelines.
                    </p>

                    ${custom.sec3 ? `
                        <ul class="newsletter-bullets">
                            ${custom.sec3.split('\n').map(line => `<li>${escapeHTML(line)}</li>`).join('')}
                        </ul>
                    ` : `
                        <div class="velocity-grid">
                            <div class="velocity-box">
                                <span style="font-size:0.72rem; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Deployment Frequency</span>
                                <span style="font-size:1.35rem; font-weight:800; color:var(--text-primary);">142 Production Changes</span>
                                <span style="font-size:0.75rem; color:var(--status-ontrack);"><i class="fas fa-circle-check"></i> 100% Automated CI/CD</span>
                            </div>
                            <div class="velocity-box">
                                <span style="font-size:0.72rem; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Change Failure Rate (CFR)</span>
                                <span style="font-size:1.35rem; font-weight:800; color:var(--status-ontrack);">0.7%</span>
                                <span style="font-size:0.75rem; color:var(--text-secondary);"><i class="fas fa-arrow-down" style="color:var(--status-ontrack);"></i> Down from 1.4% last month</span>
                            </div>
                            <div class="velocity-box">
                                <span style="font-size:0.72rem; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Mean Time to Repair (MTTR)</span>
                                <span style="font-size:1.35rem; font-weight:800; color:var(--primary);">8 Minutes</span>
                                <span style="font-size:0.75rem; color:var(--status-ontrack);"><i class="fas fa-shield"></i> Well below 15-min SLA</span>
                            </div>
                        </div>
                    `}
                `}
            </div>

            <!-- Section 4: Cyber Security, Risk & Compliance -->
            <div class="newsletter-section">
                <div class="newsletter-sec-header">
                    <h3 class="newsletter-sec-title" style="margin:0;"><i class="fas fa-shield-halved text-primary"></i> 4. Cyber Security, Risk & Compliance</h3>
                    <button class="btn btn-secondary" onclick="editNewsletterSection('sec4')" style="font-size:0.7rem; padding:0.25rem 0.6rem;">
                        <i class="fas fa-pen-to-square"></i> ✏️ Edit Section
                    </button>
                </div>

                ${activeSectionEditing === 'sec4' ? `
                    <div class="newsletter-edit-box">
                        <div style="font-size:0.75rem; font-weight:700; color:var(--primary); margin-bottom:0.35rem;">Editing Section 4 Content:</div>
                        <textarea id="edit_sec4" class="newsletter-textarea">${escapeHTML(custom.sec4 || "SEBI Cyber Security Framework: Patched and updated all internet-facing APIs to meet new SEBI guidelines for MFA on third-party integrations.\nVulnerability Management: Completed monthly automated VPTA scan. Critical bugs: 0; Medium risk bugs: 3 (all 3 patched).")}</textarea>
                        <div style="display:flex; gap:0.5rem; margin-top:0.5rem; justify-content:flex-end;">
                            <button class="btn btn-primary" onclick="saveNewsletterSection('sec4')" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-floppy-disk"></i> 💾 Save Section</button>
                            <button class="btn btn-secondary" onclick="cancelEditNewsletterSection()" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-xmark"></i> ✖ Cancel</button>
                        </div>
                    </div>
                ` : `
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5;">
                        We have updated our systems to align with the latest regulatory and data security requirements.
                    </p>

                    <ul class="newsletter-bullets">
                        ${custom.sec4 ? custom.sec4.split('\n').map(line => `<li>${escapeHTML(line)}</li>`).join('') : `
                            <li><strong>SEBI Cyber Security Framework:</strong> Patched and updated all internet-facing APIs to meet the new SEBI guidelines for multi-factor authentication (MFA) on third-party integrations.</li>
                            <li><strong>Vulnerability Management:</strong> Completed our monthly automated VPTA (Vulnerability Assessment and Penetration Testing) scan. Critical bugs found: <strong>0</strong>; Medium risk bugs found: <strong>3</strong> (all 3 are already patched).</li>
                        `}
                    </ul>
                `}

                ${p3 ? `
                    <div style="margin-top:0.75rem;">
                        <button class="project-link-chip" onclick="navigateToProject('${p3.id}')">
                            <i class="fas fa-link"></i> Live Project Driver: ${escapeHTML(p3.name)} (${p3.progress}% Complete • ${p3.status})
                        </button>
                    </div>
                ` : ''}
            </div>

            <!-- Section 5: Data Engineering & AI Initiatives -->
            <div class="newsletter-section">
                <div class="newsletter-sec-header">
                    <h3 class="newsletter-sec-title" style="margin:0;"><i class="fas fa-brain text-primary"></i> 5. Data Engineering & AI Initiatives</h3>
                    <button class="btn btn-secondary" onclick="editNewsletterSection('sec5')" style="font-size:0.7rem; padding:0.25rem 0.6rem;">
                        <i class="fas fa-pen-to-square"></i> ✏️ Edit Section
                    </button>
                </div>

                ${activeSectionEditing === 'sec5' ? `
                    <div class="newsletter-edit-box">
                        <div style="font-size:0.75rem; font-weight:700; color:var(--primary); margin-bottom:0.35rem;">Editing Section 5 Content:</div>
                        <textarea id="edit_sec5" class="newsletter-textarea">${escapeHTML(custom.sec5 || "Real-time Fraud Alerts: Deployed machine learning model to detect anomalies in options trading. Flagged two accounts showing irregular wash trading patterns.\nData Pipeline Speed: Upgraded Apache Kafka cluster, cutting time to sync trading data into marketing tools from 4 mins to <30 seconds.")}</textarea>
                        <div style="display:flex; gap:0.5rem; margin-top:0.5rem; justify-content:flex-end;">
                            <button class="btn btn-primary" onclick="saveNewsletterSection('sec5')" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-floppy-disk"></i> 💾 Save Section</button>
                            <button class="btn btn-secondary" onclick="cancelEditNewsletterSection()" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-xmark"></i> ✖ Cancel</button>
                        </div>
                    </div>
                ` : `
                    <ul class="newsletter-bullets">
                        ${custom.sec5 ? custom.sec5.split('\n').map(line => `<li>${escapeHTML(line)}</li>`).join('') : `
                            <li><strong>Real-time Fraud Alerts:</strong> Deployed a new machine learning model to detect anomalies in options trading. The model successfully flagged two accounts showing irregular, high-frequency wash trading patterns.</li>
                            <li><strong>Data Pipeline Speed:</strong> Upgraded our Apache Kafka cluster infrastructure. This cut the time it takes to sync trading data into our marketing tools from 4 minutes down to less than 30 seconds.</li>
                        `}
                    </ul>
                `}
            </div>

            <!-- Section 6: Critical Blockers & CTO Attention Required -->
            <div class="newsletter-section">
                <div class="newsletter-sec-header">
                    <h3 class="newsletter-sec-title" style="margin:0;"><i class="fas fa-triangle-exclamation text-primary" style="color:var(--status-delayed);"></i> 6. Critical Blockers & CTO Attention Required</h3>
                    <button class="btn btn-secondary" onclick="editNewsletterSection('sec6')" style="font-size:0.7rem; padding:0.25rem 0.6rem;">
                        <i class="fas fa-pen-to-square"></i> ✏️ Edit Section
                    </button>
                </div>

                ${activeSectionEditing === 'sec6' ? `
                    <div class="newsletter-edit-box">
                        <div style="font-size:0.75rem; font-weight:700; color:var(--primary); margin-bottom:0.35rem;">Editing Section 6 Content:</div>
                        <textarea id="edit_sec6" class="newsletter-textarea">${escapeHTML(custom.sec6 || "Third-Party Bank Outages: Experienced brief payment gateway slowdowns from two partner banks during peak hours.\nAction Item: Accelerate project to integrate a third backup bank gateway by next month to spread out transaction load.")}</textarea>
                        <div style="display:flex; gap:0.5rem; margin-top:0.5rem; justify-content:flex-end;">
                            <button class="btn btn-primary" onclick="saveNewsletterSection('sec6')" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-floppy-disk"></i> 💾 Save Section</button>
                            <button class="btn btn-secondary" onclick="cancelEditNewsletterSection()" style="font-size:0.75rem; padding:0.3rem 0.75rem;"><i class="fas fa-xmark"></i> ✖ Cancel</button>
                        </div>
                    </div>
                ` : `
                    <div class="blocker-alert-card">
                        <h4><i class="fas fa-building-columns"></i> Third-Party Bank Outages & Risk Factors</h4>
                        <p style="font-size:0.85rem; color:var(--text-primary); margin:0 0 0.5rem 0; line-height:1.4;">
                            ${custom.sec6 ? escapeHTML(custom.sec6) : "We experienced brief payment gateway slowdowns from two partner banks during peak hours this month."}
                        </p>
                        <div style="font-size:0.8rem; background-color:rgba(0,0,0,0.2); padding:0.5rem 0.75rem; border-radius:0.4rem; color:var(--text-secondary);">
                            <strong style="color:var(--status-delayed);"><i class="fas fa-thumbtack"></i> Action Item:</strong> Accelerate project to integrate a third backup bank gateway by next month to spread out transaction load.
                        </div>
                    </div>
                `}

                ${p1 ? `
                    <div style="margin-top:0.75rem;">
                        <button class="project-link-chip" onclick="navigateToProject('${p1.id}')" style="border-color:rgba(239, 68, 68, 0.4); color:#fca5a5;">
                            <i class="fas fa-triangle-exclamation"></i> Live Risk Project: ${escapeHTML(p1.name)} (${p1.progress}% Complete • ${p1.status})
                        </button>
                    </div>
                ` : ''}
            </div>

            <!-- Section 7: CTO Customization & Feedback Callout -->
            <div class="feedback-card">
                <h4 style="margin:0 0 0.5rem 0; color:var(--primary); font-size:0.95rem; font-weight:800; display:flex; align-items:center; gap:0.5rem;">
                    <i class="fas fa-sliders"></i> Customize Next Month's Draft Options
                </h4>
                <p style="font-size:0.82rem; color:var(--text-secondary); margin:0 0 1rem 0;">
                    Please let us know if you would like to tailor future executive updates:
                </p>

                <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.82rem; color:var(--text-primary); margin-bottom:1rem;">
                    <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                        <input type="checkbox" id="chkLending" style="accent-color:var(--primary);"> Focus more on lending and margin product updates
                    </label>
                    <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                        <input type="checkbox" id="chkBilling" style="accent-color:var(--primary);"> Add specific brokerage billing metrics
                    </label>
                    <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                        <input type="checkbox" id="chkTone" style="accent-color:var(--primary);"> Rewrite in a different design style or tone
                    </label>
                </div>

                <button class="btn btn-primary" onclick="submitNewsletterFeedback()" style="font-size:0.8rem;">
                    <i class="fas fa-paper-plane"></i> Save Executive Feedback Preferences
                </button>
            </div>
        </div>
    `;
}

window.triggerAutoGenerateNewsletter = function() {
    // Generate fresh summary text from current active projects
    const totalProjects = appState.projects.length;
    const atRiskProjects = appState.projects.filter(p => p.status === "At Risk" || p.status === "Delayed");
    const riskText = atRiskProjects.length > 0 
        ? atRiskProjects.map(p => `${p.name}: ${p.riskDesc || "Risk identified in milestones."}`).join("; ")
        : "All projects currently operating within risk thresholds.";

    appState.customNewsletterSections = {
        sec1: `Peak Load Handling: Processed high trading volume across ${totalProjects} active projects smoothly.\nLatency Optimization: Redis caching and gateway route optimization cut P99 order latency across mobile and web platforms.`,
        sec2: `Database Migration: Shifted historical ledger data to cold storage, reducing active DB load.\nCloud Spend FinOps: Optimized K8s cluster auto-scaling, saving $42,000 in monthly cloud infrastructure costs.`,
        sec3: `Deployment Frequency: 142 successful production changes deployed.\nChange Failure Rate: Maintained at 0.7% with automated pre-production smoke test coverage.\nMTTR: 8 minutes SLA average.`,
        sec4: `SEBI Framework: Internet-facing APIs updated for SEBI MFA compliance.\nVulnerability Management: 0 Critical, 3 Medium vulnerabilities identified and 100% patched.`,
        sec5: `Real-time Fraud Alerts: ML anomaly detection model operational across options trading.\nData Pipeline: Kafka cluster sync time optimized to under 30 seconds.`,
        sec6: `Active Portfolio Risk Alert: ${riskText}`
    };

    saveState();
    showToast("⚡ CTO Newsletter auto-generated from live project data!", "success");
    renderNewsletterTab();
};

window.resetNewsletterToAutoDraft = function() {
    appState.customNewsletterSections = {};
    activeSectionEditing = null;
    saveState();
    showToast("🔄 Newsletter reset to live auto-draft.", "info");
    renderNewsletterTab();
};

window.editNewsletterSection = function(secId) {
    activeSectionEditing = secId;
    renderNewsletterTab();
};

window.saveNewsletterSection = function(secId) {
    appState.customNewsletterSections = appState.customNewsletterSections || {};
    const textarea = document.getElementById(`edit_${secId}`);
    if (textarea) {
        appState.customNewsletterSections[secId] = textarea.value;
    }

    if (secId === 'sec1') {
        const ops = document.getElementById("edit_sec1_ops");
        const lat = document.getElementById("edit_sec1_latency");
        const avail = document.getElementById("edit_sec1_availability");
        const err = document.getElementById("edit_sec1_errorRate");
        if (ops) appState.customNewsletterSections.sec1_ops = ops.value.trim();
        if (lat) appState.customNewsletterSections.sec1_latency = lat.value.trim();
        if (avail) appState.customNewsletterSections.sec1_availability = avail.value.trim();
        if (err) appState.customNewsletterSections.sec1_errorRate = err.value.trim();
    }

    saveState();
    showToast("Section updated and saved.", "success");
    activeSectionEditing = null;
    renderNewsletterTab();
};

window.cancelEditNewsletterSection = function() {
    activeSectionEditing = null;
    renderNewsletterTab();
};

window.submitNewsletterFeedback = function() {
    alert("Feedback saved! The Engineering Excellence & Architecture Group will customize next month's update accordingly.");
};

// Global Cross-Tab Project Jump Navigation Handler
window.navigateToProject = function(projectId) {
    const navItems = document.querySelectorAll(".nav-item[data-tab]");
    navItems.forEach(i => i.classList.remove("active"));
    const detailedNavItem = document.querySelector('.nav-item[data-tab="detailed-tab"]');
    if (detailedNavItem) detailedNavItem.classList.add("active");

    document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
    const detailedPanel = document.getElementById("detailed-tab");
    if (detailedPanel) detailedPanel.classList.add("active");

    renderDetailedOverview();

    setTimeout(() => {
        const cardElem = document.getElementById(`project-card-${projectId}`);
        if (cardElem) {
            cardElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            cardElem.classList.remove('project-card-highlight');
            void cardElem.offsetWidth; // trigger reflow
            cardElem.classList.add('project-card-highlight');
        }
    }, 100);
};
