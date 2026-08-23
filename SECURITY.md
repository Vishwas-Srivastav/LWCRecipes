# Security Policy

## Supported Versions

We provide security updates and patches for the following versions:

| Version  | Supported          |
| -------- | ------------------ |
| `main`   | :white_check_mark: |
| `v1.0.0` | :white_check_mark: |
| `v0.x`   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please follow responsible disclosure guidelines. **Do not create a public GitHub issue for security vulnerabilities.**

### Disclosure Process

1. **Submit via GitHub Private Vulnerability Reporting:** Submit advisories directly through [GitHub Security Advisories](https://github.com/Vishwas-Srivastav/LWCRecipes/security/advisories?state=Triage).

Please include in your report:

- A description of the vulnerability and its potential impact.
- Step-by-step instructions to reproduce the issue (proof-of-concept script or steps).
- Any suggested mitigations or patches if available.

### Response Timeline

- **Initial Acknowledgment:** Within 48 hours of receipt.
- **Triage & Status Assessment:** Within 5 business days.
- **Fix & Disclosure:** Coordinated release and advisory published upon remediation.

## Secret Hygiene & Guardrails

- **Zero Secrets in Code:** Never commit credentials, private keys, access tokens, database passwords, or secret environment variables to this repository.
- **Local Configuration:** Always use `.env` (ignored by git) populated from `.env.example`.
- **Accidental Exposure:** If a secret is accidentally committed, immediately revoke and rotate the secret on the provider service. Committing a replacement or deleting the commit does not guarantee revocation.
