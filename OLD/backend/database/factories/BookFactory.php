<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    protected $model = Book::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'author_id' => Author::factory(),
            'isbn' => $this->faker->isbn13(),
            'publisher' => $this->faker->company(),
            'release_date' => $this->faker->date(),
            'description' => $this->faker->text(),
            'stock' => $this->faker->numberBetween(1, 10),
            'cover_image' => $this->faker->imageUrl(400, 600, 'books'),
            'status' => 'available',
            'isVisible' => true,
        ];
    }
}
