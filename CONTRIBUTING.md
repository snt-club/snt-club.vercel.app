# Contributing to SNT Club Website

## Branch Strategy

```
feature/your-feature  →  dev  →  main (production)
```

| Branch | Purpose | Vercel URL |
|--------|---------|------------|
| `main` | **Live production site** — only receives code that has passed QA | `snt-club.vercel.app` |
| `dev`  | **QA / staging** — all developer work lands here first | `snt-club-git-dev-xxx.vercel.app` (preview URL) |
| `feature/*` | Individual feature branches — opened against `dev`, not `main` | Preview URL per branch |

> **Rule:** No developer pushes directly to `main`. Ever.  
> The only way code reaches production is a PR from `dev` → `main`.

---

## Workflow Step-by-Step

### 1. Start a new feature
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

### 2. Build & test locally
Use the QA credentials from the team's shared `.env.local` (ask lead for access).  
These point to a **separate QA database and email account** — not the live one.

### 3. Push and open a PR to `dev`
```bash
git push origin feature/your-feature-name
```
Open a PR on GitHub: `feature/your-feature-name` → `dev`

Vercel will auto-create a **preview deployment** for your PR. Test on that URL before merging.

### 4. Merge to `dev`
Once reviewed, merge into `dev`.  
This triggers a deployment to the **QA preview URL** (using QA credentials).  
Do a final end-to-end test here — registration, OTP email, attendance form, etc.

### 5. Ship to production
When QA is confirmed good, open a PR: `dev` → `main`.  
- CI (build + lint) must be green ✅  
- At least one reviewer must approve  
- Fill out the PR checklist (auto-populates from template)  

Merging triggers **one single production deployment** to the live site.

---

## Environment Variables

Two sets of credentials exist — never mix them up:

| Variable | Production (main) | QA/Preview (dev) |
|----------|-------------------|------------------|
| `MONGODB_URI` | Live Atlas cluster | Separate QA Atlas cluster |
| `EMAIL_USER` / `EMAIL_PASS` | Production email | QA email account |
| `CRON_SECRET` | Production secret | QA secret |

These are configured in **Vercel Project Settings → Environment Variables**:
- Set scope to **Production** for live credentials
- Set scope to **Preview** for QA credentials

Never commit `.env` or `.env.local` files.

---

## Adding a New Event

1. Add entry to `eventConstants.js` with `eventRegStatus: 'closed'` initially
2. Create `app/events/YourEvent/page.tsx` using `EventFormSwitcher`
3. Test the full registration flow on QA preview URL
4. Set `eventRegStatus: 'live'` only when ready, then ship via the `dev → main` PR
