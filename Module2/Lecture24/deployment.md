# Deploying HTML/CSS/JS Project to GitHub Pages

Follow these steps to deploy your HTML/CSS/JS project to GitHub Pages:

## 1. Create a GitHub repository

- Go to GitHub and log in.
- Click on the "+" sign in the top right corner and select "New repository."
- Give your repository a name, and optionally add a description.
- Choose whether the repository will be public or private.
- Click "Create repository."

## 2. Push your project files to the repository

- If you haven't already, initialize a git repository in your project directory:

## 3. Commands

git init
git add .
git commit -m "Initial commit"
git remote add origin <repository-url>
git push -u origin master

## 4. Enable GitHub Pages:

Go to your repository on GitHub.
Click on the "Settings" tab.
Scroll down to the "GitHub Pages" section.
Under "Source," select the branch you want to use for GitHub Pages (usually the "main" or "master" branch).
If your project is in a subdirectory, you can select the branch and folder from which GitHub Pages will serve your site.

## 5. Access your site:

Once GitHub Pages has deployed your site, it will provide you with a URL where your site is hosted.
You can access your site using this URL, which typically follows the pattern: https://username.github.io/repository-name.
