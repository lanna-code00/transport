<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Models\User;

class AuthController extends Controller
{
        /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if ($token = $this->guard()->attempt($credentials)) {
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Incorrect password OR email'], 401);
    }

    public function signup(SignupRequest $request)
    {
       if($request->hasFile('profilepic') && $request->hasFile('filescv')) {
           $filename = $request->file('profilepic')->getClientOriginalName();
           $filetext = $request->file('profilepic')->getClientOriginalExtension();
           $fname = pathinfo($filename, PATHINFO_FILENAME);
           $nametosave = $fname . time() . "." .$filetext;
           $request->file('profilepic')->storeAs("public/images", $nametosave);
           
           $filename1 = $request->file('filescv')->getClientOriginalName();
           $filetext1 = $request->file('filescv')->getClientOriginalExtension();
           $fname1 = pathinfo($filename1, PATHINFO_FILENAME);
           $nametosave1 = $fname1 . time() . "." .$filetext1;
           $request->file('filescv')->storeAs("public/images", $nametosave);
           
        //    return json_encode(['picture' => $nametosave, 'cv' => $nametosave1]);
           $newrequest = new User();
           $newrequest->firstname = $request->firstname;
           $newrequest->lastname = $request->lastname;
           $newrequest->middlename = $request->middlename;
           $newrequest->email = $request->email;
           $newrequest->streetAddress = $request->streetAddress;
           $newrequest->city = $request->city;
           $newrequest->state = $request->state;
           $newrequest->zipcode = $request->zipcode;
           $newrequest->homephone = $request->homephone;
           $newrequest->alternatephone = $request->alternatephone;
           $newrequest->birthdate = $request->birthdate;
           $newrequest->maritalStatus = $request->maritalStatus;
           $newrequest->spousename = $request->spousename;
           $newrequest->spousephone = $request->spousephone;
           $newrequest->jobtitle = $request->jobtitle;
           $newrequest->worklocation = $request->worklocation;
           $newrequest->workemail = $request->workemail;
           $newrequest->salary = $request->salary;
           $newrequest->employeeID = $request->employeeID;
           $newrequest->firstnameE = $request->firstnameE;
           $newrequest->lastnameE = $request->lastnameE;
           $newrequest->addressE = $request->addressE;
           $newrequest->cityE = $request->cityE;
           $newrequest->stateE = $request->stateE;
           $newrequest->zipcodeE = $request->zipcodeE;
           $newrequest->phoneE = $request->phoneE;
           $newrequest->password = $request->password;
           $newrequest->relationship = $request->relationship;
           $newrequest->filescv = $nametosave1;
           $newrequest->profilepic = $nametosave;
           $newrequest->save();
           return $this->login($request);
       } 
  
    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json($this->guard()->user());
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60,
             'user' => auth()->user()
        ]);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }
}
