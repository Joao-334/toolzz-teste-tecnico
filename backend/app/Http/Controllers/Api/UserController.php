<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Mock usuario
    private $mockUser = [
        'username' => 'Carlos',
        'password' => '$2y$12$LQ73/Z1gSGvlVx1yu7qhwehJdEt/nLTumOEbTON4utaMZTFGKMhBS' // password123
    ];
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        $username = $request->input('username');
        $password = $request->input('password');

        var_dump($username);

        if (Hash::check($password, $this->mockUser['password']) && $username === $this->mockUser['username']) {
            return response()->json(['message' => 'Login successful'], 200);
        }
        return response()->json(['message' => 'Unauthorized'], 401);

    }
}
