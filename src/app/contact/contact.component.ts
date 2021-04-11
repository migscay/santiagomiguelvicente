import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.createForm();
  }

  contactForm: FormGroup;

  formErrors = {
    'from_name': '',
    'from_email': '',
    'message': '',
  };

  validationMessages = {
    'from_name': {
      'required': 'Name is required.',
      'minlength': 'Name is too short.',
    },
    'from_email': {
      'required': 'Email is required.',
      'email': 'Email address is not valid.',
    },
    'message': {
      'required': 'Message is required.',
    },  
  };


  ngOnInit(): void {
  }

  createForm() {
    this.contactForm = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2)]],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required] ],
    });

    this.contactForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); //resets the validation
  }

  onValueChanged(data?: any) {
    if (!this.contactForm) {return;}
       const form = this.contactForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = ''; // resets the error messages
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }   
    }

    // if(this.contactForm.valid) {
    //   this.message = this.contactForm.value;
    // }
  };

  onSubmit(Event) {

    console.log(Event.target);

    this.sendEmail(Event);

    this.contactForm.reset({
      from_name: '',
      from_email: '',
      message: '',
    });
  }

  sendEmail(Event) {

    let data = {
      service_id: 'service_57kghoc',
      template_id: 'contact_form',
      user_id: 'user_5VciSNeLhEEnJu4adtrBt',
      template_params: {
        from_name: this.contactForm.value.from_name,
        from_email: this.contactForm.value.from_email,
        message: this.contactForm.value.message,
      }
    };

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { responseType: 'text' })
      .subscribe((result) => {
        alert('Your message has been sent!');
      }, (error: HttpErrorResponse) => {
        alert('Oops... ' + error.message);
      }
    );

    // emailjs.sendForm('service_57kghoc', 'contact_form', Event.target, 'user_5VciSNeLhEEnJu4adtrBt')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    //e.target.reset();
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   runValidate();
  //   if (!result.hasErrors()) {
  //     sendEmail(e);
  //     setFormState({"from_name": "" });
  //     setFormState({"from_email": "" });
  //     setFormState({"message": "" });
  //     alert("Thank you for your message. I will reply soon.")
  //   }
  // };


}
