# CYBER HUNT 2026 — TEAM 03 PRIVATE FLAG MAP & ANSWER KEY
**Confidential — For Team 03 & Event Organizers Only**  
**Date:** 26–27 October 2026  
**Target Platform:** ASCEND Enterprise Dashboard  
**Total Available Points:** 550 / 550 PTS (100% Cryptographically Verified)

---

## Executive Summary of Native Flag Placements

| Flag ID | Difficulty | Points | Native System Workflow / Route | Hiding Mechanism | Complete Flag String (Case-Sensitive) | SHA-256 Ledger Hash |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T03-F1** | Easy | 50 | `/` (Homepage Root Layout) | Immutable HTML Consensus Spec Comment | `TSJ{Hidd3n_1n_Th3_HTML_Source_C0d3}` | `05fe029c83def8c1b7f7c1abc424ed9e64881e77319c44afc2731d11b5c62f10` |
| **T03-F2** | Easy | 50 | `/achievements` (Verifier Seal Registry) | Binary PNG Chunk Metadata (`tEXt Comment`) | `TSJ{R3@d_Th3_Im@g3_M3t@d@t@_Cl0s3ly}` | `f424a5a212e2346abcc286422676a19a0f8f4dbc2604d118d18a0968fad0966e` |
| **T03-F3** | Medium | 100 | `/core/queue` (Core Verification Queue) | Intercepted Proof Audit / Non-Linear Keystream | `TSJ{Hum@n_F1r3w@ll_Sp0tt3d_Th3_Ph1sh}` | `494ed903553ed299d1cc93b8edb95c3f9f25fa791257222f4632debc19603db2` |
| **T03-F4** | Hard | 150 | `/achievements` &rarr; `/core/audit/verify` | Optical Certificate QR Seal + 403 Session Proof | `TSJ{QR_Sc@n_Fl0w_T@k3s_Y0u_D33p3r!}` | `c6767da1d8b1105c90e526ef54de0994d07126fb4db13c9a5c821636f8d564cc` |
| **T03-F5** | Expert | 200 | `/core/audit` (Cryptographic Audit Trail) | 3-Part Decoupled Ledger Anomaly Forensics | `TSJ{N3v3r_Tru5t_Urg3nt_3m@1l_Cl0s3}` | `a16ad45e8e56beb4ae8a1a9e59b008cff28c7150d8e456d1afc60ccb065a0a12` |

---

## Detailed Step-by-Step Walkthrough (Organizer Test Guide)

### Flag 1 (T03-F1) — Easy (50 PTS)
* **Exact Flag:** `TSJ{Hidd3n_1n_Th3_HTML_Source_C0d3}`
* **Native Location:** Top of `<body>` on route `/` (Ascend Root Layout)
* **Discovery Method:**
  1. Open the ASCEND dashboard at `/`.
  2. Press `Cmd+Option+U` / `Ctrl+U` (View Page Source) or open DevTools (`Cmd+Option+I`) on the `Elements` tab.
  3. Expand the top `<div style="display:contents">` under `<body>`.
  4. The consensus specification integrity comment displays the exact flag.

---

### Flag 2 (T03-F2) — Easy (50 PTS)
* **Exact Flag:** `TSJ{R3@d_Th3_Im@g3_M3t@d@t@_Cl0s3ly}`
* **Native Location:** `/achievements` (Platform Verifier Seal Binary Registry)
* **Asset Path:** `/assets/audit_verifier_badge.png`
* **Discovery Method:**
  1. Open `/achievements`.
  2. Locate the **"Platform Verifier Seal Binary Registry"** card.
  3. Click **"Download Binary Seal"** (or inspect network asset `/assets/audit_verifier_badge.png`).
  4. Inspect the binary PNG metadata chunk using `exiftool` or `strings`:
     ```bash
     exiftool audit_verifier_badge.png
     # Output: Comment: TSJ{R3@d_Th3_Im@g3_M3t@d@t@_Cl0s3ly}
     ```
  5. The flag exists purely within the image metadata chunk — 0 plaintext in DOM/HTML.

---

### Flag 3 (T03-F3) — Medium (100 PTS)
* **Exact Flag:** `TSJ{Hum@n_F1r3w@ll_Sp0tt3d_Th3_Ph1sh}`
* **Native Location:** `/core/queue` (Core Verification Queue)
* **Component:** `frontend/src/components/soc-phishing-simulator.tsx`
* **Discovery Method:**
  1. Navigate to the core review queue at `/core/queue`.
  2. At the top of the queue, observe the high-priority anomalous proof claim:
     `Ticket #SEC-9921: Critical Credential Re-Verification Revocation Notice (IP: 185.220.101.5)`.
  3. Bypassing the deceptive urgency link, click the defensive action:  
     **"🛡️ Report Suspicious Incident (Isolate Threat)"**.
  4. The non-linear keystream evaluates and renders the resolution token:
     `TSJ{Hum@n_F1r3w@ll_Sp0tt3d_Th3_Ph1sh}`.

---

### Flag 4 (T03-F4) — Hard (150 PTS)
* **Exact Flag:** `TSJ{QR_Sc@n_Fl0w_T@k3s_Y0u_D33p3r!}`
* **Native Location:** `/achievements` (Tamper-Proof Certificate Verification Seal) leading to `/core/audit/verify`
* **Discovery Method:**
  1. Navigate to `/achievements`.
  2. Locate the **"Tamper-Proof Certificate Verification"** card displaying the Reed-Solomon QR matrix (`/assets/auth_qr_matrix.png`).
  3. Scan the matrix with a smartphone camera or optical scanner. It resolves to:
     `https://ascend.../core/audit/verify?session_proof=sec_qr_flow_9821`.
  4. Navigate to the URL with the valid optical session token.
     *(Note: Navigating directly without the token triggers an authentic 403 Forbidden firewall).*
  5. The runtime on-the-fly cipher stream decrypts and awards:
     `TSJ{QR_Sc@n_Fl0w_T@k3s_Y0u_D33p3r!}`.

---

### Flag 5 (T03-F5) — Expert Multi-Stage (200 PTS)
* **Exact Flag:** `TSJ{N3v3r_Tru5t_Urg3nt_3m@1l_Cl0s3}`
* **Native Location:** `/core/audit` (Cryptographic Audit Trail Ledger)
* **Discovery Method (3-Stage Decoupled Triad):**
  1. Navigate to the append-only ledger at `/core/audit`.
  2. Under the **Digital Forensics Incident Investigation** module:
     - **Part 1:** Read the gateway telemetry ingestion log for digest fragment:  
       `TSJ{N3v3r_Tru5t_`
     - **Part 2:** Click **"Stream Headers via Async Pipe"** or download `/artifacts/urgent_security_alert.eml` to extract custom transport header:  
       `X-Forensic-Token-Digest: Urg3nt_3m@1l_`
     - **Part 3:** Click **"⚡ Detonate in Containment Sandbox"** to execute ephemeral QEMU containment virtualization and retrieve the memory closure signature:  
       `Cl0s3}`
  3. Concatenate all three stages:
     `TSJ{N3v3r_Tru5t_` + `Urg3nt_3m@1l_` + `Cl0s3}` = `TSJ{N3v3r_Tru5t_Urg3nt_3m@1l_Cl0s3}`.
