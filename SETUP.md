# Infrastructure Setup

One-time steps to get patrickaurelio.com live. Do these in order.

---

## 1. Register the domain

Go to [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) and register `patrickaurelio.com`. At-cost pricing, no markup, and DNS setup with Vercel is straightforward. If you'd rather keep everything in one place, Vercel's own domain purchase (step 4) works too — skip this step and buy it there instead.

---

## 2. Create the GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Name: `patrickaurelio-site`
3. Visibility: **Public** (this is the link you share with employers)
4. Do **not** initialize with a README — the project already has one
5. Click **Create repository**

Then push the scaffold from your local machine:

```bash
# From inside the patrickaurelio-site folder
git init
git add .
git commit -m "init: scaffold with Next.js, Plus Jakarta Sans, placeholder home"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/patrickaurelio-site.git
git push -u origin main
```

---

## 3. Create the Vercel project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `patrickaurelio-site` repo
3. Framework will be detected as **Next.js** automatically
4. Leave all build settings at defaults
5. Click **Deploy**

Vercel will give you a preview URL (e.g. `patrickaurelio-site.vercel.app`). The site is live at that URL immediately.

---

## 4. Connect the domain

**If you registered with Cloudflare:**

1. In Vercel → your project → **Settings → Domains**
2. Add `patrickaurelio.com` and `www.patrickaurelio.com`
3. Vercel will show you two DNS records to add (an A record and a CNAME)
4. In Cloudflare DNS, add those records exactly as shown
5. Propagation is usually under 5 minutes with Cloudflare

**If you want Vercel to manage the domain:**

1. In Vercel → Settings → Domains → **Buy Domain**
2. Purchase `patrickaurelio.com` there — DNS is wired automatically

---

## 5. Upgrade Vercel plan

Before adding a custom domain for business use, upgrade to **Vercel Pro** in your account billing settings. The custom domain itself works on the free tier, but Pro is required once you're using the site commercially.

---

## Done

Every push to `main` deploys automatically. No manual steps after this.

For new pages/sections: create a branch, build, open a PR, merge to main → live.
