git add .
git commit -m "Update product images, WhatsApp branding, and button layouts"
try {
    git remote remove origin
} catch {
}
git remote add origin https://github.com/AKSHAD2004/Navavi-Cafe.git
git branch -M main
git push -u origin main
