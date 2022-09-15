import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  studentDetails: any = {
    name: '',
    email: '',
    gender: '',
    phone: '',
    age: '',
    address: '',
    state: '',
    pincode: ''
  };
  tableData: any = [];
  isBtn: boolean = false;
  index: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  getValue() {
    if (this.studentDetails.name === '') {
      alert('please fill the name');
    } else if (this.studentDetails.email === '') {
      alert('please fill the email');
    }
    else if (this.studentDetails.gender === '') {
      alert('please select the gender');
    }
    else if (this.studentDetails.phone === '') {
      alert('please fill the phone');
    }
    else if ((this.studentDetails.phone.length) != 10) {
      alert('phone should be 10 digits only');
    }
    else if (this.studentDetails.age === '') {
      alert('please fill the age');
    }
    else if (this.studentDetails.address === '') {
      alert('please fill the address');
    }
    else if (this.studentDetails.state === '') {
      alert('please select the state');
    }
    else if (this.studentDetails.pincode === '') {
      alert('please fill the pincode');
    } else {
      this.tableData.push(this.studentDetails);
      // console.log(this.tableData); 
      this.studentDetails = {
        name: '',
        email: '',
        gender: '',
        phone: '',
        age: '',
        address: '',
        state: '',
        pincode: ''
      };
    }

  }
  deleteUser(index: number) {
    this.tableData.splice(index, 1);
  }

  updateUser(index: number, _data: any) {
    this.index=index;
    this.isBtn = true;
    this.studentDetails = _data;
  }
  updateValue(){
    this.tableData[this.index].name = this.studentDetails.name;
    this.tableData[this.index].email = this.studentDetails.email;
    this.tableData[this.index].gender = this.studentDetails.gender;
    this.tableData[this.index].phone = this.studentDetails.phone;
    this.tableData[this.index].age = this.studentDetails.age;
    this.tableData[this.index].address = this.studentDetails.address;
    this.tableData[this.index].state = this.studentDetails.state;
    this.tableData[this.index].pincode = this.studentDetails.pincode;
    this.studentDetails = {
      name: '',
      email: '',
      gender: '',
      phone: '',
      age: '',
      address: '',
      state: '',
      pincode: ''
    };
    this.isBtn = false;
  }

}
