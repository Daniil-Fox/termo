
import JustValidate from 'just-validate';
import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";
import { rule } from 'postcss';




const ctaForms = document.querySelectorAll('.cta__form')


const updateValidator = (f, val, type) => {
  val.destroy()
  val = new JustValidate(f)
  const telSelector = f.querySelector('.input-tel')
  let sName = type == 'email' ? 'Телефон' : 'Email'

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
          setTimeout(() => {
            location.href = 'thank-you.html'
          }, 100)
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
            setTimeout(() => {
              location.href = 'thank-you.html'
            }, 100)
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
            types: ['image/png', 'image/jpeg', 'image/jpg'],
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


  }
  validator.onSuccess((ev) => {
    let formData = new FormData(ev.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setTimeout(() => {
            location.href = 'thank-you.html'
          }, 100)
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    ev.target.reset();
  })
})


const fileInput = document.querySelectorAll('.input-file')

fileInput.forEach(inp => {
  const label = document.querySelector(`label[for="${inp.id}"]`)
  inp.addEventListener('change', e => {
    if(inp.value){
      label.textContent = inp.files[0].name
    } else {
      label.textContent = 'ПРИКРЕПИТЬ ФОТО ШИЛЬДИКА'
    }
  })
})



const quiz = document.querySelector('.quiz')

const quizBtn = quiz.querySelector('.quiz__btn')

const quizForm = document.querySelector('.popup-quiz .quiz-popup-form')

const quizBody = document.querySelector('.popup-quiz .popup-quiz__body')

const telSelector = quizForm.querySelector('.input-tel')
const emailSelector = quizForm.querySelector('.input-email')
const photoSelector = quizForm.querySelector('.input-file')
const radioBoxes = quizForm.querySelector('.popup-form__checks')

if(quiz){
  const validator = new JustValidate('.quiz-form')

  const quizInputs = quiz.querySelectorAll('.quiz__input[type="number"]')

  quizInputs.forEach(el => {
    validator.addField(el, [
      {
        rule: 'minNumber',
        value: 1,
      },
    ])
  })
  quizInputs.forEach(qinp => {
    qinp.addEventListener('change', e => checkInputs())
  })
  const checkInputs = () => {
    let isValide = true;
    for(let i = 0; i < quizInputs.length; i++){
      if(quizInputs[i].value == "" || +quizInputs[i].value < 0) {
        isValide = false;
        break
      }
    }
    if(isValide){
      quizBtn.classList.remove('quiz__btn--dis')
    }
    return isValide;
  }

  quizBtn.addEventListener('click', e => {
    e.preventDefault()

    validator.revalidate()

    if(checkInputs()){
      quizInputs.forEach(qinp => qinp.classList.remove('just-validate-error-field'))

      quizBody.style.opacity = '0';
      setTimeout(() => {
        quizBody.style.display = 'none'
        quizForm.style.display = 'block'
      }, 300)
      setTimeout(() => {
        quizForm.style.opacity = 1
      }, 301)


    } else {
      quizInputs.forEach(qinp => qinp.classList.add('just-validate-error-field'))
    }
  })




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
            types: ['image/png', 'image/jpeg', 'image/jpg'],
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


  }
  validator.onSuccess((ev) => {
    let formData = new FormData(ev.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setTimeout(() => {
            location.href = 'thank-you.html'
          }, 100)
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    ev.target.reset();
  })

}







