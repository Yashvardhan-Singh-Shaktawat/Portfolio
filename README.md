# React + Vite Portfolio App (Hostinger Ready)

This is a premium, high-performance personal portfolio website built with React and Vite. It is fully configured out-of-the-box for hosting on Hostinger shared servers (Apache).

## 🚀 Local Development

To run the application locally:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```

3. **Open local server:** Click the local address link shown in the terminal (usually `http://localhost:5173`).

---

## 🛠️ Project Structure

- `src/components/` - High-quality layout components (Navbar, Hero, Projects, Skills, Contact, Footer) styled with Vanilla CSS modules.
- `public/api/contact.php` - A backend PHP script that processes contact form submissions and sends emails. Natively supported by Hostinger!
- `public/.htaccess` - Pre-configured Apache URL redirection rules to support React single-page routing without 404s.

---

## 🌐 Deploying to Hostinger

Follow these simple steps to put your website online:

### Step 1: Configure Your Email (Optional but Recommended)
Open [public/api/contact.php](file:///d:/Portfolio/public/api/contact.php) and change:
```php
$toEmail = "your-email@yourdomain.com";
```
to the email address where you want to receive messages from the contact form.

### Step 2: Build the Project
Run the build script in your terminal to compile the code into static assets:
```bash
npm run build
```
This generates a folder named `dist/` containing all your optimized HTML, CSS, JavaScript, `.htaccess`, and the `api/contact.php` script.

### Step 3: Zip and Upload
1. Navigate to the `dist/` folder on your computer.
2. Select all files and folders inside `dist/` and compress them into a **ZIP archive** (e.g., `archive.zip`).
   > [!IMPORTANT]
   > Compress the *contents* of the `dist/` folder, not the `dist/` folder itself. When you open the zip, you should see `index.html` at the root.
3. Log into your **Hostinger Control Panel (hPanel)**.
4. Go to **Websites** -> **Manage** -> **File Manager** (or connect via FTP/SFTP).
5. Open the `public_html` directory of your website.
6. Upload your ZIP archive to `public_html` and **Extract** it there.
7. Delete the uploaded zip file.

🎉 Your React portfolio website is now live! Go to your domain to verify.
