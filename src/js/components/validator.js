
import JustValidate from 'just-validate';
import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";
import { rule } from 'postcss';




const ctaForms = document.querySelectorAll('.cta__form')


const updateValidator = (f, val, type) => {
  val.destroy()
  val = new JustValidate(f)
  const telSelector = f.querySelector('.input-tel')
  let sName = type == 'email' ? 'Email' : 'Телефон'

  if(type == "email"){
    val.addField('.input-email', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      },
    ])
  }

  if(type == "tel") {
    val.addField('.input-tel', [
      {
        rule: 'required',
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
      }
    ]).addField('.select__r', [
      {
        rule: 'required'
      }
    ])
  }

  val.onSuccess((ev) => {
    let formData = new FormData(ev.target);
    formData.delete(sName)
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    ev.target.reset();
  })
  return val
}


ctaForms.forEach(f => {
  let validator = new JustValidate(f);
  const telSelector = f.querySelector('input[type="tel"]')

  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);

  const telInput = f.querySelector('.input-tel')
  const emailInput = f.querySelector('.input-email')
  const selectF = f.querySelector('select')
  if(telInput){
    validator
    .addField(telInput, [
      {
        rule: 'required',

      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
      }
    ])
  }

  if(selectF){
    validator.addField(selectF, [
      {
        rule: 'required'
      }
    ])
  }

    validator.onSuccess((ev) => {
      let formData = new FormData(ev.target);
      formData.delete('Email')
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (afterSend) {
              afterSend();
            }
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      ev.target.reset();
    })



  const rselectItems = f.querySelectorAll('.select__body .select__item')
  const rselect = f.querySelector('select')
  const inputTel = f.querySelector('.input-tel')
  const inputEmail = f.querySelector('.input-email')

  if(rselectItems.length > 0){
    rselectItems.forEach(item => {
      item.addEventListener('click', (e) => {

        let type = 'tel'
        if(rselect.value == "email"){
          inputTel.type = 'hidden';
          inputEmail.type = 'email'

          type = 'email'
        } else {
          inputTel.type = 'tel';
          inputEmail.type = 'hidden'

          type = 'tel'
        }
        validator = updateValidator(f, validator, type)
        validator.refresh()
      })
    })
  }
})






const popupForms = document.querySelectorAll('.popup-form')
popupForms.forEach(pf => {
  let validator = new JustValidate(pf)
  const telSelector = pf.querySelector('.input-tel')
  const emailSelector = pf.querySelector('.input-email')
  const photoSelector = pf.querySelector('.input-file')
  const radioBoxes = pf.querySelector('.popup-form__checks')
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);

  if(telSelector){
    validator.addField(telSelector, [
      {
        rule: 'required'
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
      }
    ])
  }
  if(emailSelector){
    validator.addField(emailSelector, [
       {
         rule: 'email',
       }
     ])
  }

  if(photoSelector){
    validator.addField(photoSelector, [
      {
        rule: 'minFilesCount',
        value: 1,
      },
      {
        rule: 'maxFilesCount',
        value: 1,
      },
      {
        rule: 'files',
        value: {
          files: {
            types: ['image/png'],
          },
        },
      },
    ])
  }

  if(radioBoxes){
    const radioInp = radioBoxes.querySelectorAll('input[type="radio"]')

    radioInp.forEach(el => {
      el.addEventListener('change', e => {
        validator.removeField(telSelector)
        validator.removeField(emailSelector)

        if(e.currentTarget.value == "Email"){

          validator.addField(emailSelector, [
            {
              rule: 'required'
            },
            {
              rule: 'email',
            }
          ])
          emailSelector.placeholder = "Ваша эл.почта*"
          telSelector.placeholder = "Ваш телефон"
        } else {
          validator.addField(telSelector, [
            {
              rule: 'required'
            },
            {
              rule: 'function',
              validator: function() {
                const phone = telSelector.inputmask.unmaskedvalue();
                return phone.length === 10;
              },
            }
          ])
          validator.addField(emailSelector, [
            {
              rule: 'email',
            }
          ])


          emailSelector.placeholder = "Ваша эл.почта"
          telSelector.placeholder = "Ваш телефон*"
        }



      })
    })


    validator.onSuccess((ev) => {
      let formData = new FormData(ev.target);
      formData.delete('Тема_сообщения:')
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (afterSend) {
              afterSend();
            }
            console.log('Отправлено');
          }
        }
      }

      console.log(formData);
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      ev.target.reset();
    })
  }
})
