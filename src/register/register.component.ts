export class RegisterComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor() { }

  ngOnInit(): void {}

  onKey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
    } else if (type === 'email') {
      this.email = event.target.value;
    } else if (type === 'password') {
      this.password = event.target.value;
    } else if (type === 'confirmPassword') {
      this.confirmPassword = event.target.value;
    }
  }
}