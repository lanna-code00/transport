<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('middlename');
            $table->string('email')->unique();
            $table->string('streetAddress');
            $table->string('city');
            $table->string('state');
            $table->string('zipcode');
            $table->string('homephone');
            $table->string('alternatephone');
            $table->string('birthdate');
            $table->string('maritalStatus');
            $table->string('spousename');
            $table->string('spousephone');
            $table->string('jobtitle');
            $table->string('worklocation');
            $table->string('workemail')->unique();
            $table->string('salary');
            $table->string('employeeID');
            $table->string('firstnameE');
            $table->string('lastnameE');
            $table->string('addressE');
            $table->string('cityE');
            $table->string('stateE');
            $table->string('zipcodeE');
            $table->string('phoneE');
            $table->string('relationship');
            $table->string('filescv');
            $table->string('profilepic');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workers');
    }
}
