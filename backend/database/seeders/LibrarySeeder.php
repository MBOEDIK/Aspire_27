<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Loan;
use App\Models\User;
use Illuminate\Database\Seeder;

class LibrarySeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create Categories
        $categories = Category::factory()->count(10)->create();

        // 2. Create Authors
        $authors = Author::factory()->count(10)->create();

        // 3. Create Books and attach Categories
        $authors->each(function ($author) use ($categories) {
            Book::factory()
                ->count(3)
                ->create(['author_id' => $author->id])
                ->each(function ($book) use ($categories) {
                    $book->categories()->attach(
                        $categories->random(rand(1, 3))->pluck('id')->toArray()
                    );
                });
        });

        // 4. Create Users (Admin and regular users)
        User::factory()->create([
            'name' => 'Admin Library',
            'email' => 'admin@library.com',
            'role' => 'Admin',
            'password' => bcrypt('password'),
        ]);

        $users = User::factory()->count(5)->create(['role' => 'User']);

        // 5. Create Loans
        $books = Book::all();
        $users->each(function ($user) use ($books) {
            Loan::factory()
                ->count(2)
                ->create([
                    'user_id' => $user->id,
                    'book_id' => $books->random()->id,
                ]);
        });
    }
}
