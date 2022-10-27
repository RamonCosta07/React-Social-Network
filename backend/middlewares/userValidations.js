const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O nome deve possuir no minímo 3 caracteres"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório")
      .isEmail()
      .withMessage("Favor digitar um e-mail válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória")
      .isLength({ min: 7 })
      .withMessage("A senha deve possuir no minímo 7 caracteres"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório")
      .isEmail()
      .withMessage("Digite um e-mail válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage('O nome deve possuir no minímo 3 caracteres'),
    body("password")
      .optional()
      .isLength({ min: 7 })
      .withMessage('A senha deve possuir no minímo 7 caracteres'),
  ]
}

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
};
