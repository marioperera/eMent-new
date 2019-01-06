import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../entities/company';
import { MentorService } from '../../services/mentor.service';
import { Mentor } from '../../entities/mentor';
import { Student } from '../../entities/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  dashboardActive:boolean;
  companiesActive: boolean;
  mentorsActive:boolean;
  studentsActive: boolean;
  notificationsActive:boolean;
  title: string;

  companyList: Company[];
  mentorList: Mentor[];
  studentList: Student[];

  constructor(private authService: AuthenticationService,
    private companyService: CompanyService, private mentorService: MentorService,
    private studentService: StudentService) { }

  ngOnInit() {
    this.activateDashboard();

    this.companyService.getCompanies();
    this.mentorService.getMentors();
    this.studentService.getStudents();

    this.companyList = this.companyService.companiesList;
    this.mentorList = this.mentorService.mentorsList;
    this.studentList = this.studentService.studentsList;
  }

  // page contents managing functions
  activateDashboard() {
    this.dashboardActive = true;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Dashboard";
  }

  activateCompanies() {
    this.dashboardActive = false;
    this.companiesActive = true;
    this.mentorsActive = false;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Companies";
  }

  activateMentors() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = true;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Mentors";
  }

  activateStudents() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = true;
    this.notificationsActive = false;
    this.title = "Students";
  }

  activateNotifications() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = false;
    this.notificationsActive = true;
    this.title = "Notifications";
  }
  deleteStudent(std:Student){
    this.studentService.deleteStudent(std);
    //this.studentService.getStudents();

  }


  // logout funtion
  logout() {
    this.authService.logoutUser();
  }

}
