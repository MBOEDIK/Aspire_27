<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\Loan;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class LoanFactory extends Factory
{
    protected $model = Loan::class;

    public function definition(): array
    {
        $loanAt = $this->faker->dateTimeBetween('-1 month', 'now');
        $dueAt = (clone $loanAt)->modify('+14 days');
        
        return [
            'user_id' => User::factory(),
            'book_id' => Book::factory(),
            'loan_at' => $loanAt,
            'due_at' => $dueAt,
            'returned_at' => $this->faker->optional(0.7)->dateTimeBetween($loanAt, 'now'),
            'status' => $this->faker->randomElement(['borrowed', 'returned', 'overdue']),
        ];
    }
}
