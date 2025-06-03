# Project: AD03 - PE - Valdez Calero José Augusto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## 📦 Prerequisites

- Node.js v16.x (recommended to use NVM for version management)
- Angular CLI installed globally (`npm install -g @angular/cli`)
- Git

## ⚙️ Initial Setup

After cloning the repository, install dependencies by running:

```
npm install
```

### Node.js version issues

If `ng serve` doesn't work due to an incompatible Node.js version, you can fix it using NVM:

```
# Install NVM (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Load NVM in the current terminal
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Install and use Node.js 16.20.2
nvm install 16.20.2
nvm use 16.20.2
```

## 🚀 Development Server

Run the following command to start the dev server:

```
ng serve
```

Navigate to [http://localhost:4200](http://localhost:4200). The app will automatically reload if you change any source files.

## 🛠 Build

To build the project:

```
ng build
```

The build artifacts will be stored in the `dist/` directory.
