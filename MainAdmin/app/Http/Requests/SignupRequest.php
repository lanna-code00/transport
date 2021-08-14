<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'required', 
            'lastname' => 'required', 
            'middlename' => 'required', 
            'email' => 'required|email|unique:workers', 
            'streetAddress' => 'required', 
            'city' => 'required', 
            'state' => 'required', 
            'zipcode' => 'required', 
            'homephone' => 'required|max:11|min:11', 
            'alternatephone' => 'required|max:11|min:11', 
            'birthdate' => 'required', 
            'maritalStatus' => 'required', 
            'jobtitle' => 'required', 
            'worklocation' => 'required', 
            'workemail' => 'required|unique:workers', 
            'salary' => 'required', 
            'employeeID' => 'required', 
            'firstnameE' => 'required', 
            'lastnameE' => 'required', 
            'addressE' => 'required', 
            'cityE' => 'required', 
            'stateE' => 'required', 
            'zipcodeE' => 'required', 
            'phoneE' => 'required|max:11|min:11', 
            'relationship' => 'required', 
            'password' => 'required|confirmed',
            'filescv' => 'mimes:pdf,docx,doc|max:2048', 
            'profilepic' => 'mimes:jpeg,png,jpg,gif,svg|max:2048', 
        ];
    }
}
