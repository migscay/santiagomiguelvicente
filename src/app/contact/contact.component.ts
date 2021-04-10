import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  contactForm: FormGroup;

  formErrors = {
    'name': '',
    'email': '',
    'message': '',
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name is too short.',
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email address is not valid.',
    },
    'comment': {
      'required': 'Comment is required.',
    },  
  };


  ngOnInit(): void {
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
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

    this.sendEmail(Event);

    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
    });
  }

  sendEmail(Event) {

    emailjs.sendForm('service_57kghoc', 'contact_form', Event.target, 'user_5VciSNeLhEEnJu4adtrBt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
