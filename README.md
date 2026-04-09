# Aspire_27 - Library Management System

## Installation Guide

Follow these steps after cloning the repository:

1. **Enter the backend directory**
   ```bash
   cd backend
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Setup environment configuration**
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Update your database credentials in the `.env` file.

4. **Generate application key**
   ```bash
   php artisan key:generate
   ```

5. **Run migrations and seed dummy data**
   ```bash
   php artisan migrate:fresh --seed
   ```

6. **Start the development server**
   ```bash
   php artisan serve
   ```