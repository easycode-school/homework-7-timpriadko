import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public usersService: UsersService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.usersService.getUser(id).subscribe((user) => {
      this.user = user;
  });
}
// GO back button
  goBack() {
      this.router.navigate(['/users']);
  }
// Edit form submit handler
  editSubmit() {
    this.messageService.add({severity: 'success', summary: 'User successfully edited', detail: ''});
    this.router.navigate(['/users']);
  }
}
