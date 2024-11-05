# Production Lightning Web Component (LWC) Recipes

Welcome to **LWC Recipes**! A comprehensive collection of **35 practical, production-ready Lightning Web Components (LWC)** patterns, Salesforce enterprise architecture best practices, and unit test implementations.

Each recipe focuses on a specific real-world scenario, features modular and clean implementation code, includes inline documentation, and is paired with a unit test (`sfdx-lwc-jest`).

---

## Recipe Catalog (35 Recipes)

| Category | Recipe Component | Pattern & Concept | Folder Location |
| :--- | :--- | :--- | :--- |
| **Core Wire & Apex** | `wireGetObjectInfo` | Object metadata schema & dynamic picklists | [`lwc/wireGetObjectInfo`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/wireGetObjectInfo) |
| **Core Wire & Apex** | `wireGetRecord` | Reactive record field extraction via `getFieldValue` | [`lwc/wireGetRecord`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/wireGetRecord) |
| **Core Wire & Apex** | `imperativeApexSearch` | Debounced imperative search with cache refresh | [`lwc/imperativeApexSearch`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/imperativeApexSearch) |
| **Core Wire & Apex** | `apexContinuation` | Asynchronous Continuation long-running web service callouts | [`lwc/apexContinuation`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/apexContinuation) |
| **Core Wire & Apex** | `apexImperativeParams` | Dynamic parameter dispatching for imperative Apex | [`lwc/apexImperativeParams`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/apexImperativeParams) |
| **Data Tables & Grids** | `paginatedDataTable` | Data grid with server & client pagination, sorting, search | [`lwc/paginatedDataTable`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/paginatedDataTable) |
| **Data Tables & Grids** | `inlineEditDataTable` | Mass cell editing with draft values and Apex updates | [`lwc/inlineEditDataTable`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/inlineEditDataTable) |
| **Data Tables & Grids** | `infiniteScrollTreeGrid` | Hierarchical parent-child nested tree grid | [`lwc/infiniteScrollTreeGrid`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/infiniteScrollTreeGrid) |
| **Data Tables & Grids** | `customCellDatatable` | Custom column cell types (URLs, currency, formatted text) | [`lwc/customCellDatatable`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/customCellDatatable) |
| **Data Tables & Grids** | `exportableDataTable` | Client-side CSV data export generator | [`lwc/exportableDataTable`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/exportableDataTable) |
| **Form Handling** | `dynamicFormValidator` | Custom validity (`setCustomValidity`), regex rules, conditional fields | [`lwc/dynamicFormValidator`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/dynamicFormValidator) |
| **Form Handling** | `recordEditFormCustom` | `lightning-record-edit-form` with submit interceptors | [`lwc/recordEditFormCustom`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/recordEditFormCustom) |
| **Form Handling** | `multiStepFormWizard` | Step-by-step progress indicator wizard with state persistence | [`lwc/multiStepFormWizard`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/multiStepFormWizard) |
| **Form Handling** | `lookupSearchComponent` | Reusable record lookup with search dropdown & selection pills | [`lwc/lookupSearchComponent`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/lookupSearchComponent) |
| **Form Handling** | `fileUploadHandler` | Attachment file uploader with document count tracking | [`lwc/fileUploadHandler`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/fileUploadHandler) |
| **UI Composition** | `customModal` | Accessible modal popup with slot projections (`header`, `body`, `footer`) | [`lwc/customModal`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/customModal) |
| **UI Composition** | `customTabset` | Tabbed container with scoped view switching | [`lwc/customTabset`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/customTabset) |
| **UI Composition** | `accordionTree` | Collapsible section container with active section controls | [`lwc/accordionTree`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/accordionTree) |
| **UI Composition** | `kanbanBoardView` | Categorized status column Kanban board view | [`lwc/kanbanBoardView`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/kanbanBoardView) |
| **UI Composition** | `summaryMetricCards` | KPI dashboard summary cards with trend indicators | [`lwc/summaryMetricCards`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/summaryMetricCards) |
| **Communication** | `lmsPublisher` | Lightning Message Service (`RecordSelected__c`) event publisher | [`lwc/lmsPublisher`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/lmsPublisher) |
| **Communication** | `lmsSubscriber` | LMS subscriber with `APPLICATION_SCOPE` & lifecycle cleanup | [`lwc/lmsSubscriber`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/lmsSubscriber) |
| **Communication** | `parentChildEventContainer` | Custom event bubbling (`bubbles: true, composed: true`) | [`lwc/parentChildEventContainer`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/parentChildEventContainer) |
| **Communication** | `globalStateStore` | Shared singleton reactive state store pattern | [`lwc/globalStateStore`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/globalStateStore) |
| **Communication** | `dynamicComponentLoader` | Runtime template view switching | [`lwc/dynamicComponentLoader`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/dynamicComponentLoader) |
| **Notifications** | `toastNotification` | Platform `ShowToastEvent` utility wrapper for variants & modes | [`lwc/toastNotification`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/toastNotification) |
| **Notifications** | `customConfirmDialog` | Confirmation modal overlay prompt substitute | [`lwc/customConfirmDialog`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/customConfirmDialog) |
| **Notifications** | `clipboardUtility` | One-click copy-to-clipboard button with visual tooltips | [`lwc/clipboardUtility`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/clipboardUtility) |
| **Notifications** | `audioVisualFeedback` | Real-time visual CSS pulse alert feedback | [`lwc/audioVisualFeedback`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/audioVisualFeedback) |
| **Device & Web APIs** | `geoCoderMap` | Interactive `lightning-map` displaying address markers | [`lwc/geoCoderMap`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/geoCoderMap) |
| **Device & Web APIs** | `scannerBarcode` | Mobile barcode and QR code scanner integration | [`lwc/scannerBarcode`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/scannerBarcode) |
| **Device & Web APIs** | `deviceOrientationChecker` | Viewport breakpoint detector and responsive layout switcher | [`lwc/deviceOrientationChecker`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/deviceOrientationChecker) |
| **Analytics & Visuals** | `chartJsDashboard` | Visual progress bar metrics and target achievement | [`lwc/chartJsDashboard`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/chartJsDashboard) |
| **Analytics & Visuals** | `progressRingTimer` | Animated `lightning-progress-ring` timer indicator | [`lwc/progressRingTimer`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/progressRingTimer) |
| **Analytics & Visuals** | `recordTimelineViewer` | Chronological activity timeline viewer component | [`lwc/recordTimelineViewer`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/lwc/recordTimelineViewer) |

---

## Architecture & Backend Components

- **Apex Controllers:**
  - [`AccountController.cls`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/classes/AccountController.cls): `@wire` queries, count aggregations, and search methods.
  - [`ContactController.cls`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/classes/ContactController.cls): Imperative search queries.
  - [`OpportunityController.cls`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/classes/OpportunityController.cls): Stage updates and mass inline editing.
  - [`CaseController.cls`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/classes/CaseController.cls): Timeline activities and case queries.
- **Lightning Message Channels:**
  - [`RecordSelected.messageChannel-meta.xml`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/force-app/main/default/messageChannels/RecordSelected.messageChannel-meta.xml): Shared message channel payload for record selection events across components.

---

## Getting Started

### 1. Clone & Setup
```bash
git clone https://github.com/Vishwas-Srivastav/LWCRecipes.git
cd LWCRecipes
npm install --legacy-peer-deps
```

### 2. Activate Engineering Guardrails
```bash
./scripts/setup-guardrails.sh
```

### 3. Run Guardrail Checks & Unit Tests
```bash
# Run unit tests across all 35 components
npm test

# Run engineering guardrail checks
./scripts/check-guardrails.sh --all
```

---

## Engineering Guardrails & Quality Standards

This project enforces a **4-tier engineering guardrail system**:
1. **Local Git Hooks:** Pre-commit secret scanning & commit message validation (`.githooks/`).
2. **CI Pipeline:** GitHub Actions ([`.github/workflows/ci.yml`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/.github/workflows/ci.yml)) running Gitleaks, guardrail scripts, and unit tests.
3. **Automated Branch Sync:** Merges to `development` auto-sync to `main` via [`.github/workflows/sync-main.yml`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/.github/workflows/sync-main.yml).
4. **Documentation:** Detailed guides under [`docs/`](file:///Users/vishwassrivastav/Desktop/Work/LWCRecipes/docs/).

---

## Author

Created and maintained by **Vishwas Srivastav**.
