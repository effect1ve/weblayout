let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);

new window.JustValidate('.form', {
    rules: {
      name: {
        required: true,
        rule: 'minLength',
        value: 2,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         email: {
           required: "Введите правильный e-mail"
         },
         name: "Не правильно введено поле",
         phone: {
           required: "Не правильно введено поле",
           function: "Не достаточно количество символов"
         }
       }
    });