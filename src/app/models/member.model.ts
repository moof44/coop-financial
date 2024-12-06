export interface Member {
  id: string;
  lastname: string;
  firstname: string;
  middlename: string;
  address1: string;
  barangay: string;
  municipality: string;
  province: string;
  gender: string;
  birthday: string | Date;
  contactNo: string;
  email: string;
  facebook: string;
  occupation: string;
  business: string;
  tinNo: string;
}

export interface MemberExtended extends Member {
  membershipDate: string | Date,
  lastTransaction: string | Date,
}

export class MemberGenerator {
  member!: MemberExtended;

  constructor(member: MemberExtended) {
    this.member = member;
  }

  getAddress() {
    return (
      this.member.address1 +
      ', ' +
      this.member.barangay +
      ', ' +
      this.member.municipality +
      ', ' +
      this.member.province
    );
  }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.member.birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getIsActive(){
    const today = new Date();
    const lastTransactionDate = new Date(this.member.lastTransaction);
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);
    return lastTransactionDate >= sixMonthsAgo;
  }

  getFullname() {
    let fullname = this.member.lastname + ', ' + this.member.firstname;
    if (this.member.middlename) {
      fullname += ' ' + this.member.middlename;
    }
    return fullname;
  }
  
  getFirstAndLastname() {
    return this.member.firstname + ' ' + this.member.lastname;
  }
  
  getLastAndFirstname() {
    return this.member.lastname + ', ' + this.member.firstname;
  }
}